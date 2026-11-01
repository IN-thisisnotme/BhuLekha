package com.example

import android.annotation.SuppressLint
import android.content.ContentValues
import android.content.Intent
import android.graphics.BitmapFactory
import android.graphics.Paint
import android.graphics.Rect
import android.graphics.pdf.PdfDocument
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.CancellationSignal
import android.os.Environment
import android.os.ParcelFileDescriptor
import android.print.PageRange
import android.print.PrintAttributes
import android.print.PrintDocumentAdapter
import android.print.PrintDocumentInfo
import android.print.PrintManager
import android.provider.MediaStore
import android.util.Base64
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.systemBars
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import java.io.File
import java.io.FileOutputStream

class MainActivity : ComponentActivity() {
  private var fileUploadCallback: ValueCallback<Array<Uri>>? = null
  private var currentWebView: WebView? = null

  override fun onConfigurationChanged(newConfig: android.content.res.Configuration) {
    super.onConfigurationChanged(newConfig)
    val isNight = (newConfig.uiMode and android.content.res.Configuration.UI_MODE_NIGHT_MASK) == android.content.res.Configuration.UI_MODE_NIGHT_YES
    runOnUiThread {
      currentWebView?.evaluateJavascript("if (window.onSystemThemeChanged) window.onSystemThemeChanged($isNight);", null)
    }
  }

  private val fileChooserLauncher = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
  ) { result ->
    if (fileUploadCallback != null) {
      val results = WebChromeClient.FileChooserParams.parseResult(result.resultCode, result.data)
      fileUploadCallback?.onReceiveValue(results)
      fileUploadCallback = null
    }
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      MyApplicationTheme {
        val context = LocalContext.current
        var lastBackPressTime by remember { mutableLongStateOf(0L) }
        var webViewInstance by remember { mutableStateOf<WebView?>(null) }

        BackHandler(enabled = true) {
          val webView = webViewInstance
          if (webView != null) {
            webView.evaluateJavascript("window.handleAndroidBack ? window.handleAndroidBack() : 'false'") { result ->
              val isHandled = result?.replace("\"", "")?.trim() == "true"
              if (!isHandled) {
                val currentTime = System.currentTimeMillis()
                if (currentTime - lastBackPressTime < 2000) {
                  (context as? ComponentActivity)?.finish()
                } else {
                  lastBackPressTime = currentTime
                  webView.evaluateJavascript("window.getExitToastMessage ? window.getExitToastMessage() : ''") { msgResult ->
                    val rawMsg = msgResult?.replace("\"", "")?.trim()
                    val toastMsg = if (!rawMsg.isNullOrEmpty()) rawMsg else "ऐप बंद करने के लिए दोबारा बैक दबाएं"
                    Toast.makeText(context, toastMsg, Toast.LENGTH_SHORT).show()
                  }
                }
              }
            }
          } else {
            val currentTime = System.currentTimeMillis()
            if (currentTime - lastBackPressTime < 2000) {
              (context as? ComponentActivity)?.finish()
            } else {
              lastBackPressTime = currentTime
              Toast.makeText(context, "ऐप बंद करने के लिए दोबारा बैक दबाएं", Toast.LENGTH_SHORT).show()
            }
          }
        }

        Scaffold(
          modifier = Modifier.fillMaxSize(),
          contentWindowInsets = WindowInsets.systemBars
        ) { innerPadding ->
          Box(
            modifier = Modifier
              .fillMaxSize()
              .padding(innerPadding)
              .imePadding()
          ) {
            CircleRateWebView(
              onWebViewCreated = {
                webViewInstance = it
                currentWebView = it
              },
              onShowFileChooser = { callback, fileChooserParams ->
                fileUploadCallback?.onReceiveValue(null)
                fileUploadCallback = callback
                try {
                  val intent = fileChooserParams.createIntent()
                  fileChooserLauncher.launch(intent)
                  true
                } catch (e: Exception) {
                  fileUploadCallback = null
                  false
                }
              }
            )
          }
        }
      }
    }
  }
}

@SuppressLint("SetJavaScriptEnabled")
@Suppress("DEPRECATION")
@Composable
fun CircleRateWebView(
  onWebViewCreated: (WebView) -> Unit = {},
  onShowFileChooser: (ValueCallback<Array<Uri>>?, WebChromeClient.FileChooserParams) -> Boolean
) {
  AndroidView(
    modifier = Modifier.fillMaxSize(),
    factory = { context ->
      WebView(context).apply {
        settings.apply {
          javaScriptEnabled = true
          domStorageEnabled = true
          databaseEnabled = true
          allowFileAccess = true
          allowContentAccess = true
          allowFileAccessFromFileURLs = true
          allowUniversalAccessFromFileURLs = true
          useWideViewPort = false
          loadWithOverviewMode = false
          textZoom = 100
          setSupportZoom(false)
          displayZoomControls = false
          cacheMode = WebSettings.LOAD_DEFAULT
        }
        isVerticalScrollBarEnabled = true
        isHorizontalScrollBarEnabled = false
        overScrollMode = View.OVER_SCROLL_ALWAYS
        webViewClient = WebViewClient()
        webChromeClient = object : WebChromeClient() {
          override fun onShowFileChooser(
            webView: WebView?,
            filePathCallback: ValueCallback<Array<Uri>>?,
            fileChooserParams: FileChooserParams
          ): Boolean {
            return onShowFileChooser(filePathCallback, fileChooserParams)
          }
        }
        val webViewInstance = this
        addJavascriptInterface(AppInterface(context as ComponentActivity, webViewInstance), "AndroidApp")
        loadUrl("file:///android_asset/index.html")
        onWebViewCreated(this)
      }
    }
  )
}

class AppInterface(
  private val activity: ComponentActivity,
  private val webView: WebView? = null
) {
  @JavascriptInterface
  fun isSystemDarkMode(): Boolean {
    return (activity.resources.configuration.uiMode and android.content.res.Configuration.UI_MODE_NIGHT_MASK) == android.content.res.Configuration.UI_MODE_NIGHT_YES
  }

  @JavascriptInterface
  fun saveImage(base64Data: String, fileName: String): Boolean {
    return try {
      val cleanBase64 = if (base64Data.contains(",")) {
        base64Data.substringAfter(",")
      } else {
        base64Data
      }
      val imageBytes = Base64.decode(cleanBase64, Base64.DEFAULT)
      val nameWithExt = if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) fileName else "$fileName.png"
      val mimeType = if (nameWithExt.endsWith(".jpg") || nameWithExt.endsWith(".jpeg")) "image/jpeg" else "image/png"

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
        val contentValues = ContentValues().apply {
          put(MediaStore.MediaColumns.DISPLAY_NAME, nameWithExt)
          put(MediaStore.MediaColumns.MIME_TYPE, mimeType)
          put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/CircleRate")
          put(MediaStore.MediaColumns.IS_PENDING, 1)
        }
        val resolver = activity.contentResolver
        val uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)
        if (uri != null) {
          resolver.openOutputStream(uri)?.use { outputStream ->
            outputStream.write(imageBytes)
            outputStream.flush()
          }
          contentValues.clear()
          contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
          resolver.update(uri, contentValues, null, null)

          activity.runOnUiThread {
            Toast.makeText(
              activity,
              "मूल्यांकन रिपोर्ट गैलरी (Pictures/CircleRate) में सुरक्षित की गई!",
              Toast.LENGTH_LONG
            ).show()
          }
          true
        } else {
          false
        }
      } else {
        val picturesDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES)
        val appDir = File(picturesDir, "CircleRate")
        if (!appDir.exists()) appDir.mkdirs()
        val imageFile = File(appDir, nameWithExt)
        FileOutputStream(imageFile).use { fos ->
          fos.write(imageBytes)
          fos.flush()
        }
        android.media.MediaScannerConnection.scanFile(
          activity,
          arrayOf(imageFile.absolutePath),
          arrayOf(mimeType),
          null
        )
        activity.runOnUiThread {
          Toast.makeText(
            activity,
            "मूल्यांकन रिपोर्ट गैलरी में सुरक्षित की गई!",
            Toast.LENGTH_LONG
          ).show()
        }
        true
      }
    } catch (e: Exception) {
      e.printStackTrace()
      activity.runOnUiThread {
        Toast.makeText(
          activity,
          "इमेज सुरक्षित करने में त्रुटि: ${e.localizedMessage}",
          Toast.LENGTH_SHORT
        ).show()
      }
      false
    }
  }

  @JavascriptInterface
  fun savePdf(base64Image: String, fileName: String, verificationId: String): Boolean {
    return try {
      val cleanBase64 = if (base64Image.contains(",")) {
        base64Image.substringAfter(",")
      } else {
        base64Image
      }
      val imageBytes = Base64.decode(cleanBase64, Base64.DEFAULT)
      val bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size) ?: return false

      val nameWithExt = if (fileName.endsWith(".pdf")) fileName else "$fileName.pdf"

      // Standard A4 dimensions in PDF points (595 x 842 pt)
      val pdfDocument = PdfDocument()
      val pageWidth = 595
      val calculatedHeight = ((pageWidth.toFloat() / bitmap.width.toFloat()) * bitmap.height.toFloat()).toInt()
      val pageHeight = calculatedHeight.coerceAtLeast(842)
      val pageInfo = PdfDocument.PageInfo.Builder(pageWidth, pageHeight, 1).create()
      val page = pdfDocument.startPage(pageInfo)

      val destRect = Rect(0, 0, pageWidth, pageHeight)
      val paint = Paint().apply {
        isFilterBitmap = true
        isDither = true
      }
      page.canvas.drawBitmap(bitmap, null, destRect, paint)
      pdfDocument.finishPage(page)

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
        val contentValues = ContentValues().apply {
          put(MediaStore.MediaColumns.DISPLAY_NAME, nameWithExt)
          put(MediaStore.MediaColumns.MIME_TYPE, "application/pdf")
          put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOCUMENTS + "/BhuLekha")
          put(MediaStore.MediaColumns.IS_PENDING, 1)
        }
        val resolver = activity.contentResolver
        val uri = resolver.insert(MediaStore.Files.getContentUri("external"), contentValues)
        if (uri != null) {
          resolver.openOutputStream(uri)?.use { outputStream ->
            pdfDocument.writeTo(outputStream)
            outputStream.flush()
          }
          contentValues.clear()
          contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
          resolver.update(uri, contentValues, null, null)
          pdfDocument.close()

          activity.runOnUiThread {
            Toast.makeText(
              activity,
              "सत्यापित PDF रिपोर्ट ($verificationId) Documents/BhuLekha में सुरक्षित की गई!",
              Toast.LENGTH_LONG
            ).show()

            try {
              val viewIntent = Intent(Intent.ACTION_VIEW).apply {
                setDataAndType(uri, "application/pdf")
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
              }
              activity.startActivity(Intent.createChooser(viewIntent, "सत्यापित PDF मूल्यांकन रिपोर्ट खोलें"))
            } catch (_: Exception) {}
          }
          true
        } else {
          pdfDocument.close()
          false
        }
      } else {
        val docsDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS)
        val appDir = File(docsDir, "BhuLekha")
        if (!appDir.exists()) appDir.mkdirs()
        val pdfFile = File(appDir, nameWithExt)
        FileOutputStream(pdfFile).use { fos ->
          pdfDocument.writeTo(fos)
          fos.flush()
        }
        pdfDocument.close()
        android.media.MediaScannerConnection.scanFile(
          activity,
          arrayOf(pdfFile.absolutePath),
          arrayOf("application/pdf"),
          null
        )
        activity.runOnUiThread {
          Toast.makeText(
            activity,
            "सत्यापित PDF रिपोर्ट ($verificationId) सुरक्षित की गई!",
            Toast.LENGTH_LONG
          ).show()
        }
        true
      }
    } catch (e: Exception) {
      e.printStackTrace()
      activity.runOnUiThread {
        Toast.makeText(
          activity,
          "PDF सुरक्षित करने में त्रुटि: ${e.localizedMessage}",
          Toast.LENGTH_SHORT
        ).show()
      }
      false
    }
  }

  @JavascriptInterface
  fun printReport(base64Image: String, jobName: String): Boolean {
    return try {
      val cleanBase64 = if (base64Image.contains(",")) {
        base64Image.substringAfter(",")
      } else {
        base64Image
      }
      val imageBytes = Base64.decode(cleanBase64, Base64.DEFAULT)
      val bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size) ?: return false

      activity.runOnUiThread {
        val printManager = activity.getSystemService(android.content.Context.PRINT_SERVICE) as? PrintManager
        if (printManager != null) {
          val adapter = object : PrintDocumentAdapter() {
            override fun onLayout(
              oldAttributes: PrintAttributes?,
              newAttributes: PrintAttributes,
              cancellationSignal: CancellationSignal?,
              callback: LayoutResultCallback,
              extras: Bundle?
            ) {
              if (cancellationSignal?.isCanceled == true) {
                callback.onLayoutCancelled()
                return
              }
              val info = PrintDocumentInfo.Builder(jobName)
                .setContentType(PrintDocumentInfo.CONTENT_TYPE_DOCUMENT)
                .setPageCount(1)
                .build()
              callback.onLayoutFinished(info, true)
            }

            override fun onWrite(
              pages: Array<out PageRange>?,
              destination: ParcelFileDescriptor?,
              cancellationSignal: CancellationSignal?,
              callback: WriteResultCallback?
            ) {
              if (cancellationSignal?.isCanceled == true) {
                callback?.onWriteCancelled()
                return
              }
              val pdf = PdfDocument()
              val pageWidth = 595
              val pageHeight = 842
              val pageInfo = PdfDocument.PageInfo.Builder(pageWidth, pageHeight, 1).create()
              val page = pdf.startPage(pageInfo)
              val canvas = page.canvas
              val destRect = Rect(0, 0, pageWidth, pageHeight)
              val paint = Paint().apply {
                isFilterBitmap = true
                isDither = true
              }
              canvas.drawBitmap(bitmap, null, destRect, paint)
              pdf.finishPage(page)

              try {
                if (destination != null) {
                  FileOutputStream(destination.fileDescriptor).use { out ->
                    pdf.writeTo(out)
                  }
                  callback?.onWriteFinished(arrayOf(PageRange.ALL_PAGES))
                } else {
                  callback?.onWriteFailed("File descriptor is null")
                }
              } catch (ex: Exception) {
                callback?.onWriteFailed(ex.localizedMessage)
              } finally {
                pdf.close()
              }
            }
          }

          val printAttributes = PrintAttributes.Builder()
            .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
            .setColorMode(PrintAttributes.COLOR_MODE_COLOR)
            .build()

          printManager.print(jobName, adapter, printAttributes)
        }
      }
      true
    } catch (e: Exception) {
      e.printStackTrace()
      false
    }
  }

  @JavascriptInterface
  fun printCurrentWebView(jobName: String): Boolean {
    return try {
      activity.runOnUiThread {
        val printManager = activity.getSystemService(android.content.Context.PRINT_SERVICE) as? PrintManager
        if (printManager != null && webView != null) {
          val printAdapter = webView.createPrintDocumentAdapter(jobName)
          val printAttributes = PrintAttributes.Builder()
            .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
            .setColorMode(PrintAttributes.COLOR_MODE_COLOR)
            .build()
          printManager.print(jobName, printAdapter, printAttributes)
        }
      }
      true
    } catch (e: Exception) {
      e.printStackTrace()
      false
    }
  }
}

