// Uttarakhand Circle Rate & Valuation System - Core Engine
(function() {
  'use strict';

  // 1. STRICT BILINGUAL DICTIONARY

  const I18N = {
    hi: {
      appTitle: "BhuLekha",
      appTitleInfo: "सर्किल दर व मूल्यांकन",
      printLabel: "प्रिंट",
      tabCalc: "मूल्यांकन",
      tabResult: "परिणाम",
      tabHistory: "इतिहास",
      tabSettings: "सेटिंग्स",
      tabImport: "डेटा",
      
      // Valuation Sections
      locationHeader: "जनपद, तहसील एवं गाँव अथवा वार्ड चयन",
      locationSub: "सर्किल दर तालिका निर्धारण हेतु स्थान चुनें",
      districtTitle: "जनपद:",
      tehsilTitle: "तहसील:",
      villageTitle: "गाँव अथवा वार्ड:",
      allDistricts: "-- जनपद चुनें --",
      allTehsils: "-- तहसील चुनें --",
      searchPlaceholder: "गाँव अथवा वार्ड का नाम खोजें...",
      
      roadHeader: "मार्ग की चौड़ाई एवं नियमावली अधिभार",
      roadSub: "सड़क की चौड़ाई के अनुसार अधिभार (0 दूरी संपत्तियों पर मान्य)",
      
      landHeader: "भूखंड का क्षेत्रफल एवं मार्ग से दूरी",
      landSub: "सड़क से दूरी के अनुसार भिन्न-भिन्न खंड जोड़ें",
      addSegmentBtn: "+ भूमि खंड जोड़ें",
      
      bldgHeader: "निर्मित भवन अथवा तलों का विवरण",
      bldgSub: "व्यावसायिक दुकान/कार्यालय, फ्लैट अथवा गैर-व्यावसायिक पक्का/टिनशेड",
      addBuildingBtn: "+ निर्माण जोड़ें",
      openLandBalTitle: "अवशेष खुली भूमि:",
      openLandBalSub: "कुल भूखंड क्षेत्रफल - भूतल निर्मित क्षेत्रफल",
      
      btnViewResults: "परिणाम एवं स्टाम्प शुल्क देखें ➔",
      liveEstLabel: "अनुमानित बाजार मूल्य:",
      
      // Results Tab
      resultsHeader: "संपत्ति मूल्यांकन एवं स्टाम्प शुल्क परिणाम",
      resultsSub: "उत्तराखण्ड स्टाम्प एवं निबंधन नियमावली अनुसार गणना",
      marketValTitle: "सकल संपत्ति बाजार मूल्य:",
      breakdownTitle: "विस्तृत मूल्यांकन विवरण",
      breakdownSub: "भूखंड एवं निर्माण का मदवार विवरण (अधिभार सहित)",
      buyerCategoryTitle: "क्रेता वर्ग का चयन:",
      buyerBoth: "संयुक्त क्रेता",
      buyerFemale: "महिला क्रेता",
      buyerMale: "पुरुष / सामान्य",
      femaleStakeLabel: "महिला क्रेता का हिस्सा (%):",
      maleStakeLabel: "पुरुष क्रेता का हिस्सा (%):",
      femaleEligibleLabel: "महिला क्रेता रियायत",
      femaleRuleDesc: "उत्तराखंड नियमावली: अधिकतम दो क्रय विलेखों अथवा कुल ₹25 लाख संचयी संपत्ति मूल्य तक 25% छूट। ₹25 लाख से अधिक मूल्य पर 5% स्टाम्प शुल्क।",
      femalePriorCountLabel: "पूर्व में प्रयुक्त छूट संख्या:",
      femalePriorValueLabel: "पूर्व में प्रयुक्त संपत्ति मूल्य (₹):",
      femaleSavingDisplay: "महिला छूट बचत:",
      stampHeading: "स्टाम्प शुल्क एवं निबंधन शुल्क विवरण",
      btnBackToCalc: "← मूल्यांकन में बदलाव करें",
      
      // Result Tab Added
      lblPrintTitle: "A4 मूल्यांकन विवरण प्रिंट एवं निर्यात",
      lblPrintTitleInfo: "काले व रंगीन प्रिंटर अनुकूल • स्पष्ट एवं प्रामाणिक तालिका",

      lblMetricCoveredLand: "आच्छादित भूमि",
      lblMetricUncoveredLand: "अनाच्छादित भूमि",
      lblMetricBldgValue: "भवन एवं अधिभार",

      lblSaleDeedRule: "विक्रय विलेख नियम",

      lblFemaleStakeAutoMale: "पुरुष:",
      lblFemaleValuationStake: "महिला मूल्यांकन हिस्सा:",
      lblMaleValuationStake: "पुरुष मूल्यांकन हिस्सा:",

      lblJointRegistrationRule: "• संयुक्त क्रेता निबंधन नियम: संयुक्त विलेख के लिए अधिकतम निबंधन शुल्क की सीमा ₹50,000 ही रहेगी, इसका विभाजन नहीं किया जाएगा।",

      lblMaleCardHeader: "पुरुष / सामान्य क्रेता प्रभार",
      lblMaleStampDuty: "स्टाम्प शुल्क:",
      lblMaleStampFormula: "5% मानक दर • गोल ₹10",
      lblMaleRegistrationFee: "निबंधन शुल्क:",
      lblMaleRegFormula: "2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10",
      lblMaleTotal: "कुल सामान्य सरकारी प्रभार:",

      lblFemaleStampDuty: "महिला स्टाम्प शुल्क:",
      lblFemaleStampFormula: "3.75% रियायती दर • गोल ₹10",
      lblFemaleRegistrationFee: "निबंधन शुल्क:",
      lblFemaleRegFormula: "2% दर • अधिकतम ₹50,000 • गोल ₹10",
      lblFemaleTotal: "कुल महिला प्रभार:",

      lblGiftResultHeader: "दान विलेख सरकारी प्रभार",
      lblGiftSubHeader: "रक्त सम्बन्धी / परिवार के लिए 1% स्टाम्प शुल्क",
      lblGiftStampDuty: "दान स्टाम्प शुल्क:",
      lblGiftStampFormula: "1% रियायती दर • गोल ₹10",
      lblGiftRegistrationFee: "निबंधन शुल्क:",
      lblGiftRegFormula: "2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10",
      lblGiftTotal: "कुल दान विलेख प्रभार:",
      giftSavingDisplay: "पारिवारिक रियायत से स्टाम्प बचत (5% सामान्य दर की तुलना में): ₹ 0",

      lblLeaseResultHeader: "पट्टा विलेख सरकारी प्रभार",
      lblLeaseAppliedRule: "पट्टा नियमों के अनुसार गणना",
      lblLeaseStampDuty: "पट्टा स्टाम्प शुल्क:",
      lblLeaseStampFormula: "नियमों के अनुसार • गोल ₹10",
      lblLeaseRegistrationFee: "निबंधन शुल्क:",
      lblLeaseRegFormula: "2% दर • अधिकतम सीमा ₹25,000 • गोल ₹10",
      lblLeaseTotal: "कुल पट्टा विलेख प्रभार:",

      lblInstitutionalExemption: "विशेष सांविधिक टिप्पणी: सर्किल दर नियम उन आवंटन अथवा पट्टा दरों पर सीधे लागू नहीं होते जो UPFC, आवास विकास परिषद, विकास प्राधिकरण, SIDCUL, DIC या राज्य निगमों द्वारा सीधे निर्धारित की जाती हैं।",

      lblPayableTitle: "कुल देय सरकारी प्रभार (स्टाम्प + निबंधन):",
      lblPayableSubtitle: "सामान्य / पुरुष क्रेता (गोल ₹10)",

      lblBackToCalc: "← मूल्यांकन विवरण संशोधित करें",

      // Settings Tab
      settingsHeading: "सिस्टम व दर विन्यास सेटिंग्स",
      settingsSub: "भाषा, गाँव सूची क्रम, महिला छूट सीमा व निबंधन शुल्क",
      appLanguageTitle: "ऐप की भाषा:",
      settingsSortLabel: "गाँव सूची का क्रम:",
      sortAuto: "वर्णमाला क्रम (अ-ज्ञ)",
      sortDefault: "डेटासेट का मूल क्रम",
      femaleLimitLabel: "महिला स्टाम्प छूट संचयी मूल्य सीमा (₹):",
      maxRegFeeLabel: "अधिकतम निबंधन शुल्क सीमा (₹):",
      btnSaveSettings: "सेटिंग्स सुरक्षित करें",
      btnResetSettings: "डिफ़ॉल्ट सेटिंग्स पुनः स्थापित करें",
      
      // Data Tab
      importHeading: "सर्किल दर डेटाबेस प्रबंधन",
      importSub: "आधिकारिक सर्किल दरें देखें अथवा नया डेटा आयात करें",
      dropFileLabel: "एक्सेल (.xlsx) या JSON फ़ाइल चुनें",
      lblDropFileLabelInfo: "उत्तराखण्ड सर्किल रेट प्रारूप समर्थित",
      dropFileLabelInfo: "उत्तराखण्ड सर्किल रेट प्रारूप समर्थित",
      resetOfficialBtn: "आधिकारिक डेटा पुनः लोड करें",
      exportJsonBtn: "डेटा डाउनलोड (JSON) करें",
      
      // Quick Tips Section
      quickTipsHeading: "त्वरित सुझाव एवं विधिक नियम",
      quickTipsSub: "संव्यवहार, स्टाम्प छूट व मूल्यांकन मार्गदर्शन",

      // Step 0 Deed Selection
      deedStepHeader: "विलेख / संव्यवहार प्रकार",
      deedStepSub: "मूल्यांकन एवं स्टाम्प/निबंधन नियमों हेतु प्राथमिक विलेख चुनें",
      giftRelationTitle: "दान विलेख श्रेणी:",
      leaseConfigHeader: "पट्टा विलेख आगणन पैरामीटर्स:",
      leaseConfigSubHeader: "पट्टा अनुसूची अनुसार गणना",

      lblLeaseTermCat: "पट्टा अवधि श्रेणी",
      leaseTermCat: "पट्टा अवधि श्रेणी",
      btnLeaseTerm1: "≤ 1 वर्ष",
      btnLeaseTerm2: "1 से 5 वर्ष",
      btnLeaseTerm3: "5 से 10 वर्ष",
      btnLeaseTerm4: "10 से 20 वर्ष",
      btnLeaseTerm5: "20 से 30 वर्ष",
      btnLeaseTerm6: "> 30 वर्ष / शाश्वत",

      // Remaining Step 0 Deed Selection
      badgeCurrentDeed: "विक्रय विलेख",

      slblDeedType0: "विक्रय विलेख",
      slblDeedBadge0: "विक्रय",
      slblDeedType0_: "मानक स्टाम्प 5% (पुरुष), 3.75% (महिला), 4.375% (संयुक्त) • निबंधन 2% (अधिकतम ₹50,000)",
      btnDeedType0_: "मानक स्टाम्प 5% (पुरुष), 3.75% (महिला), 4.375% (संयुक्त) • निबंधन 2% (अधिकतम ₹50,000)",

      slblDeedType1: "दान विलेख",
      slblDeedType1_: "रक्त सम्बन्धी / परिवार में 1% रियायती स्टाम्प शुल्क • अन्य में 5% • निबंधन शुल्क अधिकतम ₹50,000",

      slblDeedType2: "पट्टा विलेख",
      slblDeedBadge2: "नियम 1–8",
      slblDeedType2_: "अवधि आधारित दर (2% से 5%) • वार्षिक किराया/प्रीमियम/बाजार मूल्य • निबंधन शुल्क अधिकतम ₹50,000",

      // Gift Deed
      lblGiftRelationTitleInfo: "रक्त सम्बन्धी के पक्ष में 1% स्टाम्प शुल्क मान्य है",

      slblGiftType0: "रक्त सम्बन्धी / परिवार",
      slblGiftType0info: "रियायती स्टाम्प शुल्क: कुल मूल्य का 1%",

      slblGiftType1: "अन्य व्यक्ति / गैर-पारिवारिक",
      slblGiftType1info: "सामान्य स्टाम्प शुल्क: कुल मूल्य का 5%",

      lblGiftFamilyMembers: "• मान्य पारिवारिक सदस्य: पिता, माता, पति, पत्नी, पुत्र, पुत्री, पुत्रवधू, भाई, अविवाहित बहन, पौत्र, पौत्री। निबंधन शुल्क 2% (अधिकतम सीमा ₹50,000)।",

      // Lease Term
      lblLeaseSelected: "चयनित:",
      lblLeaseTermYear: "पट्टा अवधि (वर्ष में):",
      lblLeaseSliderValue: "1 वर्ष",

      // Lease Date Range
      lblDateRangeText: "दिनांक सीमा",
      lblDateReset: "रीसेट",
      lblInputLeaseStartDate: "प्रारम्भ तिथि:",
      lblInputLeaseEndDate: "समाप्ति तिथि:",
      lblLeaseDateDiff: "तिथि चुनें ➔ अवधि स्वतः वर्ष में सेट होगी",

      // Lease Consideration
      lblLeaseMode: "कन्सिडरेशन प्रकार:",
      optLeaseModeBoth: "किराया + पेशगी / प्रीमियम",
      optLeaseModeRentOnly: "केवल किराया",
      optLeaseModePremiumOnly: "केवल पेशगी / प्रीमियम",

      // Lease Rent / Premium
      lblLeaseAar: "औसत वार्षिक किराया (₹):",
      lblLeasePremium: "प्रीमियम / पेशगी राशि (₹):",

      // Lease Market Value
      lblLeaseMarketValue: "सर्किल रेट आधारित कुल बाजार मूल्य:",
      lblLeaseMarketValueSub: "दीर्घकालिक पट्टे (>30 वर्ष) हेतु आधार मूल्य",
      lblLeaseAutoLinked: "स्वतः लिंक",

      // Special Lease Rules
      lblLeaseFlatUnder5: "फ्लैट / भवन पट्टा 5 वर्ष तक: कुल किराया+प्रीमियम पर 2% (न्यूनतम ₹100, अधिकतम ₹10,000)",
      lblLeasePriorAgreementStamped: "अनुबंध पर पूर्व में पूर्ण स्टाम्प शुल्क प्रदत्त: अंतिम पट्टे पर अधिकतम ₹50 स्टाम्प शुल्क देय",

      // Institutional Exemption
      lblInstitutionalExemptionTitle: "विशेष सांविधिक टिप्पणी:",
      lblInstitutionalExemptionText: "सर्किल दरें उन हस्तांतरणों/पट्टों पर लागू नहीं होती हैं जिनमें उत्तर प्रदेश वित्त निगम, उत्तर प्रदेश आवास एवं विकास बोर्ड, विकास प्राधिकरण, सिडकुल, जिला उद्योग केंद्र या राज्य निगम द्वारा प्रतिफल मूल्य सीधे संस्थाओं द्वारा निर्धारित किया जाता है।",

      langHiBtn: "हिन्‍दी",
      langEnBtn: "अंग्रेजी",

      lblTheme: "थीम मोड:",
      btnThemeAuto: "स्वतः",
      btnThemeLight: "☀️ लाइट",
      btnThemeDark: "🌙 डार्क",

      saveSetting: "सेटिंग्स सुरक्षित करें",

      btnSaveToHistoryText: "इतिहास में सहेजें",
      btnSaveToHistoryBottomText: "इतिहास में सुरक्षित करें",
      btnQuickSaveCalcText: "सहेजें",
      lblSaveActiveHistoryBtn: "सहेजें",
      lblHistoryHeading: "मूल्यांकन इतिहास",
      lblHistorySub: "स्थानीय संग्रह में सुरक्षित पूर्व गणनाएँ • 'पुनर्स्थापित करें' से पूर्व पैरामीटर पुनः लोड करें",
      lblClearHistoryBtn: "इतिहास साफ़ करें",

      btnRoad1: "< 5 मी० (0%)",
      btnRoad2: "5 से 12 मी० (+5%)",
      btnRoad3: "12 से 15 मी० (+10%)",
      btnRoad4: "≥ 15 मी० (+15%)",
    },
    en: {
      appTitle: "BhuLekha",
      appTitleInfo: "Circle Rates & Valuation",
      printLabel: "Print",
      tabCalc: "Valuation",
      tabResult: "Results",
      tabHistory: "History",
      tabSettings: "Settings",
      tabImport: "Data",
      
      // Valuation Sections
      locationHeader: "District, Tehsil & Village Selection",
      locationSub: "Select location for circle rates",
      districtTitle: "District:",
      tehsilTitle: "Tehsil:",
      villageTitle: "Village or Ward:",
      allDistricts: "-- Select District --",
      allTehsils: "-- Select Tehsil --",
      searchPlaceholder: "Search village or ward name...",
      
      roadHeader: "Road Width & Regulatory Surcharge",
      roadSub: "Surcharge for road-facing (0 distance) plots",
      
      landHeader: "Plot Area & Distance from Road",
      landSub: "Add segments based on road distance",
      addSegmentBtn: "+ Add Segment",
      
      bldgHeader: "Building & Floor Details",
      bldgSub: "Shop, office, flat or residential pakka/tinshed",
      addBuildingBtn: "+ Add Building",
      openLandBalTitle: "Remaining Open Land:",
      openLandBalSub: "Total plot area - ground floor built-up area",
      
      btnViewResults: "View Results & Stamp Duty ➔",
      liveEstLabel: "Estimated Market Value:",
      
      // Results Tab
      resultsHeader: "Property Valuation & Stamp Duty Results",
      resultsSub: "Calculated as per Uttarakhand Stamp & Registration Rules",
      marketValTitle: "Total Market Value (Rounded Total):",
      breakdownTitle: "Detailed Valuation Breakdown",
      breakdownSub: "Itemized breakdown of plot (covered & open land) and construction (including surcharges)",
      buyerCategoryTitle: "Select Buyer Category:",
      buyerBoth: "Joint Buyer",
      buyerFemale: "Female Buyer",
      buyerMale: "Male / General",
      femaleStakeLabel: "Female Buyer's Share (%):",
      maleStakeLabel: "Male Buyer's Share (%):",
      femaleEligibleLabel: "Female Buyer Concession",
      femaleRuleDesc: "Uttarakhand Rules: 25% concession up to a maximum of two purchase deeds or cumulative property value of ₹25 lakh. Stamp duty is 5% on value exceeding ₹25 lakh.",
      femalePriorCountLabel: "Previously Used Concession Count:",
      femalePriorValueLabel: "Previously Used Property Value (₹):",
      femaleSavingDisplay: "Female Concession Savings:",
      stampHeading: "Stamp Duty & Registration Fee Details",
      btnBackToCalc: "← Modify Valuation",

      // Result Tab Added
      lblPrintTitle: "A4 Valuation Statement Print & Export (300 DPI HD Slip)",
      lblPrintTitleInfo: "Black & white and color printer compatible • Clear font & dynamic table",

      lblMetricCoveredLand: "Covered Land",
      lblMetricUncoveredLand: "Open Land",
      lblMetricBldgValue: "Building Value",

      lblSaleDeedRule: "Sale Deed Rules",
      lblFemaleStakeAutoMale: "Male:",
      lblFemaleValuationStake: "Female Valuation Share:",
      lblMaleValuationStake: "Male Valuation Share:",
      lblJointRegistrationRule: "• Joint Buyer Registration Rule: The maximum registration fee for a joint deed remains subject to a single limit of ₹50,000 without division.",

      lblMaleCardHeader: "Male / General Buyer Charges",
      lblMaleStampDuty: "Stamp Duty:",
      lblMaleStampFormula: "5% standard rate • Rounded to ₹10",
      lblMaleRegistrationFee: "Registration Fee:",
      lblMaleRegFormula: "2% rate • Maximum limit ₹50,000 • Rounded to ₹10",
      lblMaleTotal: "Total General Government Charges:",

      lblFemaleStampDuty: "Female Stamp Duty:",
      lblFemaleStampFormula: "₹ 0 at 3.75% concession rate • Rounded to ₹10",
      lblFemaleRegistrationFee: "Registration Fee:",
      lblFemaleRegFormula: "2% rate • Maximum ₹50,000 • Rounded to ₹10",
      lblFemaleTotal: "Total Female Charges:",

      lblGiftSubHeader: "1% Stamp Duty for Blood Relation / Family",
      lblGiftStampDuty: "Gift Stamp Duty:",
      lblGiftStampFormula: "1% concessional rate • Rounded to ₹10",
      lblGiftRegistrationFee: "Registration Fee:",
      lblGiftRegFormula: "2% rate • Maximum limit ₹50,000 • Rounded to ₹10",
      lblGiftTotal: "Total Gift Deed Charges:",
      giftSavingDisplay: "Stamp Savings from Family Concession (vs. 5% General): ₹ 0",
      lblGiftSavingDisplay: "Stamp Savings from Family Concession (vs. 5% General): ₹ 0",

      lblLeaseResultHeader: "Lease Deed Government Charges",
      lblLeaseAppliedRule: "Calculated as per Lease Rules",
      lblLeaseStampDuty: "Lease Stamp Duty:",
      lblLeaseStampFormula: "As per rules • Rounded to ₹10",
      lblLeaseRegistrationFee: "Registration Fee:",
      lblLeaseRegFormula: "2% rate • Maximum limit ₹25,000 • Rounded to ₹10",
      lblLeaseTotal: "Total Lease Deed Charges:",

      lblInstitutionalExemption: "Special Statutory Exemption / Remark: Circle rate rules do not apply to allocation/lease rates directly determined by UPFC, Housing Development Council, Development Authority, SIDCUL, DIC, or State Corporations.",

      lblPayableTitle: "Total Government Charges Payable (Stamp + Registration):",
      lblPayableSubtitle: "General / Male Buyer (Rounded to ₹10)",
      lblBackToCalc: "← Modify Valuation Details (Edit Details)",
      
      // Settings Tab
      settingsHeading: "System & Rate Configuration Settings",
      settingsSub: "Language, village list order, female concession limit & registration fee",
      appLanguageTitle: "App Language:",
      settingsSortLabel: "Village List Order:",
      sortAuto: "Alphabetical Order (A-Z)",
      sortDefault: "Original Dataset Order",
      femaleLimitLabel: "Female Stamp Concession Cumulative Value Limit (₹):",
      maxRegFeeLabel: "Maximum Registration Fee Limit (₹):",
      btnSaveSettings: "Save Settings",
      btnResetSettings: "Restore Default Settings",
      
      // Data Tab
      importHeading: "Circle Rate Database Management",
      importSub: "View official circle rates or import new data",
      dropFileLabel: "Choose Excel (.xlsx) or JSON File",
      lblDropFileLabelInfo: "Uttarakhand Circle Rate format supported",
      dropFileLabelInfo: "Uttarakhand Circle Rate format supported",
      resetOfficialBtn: "Reload Official Data",
      exportJsonBtn: "Download Data (JSON)",
      
      // Quick Tips Section
      quickTipsHeading: "Quick Tips & Guidelines",
      quickTipsSub: "Context-aware guidance for deeds, exemptions & valuation",

      // Step 0 Deed Selection
      deedStepHeader: "Deed / Transaction Type",
      deedStepSub: "Select primary deed for valuation & stamp rules",
      giftRelationTitle: "Gift Deed Category:",
      leaseConfigHeader: "Lease Deed Configuration Parameters:",
      leaseConfigSubHeader: "Calculation as per Lease Schedule",

      lblLeaseTermCat: "Lease Duration Category",
      leaseTermCat: "Lease Term Category",
      btnLeaseTerm1: "≤ 1 Year",
      btnLeaseTerm2: "1 to 5 Yrs",
      btnLeaseTerm3: "5 to 10 Yrs",
      btnLeaseTerm4: "10 to 20 Yrs",
      btnLeaseTerm5: "20 to 30 Yrs",
      btnLeaseTerm6: "> 30 Yrs / Perpetual",

      // Remaining Step 0 Deed Selection
      badgeCurrentDeed: "Sale Deed",

      slblDeedType0: "Sale Deed",
      slblDeedBadge0: "Sale",
      slblDeedType0_: "Standard stamp duty: 5% (Male), 3.75% (Female), 4.375% (Joint) • Registration fee: 2% (maximum ₹50,000)",
      btnDeedType0_: "Standard stamp duty: 5% (Male), 3.75% (Female), 4.375% (Joint) • Registration fee: 2% (maximum ₹50,000)",

      slblDeedType1: "Gift Deed",
      slblDeedType1_: "Blood Relation / Family: 1% concessional stamp duty • Others: 5% • Registration fee: maximum ₹50,000",

      slblDeedType2: "Lease Deed",
      slblDeedBadge2: "Rules 1–8",
      slblDeedType2_: "Term-based rate (2% to 5%) • Annual rent/premium/market value • Registration fee: maximum ₹50,000",

      // Gift Deed
      lblGiftRelationTitleInfo: "A 1% stamp duty is applicable for blood relations",

      slblGiftType0: "Blood Relation / Family",
      slblGiftType0info: "Concessional stamp duty: 1% of total value",

      slblGiftType1: "Other Person / Non-Family",
      slblGiftType1info: "Standard stamp duty: 5% of total value",

      lblGiftFamilyMembers: "• Valid family members: Father, Mother, Husband, Wife, Son, Daughter, Daughter-in-law, Brother, Unmarried Sister, Grandson, Granddaughter. Registration fee: 2% (maximum limit ₹50,000).",

      // Lease Term
      lblLeaseSelected: "Selected:",
      lblLeaseTermYear: "Lease Term (in Years):",
      lblLeaseSliderValue: "1 Year",

      // Lease Date Range
      lblDateRangeText: "Date Range",
      lblDateReset: "Reset",
      lblInputLeaseStartDate: "Start Date:",
      lblInputLeaseEndDate: "End Date:",
      lblLeaseDateDiff: "Select dates ➔ Term will be automatically set in years",

      // Lease Consideration
      lblLeaseMode: "Consideration Type:",
      optLeaseModeBoth: "Rent + Advance / Premium",
      optLeaseModeRentOnly: "Rent Only",
      optLeaseModePremiumOnly: "Advance / Premium Only",

      // Lease Rent / Premium
      lblLeaseAar: "Average Annual Rent (₹):",
      lblLeasePremium: "Premium / Advance Amount (₹):",

      // Lease Market Value
      lblLeaseMarketValue: "Total Circle Rate-Based Market Value:",
      lblLeaseMarketValueSub: "Base value for long-term leases (>30 years)",
      lblLeaseAutoLinked: "Auto Linked",

      // Special Lease Rules
      lblLeaseFlatUnder5: "Flat / Building Lease up to 5 Years: 2% on total rent + premium (minimum ₹100, maximum ₹10,000)",
      lblLeasePriorAgreementStamped: "Full Stamp Duty Already Paid on Agreement: Maximum ₹50 Stamp Duty Payable on Final Lease",

      // Institutional Exemption
      lblInstitutionalExemptionTitle: "Special Statutory Note:",
      lblInstitutionalExemptionText: "Circle rates do not apply to transfers/leases where the consideration value is directly determined by the Uttar Pradesh Financial Corporation, Uttar Pradesh Housing & Development Board, Development Authority, SIDCUL, District Industries Centre, or a State Corporation.",

      langHiBtn: "Hindi",
      langEnBtn: "English",

      lblTheme: "Theme Mode:",
      btnThemeAuto: "Auto",
      btnThemeLight: "☀️ Light",
      btnThemeDark: "🌙 Dark",

      saveSetting: "Save Settings",
      btnSaveToHistoryText: "Save to History",
      btnSaveToHistoryBottomText: "Save to History",
      btnQuickSaveCalcText: "Save",
      lblSaveActiveHistoryBtn: "Save Current",
      lblHistoryHeading: "Valuation History (Saved Entries)",
      lblHistorySub: "Previous calculations stored in local storage • Click 'Restore' to reload parameters",
      lblClearHistoryBtn: "Clear History",
      btnRoad1: "< 5m (0%)",
      btnRoad2: "5 - 12m (+5%)",
      btnRoad3: "12 - 15m (+10%)",
      btnRoad4: "≥ 15m (+15%)",
    },
  };

  // 2. APPLICATION STATE
  let rawDataset = [];
  let currentLang = 'hi';
  let currentTab = 'calc';
  let selectedVillage = null;
  let validlyChosenVillage = null;
  let lastCommittedVillage = null;
  let savedSelectedDistrict = "";
  let savedSelectedTehsil = "";
  let sortMode = 'auto';
  let femaleValueCeiling = 2500000;
  let maxRegFeeCap = 50000;
  let activeBuyerType = 'general';
  let roadWidth = 3.0;

  // Deed & Transaction Type State (Step 0)
  let currentDeedType = 'sale'; // 'sale' | 'gift' | 'lease'
  let currentGiftRelation = 'family'; // 'family' | 'general'
  let currentThemeMode = 'auto'; // 'auto' | 'light' | 'dark'

  let landSegments = [
    { id: 1, type: "NON AGRICULTURE", distance: "0-50m", area: "", unit: "sqm", isZeroDist: true }
  ];

  let buildingComponents = [];
  let currentBreakdownRows = [];
  let currentActiveVillages = [];

  // Master Uttarakhand Administrative Registry: All 13 Districts & Tehsils
  const UTTARAKHAND_MASTER_DISTRICTS = [
    { en: "Almora", hi: "अल्मोड़ा", tehsils: [
      { en: "Almora", hi: "अल्मोड़ा" }, { en: "Bhikiyasain", hi: "भिकियासैंण" }, { en: "Ranikhet", hi: "रानीखेत" }, { en: "Chaukhutia", hi: "चौखुटिया" }, { en: "Someshwar", hi: "सोमेश्वर" }, { en: "Dwarahat", hi: "द्वाराहाट" }, { en: "Jainti", hi: "जैंती" }, { en: "Bhanoli", hi: "भनोली" }, { en: "Syalde", hi: "स्याल्दे" }, { en: "Lamgara", hi: "लमगड़ा" }
    ]},
    { en: "Bageshwar", hi: "बागेश्वर", tehsils: [
      { en: "Bageshwar", hi: "बागेश्वर" }, { en: "Kapkot", hi: "कपकोट" }, { en: "Kanda", hi: "कांडा" }, { en: "Garur", hi: "गरुड़" }, { en: "Shama", hi: "शामा" }, { en: "Dug Nakuri", hi: "दुग नाकुरी" }
    ]},
    { en: "Chamoli", hi: "चमोली", tehsils: [
      { en: "Chamoli", hi: "चमोली" }, { en: "Joshimath", hi: "जोशीमठ" }, { en: "Karnaprayag", hi: "कर्णप्रयाग" }, { en: "Tharali", hi: "थराली" }, { en: "Pokhari", hi: "पोखरी" }, { en: "Gairsain", hi: "गैरसैंण" }, { en: "Ghat", hi: "घाट" }, { en: "Dewal", hi: "देवाल" }
    ]},
    { en: "Champawat", hi: "चंपावत", tehsils: [
      { en: "Champawat", hi: "चंपावत" }, { en: "Lohaghat", hi: "लोहाघाट" }, { en: "Barakot", hi: "बाराकोट" }, { en: "Pati", hi: "पाटी" }, { en: "Purnagiri", hi: "पूर्णागिरि" }
    ]},
    { en: "Dehradun", hi: "देहरादून", tehsils: [
      { en: "Dehradun", hi: "देहरादून" }, { en: "Rishikesh", hi: "ऋषिकेश" }, { en: "Vikasnagar", hi: "विकासनगर" }, { en: "Doiwala", hi: "डोईवाला" }, { en: "Chakrata", hi: "चकराता" }, { en: "Kalsi", hi: "कालसी" }, { en: "Tyuni", hi: "त्यूनी" }
    ]},
    { en: "Haridwar", hi: "हरिद्वार", tehsils: [
      { en: "Haridwar", hi: "हरिद्वार" }, { en: "Roorkee", hi: "रुड़की" }, { en: "Laksar", hi: "लक्सर" }, { en: "Bhagwanpur", hi: "भगवानपुर" }
    ]},
    { en: "Nainital", hi: "नैनीताल", tehsils: [
      { en: "Nainital", hi: "नैनीताल" }, { en: "Haldwani", hi: "हल्द्वानी" }, { en: "Ramnagar", hi: "रामनगर" }, { en: "Dhari", hi: "धारी" }, { en: "Kosyakutoli", hi: "कोश्याकुटोली" }, { en: "Betalghat", hi: "बेतालघाट" }, { en: "Kaladhungi", hi: "कालाढूंगी" }, { en: "Lalkuan", hi: "लालकुआँ" }
    ]},
    { en: "Pauri Garhwal", hi: "पौड़ी गढ़वाल", tehsils: [
      { en: "Pauri", hi: "पौड़ी" }, { en: "Srinagar", hi: "श्रीनगर" }, { en: "Kotdwar", hi: "कोटद्वार" }, { en: "Lansdowne", hi: "लैंसडाउन" }, { en: "Chaubattakhal", hi: "चौबट्टाखाल" }, { en: "Thalisain", hi: "थलीसैंण" }, { en: "Dhumakot", hi: "धूमाकोट" }, { en: "Yamkeshwar", hi: "यमकेश्वर" }
    ]},
    { en: "Pithoragarh", hi: "पिथौरागढ़", tehsils: [
      { en: "Pithoragarh", hi: "पिथौरागढ़" }, { en: "Didihat", hi: "दीदीहाट" }, { en: "Dharchula", hi: "धारचूला" }, { en: "Gangolihat", hi: "गंगोलीहाट" }, { en: "Berinag", hi: "बेरीनाग" }, { en: "Munsyari", hi: "मुनस्यारी" }, { en: "Kanalichhina", hi: "कनालीछीना" }, { en: "Bangapani", hi: "बंगापानी" }
    ]},
    { en: "Rudraprayag", hi: "रुद्रप्रयाग", tehsils: [
      { en: "Rudraprayag", hi: "रुद्रप्रयाग" }, { en: "Ukhimath", hi: "ऊखीमठ" }, { en: "Jakholi", hi: "जखोली" }, { en: "Basukedar", hi: "बसुकेदार" }
    ]},
    { en: "Tehri Garhwal", hi: "टिहरी गढ़वाल", tehsils: [
      { en: "Tehri", hi: "नई टिहरी" }, { en: "Narendra Nagar", hi: "नरेंद्र नगर" }, { en: "Pratapnagar", hi: "प्रतापनगर" }, { en: "Devprayag", hi: "देवप्रयाग" }, { en: "Ghansali", hi: "घनसाली" }, { en: "Jakhnidhar", hi: "जाखणीधार" }, { en: "Dhanaulti", hi: "धनोल्टी" }, { en: "Kandisaur", hi: "कांडीसौड़" }
    ]},
    { en: "Udham Singh Nagar", hi: "ऊधम सिंह नगर", tehsils: [
      { en: "Rudrapur", hi: "रुद्रपुर" }, { en: "Kashipur", hi: "काशीपुर" }, { en: "Kichha", hi: "किच्छा" }, { en: "Khatima", hi: "खटीमा" }, { en: "Sitarganj", hi: "सितारगंज" }, { en: "Bajpur", hi: "बाजपुर" }, { en: "Jaspur", hi: "जसपुर" }, { en: "Gadarpur", hi: "गदरपुर" }
    ]},
    { en: "Uttarkashi", hi: "उत्तरकाशी", tehsils: [
      { en: "Bhatwari", hi: "भटवाड़ी" }, { en: "Barkot", hi: "बड़कोट" }, { en: "Purola", hi: "पुरोला" }, { en: "Rajgarhi", hi: "राजगढ़ी" }, { en: "Dunda", hi: "डुंडा" }, { en: "Mori", hi: "मोरी" }, { en: "Chinyalisaur", hi: "चिन्यालीसौड़" }
    ]}
  ];

  // Helper to check if a record actually has valid circle rates
  function hasCircleRates(item) {
    if (!item) return false;
    if (item.rate_template_id) return true;
    if (item.rates && typeof item.rates === 'object' && Object.keys(item.rates).length > 0) {
      return true;
    }
    return false;
  }
  window.hasCircleRates = hasCircleRates;

  // Returns ONLY districts and tehsils for which circle rate is available in rawDataset.
  // Other districts and tehsils remain hidden and only show when there is circle rate data for them.
  function getDistrictsWithCircleRates() {
    const distMap = new Map();
    if (Array.isArray(rawDataset)) {
      rawDataset.forEach(item => {
        if (!item || !item.district) return;
        if (!hasCircleRates(item)) return;

        const dName = String(item.district).trim();
        const tName = item.tehsil ? String(item.tehsil).trim() : "";
        if (!dName || !tName) return;

        const lowerD = dName.toLowerCase();
        if (!distMap.has(lowerD)) {
          // Look up master info for standard English/Hindi naming
          const masterD = UTTARAKHAND_MASTER_DISTRICTS.find(
            m => m.en.toLowerCase() === lowerD || m.hi === dName
          );
          distMap.set(lowerD, {
            en: masterD ? masterD.en : dName,
            hi: masterD ? masterD.hi : (item.district_hi || dName),
            tehsilsMap: new Map()
          });
        }

        const dObj = distMap.get(lowerD);
        const lowerT = tName.toLowerCase();
        if (!dObj.tehsilsMap.has(lowerT)) {
          const masterD = UTTARAKHAND_MASTER_DISTRICTS.find(
            m => m.en.toLowerCase() === lowerD || m.hi === dName
          );
          let masterT = null;
          if (masterD && Array.isArray(masterD.tehsils)) {
            masterT = masterD.tehsils.find(
              t => t.en.toLowerCase() === lowerT || t.hi === tName
            );
          }
          dObj.tehsilsMap.set(lowerT, {
            en: masterT ? masterT.en : tName,
            hi: masterT ? masterT.hi : (item.tehsil_hi || tName)
          });
        }
      });
    }

    const result = [];
    distMap.forEach(dObj => {
      const tehsils = Array.from(dObj.tehsilsMap.values()).sort((a, b) => {
        if (currentLang === 'hi') return (a.hi || a.en).localeCompare(b.hi || b.en, 'hi');
        return a.en.localeCompare(b.en);
      });
      // ONLY include this district if it has at least one tehsil with circle rates!
      if (tehsils.length > 0) {
        result.push({
          en: dObj.en,
          hi: dObj.hi,
          tehsils: tehsils
        });
      }
    });

    return result.sort((a, b) => {
      if (currentLang === 'hi') return (a.hi || a.en).localeCompare(b.hi || b.en, 'hi');
      return a.en.localeCompare(b.en);
    });
  }

  function getAllUttarakhandDistricts(onlyAvailableWithRates = true) {
    if (onlyAvailableWithRates) {
      return getDistrictsWithCircleRates();
    }
    return UTTARAKHAND_MASTER_DISTRICTS;
  }
  window.getDistrictsWithCircleRates = getDistrictsWithCircleRates;
  window.getAllUttarakhandDistricts = getAllUttarakhandDistricts;
  window.UTTARAKHAND_MASTER_DISTRICTS = UTTARAKHAND_MASTER_DISTRICTS;

  // Theme Management (Auto / Light / Dark)
  function applyTheme(mode) {
    let isDark = false;
    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'light') {
      isDark = false;
    } else {
      if (typeof window.isSystemDark === 'function') {
        isDark = window.isSystemDark();
      } else if (window.AndroidApp && typeof window.AndroidApp.isSystemDarkMode === 'function') {
        try { isDark = Boolean(window.AndroidApp.isSystemDarkMode()); } catch(e) {}
      } else if (typeof window._systemIsDark === 'boolean') {
        isDark = window._systemIsDark;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark = true;
      }
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  window.onSystemThemeChanged = function(isDark) {
    window._systemIsDark = Boolean(isDark);
    if (currentThemeMode === 'auto') {
      applyTheme('auto');
    }
  };

  function setThemeMode(mode) {
    currentThemeMode = mode;
    localStorage.setItem('appThemeMode', mode);
    applyTheme(mode);
    updateThemeUI();
  }
  window.setThemeMode = setThemeMode;

  function toggleThemeMode() {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setThemeMode(isCurrentlyDark ? 'light' : 'dark');
  }
  window.toggleThemeMode = toggleThemeMode;

  function updateThemeUI() {
    const btnAuto = document.getElementById('btnThemeAuto');
    const btnLight = document.getElementById('btnThemeLight');
    const btnDark = document.getElementById('btnThemeDark');
    const activeClass = "w-full h-11 px-2 rounded-xl border text-xs font-bold transition-all border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 flex items-center justify-center leading-tight";
    const inactiveClass = "w-full h-11 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center leading-tight";

    if (btnAuto) btnAuto.className = (currentThemeMode === 'auto') ? activeClass : inactiveClass;
    if (btnLight) btnLight.className = (currentThemeMode === 'light') ? activeClass : inactiveClass;
    if (btnDark) btnDark.className = (currentThemeMode === 'dark') ? activeClass : inactiveClass;
  }

  // Quick Language Switcher
  function toggleLanguage() {
    const nextLang = currentLang === 'hi' ? 'en' : 'hi';
    setLanguage(nextLang);
    if (typeof triggerDistrictTehsilDOMUpdate === 'function') {
      triggerDistrictTehsilDOMUpdate();
    }
  }
  window.toggleLanguage = toggleLanguage;

  // Step 0: Deed Type Handlers
  function setDeedType(type) {
    currentDeedType = type;
    localStorage.setItem('circle_rate_deed_type', type);
    updateDeedTypeUI();
    recalculate();
  }
  window.setDeedType = setDeedType;

  function onGiftRelationChange() {
    const radio = document.querySelector('input[name="giftRelation"]:checked');
    const sel = document.getElementById('selGiftRelation');
    if (radio) {
      currentGiftRelation = radio.value;
      localStorage.setItem('circle_rate_gift_relation', currentGiftRelation);
    } else if (sel) {
      currentGiftRelation = sel.value;
      localStorage.setItem('circle_rate_gift_relation', currentGiftRelation);
    }
    recalculate();
  }
  window.onGiftRelationChange = onGiftRelationChange;

  function updateLeaseTermButtonsUI(years) {
    const y = parseFloat(years) || 1;
    // Condition checks matching UP/UK Stamp Lease Categories:
    // Category 1: <= 1 yr
    // Category 2: > 1 and <= 5 yrs
    // Category 3: > 5 and <= 10 yrs
    // Category 4: > 10 and <= 20 yrs
    // Category 5: > 20 and <= 30 yrs
    // Category 6: > 30 yrs
    let activeBtnId = 'btnLeaseTerm1';
    if (y <= 1) activeBtnId = 'btnLeaseTerm1';
    else if (y <= 5) activeBtnId = 'btnLeaseTerm2';
    else if (y <= 10) activeBtnId = 'btnLeaseTerm3';
    else if (y <= 20) activeBtnId = 'btnLeaseTerm4';
    else if (y <= 30) activeBtnId = 'btnLeaseTerm5';
    else activeBtnId = 'btnLeaseTerm6';

    const activeClasses = "w-full h-11 sm:h-12 px-2 py-1 rounded-xl border border-blue-600 bg-blue-600 text-white font-bold text-center shadow-sm shadow-blue-600/20 transition-all flex items-center justify-center text-xs sm:text-sm leading-tight";
    const inactiveClasses = "w-full h-11 sm:h-12 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center text-xs sm:text-sm leading-tight";

    ['btnLeaseTerm1', 'btnLeaseTerm2', 'btnLeaseTerm3', 'btnLeaseTerm4', 'btnLeaseTerm5', 'btnLeaseTerm6'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.className = (id === activeBtnId) ? activeClasses : inactiveClasses;
      }
    });

    // Sync Slider
    const slider = document.getElementById('sliderLeaseYears');
    if (slider) {
      slider.value = Math.min(50, Math.max(0.5, y));
    }

    const sliderLabel = document.getElementById('lblLeaseSliderValue');
    if (sliderLabel) {
      sliderLabel.innerText = `${y} ${currentLang === 'hi' ? 'वर्ष' : 'Yrs'}`;
    }
  }
  window.updateLeaseTermButtonsUI = updateLeaseTermButtonsUI;

  function syncLeaseDatesWithTerm(y) {
    const sEl = document.getElementById('inputLeaseStartDate');
    const eEl = document.getElementById('inputLeaseEndDate');
    const lblDiff = document.getElementById('lblLeaseDateDiff');
    const sVal = sEl?.value;
    const eVal = eEl?.value;

    if (sVal && !eVal) {
      // Start date entered -> update End Date
      const s = new Date(sVal + "T00:00:00");
      if (!isNaN(s.getTime())) {
        const e = new Date(s.getTime());
        e.setFullYear(e.getFullYear() + Math.floor(y));
        const remMonths = Math.round((y - Math.floor(y)) * 12);
        if (remMonths > 0) e.setMonth(e.getMonth() + remMonths);
        e.setDate(e.getDate() - 1);
        if (eEl) eEl.value = e.toISOString().split('T')[0];
        if (lblDiff) {
          lblDiff.innerHTML = currentLang === 'hi'
            ? `अवधि <b>${y} वर्ष</b> अनुसार समाप्ति तिथि स्वतः सेट की गई`
            : `End date auto-set to <b>${y} yrs</b> term`;
        }
      }
    } else if (eVal && !sVal) {
      // End date entered -> update Start Date
      const e = new Date(eVal + "T00:00:00");
      if (!isNaN(e.getTime())) {
        const s = new Date(e.getTime());
        s.setFullYear(s.getFullYear() - Math.floor(y));
        const remMonths = Math.round((y - Math.floor(y)) * 12);
        if (remMonths > 0) s.setMonth(s.getMonth() - remMonths);
        s.setDate(s.getDate() + 1);
        if (sEl) sEl.value = s.toISOString().split('T')[0];
        if (lblDiff) {
          lblDiff.innerHTML = currentLang === 'hi'
            ? `अवधि <b>${y} वर्ष</b> अनुसार प्रारम्भ तिथि स्वतः सेट की गई`
            : `Start date auto-set to <b>${y} yrs</b> term`;
        }
      }
    } else if (sVal && eVal) {
      // Both entered -> update End Date
      const s = new Date(sVal + "T00:00:00");
      if (!isNaN(s.getTime())) {
        const e = new Date(s.getTime());
        e.setFullYear(e.getFullYear() + Math.floor(y));
        const remMonths = Math.round((y - Math.floor(y)) * 12);
        if (remMonths > 0) e.setMonth(e.getMonth() + remMonths);
        e.setDate(e.getDate() - 1);
        if (eEl) eEl.value = e.toISOString().split('T')[0];
        if (lblDiff) {
          lblDiff.innerHTML = currentLang === 'hi'
            ? `अवधि <b>${y} वर्ष</b> अनुसार समाप्ति तिथि पुनः निर्धारित की गई`
            : `End date updated to match <b>${y} yrs</b>`;
        }
      }
    }
  }

  function setLeaseTermPreset(years) {
    const y = parseFloat(years) || 1;
    const inp = document.getElementById('inputLeaseYears');
    if (inp) {
      inp.value = y;
    }
    updateLeaseTermButtonsUI(y);
    syncLeaseDatesWithTerm(y);
    recalculate();
  }
  window.setLeaseTermPreset = setLeaseTermPreset;

  function onLeaseYearsInput(val) {
    const y = parseFloat(val) || 1;
    updateLeaseTermButtonsUI(y);
    recalculate();
  }
  window.onLeaseYearsInput = onLeaseYearsInput;

  function onLeaseSliderChange(val) {
    const y = parseFloat(val) || 1;
    const inp = document.getElementById('inputLeaseYears');
    if (inp) {
      inp.value = y;
    }
    updateLeaseTermButtonsUI(y);
    syncLeaseDatesWithTerm(y);
    recalculate();
  }
  window.onLeaseSliderChange = onLeaseSliderChange;

  function calculateTermFromDates() {
    const startStr = document.getElementById('inputLeaseStartDate')?.value;
    const endStr = document.getElementById('inputLeaseEndDate')?.value;
    const lblDiff = document.getElementById('lblLeaseDateDiff');

    if (!startStr || !endStr) return;

    const startDate = new Date(startStr + "T00:00:00");
    const endDate = new Date(endStr + "T00:00:00");

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return;

    if (endDate < startDate) {
      if (lblDiff) {
        lblDiff.innerHTML = `<span class="text-rose-600 dark:text-rose-400 font-bold">⚠️ ${currentLang === 'hi' ? 'समाप्ति तिथि प्रारम्भ तिथि से बाद की होनी चाहिए!' : 'End date must be after start date!'}</span>`;
      }
      return;
    }

    // Tenancy duration counts both inclusive dates (+1 day)
    const diffMs = endDate.getTime() - startDate.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1;

    let startY = startDate.getFullYear();
    let startM = startDate.getMonth();
    let startD = startDate.getDate();

    let endY = endDate.getFullYear();
    let endM = endDate.getMonth();
    let endD = endDate.getDate() + 1; // inclusive boundary

    let years = endY - startY;
    let months = endM - startM;
    let days = endD - startD;

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(endY, endM, 0).getDate();
      days += prevMonthDays;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Exact years representation: full calendar years + remaining months/days
    let calculatedYears = 0;
    if (months === 0 && days === 0 && years > 0) {
      calculatedYears = years;
    } else {
      calculatedYears = +(years + (months / 12) + (days / 365.25)).toFixed(2);
    }
    if (calculatedYears < 0.1) calculatedYears = 0.1;

    const inp = document.getElementById('inputLeaseYears');
    if (inp) {
      inp.value = calculatedYears;
    }

    updateLeaseTermButtonsUI(calculatedYears);

    if (lblDiff) {
      const summaryText = currentLang === 'hi'
        ? `कुल अवधि: <b>${years > 0 ? years + ' वर्ष ' : ''}${months > 0 ? months + ' माह ' : ''}${days > 0 ? days + ' दिन' : ''}</b> (${diffDays} दिन ➔ <b>${calculatedYears} वर्ष</b>)`
        : `Total Duration: <b>${years > 0 ? years + ' yrs ' : ''}${months > 0 ? months + ' mos ' : ''}${days > 0 ? days + ' days' : ''}</b> (${diffDays} days ➔ <b>${calculatedYears} yrs</b>)`;
      lblDiff.innerHTML = summaryText;
    }

    recalculate();
  }
  window.calculateTermFromDates = calculateTermFromDates;

  function clearLeaseDates() {
    const s = document.getElementById('inputLeaseStartDate');
    const e = document.getElementById('inputLeaseEndDate');
    const lbl = document.getElementById('lblLeaseDateDiff');
    if (s) s.value = "";
    if (e) e.value = "";
    if (lbl) {
      lbl.innerText = currentLang === 'hi' ? "तिथि चुनें ➔ अवधि स्वतः वर्ष में सेट होगी" : "Select dates to auto-compute years";
    }
  }
  window.clearLeaseDates = clearLeaseDates;

  function updateDeedTypeUI() {
    const btnSale = document.getElementById('btnDeedSale');
    const btnGift = document.getElementById('btnDeedGift');
    const btnLease = document.getElementById('btnDeedLease');
    const badge = document.getElementById('badgeCurrentDeed');
    const panelGift = document.getElementById('panelGiftOptions');
    const panelLease = document.getElementById('panelLeaseOptions');

    const activeCls = "h-full min-h-[90px] p-3 rounded-xl border-2 text-left transition-all relative flex flex-col justify-between border-emerald-500 dark:border-emerald-400 bg-emerald-50/70 dark:bg-emerald-500/10 text-slate-900 dark:text-white shadow-xs ring-2 ring-emerald-500/20";
    const inactiveCls = "h-full min-h-[90px] p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50/70 dark:hover:bg-slate-750";

    if (btnSale) {
      btnSale.className = (currentDeedType === 'sale') ? activeCls : inactiveCls;
    }
    if (btnGift) {
      btnGift.className = (currentDeedType === 'gift') ? activeCls : inactiveCls;
    }
    if (btnLease) {
      btnLease.className = (currentDeedType === 'lease') ? activeCls : inactiveCls;
    }

    if (badge) {
      badge.className = "text-xs bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-500/30 font-extrabold px-3 py-1 rounded-full shrink-0 whitespace-nowrap mt-0.5 shadow-2xs";
      if (currentDeedType === 'sale') {
        badge.innerText = currentLang === 'hi' ? "विक्रय विलेख" : "Sale Deed";
      } else if (currentDeedType === 'gift') {
        badge.innerText = currentLang === 'hi' ? "दान विलेख" : "Gift Deed";
      } else if (currentDeedType === 'lease') {
        badge.innerText = currentLang === 'hi' ? "पट्टा विलेख" : "Lease Deed";
      }
    }

    if (panelGift) {
      if (currentDeedType === 'gift') panelGift.classList.remove('hidden');
      else panelGift.classList.add('hidden');
    }
    if (panelLease) {
      if (currentDeedType === 'lease') panelLease.classList.remove('hidden');
      else panelLease.classList.add('hidden');
    }
  }

  function unpackCircleRatesData(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (!data.districts && !data.rate_templates) return [];
    var result = [];
    var rootTemplates = data.rate_templates || {};
    var districts = data.districts || [];
    districts.forEach(function(d) {
      var distName = d.district_name_en || d.district || (d.district_id ? d.district_id : "");
      var distNameHi = d.district_name_hi || distName;
      var distTemplates = d.rate_templates || rootTemplates;
      (d.tehsils || []).forEach(function(t) {
        var tehsilName = t.tehsil_name_en || t.tehsil || (t.tehsil_id ? t.tehsil_id : "");
        var tehsilNameHi = t.tehsil_name_hi || tehsilName;
        var templates = t.rate_templates || distTemplates || {};
        (t.villages || []).forEach(function(v) {
          result.push({
            district: distName,
            district_hi: distNameHi,
            tehsil: tehsilName,
            tehsil_hi: tehsilNameHi,
            vname: v.vname_hi || v.vname,
            vname_eng: v.vname_en || v.vname_eng || v.vname_hi || v.vname,
            rate_template_id: v.rate_template_id,
            rates: templates[v.rate_template_id] || v.rates || {}
          });
        });
      });
    });
    return result;
  }
  window.unpackCircleRatesData = unpackCircleRatesData;

  // 3. INITIALIZATION
  function loadState() {
    // Saved dataset
    const savedData = localStorage.getItem('circle_rate_active_dataset');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (typeof unpackCircleRatesData === 'function' && parsed && (parsed.rate_templates || parsed.districts)) {
          rawDataset = unpackCircleRatesData(parsed);
        } else if (Array.isArray(parsed)) {
          rawDataset = parsed;
        } else {
          rawDataset = (typeof unpackCircleRatesData === 'function' && window.CIRCLE_RATES_DATA)
            ? unpackCircleRatesData(window.CIRCLE_RATES_DATA)
            : (window.DEFAULT_BAGESHWAR_DATA || []);
        }
      } catch(e) {
        rawDataset = (typeof unpackCircleRatesData === 'function' && window.CIRCLE_RATES_DATA)
          ? unpackCircleRatesData(window.CIRCLE_RATES_DATA)
          : (window.DEFAULT_BAGESHWAR_DATA || []);
      }
    } else {
      rawDataset = (typeof unpackCircleRatesData === 'function' && window.CIRCLE_RATES_DATA)
        ? unpackCircleRatesData(window.CIRCLE_RATES_DATA)
        : (window.DEFAULT_BAGESHWAR_DATA || []);
    }

    rawDataset.forEach(item => {
      if (!item.district) item.district = "Bageshwar";
      if (!item.tehsil) item.tehsil = "Kapkot";
    });

    // Saved language
    const savedLang = localStorage.getItem('circle_rate_lang');
    if (savedLang === 'en' || savedLang === 'hi') {
      currentLang = savedLang;
    }

    // Saved theme
    const savedTheme = localStorage.getItem('appThemeMode');
    if (savedTheme === 'auto' || savedTheme === 'light' || savedTheme === 'dark') {
      currentThemeMode = savedTheme;
    }

    // Saved deed type
    const savedDeed = localStorage.getItem('circle_rate_deed_type');
    if (savedDeed === 'sale' || savedDeed === 'gift' || savedDeed === 'lease') {
      currentDeedType = savedDeed;
    }

    const savedGiftRel = localStorage.getItem('circle_rate_gift_relation');
    if (savedGiftRel === 'family' || savedGiftRel === 'general') {
      currentGiftRelation = savedGiftRel;
      const radioG = document.querySelector(`input[name="giftRelation"][value="${savedGiftRel}"]`);
      if (radioG) radioG.checked = true;
      const selG = document.getElementById('selGiftRelation');
      if (selG) selG.value = savedGiftRel;
    }

    // Saved settings
    const savedSort = localStorage.getItem('circle_rate_sort_mode');
    if (savedSort) sortMode = savedSort;

    const savedCeiling = localStorage.getItem('circle_rate_female_ceiling');
    if (savedCeiling) femaleValueCeiling = parseFloat(savedCeiling) || 2500000;

    const savedMaxReg = localStorage.getItem('circle_rate_max_reg_fee');
    if (savedMaxReg) maxRegFeeCap = parseFloat(savedMaxReg) || 50000;

    // Saved form state (fields, inputs, segments, etc.)
    const savedForm = localStorage.getItem('circle_rate_form_state');
    if (savedForm) {
      try {
        const sf = JSON.parse(savedForm);
        if (sf.currentTab) currentTab = sf.currentTab;
        if (sf.activeBuyerType) activeBuyerType = sf.activeBuyerType;
        if (sf.roadWidth !== undefined) roadWidth = parseFloat(sf.roadWidth);
        if (sf.currentDeedType) currentDeedType = sf.currentDeedType;
        if (sf.currentGiftRelation) currentGiftRelation = sf.currentGiftRelation;
        if (Array.isArray(sf.landSegments) && sf.landSegments.length > 0) landSegments = sf.landSegments;
        if (Array.isArray(sf.buildingComponents)) buildingComponents = sf.buildingComponents;
        if (sf.selectedDistrict) savedSelectedDistrict = sf.selectedDistrict;
        if (sf.selectedTehsil) savedSelectedTehsil = sf.selectedTehsil;
        if (sf.selectedVillageName) {
          selectedVillage = rawDataset.find(v => v.vname === sf.selectedVillageName || v.vname_eng === sf.selectedVillageName) || null;
          validlyChosenVillage = selectedVillage;
          lastCommittedVillage = selectedVillage;
          if (selectedVillage) {
            if (!savedSelectedDistrict) savedSelectedDistrict = selectedVillage.district;
            if (!savedSelectedTehsil) savedSelectedTehsil = selectedVillage.tehsil;
          }
        }
      } catch(e) {}
    }

    // Default remains unselected ("-- selection * --") until chosen by user

    // Listen for OS dark mode changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentThemeMode === 'auto') {
          applyTheme('auto');
        }
      });
    }
  }

  function saveFormState() {
    try {
      const state = {
        currentTab,
        selectedDistrict: document.getElementById('districtSelect') ? document.getElementById('districtSelect').value : savedSelectedDistrict,
        selectedTehsil: document.getElementById('tehsilSelect') ? document.getElementById('tehsilSelect').value : savedSelectedTehsil,
        selectedVillageName: selectedVillage ? selectedVillage.vname : null,
        activeBuyerType,
        roadWidth,
        currentDeedType,
        currentGiftRelation,
        landSegments,
        buildingComponents,
        femaleEligible: document.getElementById('chkFemaleEligible') ? document.getElementById('chkFemaleEligible').checked : true,
        femaleStake: document.getElementById('inputFemaleStake') ? document.getElementById('inputFemaleStake').value : "50",
        priorPurchases: document.getElementById('selPriorPurchaseCount') ? document.getElementById('selPriorPurchaseCount').value : "0",
        priorValue: document.getElementById('inputPriorValueUsed') ? document.getElementById('inputPriorValueUsed').value : "0",
        leaseYears: document.getElementById('sliderLeaseYears') ? document.getElementById('sliderLeaseYears').value : "1",
        leaseRent: document.getElementById('inputLeaseAnnualRent') ? document.getElementById('inputLeaseAnnualRent').value : "",
        leasePremium: document.getElementById('inputLeasePremium') ? document.getElementById('inputLeasePremium').value : ""
      };
      localStorage.setItem('circle_rate_form_state', JSON.stringify(state));
    } catch(e) {}
  }

  window.initApp = initApp;
  function initApp() {
    loadState();
    applyTheme(currentThemeMode);
    setupSettingsUI();
    updateThemeUI();
    updateDeedTypeUI();
    populateDistrictTehsilFilters();
    populateVillages();
    renderLandSegments();
    renderBuildingComponents();
    applyLanguage(currentLang);
    setBuyerType(activeBuyerType || 'general');
    onRoadWidthChange(roadWidth);
    if (typeof updateHistoryBadge === 'function') {
      updateHistoryBadge();
    }

    // Restore saved form inputs
    const savedForm = localStorage.getItem('circle_rate_form_state');
    if (savedForm) {
      try {
        const sf = JSON.parse(savedForm);
        const chkFem = document.getElementById('chkFemaleEligible');
        if (chkFem && typeof sf.femaleEligible === 'boolean') chkFem.checked = sf.femaleEligible;
        const inStake = document.getElementById('inputFemaleStake');
        if (inStake && sf.femaleStake) inStake.value = sf.femaleStake;
        const selPrior = document.getElementById('selPriorPurchaseCount');
        if (selPrior && sf.priorPurchases) selPrior.value = sf.priorPurchases;
        const inPriorVal = document.getElementById('inputPriorValueUsed');
        if (inPriorVal && sf.priorValue) inPriorVal.value = sf.priorValue;
        const inRent = document.getElementById('inputLeaseAnnualRent');
        if (inRent && sf.leaseRent) inRent.value = sf.leaseRent;
        const inPrem = document.getElementById('inputLeasePremium');
        if (inPrem && sf.leasePremium) inPrem.value = sf.leasePremium;
        if (sf.leaseYears && typeof updateLeaseTermButtonsUI === 'function') {
          updateLeaseTermButtonsUI(sf.leaseYears);
        }
        if (selectedVillage) {
          const vSel = document.getElementById('villageSelect');
          if (vSel) vSel.value = selectedVillage.vname;
          updateVillageBadge();
        }
      } catch(e) {}
    }

    switchTab(currentTab || 'calc');
    recalculate();
  }

  // 4. LANGUAGE HANDLING
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('circle_rate_lang', lang);
    applyLanguage(lang);
    populateDistrictTehsilFilters();
    populateVillages(document.getElementById('villageSearchInput')?.value || "");
    renderLandSegments();
    renderBuildingComponents();
    recalculate();
    saveFormState();
    triggerDistrictTehsilDOMUpdate();
  }
  window.setLanguage = setLanguage;

  function applyLanguage(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    // Header
    const appTitle = document.getElementById('txtAppTitle');
    if (appTitle) appTitle.innerText = dict.appTitle;
    const appTitleInfo = document.getElementById('txtAppTitleInfo');
    if (appTitleInfo) appTitleInfo.innerText = dict.appTitleInfo;
    const btnPrint = document.getElementById('btnPrintLabel');
    if (btnPrint) btnPrint.innerText = dict.printLabel;
    const btnPrintA4 = document.getElementById('btnPrintA4Text');
    if (btnPrintA4) btnPrintA4.innerText = (lang === 'hi') ? 'प्रिंट (A4)' : 'Print (A4)';
    const quickLang = document.getElementById('quickLangLabel');
    if (quickLang) quickLang.innerText = (lang === 'hi') ? 'हिन्दी' : 'English';

    // Bottom Navigation Tabs
    const tabCalc = document.getElementById('lblBottomTabCalc');
    if (tabCalc) tabCalc.innerText = dict.tabCalc;
    const tabResult = document.getElementById('lblBottomTabResult');
    if (tabResult) tabResult.innerText = dict.tabResult;
    const tabHistory = document.getElementById('lblBottomTabHistory');
    if (tabHistory) tabHistory.innerText = dict.tabHistory;
    const tabSettings = document.getElementById('lblBottomTabSettings');
    if (tabSettings) tabSettings.innerText = dict.tabSettings;
    const tabData = document.getElementById('lblBottomTabData');
    if (tabData) tabData.innerText = dict.tabImport;

    // History View Texts
    const histHead = document.getElementById('lblHistoryHeading');
    if (histHead) histHead.innerText = dict.lblHistoryHeading;
    const histSub = document.getElementById('lblHistorySub');
    if (histSub) histSub.innerText = dict.lblHistorySub;
    const clearHistBtn = document.getElementById('lblClearHistoryBtn');
    if (clearHistBtn) clearHistBtn.innerText = dict.lblClearHistoryBtn;
    const btnSaveHist = document.getElementById('btnSaveToHistoryText');
    if (btnSaveHist) btnSaveHist.innerText = dict.btnSaveToHistoryText;
    const btnSaveHistBtm = document.getElementById('btnSaveToHistoryBottomText');
    if (btnSaveHistBtm) btnSaveHistBtm.innerText = dict.btnSaveToHistoryBottomText;
    const btnQuickSave = document.getElementById('btnQuickSaveCalcText');
    if (btnQuickSave) btnQuickSave.innerText = dict.btnQuickSaveCalcText;
    const btnSaveActive = document.getElementById('lblSaveActiveHistoryBtn');
    if (btnSaveActive) btnSaveActive.innerText = dict.lblSaveActiveHistoryBtn;

    // Step 0 Deed Selection Headers
    const deedHead = document.getElementById('lblDeedStepHeader');
    if (deedHead) deedHead.innerText = dict.deedStepHeader;
    const deedSub = document.getElementById('lblDeedStepSub');
    if (deedSub) deedSub.innerText = dict.deedStepSub;
    const tipsHead = document.getElementById('lblQuickTipsHeading');
    if (tipsHead) tipsHead.innerText = dict.quickTipsHeading;
    const tipsSub = document.getElementById('lblQuickTipsSub');
    if (tipsSub) tipsSub.innerText = dict.quickTipsSub;
    const giftRelTitle = document.getElementById('lblGiftRelationTitle');
    if (giftRelTitle) giftRelTitle.innerText = dict.giftRelationTitle;
    const leaseConfigHead = document.getElementById('lblLeaseConfigHeader');
    if (leaseConfigHead) leaseConfigHead.innerText = dict.leaseConfigHeader;
    const leaseConfigSubHead = document.getElementById('lblLeaseConfigSubHeader');
    if (leaseConfigSubHead) leaseConfigSubHead.innerText = dict.leaseConfigSubHeader;
    const instExemptTitle = document.getElementById('lblInstitutionalExemptionTitle');
    if (instExemptTitle) instExemptTitle.innerText = (lang === 'hi') ? 'विशेष सांविधिक टिप्पणी:' : 'Special Statutory Note:';
    const instExemptText = document.getElementById('lblInstitutionalExemptionText');
    if (instExemptText) {
      instExemptText.innerText = (lang === 'hi')
        ? 'सर्किल दरें उन हस्तांतरणों/पट्टों पर लागू नहीं होती हैं जिनमें उत्तर प्रदेश वित्त निगम, आवास एवं विकास बोर्ड, विकास प्राधिकरण, सिडकुल, जिला उद्योग केंद्र या राज्य निगम द्वारा प्रतिफल मूल्य सीधे संस्थाओं द्वारा निर्धारित किया जाता है।'
        : 'Circle rates do not apply to transfers or leases where consideration price is directly determined by UPFC, Housing & Development Board, Development Authority, SIDCUL, DIC, or State Corporations.';
    }
    updateDeedTypeUI();

    // Valuation Form Section Headers
    const sec1 = document.getElementById('lblLocationHeader');
    if (sec1) sec1.innerText = dict.locationHeader;
    const sub1 = document.getElementById('lblLocationSub');
    if (sub1) sub1.innerText = dict.locationSub;
    const sec2 = document.getElementById('lblLandHeader');
    if (sec2) sec2.innerText = dict.landHeader;
    const sub2 = document.getElementById('lblLandSub');
    if (sub2) sub2.innerText = dict.landSub;
    const sec3 = document.getElementById('lblBldgHeader');
    if (sec3) sec3.innerText = dict.bldgHeader;
    const sub3 = document.getElementById('lblBldgSub');
    if (sub3) sub3.innerText = dict.bldgSub;
    const sec4 = document.getElementById('lblRoadHeader');
    if (sec4) sec4.innerText = dict.roadHeader;
    const sub4 = document.getElementById('lblRoadSub');
    if (sub4) sub4.innerText = dict.roadSub;

    // Field Labels
    const lblDist = document.getElementById('lblDistrictTitle');
    if (lblDist) lblDist.innerText = dict.districtTitle;
    const lblTeh = document.getElementById('lblTehsilTitle');
    if (lblTeh) lblTeh.innerText = dict.tehsilTitle;
    const lblVil = document.getElementById('lblVillageTitle');
    if (lblVil) lblVil.innerText = dict.villageTitle;
    const searchInp = document.getElementById('villageSearchInput');
    if (searchInp) searchInp.placeholder = dict.searchPlaceholder;

    populateDistrictTehsilFilters();

    const btnAddSeg = document.getElementById('btnAddLandSegment');
    if (btnAddSeg) btnAddSeg.innerText = dict.addSegmentBtn;
    const btnAddBldg = document.getElementById('btnAddBuilding');
    if (btnAddBldg) btnAddBldg.innerText = dict.addBuildingBtn;

    const lblOpenTitle = document.getElementById('lblOpenLandBalTitle');
    if (lblOpenTitle) lblOpenTitle.innerText = dict.openLandBalTitle;
    const lblOpenSub = document.getElementById('lblOpenLandBalSub');
    if (lblOpenSub) lblOpenSub.innerText = dict.openLandBalSub;

    const btnViewRes = document.getElementById('btnViewResults');
    if (btnViewRes) btnViewRes.innerText = dict.btnViewResults;
    const lblLiveEst = document.getElementById('lblLiveEst');
    if (lblLiveEst) lblLiveEst.innerText = dict.liveEstLabel;

    // Results Tab Labels
    const resHead = document.getElementById('lblResultsHeader');
    if (resHead) resHead.innerText = dict.resultsHeader;
    const resSub = document.getElementById('lblResultsSub');
    if (resSub) resSub.innerText = dict.resultsSub;
    const mktVal = document.getElementById('lblMarketValTitle');
    if (mktVal) mktVal.innerText = dict.marketValTitle;
    const brkTitle = document.getElementById('lblBreakdownTitle');
    if (brkTitle) brkTitle.innerText = dict.breakdownTitle;
    const brkSub = document.getElementById('lblBreakdownSub');
    if (brkSub) brkSub.innerText = dict.breakdownSub;
    const buyerCat = document.getElementById('lblBuyerCategoryTitle');
    if (buyerCat) buyerCat.innerText = dict.buyerCategoryTitle;

    const bGen = document.getElementById('btnBuyerGeneral') || document.getElementById('btnBuyerMale');
    if (bGen) bGen.innerText = (currentLang === 'hi') ? 'पुरुष / सामान्य' : 'Male / General';
    const bFem = document.getElementById('btnBuyerFemale');
    if (bFem) bFem.innerText = (currentLang === 'hi') ? 'महिला क्रेता' : 'Female Buyer';
    const bBoth = document.getElementById('btnBuyerBoth');
    if (bBoth) bBoth.innerText = (currentLang === 'hi') ? 'संयुक्त क्रेता' : 'Joint Buyer';

    const btnExportPdfText = document.getElementById('btnExportPdfText');
    if (btnExportPdfText) btnExportPdfText.innerText = (currentLang === 'hi') ? 'सत्यापित PDF' : 'Verified PDF';
    const lblPrintTitle = document.getElementById('lblPrintTitle');
    if (lblPrintTitle) lblPrintTitle.innerText = (currentLang === 'hi') ? 'A4 मूल्यांकन पत्रक प्रिंट व निर्यात (सत्यापित PDF / HD)' : 'A4 Valuation Slip Export & Print (Verified PDF / HD)';
    const lblPrintTitleInfo = document.getElementById('lblPrintTitleInfo');
    if (lblPrintTitleInfo) lblPrintTitleInfo.innerText = (currentLang === 'hi') ? 'शीर्ष QR कोड प्रमाणीकरण सहित आधिकारिक PDF रिपोर्ट • ब्लैक & व्हाइट अनुकूल' : 'Official PDF Report with Header QR Code Verification • B&W Printer Friendly';

    const btnExportSlip = document.getElementById('btnExportSlipLabel');
    if (btnExportSlip) btnExportSlip.innerText = (currentLang === 'hi') ? 'मूल्यांकन रिपोर्ट (PNG इमेज) गैलरी में सेव करें' : 'Save Valuation Slip (PNG Image)';
    const btnExportImgHeader = document.getElementById('btnExportImgHeader');
    if (btnExportImgHeader) btnExportImgHeader.innerText = (currentLang === 'hi') ? 'इमेज सेव करें' : 'Save Image';

    const lblFemStake = document.getElementById('lblFemaleStake');
    if (lblFemStake) lblFemStake.innerText = dict.femaleStakeLabel;
    const lblMaleStake = document.getElementById('lblMaleStake');
    if (lblMaleStake) lblMaleStake.innerText = dict.maleStakeLabel;

    const chkFemLabel = document.getElementById('lblChkFemaleEligible');
    if (chkFemLabel) chkFemLabel.innerText = dict.femaleEligibleLabel;
    const lblFemRule = document.getElementById('lblFemaleRuleText');
    if (lblFemRule) lblFemRule.innerText = dict.femaleRuleDesc;
    const lblPriorCnt = document.getElementById('lblPriorPurchasesLabel');
    if (lblPriorCnt) lblPriorCnt.innerText = dict.femalePriorCountLabel;
    const lblPriorVal = document.getElementById('lblPriorValueLabel');
    if (lblPriorVal) lblPriorVal.innerText = dict.femalePriorValueLabel;

    const stampHead = document.getElementById('lblStampHeading');
    if (stampHead) stampHead.innerText = dict.stampHeading;
    const lblBackCalc = document.getElementById('lblBackToCalc');
    if (lblBackCalc) {
      lblBackCalc.innerText = dict.lblBackToCalc || dict.btnBackToCalc;
    } else {
      const btnBackCalc = document.getElementById('btnBackToCalc');
      if (btnBackCalc) btnBackCalc.innerText = dict.btnBackToCalc;
    }

    // Result Tab - Added
    const lblPrintTitleLang = document.getElementById('lblPrintTitle');
    if (lblPrintTitleLang) lblPrintTitleLang.innerText = dict.lblPrintTitle;
    const lblPrintTitleInfoLang = document.getElementById('lblPrintTitleInfo');
    if (lblPrintTitleInfoLang) lblPrintTitleInfoLang.innerText = dict.lblPrintTitleInfo;

    const lblMetricCoveredLandLang = document.getElementById('lblMetricCoveredLand');
    if (lblMetricCoveredLandLang) lblMetricCoveredLandLang.innerText = dict.lblMetricCoveredLand;
    const lblMetricUncoveredLandLang = document.getElementById('lblMetricUncoveredLand');
    if (lblMetricUncoveredLandLang) lblMetricUncoveredLandLang.innerText = dict.lblMetricUncoveredLand;
    const lblMetricBldgValueLang = document.getElementById('lblMetricBldgValue');
    if (lblMetricBldgValueLang) lblMetricBldgValueLang.innerText = dict.lblMetricBldgValue;

    const lblSaleDeedRuleLang = document.getElementById('lblSaleDeedRule');
    if (lblSaleDeedRuleLang) lblSaleDeedRuleLang.innerText = dict.lblSaleDeedRule;

    const lblFemaleStakeAutoMaleLang = document.getElementById('lblFemaleStakeAutoMale');
    if (lblFemaleStakeAutoMaleLang) lblFemaleStakeAutoMaleLang.innerText = dict.lblFemaleStakeAutoMale;
    const lblFemaleValuationStakeLang = document.getElementById('lblFemaleValuationStake');
    if (lblFemaleValuationStakeLang) lblFemaleValuationStakeLang.innerText = dict.lblFemaleValuationStake;
    const lblMaleValuationStakeLang = document.getElementById('lblMaleValuationStake');
    if (lblMaleValuationStakeLang) lblMaleValuationStakeLang.innerText = dict.lblMaleValuationStake;

    const lblJointRegistrationRuleLang = document.getElementById('lblJointRegistrationRule');
    if (lblJointRegistrationRuleLang) lblJointRegistrationRuleLang.innerText = dict.lblJointRegistrationRule;

    const lblMaleCardHeaderLang = document.getElementById('lblMaleCardHeader');
    if (lblMaleCardHeaderLang) lblMaleCardHeaderLang.innerText = dict.lblMaleCardHeader;
    const lblMaleStampDutyLang = document.getElementById('lblMaleStampDuty');
    if (lblMaleStampDutyLang) lblMaleStampDutyLang.innerText = dict.lblMaleStampDuty;
    const lblMaleStampFormulaLang = document.getElementById('lblMaleStampFormula');
    if (lblMaleStampFormulaLang) lblMaleStampFormulaLang.innerText = dict.lblMaleStampFormula;
    const lblMaleRegistrationFeeLang = document.getElementById('lblMaleRegistrationFee');
    if (lblMaleRegistrationFeeLang) lblMaleRegistrationFeeLang.innerText = dict.lblMaleRegistrationFee;
    const lblMaleRegFormulaLang = document.getElementById('lblMaleRegFormula');
    if (lblMaleRegFormulaLang) lblMaleRegFormulaLang.innerText = dict.lblMaleRegFormula;
    const lblMaleTotalLang = document.getElementById('lblMaleTotal');
    if (lblMaleTotalLang) lblMaleTotalLang.innerText = dict.lblMaleTotal;

    const lblFemaleStampDutyLang = document.getElementById('lblFemaleStampDuty');
    if (lblFemaleStampDutyLang) lblFemaleStampDutyLang.innerText = dict.lblFemaleStampDuty;
    const lblFemaleStampFormulaLang = document.getElementById('lblFemaleStampFormula');
    if (lblFemaleStampFormulaLang) lblFemaleStampFormulaLang.innerText = dict.lblFemaleStampFormula;
    const lblFemaleRegistrationFeeLang = document.getElementById('lblFemaleRegistrationFee');
    if (lblFemaleRegistrationFeeLang) lblFemaleRegistrationFeeLang.innerText = dict.lblFemaleRegistrationFee;
    const lblFemaleRegFormulaLang = document.getElementById('lblFemaleRegFormula');
    if (lblFemaleRegFormulaLang) lblFemaleRegFormulaLang.innerText = dict.lblFemaleRegFormula;
    const lblFemaleTotalLang = document.getElementById('lblFemaleTotal');
    if (lblFemaleTotalLang) lblFemaleTotalLang.innerText = dict.lblFemaleTotal;

    const lblGiftSubHeaderLang = document.getElementById('lblGiftSubHeader');
    if (lblGiftSubHeaderLang) lblGiftSubHeaderLang.innerText = dict.lblGiftSubHeader;
    const lblGiftStampDutyLang = document.getElementById('lblGiftStampDuty');
    if (lblGiftStampDutyLang) lblGiftStampDutyLang.innerText = dict.lblGiftStampDuty;
    const lblGiftStampFormulaLang = document.getElementById('lblGiftStampFormula');
    if (lblGiftStampFormulaLang) lblGiftStampFormulaLang.innerText = dict.lblGiftStampFormula;
    const lblGiftRegistrationFeeLang = document.getElementById('lblGiftRegistrationFee');
    if (lblGiftRegistrationFeeLang) lblGiftRegistrationFeeLang.innerText = dict.lblGiftRegistrationFee;
    const lblGiftRegFormulaLang = document.getElementById('lblGiftRegFormula');
    if (lblGiftRegFormulaLang) lblGiftRegFormulaLang.innerText = dict.lblGiftRegFormula;
    const lblGiftTotalLang = document.getElementById('lblGiftTotal');
    if (lblGiftTotalLang) lblGiftTotalLang.innerText = dict.lblGiftTotal;
    const giftSavingDisplayLang = document.getElementById('giftSavingDisplay');
    if (giftSavingDisplayLang) giftSavingDisplayLang.innerText = dict.giftSavingDisplay;

    const lblLeaseResultHeaderLang = document.getElementById('lblLeaseResultHeader');
    if (lblLeaseResultHeaderLang) lblLeaseResultHeaderLang.innerText = dict.lblLeaseResultHeader;
    const lblLeaseAppliedRuleLang = document.getElementById('lblLeaseAppliedRule');
    if (lblLeaseAppliedRuleLang) lblLeaseAppliedRuleLang.innerText = dict.lblLeaseAppliedRule;
    const lblLeaseStampDutyLang = document.getElementById('lblLeaseStampDuty');
    if (lblLeaseStampDutyLang) lblLeaseStampDutyLang.innerText = dict.lblLeaseStampDuty;
    const lblLeaseStampFormulaLang = document.getElementById('lblLeaseStampFormula');
    if (lblLeaseStampFormulaLang) lblLeaseStampFormulaLang.innerText = dict.lblLeaseStampFormula;
    const lblLeaseRegistrationFeeLang = document.getElementById('lblLeaseRegistrationFee');
    if (lblLeaseRegistrationFeeLang) lblLeaseRegistrationFeeLang.innerText = dict.lblLeaseRegistrationFee;
    const lblLeaseRegFormulaLang = document.getElementById('lblLeaseRegFormula');
    if (lblLeaseRegFormulaLang) lblLeaseRegFormulaLang.innerText = dict.lblLeaseRegFormula;
    const lblLeaseTotalLang = document.getElementById('lblLeaseTotal');
    if (lblLeaseTotalLang) lblLeaseTotalLang.innerText = dict.lblLeaseTotal;

    const lblInstitutionalExemptionLang = document.getElementById('lblInstitutionalExemption');
    if (lblInstitutionalExemptionLang) lblInstitutionalExemptionLang.innerText = dict.lblInstitutionalExemption;

    const lblPayableTitleLang = document.getElementById('lblPayableTitle');
    if (lblPayableTitleLang) lblPayableTitleLang.innerText = dict.lblPayableTitle;
    const lblPayableSubtitleLang = document.getElementById('lblPayableSubtitle');
    if (lblPayableSubtitleLang) lblPayableSubtitleLang.innerText = dict.lblPayableSubtitle;

    const lblBackToCalcLang = document.getElementById('lblBackToCalc');
    if (lblBackToCalcLang) lblBackToCalcLang.innerText = dict.lblBackToCalc;

    // Settings Tab Labels
    const setHead = document.getElementById('lblSettingsHeading');
    if (setHead) setHead.innerText = dict.settingsHeading;
    // const setSub = document.getElementById('lblSettingsSub');
    // if (setSub) setSub.innerText = dict.settingsSub;
    const setAppLang = document.getElementById('lblAppLanguage');
    if (setAppLang) setAppLang.innerText = dict.appLanguageTitle;
    const setSort = document.getElementById('lblSettingsSortTitle');
    if (setSort) setSort.innerText = dict.settingsSortLabel;
    const lblSortAuto = document.getElementById('lblSortAuto');
    if (lblSortAuto) lblSortAuto.innerText = dict.sortAuto;
    const lblSortDefault = document.getElementById('lblSortDefault');
    if (lblSortDefault) lblSortDefault.innerText = dict.sortDefault;
    const lblFemLimit = document.getElementById('lblFemaleLimitLabel');
    if (lblFemLimit) lblFemLimit.innerText = dict.femaleLimitLabel;
    const lblMaxReg = document.getElementById('lblMaxRegFeeLabel');
    if (lblMaxReg) lblMaxReg.innerText = dict.maxRegFeeLabel;
    const btnResetSet = document.getElementById('btnResetSettings');
    if (btnResetSet) btnResetSet.innerText = dict.btnResetSettings;

    // Data Tab Labels
    const impHead = document.getElementById('lblImportHeading');
    if (impHead) impHead.innerText = dict.importHeading;
    const impSub = document.getElementById('lblImportSub');
    if (impSub) impSub.innerText = dict.importSub;
    const btnResetOff = document.getElementById('btnResetOfficial');
    if (btnResetOff) btnResetOff.innerText = dict.resetOfficialBtn;
    const btnExport = document.getElementById('btnExportJson');
    if (btnExport) btnExport.innerText = dict.exportJsonBtn;

    
    const lblLeaseTermCatLangSet = document.getElementById('lblLeaseTermCat');
    if (lblLeaseTermCatLangSet) lblLeaseTermCatLangSet.innerText = dict.lblLeaseTermCat || dict.leaseTermCat;
    const btnLeaseTerm1LangSet = document.getElementById('btnLeaseTerm1');
    if (btnLeaseTerm1LangSet) btnLeaseTerm1LangSet.innerText = dict.btnLeaseTerm1;
    const btnLeaseTerm2LangSet = document.getElementById('btnLeaseTerm2');
    if (btnLeaseTerm2LangSet) btnLeaseTerm2LangSet.innerText = dict.btnLeaseTerm2;
    const btnLeaseTerm3LangSet = document.getElementById('btnLeaseTerm3');
    if (btnLeaseTerm3LangSet) btnLeaseTerm3LangSet.innerText = dict.btnLeaseTerm3;
    const btnLeaseTerm4LangSet = document.getElementById('btnLeaseTerm4');
    if (btnLeaseTerm4LangSet) btnLeaseTerm4LangSet.innerText = dict.btnLeaseTerm4;
    const btnLeaseTerm5LangSet = document.getElementById('btnLeaseTerm5');
    if (btnLeaseTerm5LangSet) btnLeaseTerm5LangSet.innerText = dict.btnLeaseTerm5;
    const btnLeaseTerm6LangSet = document.getElementById('btnLeaseTerm6');
    if (btnLeaseTerm6LangSet) btnLeaseTerm6LangSet.innerText = dict.btnLeaseTerm6;
    const badgeCurrentDeedLangSet = document.getElementById('badgeCurrentDeed');
    if (badgeCurrentDeedLangSet && typeof updateDeedTypeUI === 'function') updateDeedTypeUI();

    const slblDeedType0LangSet = document.getElementById('slblDeedType0');
    if (slblDeedType0LangSet) slblDeedType0LangSet.innerText = dict.slblDeedType0;
    const slblDeedBadge0LangSet = document.getElementById('slblDeedBadge0');
    if (slblDeedBadge0LangSet) slblDeedBadge0LangSet.innerText = dict.slblDeedBadge0;
    const slblDeedType0_LangSet = document.getElementById('slblDeedType0_') || document.getElementById('btnDeedType0_');
    if (slblDeedType0_LangSet) slblDeedType0_LangSet.innerText = dict.slblDeedType0_ || dict.btnDeedType0_;

    const slblDeedType1LangSet = document.getElementById('slblDeedType1');
    if (slblDeedType1LangSet) slblDeedType1LangSet.innerText = dict.slblDeedType1;
    const slblDeedType1_LangSet = document.getElementById('slblDeedType1_');
    if (slblDeedType1_LangSet) slblDeedType1_LangSet.innerText = dict.slblDeedType1_;

    const slblDeedType2LangSet = document.getElementById('slblDeedType2');
    if (slblDeedType2LangSet) slblDeedType2LangSet.innerText = dict.slblDeedType2;
    const slblDeedBadge2LangSet = document.getElementById('slblDeedBadge2');
    if (slblDeedBadge2LangSet) slblDeedBadge2LangSet.innerText = dict.slblDeedBadge2;
    const slblDeedType2_LangSet = document.getElementById('slblDeedType2_');
    if (slblDeedType2_LangSet) slblDeedType2_LangSet.innerText = dict.slblDeedType2_;

    // Gift Deed
    const lblGiftRelationTitleInfoLangSet = document.getElementById('lblGiftRelationTitleInfo');
    if (lblGiftRelationTitleInfoLangSet) lblGiftRelationTitleInfoLangSet.innerText = dict.lblGiftRelationTitleInfo;

    const slblGiftType0LangSet = document.getElementById('slblGiftType0');
    if (slblGiftType0LangSet) slblGiftType0LangSet.innerText = dict.slblGiftType0;
    const slblGiftType0infoLangSet = document.getElementById('slblGiftType0info');
    if (slblGiftType0infoLangSet) slblGiftType0infoLangSet.innerText = dict.slblGiftType0info;

    const slblGiftType1LangSet = document.getElementById('slblGiftType1');
    if (slblGiftType1LangSet) slblGiftType1LangSet.innerText = dict.slblGiftType1;
    const slblGiftType1infoLangSet = document.getElementById('slblGiftType1info');
    if (slblGiftType1infoLangSet) slblGiftType1infoLangSet.innerText = dict.slblGiftType1info;

    const lblGiftFamilyMembersLangSet = document.getElementById('lblGiftFamilyMembers');
    if (lblGiftFamilyMembersLangSet) lblGiftFamilyMembersLangSet.innerText = dict.lblGiftFamilyMembers;
    
    // Lease Term
    const lblLeaseSelectedLangSet = document.getElementById('lblLeaseSelected');
    if (lblLeaseSelectedLangSet) lblLeaseSelectedLangSet.innerText = dict.lblLeaseSelected;
    const lblLeaseTermYearLangSet = document.getElementById('lblLeaseTermYear');
    if (lblLeaseTermYearLangSet) lblLeaseTermYearLangSet.innerText = dict.lblLeaseTermYear;
    const lblLeaseSliderValueLangSet = document.getElementById('lblLeaseSliderValue');
    if (lblLeaseSliderValueLangSet) lblLeaseSliderValueLangSet.innerText = dict.lblLeaseSliderValue;

    // Lease Date Range
    const lblDateRangeTextLangSet = document.getElementById('lblDateRangeText');
    if (lblDateRangeTextLangSet) lblDateRangeTextLangSet.innerText = dict.lblDateRangeText;
    const lblDateResetLangSet = document.getElementById('lblDateReset');
    if (lblDateResetLangSet) lblDateResetLangSet.innerText = dict.lblDateReset;
    const lblInputLeaseStartDateLangSet = document.getElementById('lblInputLeaseStartDate');
    if (lblInputLeaseStartDateLangSet) lblInputLeaseStartDateLangSet.innerText = dict.lblInputLeaseStartDate;
    const lblInputLeaseEndDateLangSet = document.getElementById('lblInputLeaseEndDate');
    if (lblInputLeaseEndDateLangSet) lblInputLeaseEndDateLangSet.innerText = dict.lblInputLeaseEndDate;
    const lblLeaseDateDiffLangSet = document.getElementById('lblLeaseDateDiff');
    if (lblLeaseDateDiffLangSet) lblLeaseDateDiffLangSet.innerText = dict.lblLeaseDateDiff;

    // Lease Consideration
    const lblLeaseModeLangSet = document.getElementById('lblLeaseMode');
    if (lblLeaseModeLangSet) lblLeaseModeLangSet.innerText = dict.lblLeaseMode;
    const optLeaseModeBothLangSet = document.getElementById('optLeaseModeBoth');
    if (optLeaseModeBothLangSet) optLeaseModeBothLangSet.innerText = dict.optLeaseModeBoth;
    const optLeaseModeRentOnlyLangSet = document.getElementById('optLeaseModeRentOnly');
    if (optLeaseModeRentOnlyLangSet) optLeaseModeRentOnlyLangSet.innerText = dict.optLeaseModeRentOnly;
    const optLeaseModePremiumOnlyLangSet = document.getElementById('optLeaseModePremiumOnly');
    if (optLeaseModePremiumOnlyLangSet) optLeaseModePremiumOnlyLangSet.innerText = dict.optLeaseModePremiumOnly;

    // Lease Rent / Premium
    const lblLeaseAarLangSet = document.getElementById('lblLeaseAar');
    if (lblLeaseAarLangSet) lblLeaseAarLangSet.innerText = dict.lblLeaseAar;
    const lblLeasePremiumLangSet = document.getElementById('lblLeasePremium');
    if (lblLeasePremiumLangSet) lblLeasePremiumLangSet.innerText = dict.lblLeasePremium;

    // Lease Market Value
    const lblLeaseMarketValueLangSet = document.getElementById('lblLeaseMarketValue');
    if (lblLeaseMarketValueLangSet) lblLeaseMarketValueLangSet.innerText = dict.lblLeaseMarketValue;
    const lblLeaseMarketValueSubLangSet = document.getElementById('lblLeaseMarketValueSub');
    if (lblLeaseMarketValueSubLangSet) lblLeaseMarketValueSubLangSet.innerText = dict.lblLeaseMarketValueSub;
    const lblLeaseAutoLinkedLangSet = document.getElementById('lblLeaseAutoLinked');
    if (lblLeaseAutoLinkedLangSet) lblLeaseAutoLinkedLangSet.innerText = dict.lblLeaseAutoLinked;

    // Special Lease Rules
    const lblLeaseFlatUnder5LangSet = document.getElementById('lblLeaseFlatUnder5');
    if (lblLeaseFlatUnder5LangSet) lblLeaseFlatUnder5LangSet.innerText = dict.lblLeaseFlatUnder5;
    const lblLeasePriorAgreementStampedLangSet = document.getElementById('lblLeasePriorAgreementStamped');
    if (lblLeasePriorAgreementStampedLangSet) lblLeasePriorAgreementStampedLangSet.innerText = dict.lblLeasePriorAgreementStamped;

    // Institutional Exemption
    const lblInstitutionalExemptionTitleLangSet = document.getElementById('lblInstitutionalExemptionTitle');
    if (lblInstitutionalExemptionTitleLangSet) lblInstitutionalExemptionTitleLangSet.innerText = dict.lblInstitutionalExemptionTitle;
    const lblInstitutionalExemptionTextLangSet = document.getElementById('lblInstitutionalExemptionText');
    if (lblInstitutionalExemptionTextLangSet) lblInstitutionalExemptionTextLangSet.innerText = dict.lblInstitutionalExemptionText;

    // Language Toggle Buttons in Settings
    const btnHi = document.getElementById('langHiBtn');
    if (btnHi) btnHi.innerText = dict.langHiBtn;
    const btnEn = document.getElementById('langEnBtn');
    if (btnEn) btnEn.innerText = dict.langEnBtn;

    const themeLang = document.getElementById('lblTheme');
    if (themeLang) themeLang.innerText = dict.lblTheme;
    const themeAutoLang = document.getElementById('btnThemeAuto');
    if (themeAutoLang) themeAutoLang.innerText = dict.btnThemeAuto;
    const themeLightLang = document.getElementById('btnThemeLight');
    if (themeLightLang) themeLightLang.innerText = dict.btnThemeLight;
    const themeDarkLang = document.getElementById('btnThemeDark');
    if (themeDarkLang) themeDarkLang.innerText = dict.btnThemeDark;

    const saveSettingLang = document.getElementById('btnSaveSettingsText') || document.getElementById('btnSaveSettings') || document.getElementById('saveSetting');
    if (saveSettingLang) saveSettingLang.innerText = dict.btnSaveSettings || dict.saveSetting;

    const resetSettingLang = document.getElementById('btnResetSettingsText') || document.getElementById('btnResetSettings');
    if (resetSettingLang) resetSettingLang.innerText = dict.btnResetSettings;

    const lblDropFileLabelLang = document.getElementById('lblDropFileLabel');
    if (lblDropFileLabelLang) lblDropFileLabelLang.innerText = dict.dropFileLabel;

    const lblDropFileLabelInfoLang = document.getElementById('lblDropFileLabelInfo');
    if (lblDropFileLabelInfoLang) lblDropFileLabelInfoLang.innerText = dict.lblDropFileLabelInfo || dict.dropFileLabelInfo;

    const lblResetOffBtn = document.getElementById('lblResetOfficialBtn');
    if (lblResetOffBtn) lblResetOffBtn.innerText = dict.resetOfficialBtn;

    const lblExpJson = document.getElementById('lblExportJsonBtn');
    if (lblExpJson) lblExpJson.innerText = dict.exportJsonBtn;

    if (btnHi && btnEn) {
      if (lang === 'hi') {
        btnHi.className = "flex-1 h-11 px-4 rounded-xl text-sm font-bold shadow-sm shadow-emerald-600/20 transition-all border border-emerald-600 bg-emerald-600 text-white flex items-center justify-center whitespace-nowrap";
        btnEn.className = "flex-1 h-11 px-4 rounded-xl text-sm font-bold shadow-xs transition-all border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center whitespace-nowrap";
      } else {
        btnEn.className = "flex-1 h-11 px-4 rounded-xl text-sm font-bold shadow-sm shadow-emerald-600/20 transition-all border border-emerald-600 bg-emerald-600 text-white flex items-center justify-center whitespace-nowrap";
        btnHi.className = "flex-1 h-11 px-4 rounded-xl text-sm font-bold shadow-xs transition-all border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center whitespace-nowrap";
      }
    }

    const btnRoad1Lang = document.getElementById('btnRoad1');
    if (btnRoad1Lang) btnRoad1Lang.innerText = dict.btnRoad1;
    const btnRoad2Lang = document.getElementById('btnRoad2');
    if (btnRoad2Lang) btnRoad2Lang.innerText = dict.btnRoad2;
    const btnRoad3Lang = document.getElementById('btnRoad3');
    if (btnRoad3Lang) btnRoad3Lang.innerText = dict.btnRoad3;
    const btnRoad4Lang = document.getElementById('btnRoad4');
    if (btnRoad4Lang) btnRoad4Lang.innerText = dict.btnRoad4;
  }

  // 5. TAB NAVIGATION & SCROLL POSITION RETENTION
  const tabScrollPositions = {
    calc: 0,
    result: 0,
    history: 0,
    settings: 0,
    import: 0
  };
  let lastTabClickTime = 0;
  let lastTabClicked = null;

  function switchTab(tab, forceTop = false) {
    const now = Date.now();
    const isSameTab = (currentTab === tab);
    const isDoubleTap = (lastTabClicked === tab && (now - lastTabClickTime < 500));
    lastTabClickTime = now;
    lastTabClicked = tab;

    // If user clicks the tab they are already on or double-taps it, scroll smoothly to top
    if (isSameTab || isDoubleTap || forceTop) {
      if (tabScrollPositions.hasOwnProperty(tab)) {
        tabScrollPositions[tab] = 0;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Save previous active tab's scroll position before switching away
    if (currentTab && tabScrollPositions.hasOwnProperty(currentTab)) {
      tabScrollPositions[currentTab] = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    currentTab = tab;

    // Views
    const views = ['viewCalc', 'viewResult', 'viewHistory', 'viewSettings', 'viewImport'];
    views.forEach(v => {
      const el = document.getElementById(v);
      if (el) el.classList.add('hidden');
    });

    const activeView = document.getElementById(
      tab === 'calc' ? 'viewCalc' :
      tab === 'result' ? 'viewResult' :
      tab === 'history' ? 'viewHistory' :
      tab === 'settings' ? 'viewSettings' : 'viewImport'
    );
    if (activeView) activeView.classList.remove('hidden');

    // Bottom Navigation Buttons
    const navButtons = [
      { id: 'btnNavCalc', active: tab === 'calc' },
      { id: 'btnNavResult', active: tab === 'result' },
      { id: 'btnNavHistory', active: tab === 'history' },
      { id: 'btnNavSettings', active: tab === 'settings' },
      { id: 'btnNavData', active: tab === 'import' }
    ];

    navButtons.forEach(btn => {
      const el = document.getElementById(btn.id);
      if (el) {
        const pill = el.querySelector('.tab-icon-pill');
        const label = el.querySelector('span:not(#badgeNavHistory)');
        if (btn.active) {
          el.className = "bottom-tab-active relative flex-1 flex flex-col items-center justify-center py-1 transition-all text-emerald-600 dark:text-emerald-400";
          if (pill) {
            pill.className = "tab-icon-pill w-12 sm:w-14 h-7 sm:h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-emerald-500/15 dark:bg-emerald-400/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 dark:border-emerald-400/30 shadow-xs";
          }
          if (label) {
            label.className = "text-[10px] sm:text-[11px] font-bold leading-tight mt-0.5 text-emerald-600 dark:text-emerald-400";
          }
        } else {
          el.className = "bottom-tab-inactive relative flex-1 flex flex-col items-center justify-center py-1 transition-all text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200";
          if (pill) {
            pill.className = "tab-icon-pill w-12 sm:w-14 h-7 sm:h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-transparent text-slate-400 dark:text-slate-500";
          }
          if (label) {
            label.className = "text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5 text-slate-500 dark:text-slate-400";
          }
        }
      }
    });

    if (typeof saveFormState === 'function') {
      saveFormState();
    }

    if (tab === 'result') {
      recalculate();
    } else if (tab === 'history') {
      if (typeof renderHistory === 'function') {
        renderHistory();
      }
    }

    // Retain and restore the previous scroll position of the selected tab
    const targetY = tabScrollPositions[tab] || 0;
    requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, behavior: 'auto' });
    });
  }
  window.switchTab = switchTab;

  // Android Back Handler Bridge
  window.handleAndroidBack = function() {
    if (currentTab !== 'calc') {
      switchTab('calc');
      return true;
    }
    return false;
  };

  window.getExitToastMessage = function() {
    return currentLang === 'hi' ? "ऐप बंद करने के लिए दोबारा बैक दबाएं" : "Press back again to exit";
  };

  // 6. DISTRICT & TEHSIL FILTERING
  function populateDistrictTehsilFilters() {
    const dSelect = document.getElementById('districtSelect');
    if (!dSelect) return;

    // Ensure label title is refreshed with current language
    const lblDist = document.getElementById('lblDistrictTitle');
    if (lblDist && I18N[currentLang]) {
      lblDist.innerText = I18N[currentLang].districtTitle;
    }

    const availableDistricts = getDistrictsWithCircleRates();
    let currentDVal = dSelect.value || savedSelectedDistrict || "";

    // Verify current selection is among districts with available circle rates
    if (currentDVal && !availableDistricts.some(d => d.en.toLowerCase() === currentDVal.toLowerCase())) {
      currentDVal = "";
      savedSelectedDistrict = "";
    }

    // Option 1 is prompt option in active language
    const promptDist = (I18N[currentLang] && I18N[currentLang].allDistricts) 
      ? I18N[currentLang].allDistricts 
      : (currentLang === 'hi' ? "-- जनपद चुनें --" : "-- Select District --");
    
    let html = `<option value="">${promptDist}</option>`;
    availableDistricts.forEach(distObj => {
      const isSelected = (currentDVal && distObj.en.toLowerCase() === currentDVal.toLowerCase()) ? "selected" : "";
      const label = currentLang === 'hi' ? (distObj.hi || distObj.en) : distObj.en;
      html += `<option value="${distObj.en}" ${isSelected}>${label}</option>`;
    });

    dSelect.innerHTML = html;
    if (currentDVal) {
      dSelect.value = currentDVal;
      savedSelectedDistrict = currentDVal;
    }

    updateTehsilOptions();
    triggerDistrictTehsilDOMUpdate();
  }

  // Specifically triggers a DOM update event for district and tehsil select options
  function triggerDistrictTehsilDOMUpdate() {
    const dSelect = document.getElementById('districtSelect');
    const tSelect = document.getElementById('tehsilSelect');

    const dispatchSelectEvents = (el, fieldName) => {
      if (!el) return;

      const detailData = {
        targetId: el.id,
        field: fieldName,
        language: currentLang,
        selectedValue: el.value || "",
        optionsCount: el.options ? el.options.length : 0,
        timestamp: Date.now()
      };

      // 1. Primary custom event: 'domUpdate'
      try {
        el.dispatchEvent(new CustomEvent('domUpdate', {
          bubbles: true,
          cancelable: true,
          detail: detailData
        }));
      } catch (e) {
        try {
          const ev = document.createEvent('CustomEvent');
          ev.initCustomEvent('domUpdate', true, true, detailData);
          el.dispatchEvent(ev);
        } catch (err) {}
      }

      // 2. Secondary variants for broad DOM compatibility ('DOMUpdate', 'optionsUpdate', 'update')
      try {
        el.dispatchEvent(new CustomEvent('DOMUpdate', { bubbles: true, detail: detailData }));
        el.dispatchEvent(new CustomEvent('optionsUpdate', { bubbles: true, detail: detailData }));
        el.dispatchEvent(new CustomEvent('update', { bubbles: true, detail: detailData }));
      } catch (e) {}
    };

    dispatchSelectEvents(dSelect, 'district');
    dispatchSelectEvents(tSelect, 'tehsil');

    // Document-level event for components/observers listening globally
    try {
      document.dispatchEvent(new CustomEvent('districtTehsilDomUpdate', {
        bubbles: true,
        detail: {
          language: currentLang,
          district: dSelect ? dSelect.value : "",
          tehsil: tSelect ? tSelect.value : ""
        }
      }));
    } catch (e) {}
  }
  window.triggerDistrictTehsilDOMUpdate = triggerDistrictTehsilDOMUpdate;

  function updateTehsilOptions() {
    const dVal = document.getElementById('districtSelect')?.value || "";
    const tSelect = document.getElementById('tehsilSelect');
    if (!tSelect) return;

    // Ensure label title is refreshed with current language
    const lblTeh = document.getElementById('lblTehsilTitle');
    if (lblTeh && I18N[currentLang]) {
      lblTeh.innerText = I18N[currentLang].tehsilTitle;
    }

    if (!dVal) {
      const promptDistFirst = currentLang === 'hi' ? "-- पहले जनपद चुनें --" : "-- Select District First --";
      tSelect.innerHTML = `<option value="">${promptDistFirst}</option>`;
      tSelect.value = "";
      savedSelectedTehsil = "";
      tSelect.disabled = true;
      return;
    }

    tSelect.disabled = false;
    const availableDistricts = getDistrictsWithCircleRates();
    const distMatch = availableDistricts.find(d => d.en.toLowerCase() === dVal.toLowerCase());
    const tehsils = distMatch ? [...distMatch.tehsils] : [];

    let currentTVal = tSelect.value || savedSelectedTehsil || "";
    if (currentTVal && !tehsils.some(t => t.en.toLowerCase() === currentTVal.toLowerCase())) {
      currentTVal = "";
      savedSelectedTehsil = "";
    }

    const promptTeh = (I18N[currentLang] && I18N[currentLang].allTehsils) 
      ? I18N[currentLang].allTehsils 
      : (currentLang === 'hi' ? "-- तहसील चुनें --" : "-- Select Tehsil --");

    let html = `<option value="">${promptTeh}</option>`;
    tehsils.forEach(teh => {
      const isSelected = (currentTVal && teh.en.toLowerCase() === currentTVal.toLowerCase()) ? "selected" : "";
      const label = currentLang === 'hi' ? (teh.hi || teh.en) : teh.en;
      html += `<option value="${teh.en}" ${isSelected}>${label}</option>`;
    });

    tSelect.innerHTML = html;
    if (currentTVal) {
      tSelect.value = currentTVal;
    }
  }

  function onDistrictChange() {
    const dSelect = document.getElementById('districtSelect');
    const tSelect = document.getElementById('tehsilSelect');
    savedSelectedDistrict = dSelect ? dSelect.value : "";
    savedSelectedTehsil = "";
    if (tSelect) tSelect.value = "";
    selectedVillage = null;
    validlyChosenVillage = null;
    lastCommittedVillage = null;
    updateTehsilOptions();
    populateVillages();
    saveFormState();
    triggerDistrictTehsilDOMUpdate();
  }
  window.onDistrictChange = onDistrictChange;

  function onTehsilChange() {
    const tSelect = document.getElementById('tehsilSelect');
    savedSelectedTehsil = tSelect ? tSelect.value : "";
    selectedVillage = null;
    validlyChosenVillage = null;
    lastCommittedVillage = null;
    populateVillages();
    saveFormState();
    triggerDistrictTehsilDOMUpdate();
  }
  window.onTehsilChange = onTehsilChange;

  // 7. VILLAGE SELECTION & SORTING
  function getSortedVillages(list) {
    const listCopy = [...list];
    if (sortMode === 'default') {
      return listCopy;
    }
    // Alphabetical / auto sorting
    if (currentLang === 'hi') {
      return listCopy.sort((a, b) => (a.vname || '').localeCompare(b.vname || '', 'hi'));
    } else {
      return listCopy.sort((a, b) => {
        const nameA = a.vname_eng || a.vname || '';
        const nameB = b.vname_eng || b.vname || '';
        return nameA.localeCompare(nameB, 'en');
      });
    }
  }

  function populateVillages(searchQuery = "") {
    const dVal = document.getElementById('districtSelect')?.value || "";
    const tVal = document.getElementById('tehsilSelect')?.value || "";
    const selectEl = document.getElementById('villageSelect');
    const clearBtn = document.getElementById('btnClearVillageSearch');
    const countBadge = document.getElementById('lblTotalVillages');
    if (!selectEl) return;

    const trimmedQ = searchQuery.trim();
    if (clearBtn) {
      if (trimmedQ.length > 0) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    // If district or tehsil is not chosen, village/ward SHALL BE EMPTY
    if (!dVal || !tVal) {
      if (countBadge) {
        countBadge.innerText = currentLang === 'hi' ? '0 गाँव उपलब्ध' : '0 Villages';
      }
      let promptMsg = "";
      if (!dVal && !tVal) {
        promptMsg = currentLang === 'hi' ? '-- पहले जनपद एवं तहसील चुनें --' : '-- Select District & Tehsil First --';
      } else if (!tVal) {
        promptMsg = currentLang === 'hi' ? '-- पहले तहसील चुनें --' : '-- Select Tehsil First --';
      } else {
        promptMsg = currentLang === 'hi' ? '-- पहले जनपद चुनें --' : '-- Select District First --';
      }
      selectEl.innerHTML = `<option value="">${promptMsg}</option>`;
      selectEl.disabled = true;
      selectedVillage = null;
      updateVillageBadge();
      renderLandSegments();
      renderBuildingComponents();
      recalculate();
      return;
    }

    selectEl.disabled = false;
    let filtered = rawDataset.filter(item => {
      const matchDist = (item.district || '').toLowerCase() === dVal.toLowerCase();
      const matchTeh = (item.tehsil || '').toLowerCase() === tVal.toLowerCase();
      return matchDist && matchTeh && hasCircleRates(item);
    });

    if (filtered.length === 0) {
      const distMatch = UTTARAKHAND_MASTER_DISTRICTS.find(d => d.en.toLowerCase() === dVal.toLowerCase());
      const tehMatch = distMatch?.tehsils?.find(t => t.en.toLowerCase() === tVal.toLowerCase());
      const tehsilNameEn = tehMatch ? tehMatch.en : tVal;
      const tehsilNameHi = tehMatch ? tehMatch.hi : tVal;
      const distNameEn = distMatch ? distMatch.en : dVal;
      const distNameHi = distMatch ? distMatch.hi : dVal;

      filtered = [
        {
          district: distNameEn,
          district_hi: distNameHi,
          tehsil: tehsilNameEn,
          tehsil_hi: tehsilNameHi,
          vname: tehsilNameHi + " मुख्यालय / नगर (मानक सर्किल दर)",
          vname_eng: tehsilNameEn + " HQ / Town (Standard Circle Rates)",
          rates: {
            "AGRICULTURE": { "0-50m": 52, "50-200m": 46, ">200m": 37 },
            "NON AGRICULTURE": { "0-50m": 1440, "50-200m": 1200, ">200m": 960 },
            "FLAT": { "0-200m": 16440, ">200m": 14630 },
            "COMMERCIAL (SHOP/ RESTURENT/ OFFICE)": { "0-200m": 19680, ">200m": 18000 },
            "OTHER COMMERCIAL": { "0-200m": 17760, ">200m": 15900 },
            "NON-COMMERICAL FIRST CLASS": { "0-200m": 5640, ">200m": 5000 },
            "NON-COMMERICAL SECOND CLASS": { "0-200m": 4080, ">200m": 3700 }
          }
        },
        {
          district: distNameEn,
          district_hi: distNameHi,
          tehsil: tehsilNameEn,
          tehsil_hi: tehsilNameHi,
          vname: tehsilNameHi + " ग्रामीण क्षेत्र (मानक सर्किल दर)",
          vname_eng: tehsilNameEn + " Rural Area (Standard Circle Rates)",
          rates: {
            "AGRICULTURE": { "0-50m": 45, "50-200m": 40, ">200m": 35 },
            "NON AGRICULTURE": { "0-50m": 1200, "50-200m": 1000, ">200m": 800 },
            "FLAT": { "0-200m": 14000, ">200m": 12500 },
            "COMMERCIAL (SHOP/ RESTURENT/ OFFICE)": { "0-200m": 17000, ">200m": 15000 },
            "OTHER COMMERCIAL": { "0-200m": 15000, ">200m": 13500 },
            "NON-COMMERICAL FIRST CLASS": { "0-200m": 4800, ">200m": 4200 },
            "NON-COMMERICAL SECOND CLASS": { "0-200m": 3500, ">200m": 3000 }
          }
        }
      ];
    }

    const q = trimmedQ.toLowerCase();
    if (q) {
      filtered = filtered.filter(item => {
        const hi = (item.vname || '').toLowerCase();
        const en = (item.vname_eng || '').toLowerCase();
        return hi.includes(q) || en.includes(q);
      });
    }

    let sortedList = getSortedVillages(filtered);
    currentActiveVillages = sortedList;

    // If search query is entered, prioritize names starting with the query
    if (q) {
      sortedList.sort((a, b) => {
        const aHi = (a.vname || '').toLowerCase();
        const aEn = (a.vname_eng || '').toLowerCase();
        const bHi = (b.vname || '').toLowerCase();
        const bEn = (b.vname_eng || '').toLowerCase();
        const aStarts = aHi.startsWith(q) || aEn.startsWith(q);
        const bStarts = bHi.startsWith(q) || bEn.startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
      });
    }

    selectEl.innerHTML = "";

    if (countBadge) {
      countBadge.innerText = currentLang === 'hi' 
        ? `${sortedList.length} गाँव उपलब्ध` 
        : `${sortedList.length} Villages`;
    }

    if (sortedList.length === 0) {
      selectEl.innerHTML = `<option value="">${currentLang === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No village found'}</option>`;
      selectEl.value = "";
      return;
    }

    // First option is the prompt
    const promptVillage = currentLang === 'hi' ? '-- ग्राम चुनें --' : '-- Select Village --';
    const optPrompt = document.createElement('option');
    optPrompt.value = "";
    optPrompt.text = promptVillage;
    selectEl.appendChild(optPrompt);

    sortedList.forEach((v) => {
      const displayName = currentLang === 'hi' 
        ? (v.vname || v.vname_eng)
        : (v.vname_eng || v.vname);
      const opt = document.createElement('option');
      opt.value = v.vname;
      opt.text = displayName;
      selectEl.appendChild(opt);
    });

    // Check for auto-selection or target village
    let targetVillage = null;

    if (q) {
      // 1. Exact match (Hindi or English)
      const exactMatch = sortedList.find(v => {
        const hi = (v.vname || '').toLowerCase();
        const en = (v.vname_eng || '').toLowerCase();
        return hi === q || en === q;
      });

      if (exactMatch) {
        targetVillage = exactMatch;
      } else if (sortedList.length === 1) {
        // 2. Only single matching village in the filtered result
        targetVillage = sortedList[0];
      } else if (q.length >= 2) {
        // 3. Unambiguous initial prefix match:
        const prefixMatches = sortedList.filter(v => {
          const hi = (v.vname || '').toLowerCase();
          const en = (v.vname_eng || '').toLowerCase();
          return hi.startsWith(q) || en.startsWith(q);
        });

        if (prefixMatches.length === 1) {
          // Exactly 1 village starts with the query prefix
          targetVillage = prefixMatches[0];
        } else if (prefixMatches.length > 1) {
          // Check if top candidate is strong prefix match (query covers >= 60% of name or followed by word boundary)
          const topCand = prefixMatches[0];
          const topHi = (topCand.vname || '').toLowerCase();
          const topEn = (topCand.vname_eng || '').toLowerCase();
          const topMatch = topHi.startsWith(q) ? topHi : topEn;
          if (topMatch && (q.length / topMatch.length >= 0.6 || topMatch.startsWith(q + " ") || topMatch.startsWith(q + "-"))) {
            targetVillage = topCand;
          }
        }
      }

      // If no new auto-match found, check if currently selected village is still in sortedList
      if (!targetVillage && selectedVillage && selectedVillage.vname) {
        targetVillage = sortedList.find(v => v.vname === selectedVillage.vname);
      }
    } else {
      // No search query (or search cleared): retain validly chosen or selected village
      const villageToKeep = validlyChosenVillage || selectedVillage || lastCommittedVillage;
      if (villageToKeep && villageToKeep.vname) {
        targetVillage = sortedList.find(v => v.vname === villageToKeep.vname);
      }
    }

    if (targetVillage) {
      const isNewVillage = !selectedVillage || selectedVillage.vname !== targetVillage.vname;
      selectEl.value = targetVillage.vname;
      selectedVillage = targetVillage;
      if (!validlyChosenVillage) {
        validlyChosenVillage = targetVillage;
      }
      lastCommittedVillage = targetVillage;

      if (isNewVillage) {
        updateVillageBadge();
        renderLandSegments();
        renderBuildingComponents();
        recalculate();
        saveFormState();
      } else {
        updateVillageBadge();
      }
    } else {
      // Multiple options available in search and none auto-selected yet
      selectEl.value = "";
      // Keep selectedVillage and valuation intact while user is typing
      updateVillageBadge();
    }
  }

  function clearVillageSearch() {
    const inp = document.getElementById('villageSearchInput');
    if (inp) {
      inp.value = "";
      inp.focus();
    }
    const clearBtn = document.getElementById('btnClearVillageSearch');
    if (clearBtn) clearBtn.classList.add('hidden');

    // DO NOT deselect! Retain whatever village was validly chosen
    const dVal = document.getElementById('districtSelect')?.value || "";
    const tVal = document.getElementById('tehsilSelect')?.value || "";

    const candidate = validlyChosenVillage || selectedVillage || lastCommittedVillage;
    const isValid = candidate && candidate.vname &&
      (!dVal || (candidate.district || '').toLowerCase() === dVal.toLowerCase()) &&
      (!tVal || (candidate.tehsil || '').toLowerCase() === tVal.toLowerCase());

    if (isValid) {
      selectedVillage = candidate;
      validlyChosenVillage = candidate;
      lastCommittedVillage = candidate;
    }

    populateVillages("");

    if (isValid && selectedVillage) {
      const selectEl = document.getElementById('villageSelect');
      if (selectEl) {
        selectEl.value = selectedVillage.vname;
      }
      updateVillageBadge();
    }
  }
  window.clearVillageSearch = clearVillageSearch;

  function filterVillageList() {
    const inp = document.getElementById('villageSearchInput');
    const q = inp?.value || "";
    const clearBtn = document.getElementById('btnClearVillageSearch');
    if (clearBtn) {
      if (q.trim().length > 0) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    // If search is cleared by user erasing input, restore full list while keeping selected village
    if (q.trim().length === 0) {
      if (validlyChosenVillage) {
        selectedVillage = validlyChosenVillage;
      }
    }
    populateVillages(q);
  }
  window.filterVillageList = filterVillageList;

  function handleVillageSearchKey(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const selectEl = document.getElementById('villageSelect');
      if (!selectEl) return;
      const firstValidOption = Array.from(selectEl.options).find(opt => opt.value !== "");
      if (firstValidOption) {
        selectEl.value = firstValidOption.value;
        onVillageChange();
        const inp = document.getElementById('villageSearchInput');
        if (inp) inp.blur();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      clearVillageSearch();
      const inp = document.getElementById('villageSearchInput');
      if (inp) inp.blur();
    }
  }
  window.handleVillageSearchKey = handleVillageSearchKey;

  function onVillageChange() {
    const selVal = document.getElementById('villageSelect')?.value;
    const dVal = document.getElementById('districtSelect')?.value || "";
    const tVal = document.getElementById('tehsilSelect')?.value || "";
    if (!selVal) {
      selectedVillage = null;
      validlyChosenVillage = null;
      lastCommittedVillage = null;
    } else {
      selectedVillage = (Array.isArray(currentActiveVillages) ? currentActiveVillages.find(v => v.vname === selVal || v.vname_eng === selVal) : null) ||
        rawDataset.find(v => 
          (v.vname === selVal || v.vname_eng === selVal) &&
          (!dVal || (v.district || '').toLowerCase() === dVal.toLowerCase()) &&
          (!tVal || (v.tehsil || '').toLowerCase() === tVal.toLowerCase())
        ) || null;
      validlyChosenVillage = selectedVillage;
      lastCommittedVillage = selectedVillage;
    }
    updateVillageBadge();
    renderLandSegments();
    renderBuildingComponents();
    recalculate();
    saveFormState();
  }
  window.onVillageChange = onVillageChange;

  function updateVillageBadge() {
    const badge = document.getElementById('currentVillageBadge');
    if (!badge) return;
    if (!selectedVillage) {
      badge.innerText = '–';
      return;
    }
    // Show only Village_name
    const name = currentLang === 'hi' ? selectedVillage.vname : (selectedVillage.vname_eng || selectedVillage.vname);
    badge.innerText = name;
  }

  // 8. LAND SEGMENT MANAGEMENT
  function addLandSegment() {
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    landSegments.push({
      id: newId,
      type: "NON AGRICULTURE",
      distance: "0-50m",
      area: "",
      unit: "sqm",
      isZeroDist: true
    });
    renderLandSegments();
    recalculate();
  }
  window.addLandSegment = addLandSegment;

  function copyLandSegment(id) {
    const seg = landSegments.find(s => s.id === id);
    if (!seg) return;
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    landSegments.push({ ...seg, id: newId });
    renderLandSegments();
    recalculate();
  }
  window.copyLandSegment = copyLandSegment;

  function removeLandSegment(id) {
    if (landSegments.length <= 1) return;
    landSegments = landSegments.filter(s => s.id !== id);
    renderLandSegments();
    recalculate();
  }
  window.removeLandSegment = removeLandSegment;

  function updateSegmentField(id, field, value) {
    const seg = landSegments.find(s => s.id === id);
    if (!seg) return;
    if (field === 'area') {
      seg.area = value;
      recalculate();
    } else if (field === 'type') {
      seg.type = value;
      renderLandSegments();
      recalculate();
    } else if (field === 'unit') {
      seg.unit = value;
      renderLandSegments();
      recalculate();
    } else if (field === 'isZeroDist') {
      seg.isZeroDist = Boolean(value);
      renderLandSegments();
      recalculate();
    }
  }
  window.updateSegmentField = updateSegmentField;

  function updateSegmentDistance(id, newDistance) {
    const seg = landSegments.find(s => s.id === id);
    if (!seg) return;
    seg.distance = newDistance;
    seg.isZeroDist = (newDistance === '0-50m');
    renderLandSegments();
    recalculate();
  }
  window.updateSegmentDistance = updateSegmentDistance;

  function getLandRate(type, distance) {
    if (!selectedVillage || !selectedVillage.rates) return 0;
    const rates = selectedVillage.rates;
    if (type === 'AGRICULTURE') {
      const agRates = rates['AGRICULTURE'] || {};
      return agRates[distance] || agRates['0-50m'] || 50;
    } else {
      const nonAgRates = rates['NON AGRICULTURE'] || {};
      return nonAgRates[distance] || nonAgRates['0-50m'] || 1000;
    }
  }

  function renderLandSegments() {
    const container = document.getElementById('landSegmentsContainer');
    if (!container) return;
    container.innerHTML = "";

    // Road percent for rate badge
    let roadPercent = 0;
    if (roadWidth >= 15.0) roadPercent = 15;
    else if (roadWidth >= 12.0) roadPercent = 10;
    else if (roadWidth >= 5.0) roadPercent = 5;

    landSegments.forEach((seg, idx) => {
      const isAgri = (seg.type === 'AGRICULTURE');
      const isComm = (seg.type === 'COMMERCIAL');
      const rateVal = getLandRate(seg.type, seg.distance);
      const ratePerHa = (rateVal < 10000) ? (rateVal * 100000) : rateVal;
      const ratePerSqm = isAgri ? Math.round(ratePerHa / 10000) : rateVal;

      const isRoadAttached = Boolean(seg.isZeroDist) && (seg.distance === '0-50m');
      const hikePerSqm = (isRoadAttached && roadPercent > 0) ? Math.round(ratePerSqm * (roadPercent / 100)) : 0;
      const effectiveRatePerSqm = ratePerSqm + hikePerSqm;

      const distLabel = currentLang === 'hi' 
        ? (seg.distance === '0-50m' ? '0-50 मीटर (सड़क संलग्न)' : (seg.distance === '50-200m' ? '50-200 मीटर' : '200+ मीटर'))
        : (seg.distance === '0-50m' ? '0-50m (Road Attached)' : (seg.distance === '50-200m' ? '50-200m' : '>200m'));

      const div = document.createElement('div');
      div.className = "p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-3 relative transition-colors";
      div.innerHTML = `
        <div class="border-b border-slate-200/80 dark:border-slate-700/80 pb-2.5 space-y-2">
          <!-- Line 1: Full Plot / Land Segment Description -->
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-tight">
              ${currentLang === 'hi' ? `खंड ${idx + 1}: ${isAgri ? 'कृषि भूमि' : (isComm ? 'व्यावसायिक भूखंड' : 'अकृषि भूमि')} • ${distLabel}` : `Segment ${idx + 1}: ${isAgri ? 'Agri' : (isComm ? 'Commercial' : 'Non-Agri')} • ${distLabel}`}
            </span>
          </div>

          <!-- Line 2: Plot Badge, Copy, and Delete buttons on their own line -->
          <div class="flex items-center justify-between gap-2 pt-0.5">
            <div class="flex items-center space-x-1.5">
              <span class="inline-flex items-center px-2.5 py-1 rounded-lg ${isAgri ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300'} font-bold text-xs">
                ${currentLang === 'hi' ? `भूमि खंड #${idx + 1}` : `Plot Segment #${idx + 1}`}
              </span>
            </div>
            <div class="flex items-center space-x-2 shrink-0">
              <button type="button" onclick="copyLandSegment(${seg.id})" title="${currentLang === 'hi' ? 'समान खंड की प्रतिलिपि बनाएं' : 'Duplicate Segment'}" class="h-8 px-3 text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-950 rounded-lg text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition-colors flex items-center space-x-1.5 shadow-2xs">
                <span>📋</span>
                <span>${currentLang === 'hi' ? 'प्रतिलिपि' : 'Copy'}</span>
              </button>
              ${landSegments.length > 1 ? `
                <button type="button" onclick="removeLandSegment(${seg.id})" class="h-8 px-3 text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg text-xs font-bold border border-rose-200 dark:border-rose-800 transition-colors flex items-center space-x-1.5 shadow-2xs">
                  <span>✕</span>
                  <span>${currentLang === 'hi' ? 'हटाएं' : 'Delete'}</span>
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'भूमि का प्रकार:' : 'Land Type:'}</label>
            <select onchange="updateSegmentField(${seg.id}, 'type', this.value);" class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="NON AGRICULTURE" ${(!isAgri && !isComm) ? 'selected' : ''}>${currentLang === 'hi' ? 'अकृषि / आवासीय भूमि' : 'Non-Agricultural / Residential'}</option>
              <option value="COMMERCIAL" ${isComm ? 'selected' : ''}>${currentLang === 'hi' ? 'व्यावसायिक भूखंड (+10% खुली भूमि)' : 'Commercial Plot (+10% Open Land)'}</option>
              <option value="AGRICULTURE" ${isAgri ? 'selected' : ''}>${currentLang === 'hi' ? 'कृषि भूमि' : 'Agricultural Land'}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'मार्ग से दूरी:' : 'Road Distance:'}</label>
            <select onchange="updateSegmentDistance(${seg.id}, this.value)" class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="0-50m" ${seg.distance === '0-50m' ? 'selected' : ''}>${currentLang === 'hi' ? '0 से 50 मीटर' : '0 to 50 meters'}</option>
              <option value="50-200m" ${seg.distance === '50-200m' ? 'selected' : ''}>${currentLang === 'hi' ? '50 से 200 मीटर' : '50 to 200 meters'}</option>
              <option value=">200m" ${seg.distance === '>200m' ? 'selected' : ''}>${currentLang === 'hi' ? '200 मीटर से अधिक' : 'Above 200 meters'}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'क्षेत्रफल एवं इकाई:' : 'Area & Unit:'}</label>
            <div class="flex">
              <input 
                type="number" 
                value="${seg.area}" 
                placeholder="0.00" 
                min="0" 
                step="any" 
                oninput="updateSegmentField(${seg.id}, 'area', this.value)"
                class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-l-xl text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select onchange="updateSegmentField(${seg.id}, 'unit', this.value)" class="bg-slate-100 dark:bg-slate-800 border border-l-0 border-slate-300 dark:border-slate-600 rounded-r-xl px-2 text-xs font-bold text-slate-700 dark:text-slate-200 outline-none">
                <option value="sqm" ${seg.unit === 'sqm' ? 'selected' : ''}>${currentLang === 'hi' ? 'वर्गमीटर' : 'sq.m'}</option>
                <option value="hectare" ${seg.unit === 'hectare' ? 'selected' : ''}>${currentLang === 'hi' ? 'हेक्टेयर' : 'Ha'}</option>
                <option value="nali" ${seg.unit === 'nali' ? 'selected' : ''}>${currentLang === 'hi' ? 'नाली' : 'Nali'}</option>
                <option value="sqft" ${seg.unit === 'sqft' ? 'selected' : ''}>${currentLang === 'hi' ? 'वर्गफुट' : 'sq.ft'}</option>
                <option value="sqyd" ${seg.unit === 'sqyd' ? 'selected' : ''}>${currentLang === 'hi' ? 'वर्गगज' : 'sq.yd'}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Dynamic Rate Info Box (Immediately Updates When Type/Distance Changes) -->
        <div class="p-3 bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800 rounded-xl space-y-1.5 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-emerald-950 dark:text-emerald-200 font-bold">${currentLang === 'hi' ? 'लागू मूल सर्किल दर:' : 'Base Circle Rate:'}</span>
            <span class="font-black text-emerald-950 dark:text-emerald-200 font-sans text-sm">
              ${isAgri 
                ? (currentLang === 'hi' ? `₹ ${(ratePerHa/100000).toFixed(2)} लाख/हे० (₹ ${ratePerSqm}/वर्गमी०)` : `₹ ${(ratePerHa/100000).toFixed(2)} Lakh/Ha (₹ ${ratePerSqm}/sq.m)`)
                : `₹ ${rateVal.toLocaleString('en-IN')} / ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}`
              }
            </span>
          </div>
          <div class="flex justify-between items-center text-[11px] text-emerald-800 dark:text-emerald-300 border-t border-emerald-200/60 dark:border-emerald-800/80 pt-1">
            <span>${currentLang === 'hi' ? 'सड़क चौड़ाई अधिभार स्थिति:' : 'Road Surcharge Status:'}</span>
            <span class="font-bold text-emerald-900 dark:text-emerald-200">
              ${isRoadAttached 
                ? (roadPercent > 0 
                    ? (currentLang === 'hi' 
                        ? `+${roadPercent}% (+₹ ${hikePerSqm}/वर्गमी०) ➔ प्रभावी दर: ₹ ${effectiveRatePerSqm.toLocaleString('en-IN')}/वर्गमी०`
                        : `+${roadPercent}% (+₹ ${hikePerSqm}/sq.m) ➔ Effective Rate: ₹ ${effectiveRatePerSqm.toLocaleString('en-IN')}/sq.m`)
                    : (currentLang === 'hi' ? 'सड़क 5 मी० से कम (0% अधिभार)' : 'Road <5m (0% Surcharge)'))
                : (currentLang === 'hi' ? 'सड़क संलग्न नहीं (चौड़ाई अधिभार लागू नहीं - 0%)' : 'Without Road Attached (0% Surcharge)')
              }
            </span>
          </div>
        </div>

        <div class="pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 dark:border-slate-700">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              ${seg.isZeroDist ? 'checked' : ''} 
              onchange="updateSegmentField(${seg.id}, 'isZeroDist', this.checked)"
              class="w-4 h-4 text-emerald-600 rounded border-slate-300 dark:border-slate-600 focus:ring-emerald-500"
            />
            <span class="text-xs ${seg.isZeroDist ? 'text-emerald-950 dark:text-emerald-200 font-bold' : 'text-slate-500 dark:text-slate-400'}">
              ${currentLang === 'hi' ? 'मार्ग से 0 दूरी (सड़क संलग्न) - चौड़ाई अधिभार लागू' : '0 Distance (Road attached) - Surcharge eligible'}
            </span>
          </label>
          <span id="segValDisplay_${seg.id}" class="font-extrabold text-emerald-800 dark:text-emerald-300 text-sm font-sans">₹ 0</span>
        </div>

        <!-- Separate Covered & Uncovered Land Calculations for this Segment -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-700 text-xs">
          <div class="p-2.5 bg-emerald-50/90 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <div class="text-[11px] font-bold text-emerald-950 dark:text-emerald-200">${currentLang === 'hi' ? 'आच्छादित भूमि:' : 'Covered Land:'}</div>
            <div id="segCoveredArea_${seg.id}" class="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">0.00 ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}</div>
            <div id="segCoveredVal_${seg.id}" class="font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm mt-0.5 font-sans">₹ 0</div>
          </div>
          <div class="p-2.5 bg-sky-50/90 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
            <div class="text-[11px] font-bold text-sky-950 dark:text-sky-200">${currentLang === 'hi' ? 'अनाच्छादित भूमि:' : 'Uncovered Land:'}</div>
            <div id="segUncoveredArea_${seg.id}" class="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">0.00 ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}</div>
            <div id="segUncoveredVal_${seg.id}" class="font-black text-sky-900 dark:text-sky-300 text-xs sm:text-sm mt-0.5 font-sans">₹ 0</div>
          </div>
        </div>
      `;
      container.appendChild(div);
    });
  }

  // 9. BUILDING COMPONENT MANAGEMENT
  function addBuildingComponent() {
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    buildingComponents.push({
      id: newId,
      category: "COMMERCIAL (SHOP/ RESTURENT/ OFFICE)",
      distance: "0-200m",
      coveredArea: "",
      floorsCount: 1,
      isGroundFloor: true,
      isZeroDist: true
    });
    renderBuildingComponents();
    recalculate();
  }
  window.addBuildingComponent = addBuildingComponent;

  function copyBuildingComponent(id) {
    const bldg = buildingComponents.find(b => b.id === id);
    if (!bldg) return;
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    buildingComponents.push({ ...bldg, id: newId, floorsCount: bldg.floorsCount || 1 });
    renderBuildingComponents();
    recalculate();
  }
  window.copyBuildingComponent = copyBuildingComponent;

  function removeBuildingComponent(id) {
    buildingComponents = buildingComponents.filter(b => b.id !== id);
    renderBuildingComponents();
    recalculate();
  }
  window.removeBuildingComponent = removeBuildingComponent;

  function updateBuildingField(id, field, value) {
    const bldg = buildingComponents.find(b => b.id === id);
    if (!bldg) return;
    if (field === 'coveredArea') {
      bldg.coveredArea = value;
      recalculate();
    } else if (field === 'floorsCount') {
      const parsed = parseInt(value, 10);
      bldg.floorsCount = (isNaN(parsed) || parsed < 1) ? 1 : parsed;
      recalculate();
    } else if (field === 'category') {
      bldg.category = value;
      renderBuildingComponents();
      recalculate();
    } else if (field === 'isGroundFloor') {
      bldg.isGroundFloor = Boolean(value);
      renderBuildingComponents();
      recalculate();
    } else if (field === 'isZeroDist') {
      bldg.isZeroDist = Boolean(value);
      renderBuildingComponents();
      recalculate();
    }
  }
  window.updateBuildingField = updateBuildingField;

  function updateBuildingDistance(id, newDistance) {
    const bldg = buildingComponents.find(b => b.id === id);
    if (!bldg) return;
    bldg.distance = newDistance;
    bldg.isZeroDist = (newDistance === '0-200m');
    renderBuildingComponents();
    recalculate();
  }
  window.updateBuildingDistance = updateBuildingDistance;

  function getBuildingRate(category, distance) {
    if (!selectedVillage || !selectedVillage.rates) return 0;
    const rates = selectedVillage.rates;
    const catRates = rates[category] || {};
    return catRates[distance] || catRates['0-200m'] || 5000;
  }

  function getLocalizedCategory(cat) {
    if (cat.includes('SHOP')) return currentLang === 'hi' ? 'वाणिज्यिक दुकान / कार्यालय' : 'Commercial Shop / Office';
    if (cat === 'OTHER COMMERCIAL') return currentLang === 'hi' ? 'अन्य वाणिज्यिक (होटल/गोदाम)' : 'Other Commercial (Hotel/Godown)';
    if (cat === 'FLAT') return currentLang === 'hi' ? 'आवासीय फ्लैट / बहुमंजिला' : 'Residential Flat / Multi-Storey';
    if (cat.includes('FIRST')) return currentLang === 'hi' ? 'गैर-वाणिज्यिक प्रथम श्रेणी (पक्का)' : 'Non-Commercial 1st Class (Pakka)';
    if (cat.includes('SECOND')) return currentLang === 'hi' ? 'गैर-वाणिज्यिक द्वितीय श्रेणी (टिनशेड)' : 'Non-Commercial 2nd Class (Tinshed)';
    return cat;
  }

  function renderBuildingComponents() {
    const container = document.getElementById('buildingsContainer');
    if (!container) return;
    container.innerHTML = "";

    // Road percent for rate badge
    let roadPercent = 0;
    if (roadWidth >= 15.0) roadPercent = 15;
    else if (roadWidth >= 12.0) roadPercent = 10;
    else if (roadWidth >= 5.0) roadPercent = 5;

    if (buildingComponents.length === 0) {
      container.innerHTML = `
        <div class="p-4 bg-white dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl text-center text-slate-500 dark:text-slate-400 text-sm">
          ${currentLang === 'hi' 
            ? 'कोई भवन अथवा निर्मित तल नहीं जोड़ा गया है (केवल भूखंड)। भवन या तल जोड़ने के लिए ऊपर "+ निर्माण जोड़ें" बटन दबाएं।' 
            : 'No building/floor added (vacant land only). Click "+ Add Building" to add.'}
        </div>
      `;
      return;
    }

    buildingComponents.forEach((bldg, idx) => {
      const rateVal = getBuildingRate(bldg.category, bldg.distance);
      const isCommercial = bldg.category.includes('COMMERCIAL');
      const isFlat = (bldg.category === 'FLAT');
      const isEligibleForRoadHike = isCommercial || isFlat;

      const isRoadTouching = Boolean(bldg.isZeroDist) && (bldg.distance === '0-200m');
      const hikePerSqm = (isEligibleForRoadHike && isRoadTouching && roadPercent > 0) ? Math.round(rateVal * (roadPercent / 100)) : 0;
      const effectiveRate = rateVal + hikePerSqm;
      const floors = Math.max(1, parseInt(bldg.floorsCount, 10) || 1);
      const area = parseFloat(bldg.coveredArea) || 0;
      const totalArea = area * floors;

      const div = document.createElement('div');
      div.className = "p-4 bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/80 rounded-2xl space-y-3 relative transition-colors";
      div.innerHTML = `
        <div class="border-b border-indigo-200/60 dark:border-indigo-800/60 pb-2.5 space-y-2">
          <!-- Line 1: Full Structure Title / Category Name -->
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-tight">
              ${currentLang === 'hi' ? `मद ${idx + 1}: ${getLocalizedCategory(bldg.category)}` : `Structure ${idx + 1}: ${getLocalizedCategory(bldg.category)}`}
            </span>
          </div>

          <!-- Line 2: Floor Badge, Duplicate button, and Delete button on their own line -->
          <div class="flex items-center justify-between gap-2 pt-0.5">
            <div class="flex items-center space-x-1.5">
              ${floors > 1 ? `
                <span class="inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white font-black text-xs tracking-wide shadow-2xs">
                  ${floors} ${currentLang === 'hi' ? 'समान तल' : 'Floors'}
                </span>
              ` : `
                <span class="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 font-bold text-xs">
                  1 ${currentLang === 'hi' ? 'तल' : 'Floor'}
                </span>
              `}
            </div>
            <div class="flex items-center space-x-2 shrink-0">
              <button type="button" onclick="copyBuildingComponent(${bldg.id})" title="${currentLang === 'hi' ? 'समान तल / मद जोड़ें' : 'Duplicate Floor'}" class="h-8 px-3 text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition-colors flex items-center space-x-1.5 shadow-2xs">
                <span>📋</span>
                <span>${currentLang === 'hi' ? 'समान तल' : 'Duplicate'}</span>
              </button>
              <button type="button" onclick="removeBuildingComponent(${bldg.id})" class="h-8 px-3 text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg text-xs font-bold border border-rose-200 dark:border-rose-800 transition-colors flex items-center space-x-1.5 shadow-2xs">
                <span>✕</span>
                <span>${currentLang === 'hi' ? 'हटाएं' : 'Delete'}</span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="sm:col-span-2">
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'निर्माण श्रेणी:' : 'Category:'}</label>
            <select onchange="updateBuildingField(${bldg.id}, 'category', this.value);" class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="COMMERCIAL (SHOP/ RESTURENT/ OFFICE)" ${bldg.category.includes('SHOP') ? 'selected' : ''}>${currentLang === 'hi' ? 'वाणिज्यिक दुकान अथवा कार्यालय' : 'Commercial Shop / Office'}</option>
              <option value="OTHER COMMERCIAL" ${bldg.category === 'OTHER COMMERCIAL' ? 'selected' : ''}>${currentLang === 'hi' ? 'अन्य वाणिज्यिक (होटल, गोदाम)' : 'Other Commercial (Hotel, Godown)'}</option>
              <option value="FLAT" ${bldg.category === 'FLAT' ? 'selected' : ''}>${currentLang === 'hi' ? 'आवासीय फ्लैट अथवा बहुमंजिला' : 'Residential Flat / Multi-Storey'}</option>
              <option value="NON-COMMERICAL FIRST CLASS" ${bldg.category.includes('FIRST') ? 'selected' : ''}>${currentLang === 'hi' ? 'गैर-वाणिज्यिक प्रथम श्रेणी (पक्का भवन)' : 'Non-Commercial 1st Class (Pakka)'}</option>
              <option value="NON-COMMERICAL SECOND CLASS" ${bldg.category.includes('SECOND') ? 'selected' : ''}>${currentLang === 'hi' ? 'गैर-वाणिज्यिक द्वितीय श्रेणी (टिनशेड)' : 'Non-Commercial 2nd Class (Tinshed)'}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'दूरी श्रेणी:' : 'Distance:'}</label>
            <select onchange="updateBuildingDistance(${bldg.id}, this.value)" class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="0-200m" ${bldg.distance === '0-200m' ? 'selected' : ''}>${currentLang === 'hi' ? '0 से 200 मीटर' : '0 to 200 meters'}</option>
              <option value=">200m" ${bldg.distance === '>200m' ? 'selected' : ''}>${currentLang === 'hi' ? '200 मीटर से अधिक' : 'Above 200 meters'}</option>
            </select>
          </div>
        </div>

        <!-- Dynamic Building Rate Info Box -->
        <div class="p-3 bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200/90 dark:border-indigo-800 rounded-xl space-y-1.5 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-indigo-950 dark:text-indigo-200 font-bold">${currentLang === 'hi' ? 'लागू निर्माण दर:' : 'Construction Rate:'}</span>
            <span class="font-black text-indigo-950 dark:text-indigo-200 font-sans text-sm">₹ ${rateVal.toLocaleString('en-IN')} / ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}</span>
          </div>
          <div class="flex justify-between items-center text-[11px] text-indigo-800 dark:text-indigo-300 border-t border-indigo-200/60 dark:border-indigo-800/80 pt-1">
            <span>${currentLang === 'hi' ? 'सड़क अधिभार स्थिति:' : 'Road Surcharge Status:'}</span>
            <span class="font-bold text-indigo-900 dark:text-indigo-200">
              ${isEligibleForRoadHike 
                ? (isRoadTouching && roadPercent > 0 
                    ? (currentLang === 'hi'
                        ? `+${roadPercent}% (+₹ ${hikePerSqm}/वर्गमी०) ➔ प्रभावी दर: ₹ ${effectiveRate.toLocaleString('en-IN')}/वर्गमी०`
                        : `+${roadPercent}% (+₹ ${hikePerSqm}/sq.m) ➔ Effective Rate: ₹ ${effectiveRate.toLocaleString('en-IN')}/sq.m`)
                    : (currentLang === 'hi' ? 'सड़क चौड़ाई अधिभार: 0% (लागू नहीं)' : 'Road surcharge: 0% (Not applicable)'))
                : (currentLang === 'hi' ? 'गैर-वाणिज्यिक निर्माण पर अधिभार लागू नहीं (0%)' : 'No surcharge for non-commercial (0%)')
              }
            </span>
          </div>
        </div>

        <!-- Area & Multi-Floor Multiplier Controls -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 items-start">
          <div class="sm:col-span-1">
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">${currentLang === 'hi' ? 'प्रति तल क्षेत्रफल (वर्गमीटर):' : 'Area Per Floor (sq.m):'}</label>
            <input 
              type="number" 
              value="${bldg.coveredArea}" 
              placeholder="0.00" 
              min="0" 
              step="any" 
              oninput="updateBuildingField(${bldg.id}, 'coveredArea', this.value)"
              class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div class="sm:col-span-1">
            <label class="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1" title="${currentLang === 'hi' ? 'यदि एक से अधिक तलों में समान श्रेणी है' : 'If multiple floors share this category'}">
              ${currentLang === 'hi' ? 'समान तलों की संख्या (गुणक):' : 'No. of Identical Floors:'}
            </label>
            <input 
              type="number" 
              value="${bldg.floorsCount || 1}" 
              min="1" 
              step="1" 
              oninput="updateBuildingField(${bldg.id}, 'floorsCount', this.value)"
              class="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-600 rounded-xl text-sm font-black text-indigo-900 dark:text-indigo-200 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div class="sm:col-span-1 flex flex-col justify-between items-end text-right self-center pt-2 sm:pt-0">
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${currentLang === 'hi' ? `दर: ₹ ${rateVal.toLocaleString('en-IN')}/वर्गमी०` : `Rate: ₹ ${rateVal.toLocaleString('en-IN')}/sq.m`}</span>
            <span id="bldgValDisplay_${bldg.id}" class="font-extrabold text-indigo-900 dark:text-indigo-300 text-sm sm:text-base font-sans">₹ 0</span>
            <span class="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 font-sans mt-0.5">
              ${totalArea > 0 ? (currentLang === 'hi' ? `${totalArea.toFixed(2)} वर्गमी० (${area.toFixed(2)} × ${floors} तल)` : `${totalArea.toFixed(2)} sq.m (${area.toFixed(2)} × ${floors} Floors)`) : ''}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-indigo-200/60 dark:border-indigo-800/60 text-xs">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              ${bldg.isGroundFloor !== false ? 'checked' : ''} 
              onchange="updateBuildingField(${bldg.id}, 'isGroundFloor', this.checked)" 
              class="w-4 h-4 text-emerald-600 rounded border-slate-300 dark:border-slate-600"
            />
            <span class="text-slate-700 dark:text-slate-300 font-semibold">${currentLang === 'hi' ? 'भूतल शामिल है (खुली भूमि से 1 तल क्षेत्रफल घटेगा)' : 'Includes Ground Floor (1 floor area subtracts from open land)'}</span>
          </label>

          ${isEligibleForRoadHike ? `
            <label class="flex items-center space-x-2 cursor-pointer sm:justify-end">
              <input 
                type="checkbox" 
                ${bldg.isZeroDist ? 'checked' : ''} 
                onchange="updateBuildingField(${bldg.id}, 'isZeroDist', this.checked)" 
                class="w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-600"
              />
              <span class="text-indigo-950 dark:text-indigo-200 font-bold">${currentLang === 'hi' ? 'मार्ग से 0 दूरी (सड़क चौड़ाई अधिभार लागू)' : '0 Distance (Road width surcharge applicable)'}</span>
            </label>
          ` : `
            <span class="text-slate-400 dark:text-slate-500 italic sm:text-right">${currentLang === 'hi' ? 'गैर-वाणिज्यिक निर्माण पर सड़क चौड़ाई अधिभार लागू नहीं (0%)' : 'No road surcharge for non-commercial structures (0%)'}</span>
          `}
        </div>
      `;
      container.appendChild(div);
    });
  }

  // 10. ROAD WIDTH HANDLING
  function onRoadWidthChange(val) {
    const parsed = parseFloat(val);
    roadWidth = (!isNaN(parsed) && parsed >= 0) ? parsed : 3.0;

    // Mutually exclusive selection state with strict threshold checks
    let selectedBtnId = 'btnRoad1';
    if (roadWidth >= 15.0) {
      selectedBtnId = 'btnRoad4';
    } else if (roadWidth >= 12.0) {
      selectedBtnId = 'btnRoad3';
    } else if (roadWidth >= 5.0) {
      selectedBtnId = 'btnRoad2';
    } else {
      selectedBtnId = 'btnRoad1';
    }

    // Active / inactive class management strategy
    const container = document.getElementById('roadWidthBtnContainer') || document.getElementById('btnRoad1')?.parentElement;
    const buttons = container ? container.querySelectorAll('button') : document.querySelectorAll('#btnRoad1, #btnRoad2, #btnRoad3, #btnRoad4');

    const baseClass = "w-full h-11 sm:h-12 px-2 rounded-xl border text-xs sm:text-sm shadow-xs transition-all text-center flex items-center justify-center leading-tight font-bold";
    const inactiveClasses = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700";
    const activeClasses = "bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm shadow-emerald-600/20";

    buttons.forEach(btn => {
      // Ensure all buttons in the road width container have their classes reset to default
      btn.className = `${baseClass} ${inactiveClasses}`;

      // Only the selected button receives active classes
      if (btn.id === selectedBtnId) {
        btn.className = `${baseClass} ${activeClasses}`;
      }
    });

    renderLandSegments();
    renderBuildingComponents();
    recalculate();
  }
  window.onRoadWidthChange = onRoadWidthChange;

  // 11. BUYER TYPE SELECTOR
  function setBuyerType(type) {
    // Standardize 'male' to 'general'
    if (type === 'male') type = 'general';
    activeBuyerType = type;

    const bGen = document.getElementById('btnBuyerGeneral') || document.getElementById('btnBuyerMale');
    const bFem = document.getElementById('btnBuyerFemale');
    const bBoth = document.getElementById('btnBuyerBoth');
    const divJointStake = document.getElementById('divJointStake');
    const cardMale = document.getElementById('cardMaleResult');
    const cardFemale = document.getElementById('cardFemaleResult');
    const lblMaleCardHeader = document.getElementById('lblMaleCardHeader');

    const activeCls = "w-full h-11 sm:h-12 px-2 py-1 rounded-xl border border-emerald-600 bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm shadow-emerald-600/20 transition-all text-center flex items-center justify-center leading-tight";
    const inactiveCls = "w-full h-11 sm:h-12 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center flex items-center justify-center leading-tight";

    if (bGen) bGen.className = (type === 'general') ? activeCls : inactiveCls;
    if (bFem) bFem.className = (type === 'female') ? activeCls : inactiveCls;
    if (bBoth) bBoth.className = (type === 'both') ? activeCls : inactiveCls;

    if (divJointStake) {
      if (type === 'both') divJointStake.classList.remove('hidden');
      else divJointStake.classList.add('hidden');
    }

    if (cardMale && cardFemale) {
      if (type === 'both') {
        cardMale.classList.remove('hidden');
        cardFemale.classList.remove('hidden');
        if (lblMaleCardHeader) {
          lblMaleCardHeader.innerText = (currentLang === 'hi') ? 'पुरुष क्रेता अंश प्रभार' : 'Male Buyer Stake Dues';
        }
      } else if (type === 'female') {
        cardMale.classList.add('hidden');
        cardFemale.classList.remove('hidden');
      } else {
        // general / male
        cardMale.classList.remove('hidden');
        cardFemale.classList.add('hidden');
        if (lblMaleCardHeader) {
          lblMaleCardHeader.innerText = (currentLang === 'hi') ? 'पुरुष / सामान्य क्रेता प्रभार' : 'General / Male Buyer Dues';
        }
      }
    }

    recalculate();
  }
  window.setBuyerType = setBuyerType;

  // Rounding Helpers
  function roundUp1000(val) {
    return Math.ceil(val / 1000) * 1000;
  }
  function roundUp10(val) {
    return Math.ceil(val / 10) * 10;
  }
  function formatINR(val) {
    const num = Math.round(Number(val) || 0);
    return '₹ ' + num.toLocaleString('en-IN');
  }
  window.formatINR = formatINR;

  // 12. MAIN CALCULATION ENGINE
  function recalculate() {
    let totalLandSqm = 0;
    let breakdownRows = [];

    // Road Width Surcharge Percentage
    let roadPercent = 0;
    if (roadWidth >= 15.0) roadPercent = 15;
    else if (roadWidth >= 12.0) roadPercent = 10;
    else if (roadWidth >= 5.0) roadPercent = 5;

    const badgeRoad = document.getElementById('badgeRoadWidthPercent');
    if (badgeRoad) badgeRoad.innerText = `+${roadPercent}%`;

    let totalRoadHikeAmount = 0;

    // 1. First gather building covered area, multi-floors & flags to determine covered ground allocation
    let totalGroundCoveredSqm = 0;
    let hasCommercialStructure = false;
    buildingComponents.forEach((bldg) => {
      const area = parseFloat(bldg.coveredArea) || 0;
      if (bldg.isGroundFloor !== false) {
        totalGroundCoveredSqm += area; // 1 floor footprint sits on ground
      }
      if (bldg.category && bldg.category.includes('COMMERCIAL') && area > 0) {
        hasCommercialStructure = true;
      }
    });

    const hasCommercialPlot = landSegments.some(seg => seg.type === 'COMMERCIAL' && (parseFloat(seg.area) || 0) > 0);
    const hasCommercial = hasCommercialStructure || hasCommercialPlot;

    // 2. LAND FIRST (if applicable) - Separate covered & uncovered land with merged road width surcharge & round up 1,000
    // Exact user formula:
    // =roundup(circle rate * area * road width surcharge if applicable * surcharge if applicable for uncovered land if there is commercial/other commercial plot/floor, -3)
    let remainingCoveredToAllocate = totalGroundCoveredSqm;
    let totalCoveredLandValuation = 0;
    let totalUncoveredLandValuation = 0;
    let totalCoveredSqmAllocated = 0;
    let totalUncoveredSqmAllocated = 0;

    landSegments.forEach((seg, i) => {
      const areaNum = parseFloat(seg.area) || 0;
      let sqm = areaNum;

      if (seg.unit === 'sqft') sqm = areaNum * 0.092903;
      else if (seg.unit === 'sqyd') sqm = areaNum * 0.836127;
      else if (seg.unit === 'nali') sqm = areaNum * 200.67;
      else if (seg.unit === 'hectare') sqm = areaNum * 10000;

      totalLandSqm += sqm;

      const rateVal = getLandRate(seg.type, seg.distance);
      const ratePerHa = (rateVal < 10000) ? (rateVal * 100000) : rateVal;
      const ratePerSqm = (seg.type === 'AGRICULTURE') ? (ratePerHa / 10000) : rateVal;

      // Allocate covered vs uncovered land for this segment
      const segCoveredSqm = Math.min(sqm, remainingCoveredToAllocate);
      remainingCoveredToAllocate = Math.max(0, remainingCoveredToAllocate - segCoveredSqm);
      const segUncoveredSqm = Math.max(0, sqm - segCoveredSqm);

      totalCoveredSqmAllocated += segCoveredSqm;
      totalUncoveredSqmAllocated += segUncoveredSqm;

      // Road width surcharge multiplier (applied to both covered & uncovered land near 0m / road attached)
      const isRoadTouching = Boolean(seg.isZeroDist) && (seg.distance === '0-50m');
      const roadMultiplier = (isRoadTouching && roadPercent > 0) ? (1 + roadPercent / 100) : 1.0;

      // 10% Statutory Surcharge for uncovered land if commercial plot or commercial building/floor exists
      const uncovCommMultiplier = hasCommercial ? 1.10 : 1.0;

      // FORMULA: =roundup(circle rate * area * road width surcharge, -3)
      const rawCovered = (segCoveredSqm > 0) ? (ratePerSqm * segCoveredSqm * roadMultiplier) : 0;
      const mergedCovered = (rawCovered > 0) ? roundUp1000(rawCovered) : 0;

      // FORMULA: =roundup(circle rate * area * road width surcharge * surcharge if applicable for uncovered land if there is commercial/other commercial plot/floor, -3)
      const rawUncovered = (segUncoveredSqm > 0) ? (ratePerSqm * segUncoveredSqm * roadMultiplier * uncovCommMultiplier) : 0;
      const mergedUncovered = (rawUncovered > 0) ? roundUp1000(rawUncovered) : 0;

      totalCoveredLandValuation += mergedCovered;
      totalUncoveredLandValuation += mergedUncovered;

      const segTotal = mergedCovered + mergedUncovered;

      // Update segment card DOM displays
      const elCovArea = document.getElementById(`segCoveredArea_${seg.id}`);
      if (elCovArea) elCovArea.innerText = `${segCoveredSqm.toFixed(2)} ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}`;
      const elCovVal = document.getElementById(`segCoveredVal_${seg.id}`);
      if (elCovVal) {
        const roadBadgeText = (roadMultiplier > 1) 
          ? (currentLang === 'hi' ? ` + ${roadPercent}% सड़क अधिभार` : ` + ${roadPercent}% Road Hike`) 
          : '';
        const rateLabel = currentLang === 'hi' ? 'दर' : 'Rate';
        elCovVal.innerText = (segCoveredSqm > 0)
          ? `₹ ${mergedCovered.toLocaleString('en-IN')} (${rateLabel} ₹${ratePerSqm.toLocaleString('en-IN')}${roadBadgeText})`
          : `₹ 0`;
      }

      const elUncovArea = document.getElementById(`segUncoveredArea_${seg.id}`);
      if (elUncovArea) elUncovArea.innerText = `${segUncoveredSqm.toFixed(2)} ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}`;
      const elUncovVal = document.getElementById(`segUncoveredVal_${seg.id}`);
      if (elUncovVal) {
        let surchargesText = "";
        if (roadMultiplier > 1) surchargesText += (currentLang === 'hi' ? ` + ${roadPercent}% सड़क` : ` + ${roadPercent}% Road`);
        if (uncovCommMultiplier > 1) surchargesText += (currentLang === 'hi' ? ` + 10% व्यावसायिक नियम` : ` + 10% Commercial Rule`);
        const rateLabel = currentLang === 'hi' ? 'दर' : 'Rate';
        elUncovVal.innerText = (segUncoveredSqm > 0)
          ? `₹ ${mergedUncovered.toLocaleString('en-IN')} (${rateLabel} ₹${ratePerSqm.toLocaleString('en-IN')}${surchargesText})`
          : `₹ 0`;
      }

      const badgeEl = document.getElementById(`segValDisplay_${seg.id}`);
      if (badgeEl) {
        badgeEl.innerText = `₹ ${segTotal.toLocaleString('en-IN')}`;
      }

      // Add breakdown rows - LAND FIRST
      if (areaNum > 0) {
        const distName = currentLang === 'hi'
          ? (seg.distance === '0-50m' ? '0-50 मीटर (सड़क संलग्न)' : (seg.distance === '50-200m' ? '50-200 मीटर' : '200+ मीटर'))
          : (seg.distance === '0-50m' ? '0-50m (Road Facing)' : (seg.distance === '50-200m' ? '50-200m' : '200+m'));
        let typeName = currentLang === 'hi'
          ? (seg.type === 'AGRICULTURE' ? 'कृषि भूमि' : (seg.type === 'COMMERCIAL' ? 'व्यावसायिक भूखंड' : 'अकृषि भूमि'))
          : (seg.type === 'AGRICULTURE' ? 'Agricultural Land' : (seg.type === 'COMMERCIAL' ? 'Commercial Plot' : 'Non-Agricultural Land'));

        if (segCoveredSqm > 0) {
          const badgeText = (roadMultiplier > 1)
            ? `+${roadPercent}% ${currentLang === 'hi' ? 'सड़क अधिभार शामिल' : 'Road Hike Included'}`
            : null;
          breakdownRows.push({
            type: 'land',
            title: currentLang === 'hi' ? `भूखंड खंड ${i + 1}: आच्छादित भूमि (${typeName})` : `Plot Segment ${i + 1}: Covered Land (${typeName})`,
            badge: badgeText,
            detail: currentLang === 'hi'
              ? `${distName} • क्षेत्रफल: ${segCoveredSqm.toFixed(2)} वर्गमी० • दर: ₹ ${ratePerSqm.toLocaleString('en-IN')}/वर्गमी०${roadMultiplier > 1 ? ` × ${(roadMultiplier).toFixed(2)} (सड़क अधिभार)` : ''}`
              : `${distName} • Area: ${segCoveredSqm.toFixed(2)} sq.m • Rate: ₹ ${ratePerSqm.toLocaleString('en-IN')}/sq.m${roadMultiplier > 1 ? ` × ${(roadMultiplier).toFixed(2)} (Road Hike)` : ''}`,
            amount: mergedCovered
          });
        }

        if (segUncoveredSqm > 0 || segCoveredSqm === 0) {
          let badgeText = null;
          if (roadMultiplier > 1 && uncovCommMultiplier > 1) {
            badgeText = currentLang === 'hi' ? `+${roadPercent}% सड़क & +10% व्यावसायिक अधिभार` : `+${roadPercent}% Road & +10% Commercial Hike`;
          } else if (roadMultiplier > 1) {
            badgeText = `+${roadPercent}% ${currentLang === 'hi' ? 'सड़क अधिभार शामिल' : 'Road Hike Included'}`;
          } else if (uncovCommMultiplier > 1) {
            badgeText = currentLang === 'hi' ? `+10% व्यावसायिक खुली भूमि नियम` : `+10% Open Commercial Land Rule`;
          }

          let multiplierNotes = "";
          if (roadMultiplier > 1) multiplierNotes += currentLang === 'hi' ? ` × ${(roadMultiplier).toFixed(2)} (सड़क)` : ` × ${(roadMultiplier).toFixed(2)} (Road)`;
          if (uncovCommMultiplier > 1) multiplierNotes += currentLang === 'hi' ? ` × 1.10 (व्यावसायिक खुली भूमि)` : ` × 1.10 (Commercial Open Land)`;

          breakdownRows.push({
            type: 'land',
            title: currentLang === 'hi' ? `भूखंड खंड ${i + 1}: खुली / अनाच्छादित भूमि (${typeName})` : `Plot Segment ${i + 1}: Open / Uncovered Land (${typeName})`,
            badge: badgeText,
            detail: currentLang === 'hi'
              ? `${distName} • क्षेत्रफल: ${segUncoveredSqm.toFixed(2)} वर्गमी० • दर: ₹ ${ratePerSqm.toLocaleString('en-IN')}/वर्गमी०${multiplierNotes}`
              : `${distName} • Area: ${segUncoveredSqm.toFixed(2)} sq.m • Rate: ₹ ${ratePerSqm.toLocaleString('en-IN')}/sq.m${multiplierNotes}`,
            amount: mergedUncovered
          });
        }
      }
    });

    // 3. Open Land Balance Display
    const openLandBalSqm = Math.max(0, totalLandSqm - totalGroundCoveredSqm);
    const elOpenLandBal = document.getElementById('openLandBalanceVal');
    if (elOpenLandBal) {
      elOpenLandBal.innerText = `${openLandBalSqm.toFixed(2)} ${currentLang === 'hi' ? 'वर्गमीटर' : 'sq.m'}`;
    }

    // 4. THEN REST: BUILDINGS, FLOORS, FLATS (WITH FLOOR MULTIPLIER & ROAD SURCHARGE)
    // Formula: =roundup(circle rate * (area * floors) * road width surcharge if applicable, -3)
    let flatsValuation = 0;
    let commercialBldgValuation = 0;
    let residentialBldgValuation = 0;

    buildingComponents.forEach((bldg, idx) => {
      const area = parseFloat(bldg.coveredArea) || 0;
      const floors = Math.max(1, parseInt(bldg.floorsCount, 10) || 1);
      const totalArea = area * floors;
      const rate = getBuildingRate(bldg.category, bldg.distance);

      const isComm = bldg.category.includes('COMMERCIAL');
      const isFlat = (bldg.category === 'FLAT');

      // Road width surcharge for commercial structures and flats (0 distance from road)
      const isBldgRoadTouching = Boolean(bldg.isZeroDist) && (bldg.distance === '0-200m');
      const bldgRoadMultiplier = ((isComm || isFlat) && isBldgRoadTouching && roadPercent > 0) ? (1 + roadPercent / 100) : 1.0;

      // Merged building valuation per formula: roundup(rate * area * floors * roadMultiplier, -3)
      const rawBldgVal = (totalArea > 0) ? (rate * totalArea * bldgRoadMultiplier) : 0;
      const itemTotalVal = (rawBldgVal > 0) ? roundUp1000(rawBldgVal) : 0;

      if (isFlat) {
        flatsValuation += itemTotalVal;
      } else if (isComm) {
        commercialBldgValuation += itemTotalVal;
      } else {
        residentialBldgValuation += itemTotalVal;
      }

      const badge = document.getElementById(`bldgValDisplay_${bldg.id}`);
      if (badge) {
        badge.innerText = `₹ ${itemTotalVal.toLocaleString('en-IN')}`;
      }

      if (area > 0) {
        const floorText = bldg.isGroundFloor === false 
          ? (currentLang === 'hi' ? 'ऊपरी तल' : 'Upper Floor') 
          : (currentLang === 'hi' ? 'भूतल' : 'Ground Floor');
        const hikeBadge = (bldgRoadMultiplier > 1) ? `+${roadPercent}% ${currentLang === 'hi' ? 'सड़क अधिभार शामिल' : 'Road Hike Included'}` : null;
        const areaDetail = floors > 1 
          ? (currentLang === 'hi' ? `${floors} समान तल • कुल ${totalArea.toFixed(2)} वर्गमी० (${area.toFixed(2)} × ${floors})` : `${floors} Equal Floors • Total ${totalArea.toFixed(2)} sq.m (${area.toFixed(2)} × ${floors})`)
          : `${floorText} • ${area.toFixed(2)} ${currentLang === 'hi' ? 'वर्गमी०' : 'sq.m'}`;

        breakdownRows.push({
          type: 'building',
          title: currentLang === 'hi' 
            ? `निर्माण मद ${idx + 1}: ${getLocalizedCategory(bldg.category)}${floors > 1 ? ` (${floors} तल)` : ''}` 
            : `Structure ${idx + 1}: ${getLocalizedCategory(bldg.category)}${floors > 1 ? ` (${floors} Floors)` : ''}`,
          badge: hikeBadge,
          detail: currentLang === 'hi' 
            ? `${areaDetail} • दर: ₹ ${rate.toLocaleString('en-IN')}/वर्गमी०${bldgRoadMultiplier > 1 ? ` × ${(bldgRoadMultiplier).toFixed(2)} (सड़क अधिभार)` : ''}` 
            : `${areaDetail} • Rate: ₹ ${rate.toLocaleString('en-IN')}/sq.m${bldgRoadMultiplier > 1 ? ` × ${(bldgRoadMultiplier).toFixed(2)} (Road Hike)` : ''}`,
          amount: itemTotalVal
        });
      }
    });

    // 5. Final Total Valuation (Sum of covered land with road surcharge + uncovered land with road & commercial surcharge + flat with road surcharge + commercial building with road surcharge + residential building)
    const grandTotal = totalCoveredLandValuation 
                     + totalUncoveredLandValuation 
                     + flatsValuation 
                     + commercialBldgValuation 
                     + residentialBldgValuation;

    // Cache current breakdown rows for report export
    currentBreakdownRows = breakdownRows;

    // Update Valuation Hero displays
    const elDisplayTotal = document.getElementById('displayGrandTotal');
    if (elDisplayTotal) elDisplayTotal.innerText = `₹ ${grandTotal.toLocaleString('en-IN')}`;

    const elInLakhs = document.getElementById('displayInLakhs');
    if (elInLakhs) {
      elInLakhs.innerText = currentLang === 'hi'
        ? `₹ ${(grandTotal / 100000).toFixed(2)} लाख`
        : `₹ ${(grandTotal / 100000).toFixed(2)} Lakh`;
    }

    const elLiveValPreview = document.getElementById('liveValuationPreview');
    if (elLiveValPreview) {
      elLiveValPreview.innerText = `₹ ${grandTotal.toLocaleString('en-IN')}`;
    }

    const elMetricCovered = document.getElementById('metricCoveredLandValue');
    if (elMetricCovered) elMetricCovered.innerText = `₹ ${totalCoveredLandValuation.toLocaleString('en-IN')}`;

    const elMetricUncovered = document.getElementById('metricUncoveredLandValue');
    if (elMetricUncovered) elMetricUncovered.innerText = `₹ ${totalUncoveredLandValuation.toLocaleString('en-IN')}`;

    const elMetricBldg = document.getElementById('metricBldgValue');
    if (elMetricBldg) elMetricBldg.innerText = `₹ ${(flatsValuation + commercialBldgValuation + residentialBldgValuation).toLocaleString('en-IN')}`;

    // Render Itemized Breakdown List (Clean, un-cramped cards with generous spacing)
    const listEl = document.getElementById('itemizedBreakdownList');
    if (listEl) {
      listEl.innerHTML = "";
      if (breakdownRows.length === 0) {
        listEl.innerHTML = `
          <div class="p-8 text-center text-slate-400 italic text-sm">
            ${currentLang === 'hi' ? 'कृपया भूखंड अथवा निर्माण का विवरण दर्ज करें।' : 'Please enter plot or construction details.'}
          </div>
        `;
      } else {
        breakdownRows.forEach(row => {
          const rowDiv = document.createElement('div');
          rowDiv.className = "p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3";
          rowDiv.innerHTML = `
            <div class="min-w-0 flex-1 space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${row.title}</span>
                ${row.badge ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">${row.badge}</span>` : ''}
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${row.detail}</div>
            </div>
            <div class="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-700">
              <span class="text-base sm:text-lg font-black text-slate-950 dark:text-white font-sans tracking-tight">₹ ${row.amount.toLocaleString('en-IN')}</span>
              <span class="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">${currentLang === 'hi' ? 'गोल ₹1,000' : 'Round ₹1,000'}</span>
            </div>
          `;
          listEl.appendChild(rowDiv);
        });
      }
    }

    // 5. Deed Dues Calculation Engine (Sale Deed, Gift Deed, Lease Deed)
    // Synchronize Property Market Value to Lease Card & Display
    const elLeaseSync = document.getElementById('lblLeaseSyncedMarketVal');
    if (elLeaseSync) elLeaseSync.innerText = `₹ ${grandTotal.toLocaleString('en-IN')}`;

    // Show/Hide Deed Sections based on currentDeedType
    const secSale = document.getElementById('sectionSaleDeedResult');
    const secGift = document.getElementById('sectionGiftDeedResult');
    const secLease = document.getElementById('sectionLeaseDeedResult');

    if (secSale) secSale.classList.toggle('hidden', currentDeedType !== 'sale');
    if (secGift) secGift.classList.toggle('hidden', currentDeedType !== 'gift');
    if (secLease) secLease.classList.toggle('hidden', currentDeedType !== 'lease');

    // ========================================================
    // CASE A: SALE DEED CALCULATIONS
    // ========================================================
    let maleBase = grandTotal;
    let femaleBase = grandTotal;
    const isJoint = (activeBuyerType === 'both');

    if (isJoint) {
      const fPctInput = document.getElementById('inputFemaleStake');
      const fPct = fPctInput ? Math.min(99, Math.max(1, parseFloat(fPctInput.value) || 50)) : 50;
      const mPct = 100 - fPct;

      const lblMAuto = document.getElementById('lblMalePercentAuto');
      if (lblMAuto) lblMAuto.innerText = `${mPct}%`;

      // Female base rounded to nearest thousand, male base takes exact remainder
      femaleBase = roundUp1000(grandTotal * (fPct / 100));
      maleBase = grandTotal - femaleBase;

      const elFShare = document.getElementById('displayFemaleStakeVal');
      if (elFShare) elFShare.innerText = `₹ ${femaleBase.toLocaleString('en-IN')} (${fPct}%)`;
      const elMShare = document.getElementById('displayMaleStakeVal');
      if (elMShare) elMShare.innerText = `₹ ${maleBase.toLocaleString('en-IN')} (${mPct}%)`;
    }

    // Male Calculations (5% Stamp, 2% Reg capped at maxRegFeeCap, round up to nearest ₹10)
    const maleStamp = roundUp10(maleBase * 0.05);
    const maleReg = Math.min(maxRegFeeCap, roundUp10(maleBase * 0.02));
    const maleTotal = maleStamp + maleReg;

    const elMaleStamp = document.getElementById('valMaleStamp');
    if (elMaleStamp) elMaleStamp.innerText = `₹ ${maleStamp.toLocaleString('en-IN')}`;
    const elMaleReg = document.getElementById('valMaleReg');
    if (elMaleReg) elMaleReg.innerText = `₹ ${maleReg.toLocaleString('en-IN')}`;
    const elMaleTotal = document.getElementById('valMaleTotal');
    if (elMaleTotal) elMaleTotal.innerText = `₹ ${maleTotal.toLocaleString('en-IN')}`;

    // Female Calculations (3.75% up to remaining 25L, 5% on excess; 2% Reg capped, round up to nearest ₹10)
    const chkFemale = document.getElementById('chkFemaleEligible');
    const priorCountEl = document.getElementById('selPriorPurchaseCount');
    const priorCount = parseInt(priorCountEl ? priorCountEl.value : "0") || 0;
    const priorUsedEl = document.getElementById('inputPriorValueUsed');
    const priorUsed = parseFloat(priorUsedEl ? priorUsedEl.value : "0") || 0;

    const isEligible = chkFemale ? (chkFemale.checked && priorCount < 2) : true;
    const remainingExemptionLimit = Math.max(0, femaleValueCeiling - priorUsed);

    let femaleStamp = 0;
    let femaleStampFormulaText = "";

    if (!isEligible || remainingExemptionLimit <= 0) {
      femaleStamp = roundUp10(femaleBase * 0.05);
      femaleStampFormulaText = currentLang === 'hi' 
        ? "छूट सीमा समाप्त: पूर्ण 5% मानक स्टाम्प शुल्क लागू" 
        : "Rebate limit exhausted: Standard 5% stamp duty";
      const bRate = document.getElementById('badgeFemaleRate');
      if (bRate) bRate.innerText = "5% + 2%";
    } else {
      if (femaleBase <= remainingExemptionLimit) {
        femaleStamp = roundUp10(femaleBase * 0.0375);
        femaleStampFormulaText = currentLang === 'hi'
          ? `₹ ${(femaleBase).toLocaleString('en-IN')} पर पूर्ण 3.75% रियायती दर • गोल ₹10`
          : `Full 3.75% concession on ₹ ${(femaleBase).toLocaleString('en-IN')}`;
        const bRate = document.getElementById('badgeFemaleRate');
        if (bRate) bRate.innerText = "3.75% + 2%";
      } else {
        const portionAtRebate = remainingExemptionLimit;
        const portionAtStandard = femaleBase - remainingExemptionLimit;
        const stampRebate = portionAtRebate * 0.0375;
        const stampStandard = portionAtStandard * 0.05;
        femaleStamp = roundUp10(stampRebate + stampStandard);
        femaleStampFormulaText = currentLang === 'hi'
          ? `₹ ${(portionAtRebate/100000).toFixed(2)}L पर 3.75% + शेष पर 5% • गोल ₹10`
          : `₹ ${(portionAtRebate/100000).toFixed(2)}L @ 3.75% + Remainder @ 5%`;
        const bRate = document.getElementById('badgeFemaleRate');
        if (bRate) bRate.innerText = "3.75% + 5%";
      }
    }

    const femaleReg = Math.min(maxRegFeeCap, roundUp10(femaleBase * 0.02));
    const femaleTotal = femaleStamp + femaleReg;

    const elFemStamp = document.getElementById('valFemaleStamp');
    if (elFemStamp) elFemStamp.innerText = `₹ ${femaleStamp.toLocaleString('en-IN')}`;
    const elFemFormula = document.getElementById('femaleStampFormula');
    if (elFemFormula) elFemFormula.innerText = femaleStampFormulaText;
    const elFemReg = document.getElementById('valFemaleReg');
    if (elFemReg) elFemReg.innerText = `₹ ${femaleReg.toLocaleString('en-IN')}`;
    const elFemTotal = document.getElementById('valFemaleTotal') || document.getElementById('valFemTotal');
    if (elFemTotal) elFemTotal.innerText = `₹ ${femaleTotal.toLocaleString('en-IN')}`;

    // Joint Registration Fee Rule:
    // Per mandate: For joint (male+female), max registration fee is ₹50,000 without split and without considering stake in property!
    const jointUnifiedRegFee = Math.min(maxRegFeeCap, roundUp10(grandTotal * 0.02));
    const jointCombinedTotal = femaleStamp + maleStamp + jointUnifiedRegFee;

    // Concession Savings Calculation (Difference vs standard male 5% duty)
    const standardFemaleDuty = roundUp10(femaleBase * 0.05);
    const totalSaving = Math.max(0, standardFemaleDuty - femaleStamp);

    const elSaving = document.getElementById('femaleSavingDisplay');
    if (elSaving) {
      elSaving.innerText = currentLang === 'hi'
        ? `महिला छूट से कुल बचत: ₹ ${totalSaving.toLocaleString('en-IN')}`
        : `Female Concession Savings: ₹ ${totalSaving.toLocaleString('en-IN')}`;
    }

    // ========================================================
    // CASE B: FAMILY GIFT DEED CALCULATIONS
    // ========================================================
    const isFamilyGift = (currentGiftRelation === 'family');
    const giftStampRate = isFamilyGift ? 0.01 : 0.05;
    const giftStamp = roundUp10(grandTotal * giftStampRate);
    const giftReg = Math.min(maxRegFeeCap, roundUp10(grandTotal * 0.02));
    const giftTotal = giftStamp + giftReg;
    const standardGiftDuty = roundUp10(grandTotal * 0.05);
    const giftSaving = Math.max(0, standardGiftDuty - giftStamp);

    const elGiftStamp = document.getElementById('valGiftStamp');
    if (elGiftStamp) elGiftStamp.innerText = `₹ ${giftStamp.toLocaleString('en-IN')}`;
    const elGiftReg = document.getElementById('valGiftReg');
    if (elGiftReg) elGiftReg.innerText = `₹ ${giftReg.toLocaleString('en-IN')}`;
    const elGiftTotal = document.getElementById('valGiftTotal');
    if (elGiftTotal) elGiftTotal.innerText = `₹ ${giftTotal.toLocaleString('en-IN')}`;

    const elGiftFormula = document.getElementById('lblGiftStampFormula');
    if (elGiftFormula) {
      elGiftFormula.innerText = isFamilyGift
        ? (currentLang === 'hi' ? `₹ ${grandTotal.toLocaleString('en-IN')} पर 1% पारिवारिक रियायती दर • गोल ₹10` : `1% Concessional duty on ₹ ${grandTotal.toLocaleString('en-IN')}`)
        : (currentLang === 'hi' ? `₹ ${grandTotal.toLocaleString('en-IN')} पर 5% सामान्य दर • गोल ₹10` : `5% Standard duty on ₹ ${grandTotal.toLocaleString('en-IN')}`);
    }
    const bGiftRate = document.getElementById('badgeGiftRate');
    if (bGiftRate) bGiftRate.innerText = isFamilyGift ? "1% + 2%" : "5% + 2%";

    const elGiftSav = document.getElementById('giftSavingDisplay');
    if (elGiftSav) {
      elGiftSav.innerText = currentLang === 'hi'
        ? `पारिवारिक छूट से स्टाम्प बचत (बनाम 5% सामान्य): ₹ ${giftSaving.toLocaleString('en-IN')}`
        : `Family Concession Savings vs 5%: ₹ ${giftSaving.toLocaleString('en-IN')}`;
    }

    // ========================================================
    // CASE C: LEASE DEED CALCULATIONS (RULES 1 TO 8 + REG 1 TO 4)
    // ========================================================
    const leaseYears = parseFloat(document.getElementById('inputLeaseYears')?.value) || 1;
    if (typeof updateLeaseTermButtonsUI === 'function') {
      updateLeaseTermButtonsUI(leaseYears);
    }
    const leaseMode = document.getElementById('selLeaseMode')?.value || 'rent_only';
    const leaseAar = parseFloat(document.getElementById('inputLeaseAar')?.value) || 0;
    const leasePremium = parseFloat(document.getElementById('inputLeasePremium')?.value) || 0;
    const isFlatUnder5 = Boolean(document.getElementById('chkLeaseFlatUnder5')?.checked);
    const isPriorAgreement = Boolean(document.getElementById('chkLeasePriorAgreementStamped')?.checked);

    let leaseStamp = 0;
    let leaseStampRuleText = "";
    let leaseReg = 0;
    let leaseRegRuleText = "";

    if (isPriorAgreement) {
      leaseStamp = 50; // max ₹50/- credit limit
      leaseStampRuleText = currentLang === 'hi' ? "पूर्व निष्पादित स्टाम्पित पट्टा करार (अधिकतम ₹50)" : "Prior Stamped Agreement Credit (Max ₹50)";
    } else if (leaseMode === 'premium_only') {
      if (leaseYears <= 30) {
        leaseStamp = roundUp10(leasePremium * 0.02);
        leaseStampRuleText = currentLang === 'hi' ? `नियम 7: केवल प्रीमियम (≤ 30 वर्ष) • ₹ ${leasePremium.toLocaleString('en-IN')} पर 2%` : `Rule 7: Premium Only (≤ 30 yrs) - 2% on Premium`;
      } else {
        leaseStamp = roundUp10(grandTotal * 0.05);
        leaseStampRuleText = currentLang === 'hi' ? `नियम 7: केवल प्रीमियम (> 30 वर्ष) • बाजार मूल्य ₹ ${grandTotal.toLocaleString('en-IN')} पर 5%` : `Rule 7: Premium Only (> 30 yrs) - 5% on Market Value`;
      }
    } else {
      // rent_only or both
      if (leaseYears <= 1) {
        const totalRent = leaseAar * leaseYears;
        const consideration = (leaseMode === 'both') ? (totalRent + leasePremium) : totalRent;
        leaseStamp = roundUp10(consideration * 0.02);
        leaseStampRuleText = currentLang === 'hi' ? `नियम 1: अवधि ≤ 1 वर्ष • संपूर्ण भाड़ा व अग्रिम (₹ ${consideration.toLocaleString('en-IN')}) पर 2%` : `Rule 1: Term ≤ 1 yr - 2% on Rent + Advance`;
      } else if (leaseYears <= 5) {
        if (isFlatUnder5) {
          const wholeRent = leaseAar * leaseYears;
          const consideration = (leaseMode === 'both') ? (wholeRent + leasePremium) : wholeRent;
          const raw = consideration * 0.02;
          leaseStamp = roundUp10(Math.max(100, Math.min(10000, raw)));
          leaseStampRuleText = currentLang === 'hi' ? `नियम 2: आवासीय फ्लैट (≤ 5 वर्ष) • 2% भाड़े पर (न्यूनतम ₹100, अधिकतम ₹10,000)` : `Rule 2: Flat ≤ 5 yrs - 2% (Min ₹100, Max ₹10,000)`;
        } else {
          const rentDuty = roundUp10((3 * leaseAar) * 0.02);
          const premDuty = (leaseMode === 'both') ? roundUp10(leasePremium * 0.02) : 0;
          leaseStamp = rentDuty + premDuty;
          leaseStampRuleText = currentLang === 'hi' ? `नियम 2: अवधि 1-5 वर्ष • 3× औसत वार्षिक भाड़े पर 2%${premDuty > 0 ? ' + प्रीमियम पर 2%' : ''}` : `Rule 2: Term 1-5 yrs - 2% on 3× AAR${premDuty > 0 ? ' + 2% on Premium' : ''}`;
        }
      } else if (leaseYears <= 10) {
        const rentDuty = roundUp10((4 * leaseAar) * 0.02);
        const premDuty = (leaseMode === 'both') ? roundUp10(leasePremium * 0.02) : 0;
        leaseStamp = rentDuty + premDuty;
        leaseStampRuleText = currentLang === 'hi' ? `नियम 3: अवधि 5-10 वर्ष • 4× औसत वार्षिक भाड़े पर 2%${premDuty > 0 ? ' + प्रीमियम पर 2%' : ''}` : `Rule 3: Term 5-10 yrs - 2% on 4× AAR${premDuty > 0 ? ' + 2% on Premium' : ''}`;
      } else if (leaseYears <= 20) {
        const rentDuty = roundUp10((5 * leaseAar) * 0.02);
        const premDuty = (leaseMode === 'both') ? roundUp10(leasePremium * 0.02) : 0;
        leaseStamp = rentDuty + premDuty;
        leaseStampRuleText = currentLang === 'hi' ? `नियम 4: अवधि 10-20 वर्ष • 5× औसत वार्षिक भाड़े पर 2%${premDuty > 0 ? ' + प्रीमियम पर 2%' : ''}` : `Rule 4: Term 10-20 yrs - 2% on 5× AAR${premDuty > 0 ? ' + 2% on Premium' : ''}`;
      } else if (leaseYears <= 30) {
        const rentDuty = roundUp10((6 * leaseAar) * 0.02);
        const premDuty = (leaseMode === 'both') ? roundUp10(leasePremium * 0.02) : 0;
        leaseStamp = rentDuty + premDuty;
        leaseStampRuleText = currentLang === 'hi' ? `नियम 5: अवधि 20-30 वर्ष • 6× औसत वार्षिक भाड़े पर 2%${premDuty > 0 ? ' + प्रीमियम पर 2%' : ''}` : `Rule 5: Term 20-30 yrs - 2% on 6× AAR${premDuty > 0 ? ' + 2% on Premium' : ''}`;
      } else {
        leaseStamp = roundUp10(grandTotal * 0.05);
        leaseStampRuleText = currentLang === 'hi' ? `नियम 6/8: अवधि > 30 वर्ष अथवा शाश्वत • सर्किल दर बाजार मूल्य (₹ ${grandTotal.toLocaleString('en-IN')}) पर 5%` : `Rule 6/8: Term > 30 yrs / Perpetuity - 5% on Market Value`;
      }
    }

    // Lease Registration Fee (Statutory ceiling: ₹50,000)
    if (leaseYears <= 1) {
      const consideration = (leaseAar * leaseYears) + (leaseMode !== 'rent_only' ? leasePremium : 0);
      leaseReg = Math.min(50000, roundUp10(consideration * 0.02));
      leaseRegRuleText = currentLang === 'hi' ? `निबंधन नियम 1: अवधि ≤ 1 वर्ष (2% दर • अधिकतम सीमा ₹50,000)` : `Reg Rule 1: Term ≤ 1 yr (2% • Max ₹50,000)`;
    } else if (leaseYears <= 20) {
      const consideration = leaseAar + (leaseMode !== 'rent_only' ? leasePremium : 0);
      leaseReg = Math.min(50000, roundUp10(consideration * 0.02));
      leaseRegRuleText = currentLang === 'hi' ? `निबंधन नियम 2: अवधि 1-20 वर्ष (1 वर्ष भाड़ा + अग्रिम पर 2% • अधिकतम ₹50,000)` : `Reg Rule 2: Term 1-20 yrs (2% • Max ₹50,000)`;
    } else if (leaseYears <= 90) {
      const consideration = (3 * leaseAar) + (leaseMode !== 'rent_only' ? leasePremium : 0);
      leaseReg = Math.min(50000, roundUp10(consideration * 0.02));
      leaseRegRuleText = currentLang === 'hi' ? `निबंधन नियम 3: अवधि 20-90 वर्ष (3× भाड़ा + अग्रिम पर 2% • अधिकतम ₹50,000)` : `Reg Rule 3: Term 20-90 yrs (2% • Max ₹50,000)`;
    } else {
      const consideration = (10 * leaseAar) + (leaseMode !== 'rent_only' ? leasePremium : 0);
      leaseReg = Math.min(50000, roundUp10(consideration * 0.02));
      leaseRegRuleText = currentLang === 'hi' ? `निबंधन नियम 4: अवधि > 90 वर्ष / शाश्वत (10× भाड़ा + अग्रिम पर 2% • अधिकतम ₹50,000)` : `Reg Rule 4: Term > 90 yrs (2% • Max ₹50,000)`;
    }

    const leaseTotal = leaseStamp + leaseReg;

    const elLeaseStamp = document.getElementById('valLeaseStamp');
    if (elLeaseStamp) elLeaseStamp.innerText = `₹ ${leaseStamp.toLocaleString('en-IN')}`;
    const elLeaseStampF = document.getElementById('lblLeaseStampFormula');
    if (elLeaseStampF) elLeaseStampF.innerText = leaseStampRuleText + ' • गोल ₹10';
    const elLeaseReg = document.getElementById('valLeaseReg');
    if (elLeaseReg) elLeaseReg.innerText = `₹ ${leaseReg.toLocaleString('en-IN')}`;
    const elLeaseRegF = document.getElementById('lblLeaseRegFormula');
    if (elLeaseRegF) elLeaseRegF.innerText = leaseRegRuleText + ' • गोल ₹10';
    const elLeaseTot = document.getElementById('valLeaseTotal');
    if (elLeaseTot) elLeaseTot.innerText = `₹ ${leaseTotal.toLocaleString('en-IN')}`;

    const elLeaseAppRule = document.getElementById('lblLeaseAppliedRule');
    if (elLeaseAppRule) elLeaseAppRule.innerText = currentLang === 'hi' ? `${leaseYears} वर्ष पट्टा • ${leaseStampRuleText}` : `${leaseYears} Year Lease • ${leaseStampRuleText}`;
    const bLeaseRate = document.getElementById('badgeLeaseAppliedRate');
    if (bLeaseRate) bLeaseRate.innerText = (leaseYears > 30 ? "5% Market" : "2% Rent") + " + Reg (Max 50k)";

    // ========================================================
    // 6. Dynamic Hero Total Payable Banner
    // ========================================================
    const elPayableTotal = document.getElementById('valPayableTotal');
    const elPayableSubtitle = document.getElementById('lblPayableSubtitle');

    if (elPayableTotal && elPayableSubtitle) {
      if (currentDeedType === 'sale') {
        if (activeBuyerType === 'female') {
          elPayableTotal.innerText = `₹ ${femaleTotal.toLocaleString('en-IN')}`;
          elPayableSubtitle.innerText = (currentLang === 'hi')
            ? 'महिला क्रेता प्रभार (3.75% रियायती दर • गोल ₹10)'
            : 'Female Buyer Dues (With Concession • Round ₹10)';
        } else if (activeBuyerType === 'both') {
          elPayableTotal.innerText = `₹ ${jointCombinedTotal.toLocaleString('en-IN')}`;
          elPayableSubtitle.innerText = (currentLang === 'hi')
            ? 'संयुक्त क्रेता कुल योग (महिला अंश + पुरुष अंश + एकल ₹50,000 निबंधन सीमा • गोल ₹10)'
            : 'Joint Total (Female + Male Stamp + Single ₹50k Reg Fee • Round ₹10)';
        } else {
          elPayableTotal.innerText = `₹ ${maleTotal.toLocaleString('en-IN')}`;
          elPayableSubtitle.innerText = (currentLang === 'hi')
            ? 'सामान्य / पुरुष क्रेता प्रभार (5% स्टाम्प + 2% निबंधन • गोल ₹10)'
            : 'General Buyer Dues (5% Stamp + 2% Reg • Round ₹10)';
        }
      } else if (currentDeedType === 'gift') {
        elPayableTotal.innerText = `₹ ${giftTotal.toLocaleString('en-IN')}`;
        elPayableSubtitle.innerText = (currentLang === 'hi')
          ? (isFamilyGift ? 'पारिवारिक दान विलेख (1% रियायती स्टाम्प + 2% निबंधन • गोल ₹10)' : 'सामान्य दान विलेख (5% स्टाम्प + 2% निबंधन • गोल ₹10)')
          : (isFamilyGift ? 'Family Gift Deed (1% Stamp + 2% Reg • Round ₹10)' : 'General Gift Deed (5% Stamp + 2% Reg • Round ₹10)');
      } else if (currentDeedType === 'lease') {
        elPayableTotal.innerText = `₹ ${leaseTotal.toLocaleString('en-IN')}`;
        elPayableSubtitle.innerText = (currentLang === 'hi')
          ? `पट्टा विलेख कुल प्रभार (${leaseYears} वर्ष अवधि • स्टाम्प + निबंधन • गोल ₹10)`
          : `Lease Deed Total (${leaseYears} Year Term • Stamp + Reg • Round ₹10)`;
      }
    }

    if (typeof saveFormState === 'function') {
      saveFormState();
    }

    // Keep global cache of last calculated totals for on-demand history saving
    window.lastCalculatedGrandTotal = grandTotal;
    window.lastCalculatedDues = (currentDeedType === 'sale')
      ? ((activeBuyerType === 'female') ? femaleTotal : (activeBuyerType === 'both') ? jointCombinedTotal : maleTotal)
      : (currentDeedType === 'gift' ? giftTotal : leaseTotal);

    if (typeof updateQuickTips === 'function') {
      updateQuickTips();
    }
  }
  window.recalculate = recalculate;

  // ========================================================
  // 12-B. DYNAMIC CONTEXT-AWARE QUICK TIPS & LEGAL GUIDANCE
  // ========================================================

  function updateQuickTips() {
    const container = document.getElementById('containerQuickTips');
    if (!container) return;

    const countBadge = document.getElementById('badgeQuickTipsCount');
    const isHi = (currentLang === 'hi');
    const tips = [];

    // 1. Location Selection Guidance
    if (!selectedVillage) {
      tips.push({
        type: 'location',
        badge: isHi ? 'स्थान चयन आवश्यक' : 'Location Required',
        title: isHi ? 'जिला, तहसील व ग्राम का चयन करें' : 'Select District, Tehsil & Village',
        desc: isHi
          ? 'सटीक सरकारी सर्किल दर प्राप्त करने हेतु कृपया ऊपर दिए गए ड्रॉपडाउन से ग्राम चुनें ताकि दूरी अनुसार दरें लागू हो सकें।'
          : 'Please select District, Tehsil, and Village from the dropdowns above to load the official circle rates.',
        icon: 'map-pin',
        theme: 'rose'
      });
    } else {
      const vName = isHi
        ? (selectedVillage.vname || 'ग्राम चयनित')
        : (selectedVillage.vname_eng || selectedVillage.vname || 'Village Selected');
      tips.push({
        type: 'location',
        badge: isHi ? 'सर्किल दर सक्रिय' : 'Circle Rate Active',
        title: `${isHi ? 'चयनित ग्राम:' : 'Selected Village:'} ${vName}`,
        desc: isHi
          ? `ग्राम हेतु सर्किल दरें सक्रिय हैं। भूखंड की सड़क से दूरी (0-50 मी०, 50-100 मी० आदि) के आधार पर न्यूनतम सरकारी दर स्वतः लागू होगी।`
          : `Official circle rates are loaded for this village. Minimum rates are applied according to distance from road (0-50m, 50-100m, etc.).`,
        icon: 'map-pin',
        theme: 'emerald'
      });
    }

    // 2. Deed Type & Buyer / Concession Advice
    if (currentDeedType === 'sale') {
      if (activeBuyerType === 'female') {
        tips.push({
          type: 'concession',
          badge: isHi ? '1.25% महिला छूट' : '1.25% Women Concession',
          title: isHi ? 'महिला क्रेता हेतु विशेष स्टाम्प छूट' : 'Special Stamp Concession for Women',
          desc: isHi
            ? `उत्तराखण्ड शासन की अधिसूचना के तहत महिला क्रेता को ₹${formatINR(femaleValueCeiling)} तक के संचयी मूल्य पर 5% के बजाय 3.75% स्टाम्प शुल्क का लाभ मिलता है (अधिकतम 2 संव्यवहार तक मान्य)।`
            : `Under Uttarakhand notification, female purchasers receive a 1.25% stamp concession (3.75% instead of 5%) on value up to ₹${formatINR(femaleValueCeiling)} (valid for up to 2 purchases).`,
          icon: 'shield-check',
          theme: 'emerald'
        });
      } else if (activeBuyerType === 'both') {
        const femStake = parseFloat(document.getElementById('inputFemaleStake')?.value) || 50;
        tips.push({
          type: 'concession',
          badge: isHi ? 'संयुक्त क्रेता नियम' : 'Joint Purchase Rule',
          title: isHi ? `संयुक्त खरीद (${femStake}% महिला हिस्सा)` : `Joint Purchase (${femStake}% Female Share)`,
          desc: isHi
            ? `संयुक्त स्वामित्व में घोषित हिस्से (${femStake}%) पर 3.75% रियायती दर तथा शेष पुरुष हिस्से पर 5% मानक दर से आनुपातिक स्टाम्प शुल्क आकलित होता है।`
            : `In joint ownership, 3.75% concessional duty applies to the female co-owner's share (${femStake}%), and standard 5% applies to the male co-owner's share.`,
          icon: 'users',
          theme: 'teal'
        });
      } else {
        tips.push({
          type: 'standard',
          badge: isHi ? 'मानक विक्रय विलेख' : 'Standard Sale Deed',
          title: isHi ? '5% स्टाम्प एवं 2% निबंधन शुल्क' : '5% Stamp Duty & 2% Registration Fee',
          desc: isHi
            ? `सामान्य विक्रय में कुल आकलित मूल्य पर 5% स्टाम्प शुल्क एवं 2% निबंधन शुल्क (अधिकतम सीमा ₹${formatINR(maxRegFeeCap)}) देय है।`
            : `Standard conveyance attracts 5% stamp duty and 2% registration fee (capped at maximum ₹${formatINR(maxRegFeeCap)}) on the total evaluated market value.`,
          icon: 'document',
          theme: 'blue'
        });
      }
    } else if (currentDeedType === 'gift') {
      const isFamily = (currentGiftRelation === 'family');
      if (isFamily) {
        tips.push({
          type: 'concession',
          badge: isHi ? 'पारिवारिक दान' : 'Family Gift Deed',
          title: isHi ? 'रक्त सम्बन्धी हेतु केवल 1% स्टाम्प' : '1% Concessional Stamp for Family Gift',
          desc: isHi
            ? `माता-पिता, पति-पत्नी, सन्तान, भाई-बहन आदि निकट रक्त सम्बन्धियों के मध्य अचल सम्पत्ति दान विलेख पर केवल 1% रियायती स्टाम्प शुल्क देय है।`
            : `Gift deeds executed between immediate family and blood relatives qualify for the special 1% concessional stamp duty under state rules.`,
          icon: 'gift',
          theme: 'purple'
        });
      } else {
        tips.push({
          type: 'standard',
          badge: isHi ? 'अन्य दान विलेख' : 'Non-Family Gift',
          title: isHi ? 'गैर-पारिवारिक दान पर 5% स्टाम्प शुल्क' : '5% Standard Stamp Duty for Non-Family Gift',
          desc: isHi
            ? `परिवार के बाहर किसी अन्य व्यक्ति को दान दिए जाने की दशा में सामान्य विक्रय के समान 5% स्टाम्प शुल्क लागू होता है।`
            : `Gifting real property to non-relatives or outside the family attracts standard 5% stamp duty equivalent to a regular sale conveyance.`,
          icon: 'document',
          theme: 'indigo'
        });
      }
    } else if (currentDeedType === 'lease') {
      const leaseYrs = parseInt(document.getElementById('inputLeaseYears')?.value || "1", 10) || 1;
      let leaseText = "";
      if (leaseYrs <= 1) {
        leaseText = isHi
          ? `1 वर्ष तक की पट्टा अवधि (नियम 1) में कुल देय किराये + प्रीमियम का 2% स्टाम्प शुल्क देय होता है।`
          : `For lease up to 1 year (Rule 1), 2% stamp duty is levied on the total rent plus premium.`;
      } else if (leaseYrs <= 5) {
        leaseText = isHi
          ? `1 से 5 वर्ष की पट्टा अवधि (नियम 2) में 1 वर्ष के औसत वार्षिक किराये (AAR) का 2% स्टाम्प शुल्क देय है।`
          : `For lease of 1 to 5 years (Rule 2), 2% stamp duty is charged on the Average Annual Rent (AAR).`;
      } else if (leaseYrs <= 10) {
        leaseText = isHi
          ? `5 से 10 वर्ष की पट्टा अवधि (नियम 3) में 1 वर्ष के औसत वार्षिक किराये (AAR) का 3% स्टाम्प शुल्क देय है।`
          : `For lease of 5 to 10 years (Rule 3), 3% stamp duty is charged on the Average Annual Rent (AAR).`;
      } else if (leaseYrs <= 20) {
        leaseText = isHi
          ? `10 से 20 वर्ष की पट्टा अवधि (नियम 4) में 1 वर्ष के औसत वार्षिक किराये (AAR) का 5% स्टाम्प शुल्क देय है।`
          : `For lease of 10 to 20 years (Rule 4), 5% stamp duty is charged on the Average Annual Rent (AAR).`;
      } else if (leaseYrs <= 30) {
        leaseText = isHi
          ? `20 से 30 वर्ष की पट्टा अवधि (नियम 5) में 3 वर्ष के औसत वार्षिक किराये (3× AAR) पर 5% स्टाम्प शुल्क देय है।`
          : `For lease of 20 to 30 years (Rule 5), 5% stamp duty is charged on 3× Average Annual Rent.`;
      } else {
        leaseText = isHi
          ? `30 वर्ष से अधिक अथवा शाश्वत पट्टा (नियम 6–7) में सम्पत्ति के कुल बाजार मूल्य एवं प्रीमियम पर विक्रय विलेख की भांति 5% स्टाम्प शुल्क आकलित होता है।`
          : `For perpetual leases or terms exceeding 30 years, 5% stamp duty is charged on property market value + advance premium like a sale conveyance.`;
      }
      tips.push({
        type: 'lease',
        badge: isHi ? `पट्टा अवधि: ${leaseYrs} वर्ष` : `Lease Term: ${leaseYrs} Yr(s)`,
        title: isHi ? 'पट्टा अवधि अनुसार विधिक स्टाम्प नियम' : 'Duration-Based Lease Stamp Rule',
        desc: leaseText,
        icon: 'clock',
        theme: 'blue'
      });
    }

    // 3. Road Width Surcharge Advice (Contextual to roadWidth state)
    if (roadWidth >= 15.0) {
      tips.push({
        type: 'warning',
        badge: isHi ? '+15% सड़क अधिभार' : '+15% Road Surcharge',
        title: isHi ? `मुख्य चौड़ा मार्ग (${roadWidth} मी०)` : `≥ 15m Major Roadway (${roadWidth}m)`,
        desc: isHi
          ? `सड़क की चौड़ाई 15 मीटर या अधिक होने पर सर्किल दर नियमावली के तहत भूमि की दर पर 15% का सड़क अधिभार जोड़ा जा रहा है।`
          : `Approach road ≥ 15m incurs a statutory +15% road width surcharge on base land circle rates.`,
        icon: 'road',
        theme: 'amber'
      });
    } else if (roadWidth >= 12.0) {
      tips.push({
        type: 'warning',
        badge: isHi ? '+10% सड़क अधिभार' : '+10% Road Surcharge',
        title: isHi ? `12–15 मीटर चौड़ा मार्ग (${roadWidth} मी०)` : `12m to 15m Approach (${roadWidth}m)`,
        desc: isHi
          ? `सड़क की चौड़ाई 12 से 15 मीटर श्रेणी में होने पर भूमि मूल्यांकन पर 10% का अतिरिक्त सड़क अधिभार जोड़ा जा रहा है।`
          : `Approach road of 12m–15m incurs a +10% road width surcharge on base land valuation.`,
        icon: 'road',
        theme: 'amber'
      });
    } else if (roadWidth >= 5.0) {
      tips.push({
        type: 'warning',
        badge: isHi ? '+5% सड़क अधिभार' : '+5% Road Surcharge',
        title: isHi ? `5–12 मीटर मार्ग (${roadWidth} मी०)` : `5m to 12m Approach (${roadWidth}m)`,
        desc: isHi
          ? `सड़क की चौड़ाई 5 से 12 मीटर श्रेणी में होने पर भूमि मूल्यांकन पर 5% का सड़क अधिभार लागू हो रहा है।`
          : `Approach road of 5m–12m incurs a +5% road width surcharge on base land valuation.`,
        icon: 'road',
        theme: 'amber'
      });
    } else {
      tips.push({
        type: 'info',
        badge: isHi ? 'मानक मार्ग (0% अधिभार)' : 'Standard (0% Surcharge)',
        title: isHi ? `सामान्य मार्ग (${roadWidth} मी०)` : `Standard Approach Road (${roadWidth}m)`,
        desc: isHi
          ? `सड़क चौड़ाई 5 मीटर से कम होने के कारण कोई अतिरिक्त सड़क अधिभार नहीं लगता; मूल सर्किल दर प्रभावी है।`
          : `Road width under 5 meters attracts 0% road surcharge; standard circle rates apply.`,
        icon: 'road',
        theme: 'slate'
      });
    }

    // 4. Registration Fee Cap Alert or Estimation
    const grandTotalEl = document.getElementById('displayGrandTotal') || document.getElementById('liveValuationPreview');
    const grandTotalVal = grandTotalEl ? (parseFloat(grandTotalEl.innerText.replace(/[^\d.]/g, '')) || 0) : 0;

    if (grandTotalVal >= 2500000) {
      tips.push({
        type: 'cap',
        badge: isHi ? 'निबंधन शुल्क कैपिंग' : 'Fee Ceiling Reached',
        title: isHi ? `निबंधन शुल्क ₹${formatINR(maxRegFeeCap)} पर सीमित` : `Registration Fee Capped at ₹${formatINR(maxRegFeeCap)}`,
        desc: isHi
          ? `सम्पत्ति का कुल मूल्यांकन ₹25 लाख से अधिक होने पर 2% के स्थान पर नियमानुसार अधिकतम विधिक सीमा ₹${formatINR(maxRegFeeCap)} ही प्रभावी होगी।`
          : `Because total valuation exceeds ₹25 Lakhs, registration fee is capped at the statutory ceiling of ₹${formatINR(maxRegFeeCap)}.`,
        icon: 'lock',
        theme: 'teal'
      });
    } else if (grandTotalVal > 0) {
      const regFeeEst = Math.round(grandTotalVal * 0.02);
      tips.push({
        type: 'info',
        badge: isHi ? '2% निबंधन शुल्क' : '2% Registration Fee',
        title: isHi ? `अनुमानित निबंधन शुल्क: ₹${formatINR(regFeeEst)}` : `Estimated Reg Fee: ₹${formatINR(regFeeEst)}`,
        desc: isHi
          ? `मूल्यांकन ₹25 लाख से कम होने पर कुल बाजार मूल्य का 2% निबंधन शुल्क देय है।`
          : `For valuation under ₹25 Lakhs, a flat 2% registration fee applies to the evaluated property value.`,
        icon: 'lock',
        theme: 'blue'
      });
    }

    // 5. Land & Building Construction Guidance
    const hasBuildings = Array.isArray(buildingComponents) && buildingComponents.some(b => (parseFloat(b.coveredArea) || 0) > 0);
    const hasLand = Array.isArray(landSegments) && landSegments.some(s => (parseFloat(s.area) || 0) > 0);

    if (hasBuildings) {
      tips.push({
        type: 'building',
        badge: isHi ? 'भवन व खुली भूमि' : 'Built Structure & Open Land',
        title: isHi ? 'भूतल निर्मित क्षेत्र व शेष खुली भूमि' : 'Footprint & Residual Land',
        desc: isHi
          ? `भवन के भूतल आच्छादित क्षेत्रफल को कुल भूमि से घटाकर शेष खुली भूमि (Open Land) पर मानक सर्किल दर से अतिरिक्त मूल्यांकन जोड़ा जाता है।`
          : `Ground floor footprint is deducted from total plot area, and residual open land is calculated at circle rate.`,
        icon: 'building',
        theme: 'indigo'
      });
    } else if (hasLand) {
      tips.push({
        type: 'land',
        badge: isHi ? 'रिक्त भूखंड' : 'Vacant Plot',
        title: isHi ? 'केवल भूमि का मूल्यांकन' : 'Vacant Land Evaluation',
        desc: isHi
          ? `वर्तमान गणना में केवल भूमि का मूल्यांकन हो रहा है। यदि भूखंड पर कोई पक्का/कच्चा निर्माण अथवा बहुमंजिला भवन है, तो 'भवन निर्माण' में घटक जोड़ें।`
          : `Currently evaluating land only. If there is any RCC/pucca/kaccha construction or multiple floors, add components in the Building section.`,
        icon: 'grid',
        theme: 'slate'
      });
    }

    // Update count badge
    if (countBadge) {
      countBadge.innerText = isHi ? `${tips.length} सक्रिय सुझाव` : `${tips.length} Active Tips`;
    }

    // Render tip cards
    let html = '';
    tips.forEach(tip => {
      const themeColors = {
        emerald: {
          bg: 'bg-emerald-50/80 dark:bg-emerald-500/10',
          border: 'border-emerald-200/90 dark:border-emerald-500/25',
          badgeBg: 'bg-emerald-100 dark:bg-emerald-500/20',
          badgeText: 'text-emerald-800 dark:text-emerald-300',
          titleText: 'text-emerald-950 dark:text-emerald-200',
          iconBg: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
        },
        teal: {
          bg: 'bg-teal-50/80 dark:bg-teal-500/10',
          border: 'border-teal-200/90 dark:border-teal-500/25',
          badgeBg: 'bg-teal-100 dark:bg-teal-500/20',
          badgeText: 'text-teal-800 dark:text-teal-300',
          titleText: 'text-teal-950 dark:text-teal-200',
          iconBg: 'bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300'
        },
        blue: {
          bg: 'bg-blue-50/80 dark:bg-blue-500/10',
          border: 'border-blue-200/90 dark:border-blue-500/25',
          badgeBg: 'bg-blue-100 dark:bg-blue-500/20',
          badgeText: 'text-blue-800 dark:text-blue-300',
          titleText: 'text-blue-950 dark:text-blue-200',
          iconBg: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
        },
        purple: {
          bg: 'bg-purple-50/80 dark:bg-purple-500/10',
          border: 'border-purple-200/90 dark:border-purple-500/25',
          badgeBg: 'bg-purple-100 dark:bg-purple-500/20',
          badgeText: 'text-purple-800 dark:text-purple-300',
          titleText: 'text-purple-950 dark:text-purple-200',
          iconBg: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300'
        },
        indigo: {
          bg: 'bg-indigo-50/80 dark:bg-indigo-500/10',
          border: 'border-indigo-200/90 dark:border-indigo-500/25',
          badgeBg: 'bg-indigo-100 dark:bg-indigo-500/20',
          badgeText: 'text-indigo-800 dark:text-indigo-300',
          titleText: 'text-indigo-950 dark:text-indigo-200',
          iconBg: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300'
        },
        amber: {
          bg: 'bg-amber-50/80 dark:bg-amber-500/10',
          border: 'border-amber-200/90 dark:border-amber-500/25',
          badgeBg: 'bg-amber-100 dark:bg-amber-500/20',
          badgeText: 'text-amber-800 dark:text-amber-300',
          titleText: 'text-amber-950 dark:text-amber-200',
          iconBg: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300'
        },
        rose: {
          bg: 'bg-rose-50/80 dark:bg-rose-500/10',
          border: 'border-rose-200/90 dark:border-rose-500/25',
          badgeBg: 'bg-rose-100 dark:bg-rose-500/20',
          badgeText: 'text-rose-800 dark:text-rose-300',
          titleText: 'text-rose-950 dark:text-rose-200',
          iconBg: 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300'
        },
        slate: {
          bg: 'bg-slate-50/80 dark:bg-slate-800/60',
          border: 'border-slate-200 dark:border-slate-700/60',
          badgeBg: 'bg-slate-100 dark:bg-slate-700',
          badgeText: 'text-slate-800 dark:text-slate-200',
          titleText: 'text-slate-900 dark:text-slate-100',
          iconBg: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
        }
      }[tip.theme] || {
        bg: 'bg-slate-50/80 dark:bg-slate-800/60',
        border: 'border-slate-200 dark:border-slate-700/60',
        badgeBg: 'bg-slate-100 dark:bg-slate-700',
        badgeText: 'text-slate-800 dark:text-slate-200',
        titleText: 'text-slate-900 dark:text-white',
        iconBg: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
      };

      let iconSvg = '';
      if (tip.icon === 'shield-check') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;
      } else if (tip.icon === 'users') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
      } else if (tip.icon === 'gift') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V4.5a2.5 2.5 0 115 0V8m-5 0H7.5a2.5 2.5 0 110-5C9.07 3 11 4.5 12 8zm0 0h5m-5 0v13m5-13h3a2 2 0 012 2v2a2 2 0 01-2 2h-3v-6zm-5 6v7m0 0H4a2 2 0 01-2-2v-2a2 2 0 012-2h3v6z"/></svg>`;
      } else if (tip.icon === 'clock') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
      } else if (tip.icon === 'road') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`;
      } else if (tip.icon === 'lock') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`;
      } else if (tip.icon === 'map-pin') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`;
      } else if (tip.icon === 'building') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`;
      } else if (tip.icon === 'grid') {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`;
      } else {
        iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`;
      }

      html += `
        <div class="p-3.5 rounded-xl border ${themeColors.border} ${themeColors.bg} flex items-start space-x-3 transition-all hover:shadow-xs">
          <div class="w-7 h-7 rounded-lg ${themeColors.iconBg} flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            ${iconSvg}
          </div>
          <div class="min-w-0 flex-1 space-y-1">
            <div class="flex items-center justify-between gap-1.5 flex-wrap">
              <span class="text-xs font-black ${themeColors.titleText} leading-snug">${tip.title}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${themeColors.badgeBg} ${themeColors.badgeText} shrink-0">${tip.badge}</span>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">${tip.desc}</p>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }
  window.updateQuickTips = updateQuickTips;

  // ========================================================
  // 12A. VALUATION HISTORY ENGINE (EXPLICIT USER SAVE BUTTON BACKED)
  // ========================================================

  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    const isError = (type === 'error' || type === 'warning');
    const bgClass = isError
      ? 'bg-amber-900/95 border-amber-500 text-amber-100'
      : 'bg-slate-900/95 border-teal-500 text-white';

    toast.className = `${bgClass} backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border text-xs font-bold pointer-events-auto flex items-center space-x-2 transition-all duration-300 transform -translate-y-2 opacity-0`;

    const iconSvg = isError
      ? `<svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`
      : `<svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('-translate-y-2', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2800);
  }
  window.showToast = showToast;

  function updateHistoryBadge() {
    const badge = document.getElementById('badgeNavHistory');
    if (!badge) return;
    try {
      const saved = localStorage.getItem('circle_rate_history');
      const list = saved ? JSON.parse(saved) : [];
      const count = Array.isArray(list) ? list.length : 0;
      if (count > 0) {
        badge.innerText = count > 99 ? '99+' : count;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    } catch (e) {
      badge.classList.add('hidden');
    }
  }
  window.updateHistoryBadge = updateHistoryBadge;

  function flashSaveButtons() {
    const buttons = [
      document.getElementById('btnSaveToHistory'),
      document.getElementById('btnSaveToHistoryBottom'),
      document.getElementById('btnQuickSaveCalc'),
      document.getElementById('btnSaveActiveInHistory')
    ];
    buttons.forEach(b => {
      if (!b) return;
      const originalHtml = b.innerHTML;
      b.classList.add('ring-2', 'ring-teal-400');
      const span = b.querySelector('span');
      const prevSpanText = span ? span.innerText : '';
      if (span) span.innerText = (currentLang === 'hi' ? '✓ सुरक्षित!' : '✓ Saved!');

      setTimeout(() => {
        b.classList.remove('ring-2', 'ring-teal-400');
        if (span && prevSpanText) span.innerText = prevSpanText;
      }, 1600);
    });
  }

  // Comprehensive Statutory Dues Resolver for UI, PDF/PNG/JPEG Canvas, and History
  function getCalculatedDuesSummary() {
    // 1. Get current grand total market value
    let grandTotal = 0;
    const grandTotalEl = document.getElementById('displayGrandTotal');
    if (grandTotalEl) {
      const parsed = parseFloat(grandTotalEl.innerText.replace(/[^\d.]/g, ''));
      if (!isNaN(parsed) && parsed > 0) grandTotal = parsed;
    }
    if (grandTotal <= 0 && window.lastCalculatedGrandTotal) {
      grandTotal = window.lastCalculatedGrandTotal;
    }

    const deed = currentDeedType || 'sale';
    const buyer = activeBuyerType || 'general';

    let stampNum = 0;
    let stampVal = '₹ 0';
    let stampFormula = '';
    let regNum = 0;
    let regVal = '₹ 0';
    let regFormula = '';
    let totalNum = 0;
    let totalVal = '₹ 0';
    let totalSubtitle = '';
    let categoryLabel = '';
    let savingsNote = '';

    if (deed === 'sale') {
      if (buyer === 'both') {
        // Joint Buyer (Male + Female)
        const fPctInput = document.getElementById('inputFemaleStake');
        const fPct = fPctInput ? Math.min(99, Math.max(1, parseFloat(fPctInput.value) || 50)) : 50;
        const mPct = 100 - fPct;

        // Try reading calculated values from DOM first
        const elMStamp = document.getElementById('valMaleStamp');
        const elFStamp = document.getElementById('valFemaleStamp');
        const elPayable = document.getElementById('valPayableTotal');

        let mStampVal = elMStamp ? parseFloat(elMStamp.innerText.replace(/[^\d.]/g, '')) : 0;
        let fStampVal = elFStamp ? parseFloat(elFStamp.innerText.replace(/[^\d.]/g, '')) : 0;

        // Fallback computation if DOM not populated yet
        if (!mStampVal || !fStampVal) {
          const fBase = roundUp1000(grandTotal * (fPct / 100));
          const mBase = grandTotal - fBase;
          mStampVal = roundUp10(mBase * 0.05);

          const chkFemale = document.getElementById('chkFemaleEligible');
          const priorCount = parseInt(document.getElementById('selPriorPurchaseCount')?.value || "0", 10) || 0;
          const priorUsed = parseFloat(document.getElementById('inputPriorValueUsed')?.value || "0") || 0;
          const isEligible = chkFemale ? (chkFemale.checked && priorCount < 2) : true;
          const remCeiling = Math.max(0, (femaleValueCeiling || 2500000) - priorUsed);

          if (!isEligible || remCeiling <= 0) {
            fStampVal = roundUp10(fBase * 0.05);
          } else if (fBase <= remCeiling) {
            fStampVal = roundUp10(fBase * 0.0375);
          } else {
            fStampVal = roundUp10((remCeiling * 0.0375) + ((fBase - remCeiling) * 0.05));
          }
        }

        stampNum = mStampVal + fStampVal;
        stampVal = '₹ ' + stampNum.toLocaleString('en-IN');
        stampFormula = currentLang === 'hi'
          ? `महिला अंश (${fPct}%): ₹ ${fStampVal.toLocaleString('en-IN')} + पुरुष अंश (${mPct}%): ₹ ${mStampVal.toLocaleString('en-IN')}`
          : `Female Share (${fPct}%): ₹ ${fStampVal.toLocaleString('en-IN')} + Male Share (${mPct}%): ₹ ${mStampVal.toLocaleString('en-IN')}`;

        // Registration fee for joint: single cap of maxRegFeeCap (₹50,000)
        regNum = Math.min(maxRegFeeCap || 50000, roundUp10(grandTotal * 0.02));
        regVal = '₹ ' + regNum.toLocaleString('en-IN');
        regFormula = currentLang === 'hi'
          ? 'संयुक्त विलेख एकल निबंधन (2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10)'
          : 'Joint Deed Single Reg Fee (2% • Max Cap ₹50,000 • Round ₹10)';

        totalNum = stampNum + regNum;
        if (elPayable) {
          const pVal = parseFloat(elPayable.innerText.replace(/[^\d.]/g, ''));
          if (pVal > 0) totalNum = pVal;
        }
        totalVal = '₹ ' + totalNum.toLocaleString('en-IN');
        totalSubtitle = currentLang === 'hi'
          ? `संयुक्त क्रेता कुल योग (महिला ${fPct}% + पुरुष ${mPct}% स्टाम्प + एकल निबंधन)`
          : `Joint Total (Female ${fPct}% + Male ${mPct}% Stamp + Single Reg Fee)`;
        categoryLabel = currentLang === 'hi'
          ? `विक्रय विलेख - संयुक्त क्रेता (महिला ${fPct}% + पुरुष ${mPct}%)`
          : `Sale Deed - Joint Buyer (Female ${fPct}% + Male ${mPct}%)`;

        const elSaving = document.getElementById('femaleSavingDisplay');
        if (elSaving && elSaving.innerText && !elSaving.innerText.includes('₹ 0')) {
          savingsNote = elSaving.innerText.replace('✓', '').trim();
        }
      } else if (buyer === 'female') {
        // Female Buyer
        const elFStamp = document.getElementById('valFemaleStamp');
        const elFReg = document.getElementById('valFemaleReg');
        const elFTotal = document.getElementById('valFemaleTotal') || document.getElementById('valPayableTotal');
        const elFormula = document.getElementById('femaleStampFormula');
        const elRegFormula = document.getElementById('lblFemaleRegFormula');

        let sVal = elFStamp ? parseFloat(elFStamp.innerText.replace(/[^\d.]/g, '')) : 0;
        let rVal = elFReg ? parseFloat(elFReg.innerText.replace(/[^\d.]/g, '')) : 0;
        let tVal = elFTotal ? parseFloat(elFTotal.innerText.replace(/[^\d.]/g, '')) : 0;

        if (!sVal) {
          const chkFemale = document.getElementById('chkFemaleEligible');
          const priorCount = parseInt(document.getElementById('selPriorPurchaseCount')?.value || "0", 10) || 0;
          const priorUsed = parseFloat(document.getElementById('inputPriorValueUsed')?.value || "0") || 0;
          const isEligible = chkFemale ? (chkFemale.checked && priorCount < 2) : true;
          const remCeiling = Math.max(0, (femaleValueCeiling || 2500000) - priorUsed);

          if (!isEligible || remCeiling <= 0) {
            sVal = roundUp10(grandTotal * 0.05);
          } else if (grandTotal <= remCeiling) {
            sVal = roundUp10(grandTotal * 0.0375);
          } else {
            sVal = roundUp10((remCeiling * 0.0375) + ((grandTotal - remCeiling) * 0.05));
          }
        }
        if (!rVal) {
          rVal = Math.min(maxRegFeeCap || 50000, roundUp10(grandTotal * 0.02));
        }
        if (!tVal) {
          tVal = sVal + rVal;
        }

        stampNum = sVal;
        stampVal = '₹ ' + stampNum.toLocaleString('en-IN');
        stampFormula = (elFormula && elFormula.innerText) ? elFormula.innerText.trim() : (currentLang === 'hi' ? '3.75% रियायती दर (₹25 लाख सीमा तक) • गोल ₹10' : '3.75% Concession Rate (Up to ₹25 Lakh) • Round ₹10');

        regNum = rVal;
        regVal = '₹ ' + regNum.toLocaleString('en-IN');
        regFormula = (elRegFormula && elRegFormula.innerText) ? elRegFormula.innerText.trim() : (currentLang === 'hi' ? '2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10' : '2% Rate • Max Cap ₹50,000 • Round ₹10');

        totalNum = tVal;
        totalVal = '₹ ' + totalNum.toLocaleString('en-IN');
        totalSubtitle = currentLang === 'hi' ? 'महिला क्रेता प्रभार (3.75% रियायती दर + 2% निबंधन • गोल ₹10)' : 'Female Buyer Dues (3.75% Concession + 2% Reg • Round ₹10)';
        categoryLabel = currentLang === 'hi' ? 'विक्रय विलेख - महिला क्रेता (3.75% रियायती दर)' : 'Sale Deed - Female Buyer (3.75% Concession)';

        const elSaving = document.getElementById('femaleSavingDisplay');
        if (elSaving && elSaving.innerText && !elSaving.innerText.includes('₹ 0')) {
          savingsNote = elSaving.innerText.replace('✓', '').trim();
        }
      } else {
        // General / Male Buyer
        const elMStamp = document.getElementById('valMaleStamp');
        const elMReg = document.getElementById('valMaleReg');
        const elMTotal = document.getElementById('valMaleTotal') || document.getElementById('valPayableTotal');
        const elFormula = document.getElementById('lblMaleStampFormula');
        const elRegFormula = document.getElementById('lblMaleRegFormula');

        let sVal = elMStamp ? parseFloat(elMStamp.innerText.replace(/[^\d.]/g, '')) : 0;
        let rVal = elMReg ? parseFloat(elMReg.innerText.replace(/[^\d.]/g, '')) : 0;
        let tVal = elMTotal ? parseFloat(elMTotal.innerText.replace(/[^\d.]/g, '')) : 0;

        if (!sVal) sVal = roundUp10(grandTotal * 0.05);
        if (!rVal) rVal = Math.min(maxRegFeeCap || 50000, roundUp10(grandTotal * 0.02));
        if (!tVal) tVal = sVal + rVal;

        stampNum = sVal;
        stampVal = '₹ ' + stampNum.toLocaleString('en-IN');
        stampFormula = (elFormula && elFormula.innerText) ? elFormula.innerText.trim() : (currentLang === 'hi' ? '5% मानक दर • गोल ₹10' : '5% Standard Rate • Round ₹10');

        regNum = rVal;
        regVal = '₹ ' + regNum.toLocaleString('en-IN');
        regFormula = (elRegFormula && elRegFormula.innerText) ? elRegFormula.innerText.trim() : (currentLang === 'hi' ? '2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10' : '2% Rate • Max Cap ₹50,000 • Round ₹10');

        totalNum = tVal;
        totalVal = '₹ ' + totalNum.toLocaleString('en-IN');
        totalSubtitle = currentLang === 'hi' ? 'सामान्य / पुरुष क्रेता प्रभार (5% स्टाम्प + 2% निबंधन • गोल ₹10)' : 'General / Male Buyer Dues (5% Stamp + 2% Reg • Round ₹10)';
        categoryLabel = currentLang === 'hi' ? 'विक्रय विलेख - सामान्य / पुरुष क्रेता (5% + 2%)' : 'Sale Deed - General / Male Buyer (5% + 2%)';
      }
    } else if (deed === 'gift') {
      const isFam = (currentGiftRelation === 'family');
      const elGStamp = document.getElementById('valGiftStamp');
      const elGReg = document.getElementById('valGiftReg');
      const elGTotal = document.getElementById('valGiftTotal') || document.getElementById('valPayableTotal');
      const elFormula = document.getElementById('lblGiftStampFormula');
      const elRegFormula = document.getElementById('lblGiftRegFormula');

      let sVal = elGStamp ? parseFloat(elGStamp.innerText.replace(/[^\d.]/g, '')) : 0;
      let rVal = elGReg ? parseFloat(elGReg.innerText.replace(/[^\d.]/g, '')) : 0;
      let tVal = elGTotal ? parseFloat(elGTotal.innerText.replace(/[^\d.]/g, '')) : 0;

      if (!sVal) sVal = roundUp10(grandTotal * (isFam ? 0.01 : 0.05));
      if (!rVal) rVal = Math.min(maxRegFeeCap || 50000, roundUp10(grandTotal * 0.02));
      if (!tVal) tVal = sVal + rVal;

      stampNum = sVal;
      stampVal = '₹ ' + stampNum.toLocaleString('en-IN');
      stampFormula = (elFormula && elFormula.innerText) ? elFormula.innerText.trim() : (isFam ? (currentLang === 'hi' ? '1% पारिवारिक रियायती दर • गोल ₹10' : '1% Family Concession Rate • Round ₹10') : (currentLang === 'hi' ? '5% सामान्य दर • गोल ₹10' : '5% Standard Rate • Round ₹10'));

      regNum = rVal;
      regVal = '₹ ' + regNum.toLocaleString('en-IN');
      regFormula = (elRegFormula && elRegFormula.innerText) ? elRegFormula.innerText.trim() : (currentLang === 'hi' ? '2% दर • अधिकतम सीमा ₹50,000 • गोल ₹10' : '2% Rate • Max Cap ₹50,000 • Round ₹10');

      totalNum = tVal;
      totalVal = '₹ ' + totalNum.toLocaleString('en-IN');
      totalSubtitle = isFam 
        ? (currentLang === 'hi' ? 'पारिवारिक दान विलेख (1% स्टाम्प + 2% निबंधन • गोल ₹10)' : 'Family Gift Deed (1% Stamp + 2% Reg • Round ₹10)')
        : (currentLang === 'hi' ? 'सामान्य दान विलेख (5% स्टाम्प + 2% निबंधन • गोल ₹10)' : 'General Gift Deed (5% Stamp + 2% Reg • Round ₹10)');
      categoryLabel = isFam 
        ? (currentLang === 'hi' ? 'दान विलेख (पारिवारिक / रक्त सम्बन्धी 1%)' : 'Gift Deed (Family / Blood Relation 1%)')
        : (currentLang === 'hi' ? 'दान विलेख (सामान्य 5%)' : 'Gift Deed (General 5%)');

      const elGiftSav = document.getElementById('giftSavingDisplay');
      if (elGiftSav && elGiftSav.innerText && !elGiftSav.innerText.includes('₹ 0')) {
        savingsNote = elGiftSav.innerText.replace('✓', '').trim();
      }
    } else if (deed === 'lease') {
      const leaseYrs = parseFloat(document.getElementById('inputLeaseYears')?.value) || 1;
      const elLStamp = document.getElementById('valLeaseStamp');
      const elLReg = document.getElementById('valLeaseReg');
      const elLTotal = document.getElementById('valLeaseTotal') || document.getElementById('valPayableTotal');
      const elFormula = document.getElementById('lblLeaseStampFormula');
      const elRegFormula = document.getElementById('lblLeaseRegFormula');

      let sVal = elLStamp ? parseFloat(elLStamp.innerText.replace(/[^\d.]/g, '')) : 0;
      let rVal = elLReg ? parseFloat(elLReg.innerText.replace(/[^\d.]/g, '')) : 0;
      let tVal = elLTotal ? parseFloat(elLTotal.innerText.replace(/[^\d.]/g, '')) : 0;

      stampNum = sVal;
      stampVal = '₹ ' + stampNum.toLocaleString('en-IN');
      stampFormula = (elFormula && elFormula.innerText) ? elFormula.innerText.trim() : (currentLang === 'hi' ? `पट्टा नियमावली अनुसार (${leaseYrs} वर्ष) • गोल ₹10` : `Per Lease Schedule (${leaseYrs} Yrs) • Round ₹10`);

      regNum = rVal;
      regVal = '₹ ' + regNum.toLocaleString('en-IN');
      regFormula = (elRegFormula && elRegFormula.innerText) ? elRegFormula.innerText.trim() : (currentLang === 'hi' ? 'पट्टा निबंधन नियमावली अनुसार (अधिकतम ₹50,000)' : 'Per Lease Reg Rules (Max ₹50,000)');

      totalNum = tVal || (stampNum + regNum);
      totalVal = '₹ ' + totalNum.toLocaleString('en-IN');
      totalSubtitle = currentLang === 'hi' ? `पट्टा विलेख कुल प्रभार (${leaseYrs} वर्ष अवधि • स्टाम्प + निबंधन • गोल ₹10)` : `Lease Deed Total (${leaseYrs} Yrs • Stamp + Reg • Round ₹10)`;
      categoryLabel = currentLang === 'hi' ? `पट्टा विलेख (${leaseYrs} वर्ष अवधि)` : `Lease Deed (${leaseYrs} Year Term)`;
    }

    return {
      deedType: deed,
      buyerType: buyer,
      grandTotal: grandTotal,
      grandTotalVal: '₹ ' + grandTotal.toLocaleString('en-IN'),
      stampNum: stampNum,
      stampVal: stampVal,
      stampFormula: stampFormula,
      regNum: regNum,
      regVal: regVal,
      regFormula: regFormula,
      totalNum: totalNum,
      totalVal: totalVal,
      totalSubtitle: totalSubtitle,
      categoryLabel: categoryLabel,
      savingsNote: savingsNote
    };
  }
  window.getCalculatedDuesSummary = getCalculatedDuesSummary;

  function saveValuationToHistory() {
    try {
      const dVal = document.getElementById('districtSelect')?.value || savedSelectedDistrict || "";
      const tVal = document.getElementById('tehsilSelect')?.value || savedSelectedTehsil || "";
      const vName = selectedVillage ? selectedVillage.vname : "";
      const vNameEng = selectedVillage ? (selectedVillage.vname_eng || selectedVillage.vname) : "";

      const grandTotalEl = document.getElementById('displayGrandTotal');
      let grandTotal = 0;
      if (grandTotalEl) {
        const text = grandTotalEl.innerText.replace(/[^\d.]/g, '');
        grandTotal = parseFloat(text) || 0;
      }
      if (grandTotal <= 0 && window.lastCalculatedGrandTotal) {
        grandTotal = window.lastCalculatedGrandTotal;
      }

      // Compute precise breakdown of statutory dues for history storage
      const dues = getCalculatedDuesSummary();
      let totalDues = dues.totalNum || 0;
      if (totalDues <= 0 && window.lastCalculatedDues) {
        totalDues = window.lastCalculatedDues;
      }

      const hasLand = Array.isArray(landSegments) && landSegments.some(s => (parseFloat(s.area) || 0) > 0);
      const hasBldg = Array.isArray(buildingComponents) && buildingComponents.some(b => (parseFloat(b.coveredArea) || 0) > 0);

      if (!vName && !hasLand && !hasBldg && grandTotal <= 0) {
        showToast(currentLang === 'hi'
          ? 'कृपया पहले संपत्ति एवं मूल्यांकन विवरण दर्ज करें।'
          : 'Please enter property and valuation details first.', 'warning');
        return false;
      }

      const now = new Date();
      const timestampStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
                           now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

      const historyEntry = {
        id: 'hist_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        timestamp: Date.now(),
        formattedDate: timestampStr,
        district: dVal,
        tehsil: tVal,
        villageName: vName,
        villageNameEng: vNameEng,
        grandTotal: grandTotal,
        totalDues: totalDues,
        totalDuesFormatted: dues.totalVal,
        stampDuty: dues.stampVal,
        stampDutyNum: dues.stampNum,
        stampFormula: dues.stampFormula,
        regFee: dues.regVal,
        regFeeNum: dues.regNum,
        regFormula: dues.regFormula,
        categoryLabel: dues.categoryLabel,
        savingsNote: dues.savingsNote,
        deedType: currentDeedType,
        giftRelation: currentGiftRelation,
        buyerType: activeBuyerType,
        roadWidth: roadWidth,
        landSegments: JSON.parse(JSON.stringify(landSegments)),
        buildingComponents: JSON.parse(JSON.stringify(buildingComponents)),
        femaleEligible: document.getElementById('chkFemaleEligible') ? document.getElementById('chkFemaleEligible').checked : true,
        femaleStake: document.getElementById('inputFemaleStake') ? document.getElementById('inputFemaleStake').value : "50",
        priorPurchases: document.getElementById('selPriorPurchaseCount') ? document.getElementById('selPriorPurchaseCount').value : "0",
        priorValue: document.getElementById('inputPriorValueUsed') ? document.getElementById('inputPriorValueUsed').value : "0",
        leaseYears: document.getElementById('sliderLeaseYears') ? document.getElementById('sliderLeaseYears').value : (document.getElementById('inputLeaseYears')?.value || "1"),
        leaseRent: document.getElementById('inputLeaseAnnualRent') ? document.getElementById('inputLeaseAnnualRent').value : (document.getElementById('inputLeaseAar')?.value || ""),
        leasePremium: document.getElementById('inputLeasePremium') ? document.getElementById('inputLeasePremium').value : ""
      };

      const existingRaw = localStorage.getItem('circle_rate_history');
      let historyList = [];
      if (existingRaw) {
        try {
          historyList = JSON.parse(existingRaw);
          if (!Array.isArray(historyList)) historyList = [];
        } catch(e) { historyList = []; }
      }

      const dupCheck = checkHistoryDuplicate();
      let isDuplicate = dupCheck.isDuplicate;

      if (isDuplicate && dupCheck.index >= 0 && historyList[dupCheck.index]) {
        historyList[dupCheck.index].formattedDate = historyEntry.formattedDate;
        historyList[dupCheck.index].timestamp = historyEntry.timestamp;
      } else {
        historyList.unshift(historyEntry);
        if (historyList.length > 30) {
          historyList = historyList.slice(0, 30);
        }
      }

      localStorage.setItem('circle_rate_history', JSON.stringify(historyList));
      updateHistoryBadge();

      if (currentTab === 'history') {
        renderHistory();
      }

      flashSaveButtons();

      if (isDuplicate) {
        showToast(currentLang === 'hi'
          ? '✓ यह मूल्यांकन पहले से इतिहास में सुरक्षित है (समय अद्यतन हुआ)'
          : '✓ Valuation already saved in history (time updated)', 'info');
      } else {
        showToast(currentLang === 'hi'
          ? '✓ वर्तमान मूल्यांकन सफलतापूर्वक इतिहास में सुरक्षित किया गया!'
          : '✓ Current valuation saved to history successfully!', 'success');
      }
      return true;
    } catch (err) {
      console.error("Error saving valuation history:", err);
      showToast('Error saving: ' + err.message, 'error');
      return false;
    }
  }
  window.saveValuationToHistory = saveValuationToHistory;
  window.recordValuationHistory = saveValuationToHistory; // backward compatibility

  // Smart Duplicate History Checker: checks if current valuation state matches any saved entry
  function checkHistoryDuplicate() {
    const existingRaw = localStorage.getItem('circle_rate_history');
    if (!existingRaw) return { isDuplicate: false, matchedRecord: null, index: -1 };
    let historyList = [];
    try {
      historyList = JSON.parse(existingRaw);
      if (!Array.isArray(historyList)) historyList = [];
    } catch(e) { return { isDuplicate: false, matchedRecord: null, index: -1 }; }
    if (historyList.length === 0) return { isDuplicate: false, matchedRecord: null, index: -1 };

    const dVal = document.getElementById('districtSelect')?.value || savedSelectedDistrict || "";
    const tVal = document.getElementById('tehsilSelect')?.value || savedSelectedTehsil || "";
    const vName = selectedVillage ? (selectedVillage.vname || "") : "";
    const dues = getCalculatedDuesSummary();
    const grandTotal = dues.grandTotal;
    const totalDues = dues.totalNum;

    for (let i = 0; i < historyList.length; i++) {
      const item = historyList[i];
      const sameVillage = (item.villageName || "") === vName;
      const sameDistrict = (item.district || "") === dVal;
      const sameTehsil = (item.tehsil || "") === tVal;
      const sameDeed = (item.deedType || "sale") === currentDeedType;
      const sameBuyer = (item.buyerType || "general") === activeBuyerType;
      const sameRoad = Math.abs((parseFloat(item.roadWidth) || 0) - (parseFloat(roadWidth) || 0)) < 0.1;
      const sameGrandTotal = Math.abs((parseFloat(item.grandTotal) || 0) - (parseFloat(grandTotal) || 0)) < 1;
      const sameTotalDues = Math.abs((parseFloat(item.totalDues) || 0) - (parseFloat(totalDues) || 0)) < 1;

      // Check land segments area match
      let sameSegments = true;
      const itemSegments = Array.isArray(item.landSegments) ? item.landSegments : [];
      if (itemSegments.length !== landSegments.length) {
        sameSegments = false;
      } else {
        for (let j = 0; j < landSegments.length; j++) {
          if ((parseFloat(landSegments[j].area) || 0) !== (parseFloat(itemSegments[j].area) || 0)) {
            sameSegments = false;
            break;
          }
        }
      }

      if (sameVillage && sameDistrict && sameTehsil && sameDeed && sameBuyer && sameRoad && sameGrandTotal && sameTotalDues && sameSegments) {
        return { isDuplicate: true, matchedRecord: item, index: i };
      }
    }
    return { isDuplicate: false, matchedRecord: null, index: -1 };
  }
  window.checkHistoryDuplicate = checkHistoryDuplicate;

  // Resets all valuation data back to predetermined clean initial state
  function resetValuationToDefaults(showFeedback = true) {
    try {
      // 1. Reset Land Segments to predetermined single clean default row
      landSegments = [
        { id: 1, type: "NON AGRICULTURE", distance: "0-50m", area: "", unit: "sqm", isZeroDist: true }
      ];

      // 2. Clear Building Components
      buildingComponents = [];

      // 3. Reset Road Width to default 3.0m
      roadWidth = 3.0;
      if (typeof onRoadWidthChange === 'function') {
        onRoadWidthChange(3.0);
      }

      // 4. Reset Deed Type to 'sale' and Buyer to 'general'
      if (typeof setDeedType === 'function') {
        setDeedType('sale');
      }
      if (typeof setBuyerType === 'function') {
        setBuyerType('general');
      }

      // 5. Reset stake and inputs
      const elFemStake = document.getElementById('inputFemaleStake');
      if (elFemStake) elFemStake.value = "50";
      const elPrior = document.getElementById('selPriorPurchaseCount');
      if (elPrior) elPrior.value = "0";
      const elPriorVal = document.getElementById('inputPriorValueUsed');
      if (elPriorVal) elPriorVal.value = "0";
      const elLeaseYrs = document.getElementById('inputLeaseYears');
      if (elLeaseYrs) elLeaseYrs.value = "1";
      const elLeaseRent = document.getElementById('inputLeaseAnnualRent');
      if (elLeaseRent) elLeaseRent.value = "";
      const elLeasePrem = document.getElementById('inputLeasePremium');
      if (elLeasePrem) elLeasePrem.value = "";

      // 6. Reset village selection so user can start fresh for another village / tehsil / district
      selectedVillage = null;
      validlyChosenVillage = null;
      lastCommittedVillage = null;
      const vSelect = document.getElementById('villageSelect');
      if (vSelect) vSelect.value = "";
      const vSearch = document.getElementById('villageSearchInput');
      if (vSearch) vSearch.value = "";
      const clearSearchBtn = document.getElementById('btnClearVillageSearch');
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      const vBadge = document.getElementById('currentVillageBadge');
      if (vBadge) vBadge.innerText = "–";

      // 7. Re-render UI & recalculate
      renderLandSegments();
      renderBuildingComponents();
      recalculate();
      saveFormState();

      if (showFeedback) {
        showToast(currentLang === 'hi'
          ? '✓ मूल्यांकन तालिका पूरी तरह साफ़ कर दी गई है! नया मूल्यांकन दर्ज करने हेतु तैयार।'
          : '✓ Valuation table cleared! Ready for fresh valuation.', 'success');
      }

      // Scroll smoothly to top of Section 1/Location
      const topSection = document.getElementById('lblLocationHeader') || document.getElementById('districtSelect') || document.getElementById('txtAppTitle');
      if (topSection) {
        topSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch(err) {
      console.error('Error resetting valuation:', err);
    }
  }
  window.resetValuationToDefaults = resetValuationToDefaults;

  // Prompts user before clearing with duplicate / unsaved check
  function promptClearValuation() {
    const hasLand = Array.isArray(landSegments) && landSegments.some(s => (parseFloat(s.area) || 0) > 0);
    const hasBldg = Array.isArray(buildingComponents) && buildingComponents.some(b => (parseFloat(b.coveredArea) || 0) > 0);
    const grandTotalEl = document.getElementById('displayGrandTotal');
    const grandTotal = grandTotalEl ? (parseFloat(grandTotalEl.innerText.replace(/[^\d.]/g, '')) || 0) : 0;

    if (!selectedVillage && !hasLand && !hasBldg && grandTotal <= 0) {
      showToast(currentLang === 'hi'
        ? 'मूल्यांकन फॉर्म पहले से खाली है।'
        : 'Valuation form is already in clean initial state.', 'info');
      resetValuationToDefaults(false);
      return;
    }

    const dup = checkHistoryDuplicate();
    openClearModal(dup.isDuplicate, dup.matchedRecord);
  }
  window.promptClearValuation = promptClearValuation;

  function openClearModal(isDuplicate, matchedRecord) {
    const modal = document.getElementById('modalClearConfirm');
    if (!modal) {
      if (confirm(currentLang === 'hi' ? 'क्या आप सारा डेटा साफ़ कर नया मूल्यांकन शुरू करना चाहते हैं?' : 'Clear all data and start new valuation?')) {
        resetValuationToDefaults(true);
      }
      return;
    }

    const iconContainer = document.getElementById('modalClearIconContainer');
    const titleEl = document.getElementById('modalClearTitle');
    const subEl = document.getElementById('modalClearSub');
    const msgBox = document.getElementById('modalClearMessageBox');
    const locText = document.getElementById('modalClearLocText');
    const deedText = document.getElementById('modalClearDeedText');
    const valText = document.getElementById('modalClearValText');
    const duesText = document.getElementById('modalClearDuesText');
    const actionsContainer = document.getElementById('modalClearActionButtons');

    const dues = getCalculatedDuesSummary();
    const dVal = document.getElementById('districtSelect')?.value || savedSelectedDistrict || "";
    const tVal = document.getElementById('tehsilSelect')?.value || savedSelectedTehsil || "";
    const vName = selectedVillage ? (currentLang === 'hi' ? (selectedVillage.vname || selectedVillage.vname_eng) : (selectedVillage.vname_eng || selectedVillage.vname)) : (currentLang === 'hi' ? 'ग्राम चयनित नहीं' : 'No village selected');
    
    let dNameDisp = dVal;
    let tNameDisp = tVal;
    if (currentLang === 'hi' && dVal) {
      const dM = UTTARAKHAND_MASTER_DISTRICTS.find(d => d.en.toLowerCase() === dVal.toLowerCase());
      if (dM) {
        dNameDisp = dM.hi || dNameDisp;
        if (tVal && dM.tehsils) {
          const tM = dM.tehsils.find(t => t.en.toLowerCase() === tVal.toLowerCase());
          if (tM) tNameDisp = tM.hi || tNameDisp;
        }
      }
    }
    const distTeh = (dNameDisp || tNameDisp) ? `[ ${dNameDisp || ''}${tNameDisp ? ' / ' + tNameDisp : ''} ] ` : '';

    if (locText) locText.innerText = `${distTeh}${vName}`;
    if (deedText) deedText.innerText = dues.categoryLabel || (currentLang === 'hi' ? 'विक्रय विलेख' : 'Sale Deed');
    if (valText) valText.innerText = dues.grandTotalVal || ('₹ ' + Math.round(dues.grandTotal).toLocaleString('en-IN'));
    if (duesText) duesText.innerText = (currentLang === 'hi' ? 'कुल देय: ' : 'Total: ') + (dues.totalVal || ('₹ ' + Math.round(dues.totalNum).toLocaleString('en-IN')));

    if (isDuplicate) {
      // SCENARIO 1: ALREADY SAVED IN HISTORY
      if (iconContainer) {
        iconContainer.className = 'w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs';
        iconContainer.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>';
      }
      if (titleEl) {
        titleEl.innerText = (currentLang === 'hi') ? 'डेटा इतिहास में सुरक्षित है' : 'Valuation Already Saved in History';
      }
      if (subEl) {
        subEl.innerText = (currentLang === 'hi') ? 'नया मूल्यांकन शुरू करने हेतु पुष्टि करें' : 'Confirm to start fresh valuation';
      }
      if (msgBox) {
        msgBox.className = 'p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed space-y-1';
        msgBox.innerHTML = (currentLang === 'hi')
          ? '<p class="font-bold">✓ वर्तमान मूल्यांकन पहले से आपके इतिहास में सुरक्षित है।</p><p class="text-slate-600 dark:text-slate-300">आप बिना किसी डेटा हानि के फॉर्म साफ़ कर सकते हैं और किसी भी अन्य ग्राम, तहसील या जनपद का नया मूल्यांकन शुरू कर सकते हैं।</p>'
          : '<p class="font-bold">✓ This valuation is already safely stored in your History.</p><p class="text-slate-600 dark:text-slate-300">You can clear the form safely without losing any data and start valuing another property.</p>';
      }
      if (actionsContainer) {
        actionsContainer.innerHTML = `
          <button type="button" onclick="confirmClearValuationAction(false)" class="w-full h-12 px-4 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-emerald-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            <span>${currentLang === 'hi' ? 'हाँ, फॉर्म साफ़ कर नया शुरू करें' : 'Clear Form & Start New'}</span>
          </button>
          <button type="button" onclick="closeClearModal()" class="w-full h-11 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center">
            <span>${currentLang === 'hi' ? 'रद्द करें' : 'Cancel'}</span>
          </button>
        `;
      }
    } else {
      // SCENARIO 2: UNSAVED DATA DETECTED
      if (iconContainer) {
        iconContainer.className = 'w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-xs';
        iconContainer.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
      }
      if (titleEl) {
        titleEl.innerText = (currentLang === 'hi') ? 'बिना सहेजा डेटा मौजूद है' : 'Unsaved Valuation Data';
      }
      if (subEl) {
        subEl.innerText = (currentLang === 'hi') ? 'डेटा साफ़ करने से पहले इतिहास में सहेजें' : 'Save to History before clearing';
      }
      if (msgBox) {
        msgBox.className = 'p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/80 bg-amber-50/70 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs leading-relaxed space-y-1';
        msgBox.innerHTML = (currentLang === 'hi')
          ? '<p class="font-bold">⚠️ यह मूल्यांकन अभी तक इतिहास में सुरक्षित नहीं हुआ है।</p><p class="text-slate-600 dark:text-slate-300">यदि आप इसे बिना सहेजे साफ़ करेंगे तो यह प्रविष्टि हट जाएगी। आप इसे इतिहास में सुरक्षित करके भी नया मूल्यांकन शुरू कर सकते हैं।</p>'
          : '<p class="font-bold">⚠️ Current valuation is not yet saved to History.</p><p class="text-slate-600 dark:text-slate-300">Clearing without saving will discard these figures. You can save it to history before starting fresh.</p>';
      }
      if (actionsContainer) {
        actionsContainer.innerHTML = `
          <button type="button" onclick="confirmClearValuationAction(true)" class="w-full h-12 px-4 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-emerald-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
            <span>${currentLang === 'hi' ? 'इतिहास में सहेजें और नया शुरू करें' : 'Save to History & Clear All'}</span>
          </button>
          <button type="button" onclick="confirmClearValuationAction(false)" class="w-full h-12 px-4 bg-rose-700 hover:bg-rose-800 active:bg-rose-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-rose-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            <span>${currentLang === 'hi' ? 'बिना सहेजे साफ़ करें' : 'Clear Without Saving'}</span>
          </button>
          <button type="button" onclick="closeClearModal()" class="w-full h-11 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center">
            <span>${currentLang === 'hi' ? 'रद्द करें' : 'Cancel'}</span>
          </button>
        `;
      }
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  window.openClearModal = openClearModal;

  function closeClearModal() {
    const modal = document.getElementById('modalClearConfirm');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
  window.closeClearModal = closeClearModal;

  function confirmClearValuationAction(saveFirst) {
    if (saveFirst) {
      saveValuationToHistory();
    }
    closeClearModal();
    resetValuationToDefaults(true);
  }
  window.confirmClearValuationAction = confirmClearValuationAction;

  function deleteHistoryEntry(index) {
    try {
      const confirmMsg = currentLang === 'hi'
        ? 'क्या आप यह प्रविष्टि इतिहास से हटाना चाहते हैं?'
        : 'Do you want to delete this valuation entry from history?';
      if (!confirm(confirmMsg)) return;

      const saved = localStorage.getItem('circle_rate_history');
      if (!saved) return;
      let list = JSON.parse(saved);
      if (!Array.isArray(list)) return;

      list.splice(index, 1);
      localStorage.setItem('circle_rate_history', JSON.stringify(list));
      updateHistoryBadge();
      renderHistory();
      showToast(currentLang === 'hi' ? 'प्रविष्टि हटा दी गई' : 'Entry removed from history', 'info');
    } catch (e) {
      console.error('Error deleting history entry:', e);
    }
  }
  window.deleteHistoryEntry = deleteHistoryEntry;

  function renderHistory() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;

    let historyList = [];
    const saved = localStorage.getItem('circle_rate_history');
    if (saved) {
      try {
        historyList = JSON.parse(saved);
        if (!Array.isArray(historyList)) historyList = [];
      } catch(e) { historyList = []; }
    }

    updateHistoryBadge();

    if (historyList.length === 0) {
      container.innerHTML = `
        <div class="py-12 px-4 text-center">
          <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-xs">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
          </div>
          <p class="text-sm font-bold text-slate-800 dark:text-slate-200">
            ${currentLang === 'hi' ? 'कोई सुरक्षित मूल्यांकन इतिहास नहीं मिला' : 'No saved valuation history found'}
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
            ${currentLang === 'hi' ? 'मूल्यांकन या परिणाम टैब में "इतिहास में सहेजें" बटन दबाकर आप अपने आवश्यक मूल्यांकनों को सुरक्षित रख सकते हैं।' : 'Click the "Save to History" button on the Valuation or Results tab to save specific calculations.'}
          </p>
          <button type="button" onclick="switchTab('calc')" class="mt-4 inline-flex items-center px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl shadow-sm transition-all space-x-1.5 border border-teal-600">
            <svg class="w-4 h-4 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            <span>${currentLang === 'hi' ? 'मूल्यांकन पर जाएँ' : 'Go to Valuation'}</span>
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    historyList.forEach((entry, idx) => {
      const vDisplay = currentLang === 'hi'
        ? (entry.villageName || 'अनिर्दिष्ट ग्राम')
        : (entry.villageNameEng || entry.villageName || 'Unspecified Village');

      let dText = entry.district || '–';
      let tText = entry.tehsil || '–';
      if (currentLang === 'hi' && entry.district) {
        const dM = UTTARAKHAND_MASTER_DISTRICTS.find(d => d.en.toLowerCase() === entry.district.toLowerCase());
        if (dM) {
          dText = dM.hi || dText;
          if (entry.tehsil && dM.tehsils) {
            const tM = dM.tehsils.find(t => t.en.toLowerCase() === entry.tehsil.toLowerCase());
            if (tM) tText = tM.hi || tText;
          }
        }
      }
      const locDisplay = `${dText}, ${tText}`;

      let deedBadge = '';
      if (entry.deedType === 'sale') {
        const bType = entry.buyerType === 'female'
          ? (currentLang === 'hi' ? 'महिला' : 'Female')
          : (entry.buyerType === 'both' ? (currentLang === 'hi' ? 'संयुक्त' : 'Joint') : (currentLang === 'hi' ? 'सामान्य' : 'General'));
        deedBadge = `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">${currentLang === 'hi' ? 'विक्रय' : 'Sale Deed'} (${bType})</span>`;
      } else if (entry.deedType === 'gift') {
        const isFam = entry.giftRelation === 'family';
        deedBadge = `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">${currentLang === 'hi' ? 'दान' : 'Gift'} (${isFam ? (currentLang === 'hi' ? 'पारिवारिक 1%' : 'Family 1%') : '5%'})</span>`;
      } else if (entry.deedType === 'lease') {
        deedBadge = `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">${currentLang === 'hi' ? 'पट्टा' : 'Lease'} (${entry.leaseYears || 1}${currentLang === 'hi' ? ' वर्ष' : 'Y'})</span>`;
      }

      const landCount = Array.isArray(entry.landSegments) ? entry.landSegments.length : 0;
      const bldgCount = Array.isArray(entry.buildingComponents) ? entry.buildingComponents.length : 0;
      const roadText = currentLang === 'hi' ? `मार्ग: ${entry.roadWidth || 0} मी०` : `Road: ${entry.roadWidth || 0}m`;

      html += `
        <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-[11px]">
                  #${idx + 1}
                </span>
                <span class="font-bold text-sm text-slate-900 dark:text-white truncate">
                  ${vDisplay}
                </span>
                ${deedBadge}
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${locDisplay} • <span class="font-mono">${entry.formattedDate || ''}</span>
              </p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">
                ${currentLang === 'hi' ? 'कुल मूल्यांकन' : 'Market Value'}
              </span>
              <span class="text-sm sm:text-base font-black text-emerald-800 dark:text-emerald-400">
                ₹ ${(entry.grandTotal || 0).toLocaleString('en-IN')}
              </span>
              <span class="block text-xs font-black text-slate-900 dark:text-white mt-0.5">
                ${currentLang === 'hi' ? 'कुल प्रभार' : 'Total Dues'}: ${entry.totalDuesFormatted || ('₹ ' + (entry.totalDues || 0).toLocaleString('en-IN'))}
              </span>
              <span class="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                ${entry.stampDuty ? (currentLang === 'hi' ? `स्टाम्प: ${entry.stampDuty}` : `Stamp: ${entry.stampDuty}`) : ''}${entry.regFee ? (currentLang === 'hi' ? ` • निबंधन: ${entry.regFee}` : ` • Reg: ${entry.regFee}`) : ''}
              </span>
            </div>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between flex-wrap gap-2 text-xs">
            <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400 flex-wrap">
              <span>📐 ${landCount} ${currentLang === 'hi' ? 'भूखंड' : 'Plot(s)'}</span>
              <span>🏢 ${bldgCount} ${currentLang === 'hi' ? 'निर्माण' : 'Structure(s)'}</span>
              <span>🛣️ ${roadText}</span>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="restoreHistoryEntry(${idx})" class="h-9 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap">
                <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                <span>${currentLang === 'hi' ? 'पुनर्स्थापित करें' : 'Restore'}</span>
              </button>
              <button type="button" onclick="deleteHistoryEntry(${idx})" title="${currentLang === 'hi' ? 'हटाएँ' : 'Delete'}" class="h-9 w-9 bg-slate-200 hover:bg-rose-100 dark:bg-slate-700 dark:hover:bg-rose-950 text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center shrink-0">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }
  window.renderHistory = renderHistory;

  function restoreHistoryEntry(index) {
    try {
      const saved = localStorage.getItem('circle_rate_history');
      if (!saved) return;
      const list = JSON.parse(saved);
      if (!Array.isArray(list) || !list[index]) return;

      const item = list[index];

      // 1. Restore Location: District, Tehsil, and Village
      if (item.district) {
        savedSelectedDistrict = item.district;
        const dSelect = document.getElementById('districtSelect');
        if (dSelect) dSelect.value = item.district;
      }
      updateTehsilOptions();

      if (item.tehsil) {
        savedSelectedTehsil = item.tehsil;
        const tSelect = document.getElementById('tehsilSelect');
        if (tSelect) tSelect.value = item.tehsil;
      }

      // Populate villages with empty search to show all for this tehsil
      populateVillages("");

      if (item.villageName) {
        selectedVillage = rawDataset.find(v => (v.vname === item.villageName || v.vname_eng === item.villageName || (item.villageNameEng && v.vname_eng === item.villageNameEng))) || null;
        if (selectedVillage) {
          const vSel = document.getElementById('villageSelect');
          if (vSel) vSel.value = selectedVillage.vname;
        }
      }
      updateVillageBadge();

      // 2. Restore Deed Type & Buyer Type
      if (item.deedType) {
        currentDeedType = item.deedType;
      }
      if (item.giftRelation) {
        currentGiftRelation = item.giftRelation;
        const selGift = document.getElementById('selGiftRelation');
        if (selGift) selGift.value = item.giftRelation;
      }
      updateDeedTypeUI();

      if (item.buyerType) {
        setBuyerType(item.buyerType);
      }

      // 3. Restore Road Width
      if (item.roadWidth !== undefined) {
        roadWidth = parseFloat(item.roadWidth) || 0;
        onRoadWidthChange(roadWidth);
      }

      // 4. Restore Land Segments
      if (Array.isArray(item.landSegments)) {
        landSegments = JSON.parse(JSON.stringify(item.landSegments));
        renderLandSegments();
      }

      // 5. Restore Building Components
      if (Array.isArray(item.buildingComponents)) {
        buildingComponents = JSON.parse(JSON.stringify(item.buildingComponents));
        renderBuildingComponents();
      }

      // 6. Restore Female Concession Inputs
      const chkFem = document.getElementById('chkFemaleEligible');
      if (chkFem && typeof item.femaleEligible === 'boolean') {
        chkFem.checked = item.femaleEligible;
      }
      const inStake = document.getElementById('inputFemaleStake');
      if (inStake && item.femaleStake !== undefined) {
        inStake.value = item.femaleStake;
      }
      const selPrior = document.getElementById('selPriorPurchaseCount');
      if (selPrior && item.priorPurchases !== undefined) {
        selPrior.value = item.priorPurchases;
      }
      const inPriorVal = document.getElementById('inputPriorValueUsed');
      if (inPriorVal && item.priorValue !== undefined) {
        inPriorVal.value = item.priorValue;
      }

      // 7. Restore Lease Parameters
      if (item.leaseYears !== undefined) {
        const inYears = document.getElementById('inputLeaseYears');
        if (inYears) inYears.value = item.leaseYears;
        const slYears = document.getElementById('sliderLeaseYears');
        if (slYears) slYears.value = item.leaseYears;
        if (typeof updateLeaseTermButtonsUI === 'function') {
          updateLeaseTermButtonsUI(parseFloat(item.leaseYears) || 1);
        }
      }
      const inRent = document.getElementById('inputLeaseAnnualRent') || document.getElementById('inputLeaseAar');
      if (inRent && item.leaseRent !== undefined) {
        inRent.value = item.leaseRent;
      }
      const inPrem = document.getElementById('inputLeasePremium');
      if (inPrem && item.leasePremium !== undefined) {
        inPrem.value = item.leasePremium;
      }

      // 8. Trigger Full Recalculate
      recalculate();

      // 9. Save updated state and navigate user to 'calc' tab with smooth feedback
      saveFormState();
      switchTab('calc', true);

      alert(currentLang === 'hi'
        ? `इतिहास #${index + 1} (${item.villageName || ''}) के पैरामीटर सफलतापूर्वक पुनर्स्थापित किए गए!`
        : `History #${index + 1} (${item.villageNameEng || item.villageName || ''}) parameters restored successfully!`);
    } catch (err) {
      console.error("Error restoring history entry:", err);
      alert("Error restoring history: " + err.message);
    }
  }
  window.restoreHistoryEntry = restoreHistoryEntry;

  function clearValuationHistory() {
    const confirmMsg = currentLang === 'hi'
      ? 'क्या आप सभी सुरक्षित मूल्यांकन इतिहास प्रविष्टियाँ हटाना चाहते हैं?'
      : 'Are you sure you want to clear all saved valuation history entries?';
    if (confirm(confirmMsg)) {
      localStorage.removeItem('circle_rate_history');
      if (typeof updateHistoryBadge === 'function') updateHistoryBadge();
      renderHistory();
      if (typeof showToast === 'function') {
        showToast(currentLang === 'hi' ? 'संपूर्ण इतिहास साफ़ कर दिया गया' : 'All history entries cleared', 'info');
      }
    }
  }
  window.clearValuationHistory = clearValuationHistory;

  // ========================================================
  // 12B. A4 PRINT SLIP CANVAS ENGINE (300 DPI, Greyscale / B&W Laser Printer Ready)
  // Structured 4 Columns • Dynamic Sequential Layout • No Signatures • Crisp Output
  // ========================================================
  function wrapCanvasText(ctx, text, maxWidth) {
    if (!text) return [];
    const words = String(text).split(' ');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? (currentLine + ' ' + words[i]) : words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  // Universal Client-Side PDF Builder (Single-page PDF-1.4 stream)
  function buildPdfBlobFromCanvas(canvas) {
    const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.94);
    const base64Data = jpegDataUrl.split(',')[1];
    const binStr = atob(base64Data);
    const len = binStr.length;
    const imgBytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      imgBytes[i] = binStr.charCodeAt(i);
    }

    const width = canvas.width;
    const height = canvas.height;
    const pdfW = 595.28;
    const pdfH = parseFloat((595.28 * height / width).toFixed(2));
    const enc = new TextEncoder();

    const header = '%PDF-1.4\n';
    const o1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
    const o2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
    const o3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pdfW.toFixed(2) + ' ' + pdfH.toFixed(2) + '] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n';
    const o4Head = '4 0 obj\n<< /Type /XObject /Subtype /Image /Width ' + width + ' /Height ' + height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + len + ' >>\nstream\n';
    const o4Foot = '\nendstream\nendobj\n';
    const cStream = 'q\n' + pdfW.toFixed(2) + ' 0 0 ' + pdfH.toFixed(2) + ' 0 0 cm\n/Im0 Do\nQ\n';
    const o5 = '5 0 obj\n<< /Length ' + cStream.length + ' >>\nstream\n' + cStream + 'endstream\nendobj\n';

    const parts = [];
    const offsets = [];
    let pos = 0;

    function add(str) {
      const b = enc.encode(str);
      parts.push(b);
      pos += b.length;
    }
    function addBytes(b) {
      parts.push(b);
      pos += b.length;
    }

    add(header);
    offsets.push(pos); add(o1);
    offsets.push(pos); add(o2);
    offsets.push(pos); add(o3);
    offsets.push(pos); add(o4Head); addBytes(imgBytes); add(o4Foot);
    offsets.push(pos); add(o5);

    const startXref = pos;
    let xref = 'xref\n0 6\n0000000000 65535 f \n';
    for (let i = 0; i < 5; i++) {
      xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
    }
    const trailer = 'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + startXref + '\n%%EOF';
    add(xref);
    add(trailer);

    const totalLen = parts.reduce((acc, p) => acc + p.length, 0);
    const out = new Uint8Array(totalLen);
    let cur = 0;
    for (const p of parts) {
      out.set(p, cur);
      cur += p.length;
    }
    return new Blob([out], { type: 'application/pdf' });
  }

  // Currency Formatter for Reports & Displays
  function formatINR(val) {
    const num = Math.round(Number(val) || 0);
    return '₹ ' + num.toLocaleString('en-IN');
  }
  window.formatINR = formatINR;

  function exportValuationReport(format) {
    try {
      const reqFormat = (format || 'pdf').toLowerCase();
      const selectedFormat = (reqFormat === 'jpeg') ? 'jpeg' : (reqFormat === 'png' ? 'png' : (reqFormat === 'print' ? 'print' : 'pdf'));

      const btn = (selectedFormat === 'print')
        ? document.getElementById('btnPrintA4')
        : (document.getElementById('btnExportPdf') || document.getElementById('btnExportSlip') || document.getElementById('btnExportImgHeader'));
      if (btn) {
        btn.classList.add('opacity-70', 'pointer-events-none');
      }

      // 1. Dynamic District, Tehsil, and Village Lookup (Supports All Uttarakhand Districts)
      const dSelect = document.getElementById('districtSelect');
      const tSelect = document.getElementById('tehsilSelect');
      const currentDVal = (selectedVillage && selectedVillage.district)
        ? selectedVillage.district
        : (dSelect ? dSelect.value : (savedSelectedDistrict || ''));
      const currentTVal = (selectedVillage && selectedVillage.tehsil)
        ? selectedVillage.tehsil
        : (tSelect ? tSelect.value : (savedSelectedTehsil || ''));

      // Dynamic District Display (English + Hindi)
      const allDistMaster = (typeof getAllUttarakhandDistricts === 'function') ? getAllUttarakhandDistricts() : [];
      const dMatch = allDistMaster.find(d => d.en.toLowerCase() === (currentDVal || '').toLowerCase());
      const dSample = rawDataset.find(d => d.district === currentDVal);
      const districtNameEn = currentDVal || 'Uttarakhand';
      const districtNameHi = dMatch ? dMatch.hi : ((dSample && dSample.district_hi) ? dSample.district_hi : (currentDVal || 'उत्तराखण्ड'));
      const districtDisplay = currentDVal
        ? (currentLang === 'hi' ? districtNameHi : districtNameEn)
        : (currentLang === 'hi' ? 'उत्तराखण्ड' : 'Uttarakhand');

      // Dynamic Tehsil Display (English + Hindi)
      const tMatch = dMatch ? dMatch.tehsils.find(t => t.en.toLowerCase() === (currentTVal || '').toLowerCase()) : null;
      const tSample = rawDataset.find(d => d.tehsil === currentTVal);
      const tehsilNameEn = currentTVal || '';
      const tehsilNameHi = tMatch ? tMatch.hi : ((tSample && tSample.tehsil_hi) ? tSample.tehsil_hi : currentTVal);
      const tehsilDisplay = currentTVal
        ? (currentLang === 'hi' ? tehsilNameHi : tehsilNameEn)
        : (currentLang === 'hi' ? 'समस्त तहसील' : 'All Tehsils');

      const vNameDisplay = selectedVillage
        ? (currentLang === 'hi' ? (selectedVillage.vname || selectedVillage.vname_eng) : (selectedVillage.vname_eng || selectedVillage.vname))
        : (currentLang === 'hi' ? 'सामान्य मूल्यांकन' : 'General Valuation');

      // Generate Unique Official Document Verification ID
      const randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');
      const year = new Date().getFullYear();
      const distCode = currentDVal ? currentDVal.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() : 'UK';
      const tehCode = currentTVal ? currentTVal.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() : 'GEN';
      const docVerificationId = 'UK-VAL-' + year + '-' + distCode + '-' + tehCode + '-' + randomHex;

      const now = new Date();
      const nowStr = now.toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      });

      // 2. Fetch Verified Dues Breakdown & Generate Standalone QR Code
      const dues = getCalculatedDuesSummary();
      const grandTotalVal = dues.grandTotalVal;
      const stampVal = dues.stampVal;
      const regVal = dues.regVal;
      const totalPayableVal = dues.totalVal;

      const qrPayload = 'UTTARAKHAND REVENUE DEPT • BHULEKHA VALUATION VERIFICATION\n' +
        'Doc ID: ' + docVerificationId + '\n' +
        'District: ' + districtDisplay + '\n' +
        'Tehsil: ' + tehsilDisplay + '\n' +
        'Village: ' + vNameDisplay + '\n' +
        'Deed Type: ' + dues.categoryLabel + '\n' +
        'Total Valuation: ' + grandTotalVal + '\n' +
        'Stamp Duty: ' + stampVal + '\n' +
        'Registration Fee: ' + regVal + '\n' +
        'Total Statutory Dues: ' + totalPayableVal + '\n' +
        'Issue Date: ' + nowStr + '\n';
      // Standard A4 Canvas at 300 DPI: 2480px width
      const width = 2480;
      // Optimized Print Margins with Left Binding Margin (Gutter) for standard A4 filing/hole punch
      const marginLeft = 130; // 130px left binding margin (approx 11mm binding gutter)
      const marginRight = 70; // 70px right margin
      const margin = marginLeft;
      const contentWidth = width - marginLeft - marginRight; // 2280px

      // 4 Structured Table Columns (Total contentWidth = 2280px):
      // Col 1: S.No (width: 120px, Center)
      // Col 2: Description & Classification (width: 1180px, Left)
      // Col 3: Area & Rate Factors (width: 490px, Left)
      // Col 4: Assessed Valuation (width: 490px, Right)
      const col1X = margin;
      const col1W = 120;
      const col2X = col1X + col1W;
      const col2W = 1180;
      const col3X = col2X + col2W;
      const col3W = 490;
      const col4X = col3X + col3W;
      const col4W = 490;

      // Temporary canvas for measuring wrapped text heights
      const measureCanvas = document.createElement('canvas');
      measureCanvas.width = width;
      const mctx = measureCanvas.getContext('2d');

      const rowsData = (currentBreakdownRows && currentBreakdownRows.length > 0)
        ? currentBreakdownRows
        : [{ title: (currentLang === 'hi' ? 'कोई मद उपलब्ध नहीं' : 'No breakdown available'), detail: '-', amount: 0 }];

      // Pre-calculate heights for all rows dynamically with larger fonts
      mctx.font = 'bold 38px sans-serif';
      const measuredRows = rowsData.map((row, idx) => {
        mctx.font = 'bold 38px sans-serif';
        const titleLines = wrapCanvasText(mctx, row.title + (row.badge ? ' [' + row.badge + ']' : ''), col2W - 50);
        mctx.font = '30px sans-serif';
        const detailLines = wrapCanvasText(mctx, row.detail || '', col2W - 50);

        const textLinesHeight = (titleLines.length * 52) + (detailLines.length * 42) + 54;
        const rowHeight = Math.max(130, textLinesHeight);

        return {
          row,
          idx: idx + 1,
          titleLines,
          detailLines,
          rowHeight
        };
      });

      const totalTableRowsHeight = measuredRows.reduce((acc, r) => acc + r.rowHeight, 0);

      // Card Dimensions optimized for A4 300 DPI readability & B&W printer friendliness
      const headerBoxHeight = 340;
      const detailsBoxHeight = 380;
      const thHeight = 80;
      const totalCardHeight = 220;
      const hasSavings = Boolean(dues && dues.savingsNote);
      const duesCardHeight = hasSavings ? 530 : 470;
      const disclaimerBoxHeight = 150;

      const totalContentHeight = 
        headerBoxHeight + 
        detailsBoxHeight + 
        thHeight + 
        totalTableRowsHeight + 
        totalCardHeight + 
        duesCardHeight + 
        disclaimerBoxHeight;

      // Dynamic gap spacing to distribute content harmoniously across the A4 sheet (5 gaps)
      const topMargin = 70;
      const bottomMargin = 70;
      const availableForGaps = 3508 - topMargin - bottomMargin - totalContentHeight;
      const gap = Math.max(30, Math.floor(availableForGaps / 5));
      const totalDocumentHeight = topMargin + bottomMargin + totalContentHeight + (5 * gap);
      const height = Math.max(3508, totalDocumentHeight);

      // High-Resolution Print DPI Configuration (300 DPI for Standard A4 Print: 2480 x 3508 px)
      const exportDPI = (selectedFormat === 'print') ? 300 : ((typeof window !== 'undefined' && window.PRINT_DPI) ? window.PRINT_DPI : 300);
      const dpiScale = exportDPI / 300; // 1.0 scale for standard 300 DPI A4

      const canvas = document.createElement('canvas');
      canvas.width = Math.round(width * dpiScale);
      canvas.height = Math.round(height * dpiScale);
      const ctx = canvas.getContext('2d');
      if (dpiScale !== 1) {
        ctx.scale(dpiScale, dpiScale);
      }

      // Crisp White Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Solid Outer Framing - Clean black borders with left binding gutter
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 5;
      ctx.strokeRect(60, 30, width - 95, height - 60);

      ctx.strokeStyle = '#64748B';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(72, 42, width - 119, height - 84);

      let curY = topMargin;

      // ========================================================
      // HEADER SECTION: Light, B&W Print-Friendly with Top QR Code
      // (No dark background blob, No filename, Authentic QR at Head)
      // ========================================================
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, margin, curY, contentWidth, headerBoxHeight, 16, true, false);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2.5;
      roundRect(ctx, margin, curY, contentWidth, headerBoxHeight, 16, false, true);

      // Header Left Content (Official title & document metadata)
      const headerTextLeft = margin + 40;
      const qrBoxSize = 220;
      const qrBoxX = margin + contentWidth - qrBoxSize - 40;
      const qrBoxY = curY + 25;
      const headerTextMaxWidth = contentWidth - qrBoxSize - 120;

      // Clean Official Heading - Filename removed
      ctx.textAlign = 'left';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 54px sans-serif';
      ctx.fillText(currentLang === 'hi' ? 'सर्किल दर एवं संपत्ति मूल्यांकन रिपोर्ट' : 'Circle Rate & Property Valuation Report', headerTextLeft, curY + 75);

      ctx.font = 'bold 34px sans-serif';
      ctx.fillStyle = '#1E293B';
      ctx.fillText(currentLang === 'hi' ? 'उत्तराखण्ड स्टाम्प एवं निबंधन नियमावली के अंतर्गत प्राधिकृत आगणन' : 'Authorized Assessment under Uttarakhand Stamp & Registration Rules', headerTextLeft, curY + 130);

      ctx.font = '28px sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText((currentLang === 'hi' ? 'आगणन तिथि व समय: ' : 'Assessment Date & Time: ') + nowStr + (currentLang === 'hi' ? ' • उत्तराखण्ड स्टाम्प एवं निबंधन विभाग' : ' • Uttarakhand Stamp & Registration Dept.'), headerTextLeft, curY + 180);

      // Deed Type Badge in Header
      let deedBadgeText = currentLang === 'hi' ? 'विलेख: विक्रय विलेख' : 'Deed: Sale Deed';
      if (currentDeedType === 'gift') {
        const isFam = (currentGiftRelation === 'family');
        deedBadgeText = currentLang === 'hi' 
          ? ('विलेख: दान विलेख (' + (isFam ? 'पारिवारिक 1%' : 'सामान्य 5%') + ')')
          : ('Deed: Gift Deed (' + (isFam ? 'Family 1%' : 'General 5%') + ')');
      } else if (currentDeedType === 'lease') {
        deedBadgeText = currentLang === 'hi' ? 'विलेख: पट्टा विलेख' : 'Deed: Lease Deed';
      }

      // Light Badge Container in Header
      const badgePillY = curY + 220;
      ctx.fillStyle = '#F8FAFC';
      roundRect(ctx, headerTextLeft, badgePillY, headerTextMaxWidth, 86, 12, true, false);
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      roundRect(ctx, headerTextLeft, badgePillY, headerTextMaxWidth, 86, 12, false, true);

      ctx.font = 'bold 30px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText('[ ' + deedBadgeText + ' • ' + (currentLang === 'hi' ? 'प्रमाणन कोड: ' : 'Doc ID: ') + docVerificationId + ' ]', headerTextLeft + 25, badgePillY + 42);

      ctx.font = 'bold 26px sans-serif';
      ctx.fillStyle = '#065F46';
      ctx.fillText(currentLang === 'hi' ? '✓ प्राधिकृत डिजिटल मूल्यांकन • वैध प्रमाणक' : '✓ Authorized Digital Valuation Slip • Valid Document', headerTextLeft + 25, badgePillY + 72);

      // Header QR Code Box on the Right (High-Resolution Crisp Print)
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, qrBoxX - 8, qrBoxY - 8, qrBoxSize + 16, qrBoxSize + 16, 12, true, false);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2;
      roundRect(ctx, qrBoxX - 8, qrBoxY - 8, qrBoxSize + 16, qrBoxSize + 16, 12, false, true);

      // Draw Authentic Scannable QR Code Directly to Canvas Context
      let qrRendered = false;
      try {
        if (typeof QRCode !== 'undefined' && typeof QRCode.draw === 'function') {
          qrRendered = QRCode.draw(ctx, qrPayload, {
            x: qrBoxX,
            y: qrBoxY,
            size: qrBoxSize,
            margin: 2,
            correctLevel: (QRCode.CorrectLevel ? QRCode.CorrectLevel.M : 0),
            colorDark: '#000000',
            colorLight: '#FFFFFF'
          });
        }
      } catch (qrErr) {
        console.warn('QR code direct drawing error: ', qrErr);
      }

      if (!qrRendered) {
        // Fallback: draw using direct QR matrix generator
        qrRendered = drawDirectQRCode(ctx, qrPayload, qrBoxX, qrBoxY, qrBoxSize);
      }

      // QR Sub-label in Header
      ctx.textAlign = 'center';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '[ स्कैन कर सत्यापन करें ]' : '[ SCAN TO VERIFY ]', qrBoxX + (qrBoxSize / 2), qrBoxY + qrBoxSize + 26);

      curY += headerBoxHeight + gap;

      // ========================================================
      // PROPERTY & LOCATION DETAILS BOX (Light, Crisp, High-Contrast)
      // ========================================================
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, margin, curY, contentWidth, detailsBoxHeight, 16, true, false);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2;
      roundRect(ctx, margin, curY, contentWidth, detailsBoxHeight, 16, false, true);

      // Section Title Banner - Light Tint with bottom dividing stroke
      ctx.fillStyle = '#F1F5F9';
      roundRect(ctx, margin, curY, contentWidth, 68, { tl: 16, tr: 16, bl: 0, br: 0 }, true, false);
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(margin, curY + 68);
      ctx.lineTo(margin + contentWidth, curY + 68);
      ctx.stroke();

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 34px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(currentLang === 'hi' ? 'संपत्ति एवं भौगोलिक अवस्थिति विवरण' : 'Property & Geographic Location Details', margin + 30, curY + 46);

      const villageTextSlip = selectedVillage
        ? (currentLang === 'hi' ? (selectedVillage.vname || selectedVillage.vname_eng) : (selectedVillage.vname_eng || selectedVillage.vname))
        : (currentLang === 'hi' ? 'ग्राम चयनित नहीं' : 'Not Selected');
      const tehsilText = tehsilDisplay;
      const districtText = districtDisplay;

      let roadName = currentLang === 'hi' ? 'सामान्य आंतरिक मार्ग (< 5 मी०)' : 'Standard Internal Road (< 5m)';
      const parsedRoad = (typeof roadWidth === 'number') ? roadWidth : (parseFloat(roadWidth) || 0);
      if (parsedRoad >= 15.0) roadName = currentLang === 'hi' ? '15 मीटर से अधिक चौड़ा राजमार्ग (+15% अधिभार)' : 'Highway above 15m (+15% Hike)';
      else if (parsedRoad >= 12.0) roadName = currentLang === 'hi' ? '12 से 15 मीटर मुख्य मार्ग (+10% अधिभार)' : '12 to 15m Main Road (+10% Hike)';
      else if (parsedRoad >= 5.0) roadName = currentLang === 'hi' ? '5 से 12 मीटर मार्ग (+5% अधिभार)' : '5 to 12m Road (+5% Hike)';
      else roadName = currentLang === 'hi' ? 'सामान्य आंतरिक मार्ग (< 5 मी० / 0%)' : 'Internal Road (< 5m / 0%)';

      let buyerText = currentLang === 'hi' ? 'सामान्य / पुरुष (5% स्टाम्प)' : 'General / Male (5% Stamp)';
      const currentBuyer = (typeof activeBuyerType !== 'undefined') ? activeBuyerType : 'general';
      if (currentBuyer === 'female') buyerText = currentLang === 'hi' ? 'महिला क्रेता (3.75% स्टाम्प)' : 'Female Buyer (3.75% Stamp)';
      else if (currentBuyer === 'both') buyerText = currentLang === 'hi' ? 'संयुक्त क्रेता (आनुपातिक)' : 'Joint Buyer (Proportional)';

      // Col 1 Details (Large, Readable 32px Font)
      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• जनपद:' : '• District:', margin + 35, curY + 124);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(districtText, margin + 350, curY + 124);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• तहसील:' : '• Tehsil:', margin + 35, curY + 190);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(tehsilText, margin + 350, curY + 190);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• ग्राम / वार्ड:' : '• Village / Ward:', margin + 35, curY + 256);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(villageTextSlip, margin + 350, curY + 256);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• विलेख संव्यवहार:' : '• Deed Transaction:', margin + 35, curY + 322);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(deedBadgeText, margin + 350, curY + 322);

      // Col 2 Details
      const col2Left = margin + 1180;
      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• मार्ग चौड़ाई व अधिभार:' : '• Road Width & Hike:', col2Left, curY + 124);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(roadName, col2Left + 370, curY + 124);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• क्रेता श्रेणी:' : '• Buyer Category:', col2Left, curY + 190);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(buyerText, col2Left + 370, curY + 190);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• सत्यापन कोड:' : '• Document ID:', col2Left, curY + 256);
      ctx.font = 'bold 30px monospace';
      ctx.fillStyle = '#0F766E';
      ctx.fillText(docVerificationId, col2Left + 370, curY + 256);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '• प्रमाणीकरण स्थिति:' : '• Verification Status:', col2Left, curY + 322);
      ctx.font = 'bold 32px sans-serif';
      ctx.fillStyle = '#065F46';
      ctx.fillText(currentLang === 'hi' ? 'डिजिटल रूप से प्रमाणित' : 'Digitally Verified', col2Left + 370, curY + 322);

      curY += detailsBoxHeight + gap;

      // ========================================================
      // STRUCTURED TABLE HEADER (Light, High-Contrast B&W Friendly)
      // ========================================================
      ctx.fillStyle = '#F1F5F9';
      roundRect(ctx, margin, curY, contentWidth, thHeight, { tl: 12, tr: 12, bl: 0, br: 0 }, true, false);

      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(margin, curY);
      ctx.lineTo(margin + contentWidth, curY);
      ctx.moveTo(margin, curY + thHeight);
      ctx.lineTo(margin + contentWidth, curY + thHeight);
      ctx.stroke();

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 34px sans-serif';

      ctx.textAlign = 'center';
      ctx.fillText(currentLang === 'hi' ? 'क्र०' : 'S.No.', col1X + (col1W / 2), curY + 52);

      ctx.textAlign = 'left';
      ctx.fillText(currentLang === 'hi' ? 'मद विवरण एवं श्रेणी' : 'Item Description & Category', col2X + 25, curY + 52);
      ctx.fillText(currentLang === 'hi' ? 'क्षेत्रफल व सर्किल दर' : 'Area & Circle Rate', col3X + 25, curY + 52);

      ctx.textAlign = 'right';
      ctx.fillText(currentLang === 'hi' ? 'आगणित मूल्य (₹)' : 'Assessed Value (₹)', col4X + col4W - 25, curY + 52);

      curY += thHeight;

      // ========================================================
      // TABLE BODY ROWS (Crisp, High-Contrast Typography)
      // ========================================================
      measuredRows.forEach((item, rIndex) => {
        const rowBg = (rIndex % 2 === 0) ? '#FFFFFF' : '#F8FAFC';
        ctx.fillStyle = rowBg;
        ctx.fillRect(margin, curY, contentWidth, item.rowHeight);

        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(margin, curY + item.rowHeight);
        ctx.lineTo(margin + contentWidth, curY + item.rowHeight);
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 36px sans-serif';
        ctx.fillText(String(item.idx), col1X + (col1W / 2), curY + 58);

        ctx.textAlign = 'left';
        let lineY = curY + 52;
        ctx.font = 'bold 38px sans-serif';
        ctx.fillStyle = '#0F172A';
        item.titleLines.forEach(l => {
          ctx.fillText(l, col2X + 25, lineY);
          lineY += 52;
        });

        if (item.detailLines.length > 0) {
          ctx.font = '30px sans-serif';
          ctx.fillStyle = '#334155';
          item.detailLines.forEach(dl => {
            ctx.fillText(dl, col2X + 25, lineY);
            lineY += 42;
          });
        }

        ctx.font = 'bold 32px sans-serif';
        ctx.fillStyle = '#0F172A';
        ctx.fillText(currentLang === 'hi' ? 'सर्किल दर व मानक' : 'Circle Rate & Standard', col3X + 25, curY + 52);
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#475569';
        ctx.fillText(currentLang === 'hi' ? 'अधिसूचित आगणन' : 'Notified Assessment', col3X + 25, curY + 92);

        ctx.textAlign = 'right';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillStyle = '#0F172A';
        ctx.fillText(formatINR(item.row.amount || 0), col4X + col4W - 25, curY + 62);

        curY += item.rowHeight;
      });

      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2.5;
      roundRect(ctx, margin, curY - totalTableRowsHeight - thHeight, contentWidth, totalTableRowsHeight + thHeight, 12, false, true);

      curY += gap;

      // ========================================================
      // GRAND TOTAL VALUATION CARD (Light High-Contrast B&W Friendly)
      // ========================================================
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, margin, curY, contentWidth, totalCardHeight, 16, true, false);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 3;
      roundRect(ctx, margin, curY, contentWidth, totalCardHeight, 16, false, true);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#1E293B';
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText(currentLang === 'hi' ? 'सकल संपत्ति बाजार मूल्य:' : 'Total Assessed Market Value:', margin + 45, curY + 75);

      const inLakhsText = document.getElementById('displayInLakhs') ? document.getElementById('displayInLakhs').innerText : '';
      ctx.fillStyle = '#0F766E';
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText('(' + inLakhsText + ')', margin + 45, curY + 145);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 94px sans-serif';
      ctx.fillText(grandTotalVal, margin + contentWidth - 45, curY + 138);

      curY += totalCardHeight + gap;

      // ========================================================
      // STATUTORY GOVERNMENT DUES (Light Background, Ink-Efficient)
      // ========================================================
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, margin, curY, contentWidth, duesCardHeight, 16, true, false);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2.5;
      roundRect(ctx, margin, curY, contentWidth, duesCardHeight, 16, false, true);

      // Header Banner - Light Slate Tint with crisp dark divider
      ctx.fillStyle = '#F1F5F9';
      roundRect(ctx, margin, curY, contentWidth, 70, { tl: 16, tr: 16, bl: 0, br: 0 }, true, false);
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(margin, curY + 70);
      ctx.lineTo(margin + contentWidth, curY + 70);
      ctx.stroke();

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(currentLang === 'hi' ? 'उत्तराखण्ड शासन देय विलेख प्रभार' : 'Statutory Deed Charges (Uttarakhand)', margin + 35, curY + 47);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0F766E';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('[ ' + dues.categoryLabel + ' ]', margin + contentWidth - 35, curY + 47);

      // Stamp Duty Line
      ctx.textAlign = 'left';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(currentLang === 'hi' ? '• स्टाम्प शुल्क:' : '• Stamp Duty:', margin + 40, curY + 130);

      ctx.font = '30px sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(dues.stampFormula, margin + 40, curY + 172);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 58px sans-serif';
      ctx.fillText(stampVal, margin + contentWidth - 40, curY + 150);

      // Registration Fee Line
      ctx.textAlign = 'left';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#0F172A';
      ctx.fillText(currentLang === 'hi' ? '• निबंधन शुल्क:' : '• Registration Fee:', margin + 40, curY + 245);

      ctx.font = '30px sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(dues.regFormula, margin + 40, curY + 287);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 58px sans-serif';
      ctx.fillText(regVal, margin + contentWidth - 40, curY + 265);

      // Total Line Divider
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(margin + 40, curY + 325);
      ctx.lineTo(margin + contentWidth - 40, curY + 325);
      ctx.stroke();

      // Total Payable Line
      ctx.textAlign = 'left';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 40px sans-serif';
      ctx.fillText(currentLang === 'hi' ? 'कुल देय सरकारी शुल्क:' : 'Total Payable Statutory Dues:', margin + 40, curY + 382);

      ctx.font = '30px sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(dues.totalSubtitle || (currentLang === 'hi' ? '(स्टाम्प शुल्क एवं निबंधन शुल्क का कुल योग • गोल ₹10)' : '(Total of Stamp Duty and Registration Fee • Round ₹10)'), margin + 40, curY + 424);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 76px sans-serif';
      ctx.fillText(totalPayableVal, margin + contentWidth - 40, curY + 402);

      // Concession Savings Badge if applicable
      if (hasSavings) {
        const savBoxY = curY + 450;
        ctx.fillStyle = '#ECFDF5';
        roundRect(ctx, margin + 40, savBoxY, contentWidth - 80, 56, 10, true, false);
        ctx.strokeStyle = '#059669';
        ctx.lineWidth = 2;
        roundRect(ctx, margin + 40, savBoxY, contentWidth - 80, 56, 10, false, true);

        ctx.textAlign = 'left';
        ctx.fillStyle = '#065F46';
        ctx.font = 'bold 30px sans-serif';
        ctx.fillText('✓ ' + dues.savingsNote, margin + 60, savBoxY + 38);
      }

      curY += duesCardHeight + gap;

      // ========================================================
      // STATUTORY VERIFICATION & APP REMARK (Clean Light Disclaimer)
      // ========================================================
      ctx.fillStyle = '#FAFAFA';
      roundRect(ctx, margin, curY, contentWidth, disclaimerBoxHeight, 12, true, false);
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      roundRect(ctx, margin, curY, contentWidth, disclaimerBoxHeight, 12, false, true);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#1E293B';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText(currentLang === 'hi' ? '* यह मूल्यांकन पत्रक उत्तराखण्ड स्टाम्प एवं निबंधन नियमावली के अनुरूप कम्प्यूटरीकृत रूप से जनरेटेड रिपोर्ट है।' : '* This valuation slip is a computerized assessment report prepared according to Uttarakhand rules.', width / 2, curY + 58);
      ctx.font = '26px sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText(currentLang === 'hi' ? 'यह व्यक्तिगत उपयोग एवं आगणन हेतु तैयार किया गया है। आधिकारिक निबंधन उप-निबंधक कार्यालय के सत्यापन के अधीन होगा।' : 'Prepared for estimation purposes. Official registration is subject to verification by the Sub-Registrar Office.', width / 2, curY + 102);

      // ========================================================
      // EXPORT FILE HANDLING (PRINT / PDF / PNG / JPEG)
      // ========================================================
      const isPrint = (selectedFormat === 'print');
      const isPdf = (selectedFormat === 'pdf');
      const isJpeg = (selectedFormat === 'jpeg');
      const cleanVil = (selectedVillage ? selectedVillage.vname_eng : 'Property').replace(/[^a-zA-Z0-9]/g, '_');

      if (isPrint) {
        const jobName = 'BhuLekha_Valuation_Report_' + cleanVil + '_' + docVerificationId;
        const printJpegDataUrl = canvas.toDataURL('image/jpeg', 0.95);

        if (typeof showToast === 'function') {
          showToast(currentLang === 'hi' ? 'A4 प्रिंट डायलॉग खोला जा रहा है...' : 'Opening A4 print dialog...', 'info');
        }

        let printed = false;
        if (window.AndroidApp && typeof window.AndroidApp.printReport === 'function') {
          try {
            printed = window.AndroidApp.printReport(printJpegDataUrl, jobName);
          } catch (e) {
            console.error('AndroidApp.printReport error:', e);
          }
        }

        if (!printed && window.AndroidApp && typeof window.AndroidApp.printCurrentWebView === 'function') {
          try {
            printed = window.AndroidApp.printCurrentWebView(jobName);
          } catch (e) {
            console.error('AndroidApp.printCurrentWebView error:', e);
          }
        }

        if (!printed && typeof window.print === 'function') {
          try {
            window.print();
            printed = true;
          } catch (e) {
            console.error('window.print error:', e);
          }
        }

        if (!printed) {
          // Reliable fallback if direct printing service is unavailable: generate and download PDF
          const pdfBlob = buildPdfBlobFromCanvas(canvas);
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = jobName + '.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(url), 2000);
          if (typeof showToast === 'function') {
            showToast(currentLang === 'hi' ? 'प्रिंट PDF फ़ाइल डाउनलोड की गई' : 'Print PDF file downloaded', 'info');
          }
        }
      } else if (isPdf) {
        const pdfFilename = 'BhuLekha_Valuation_Report_' + cleanVil + '_' + docVerificationId + '.pdf';
        const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.95);

        if (window.AndroidApp && typeof window.AndroidApp.savePdf === 'function') {
          window.AndroidApp.savePdf(jpegDataUrl, pdfFilename, docVerificationId);
        } else {
          const pdfBlob = buildPdfBlobFromCanvas(canvas);
          const url = URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = pdfFilename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(url), 2000);
          alert(currentLang === 'hi'
            ? 'क्यूआर कोड प्रमाणीकरण सहित आधिकारिक PDF रिपोर्ट (' + docVerificationId + ') सफलतापूर्वक जनरेट व डाउनलोड हुई!'
            : 'Official PDF Report with QR verification (' + docVerificationId + ') downloaded successfully!');
        }
      } else {
        const mimeType = isJpeg ? 'image/jpeg' : 'image/png';
        const quality = isJpeg ? 0.98 : undefined;
        const dataUrl = canvas.toDataURL(mimeType, quality);
        const ext = isJpeg ? 'jpg' : 'png';
        const filename = 'BhuLekha_Valuation_Slip_' + cleanVil + '_' + docVerificationId + '.' + ext;

        if (window.AndroidApp && typeof window.AndroidApp.saveImage === 'function') {
          window.AndroidApp.saveImage(dataUrl, filename);
        } else {
          const a = document.createElement('a');
          a.href = dataUrl;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          alert(currentLang === 'hi'
            ? 'उच्च गुणवत्ता A4 मूल्यांकन पत्रक (' + selectedFormat.toUpperCase() + ') सफलतापूर्वक डाउनलोड हुआ!'
            : 'Ultra-HD A4 Valuation Slip (' + selectedFormat.toUpperCase() + ') downloaded successfully!');
        }
      }

      if (btn) {
        setTimeout(() => {
          btn.classList.remove('opacity-70', 'pointer-events-none');
        }, 1200);
      }
    } catch (err) {
      console.error('Export report error: ', err);
      alert('Error generating valuation report: ' + err.message);
    }
  }
  window.exportValuationReport = exportValuationReport;
  window.exportValuationImage = exportValuationReport;

  // Dedicated Print A4 Report Handler (Invoked by Result Tab Action)
  function printA4Report() {
    exportValuationReport('print');
  }
  window.printA4Report = printA4Report;

  // Canvas Rounded Rectangle helper
  function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') stroke = true;
    if (typeof radius === 'undefined') radius = 5;
    let r = { tl: 5, tr: 5, br: 5, bl: 5 };
    if (typeof radius === 'number') {
      r = { tl: radius, tr: radius, br: radius, bl: radius };
    } else if (typeof radius === 'object') {
      r = {
        tl: radius.tl || 0,
        tr: radius.tr || 0,
        br: radius.br || 0,
        bl: radius.bl || 0
      };
    }
    ctx.beginPath();
    ctx.moveTo(x + r.tl, y);
    ctx.lineTo(x + width - r.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r.tr);
    ctx.lineTo(x + width, y + height - r.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r.br, y + height);
    ctx.lineTo(x + r.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r.bl);
    ctx.lineTo(x, y + r.tl);
    ctx.quadraticCurveTo(x, y, x + r.tl, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  // Direct Canvas QR Code Drawing Helper
  function drawDirectQRCode(ctx, text, x, y, size) {
    try {
      if (typeof QRCode !== 'undefined') {
        if (typeof QRCode.draw === 'function') {
          return QRCode.draw(ctx, text, {
            x: x,
            y: y,
            size: size,
            margin: 2,
            correctLevel: (QRCode.CorrectLevel ? QRCode.CorrectLevel.M : 0),
            colorDark: '#000000',
            colorLight: '#FFFFFF'
          });
        }
      }
    } catch (e) {
      console.warn('drawDirectQRCode error:', e);
    }
    return false;
  }
  window.drawDirectQRCode = drawDirectQRCode;

  // 13. SETTINGS OPERATIONS & CONFIRMATION POPUPS
  function setupSettingsUI() {
    if (sortMode !== 'default') sortMode = 'auto';
    const sortRadio = document.querySelector(`input[name="settingSortMode"][value="${sortMode}"]`);
    if (sortRadio) sortRadio.checked = true;

    const elCeiling = document.getElementById('settingFemaleValLimit');
    if (elCeiling) elCeiling.value = femaleValueCeiling;

    const elMaxReg = document.getElementById('settingMaxRegFee');
    if (elMaxReg) elMaxReg.value = maxRegFeeCap;
  }
  window.setupSettingsUI = setupSettingsUI;

  function closeSettingsModal() {
    const modal = document.getElementById('modalSettingsConfirm');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
  window.closeSettingsModal = closeSettingsModal;

  function promptSaveSettings() {
    const selectedSort = document.querySelector('input[name="settingSortMode"]:checked')?.value || 'auto';
    const ceilingInput = document.getElementById('settingFemaleValLimit');
    const maxRegInput = document.getElementById('settingMaxRegFee');

    const ceilingVal = parseFloat(ceilingInput?.value);
    const maxRegVal = parseFloat(maxRegInput?.value);

    if (isNaN(ceilingVal) || ceilingVal < 0 || isNaN(maxRegVal) || maxRegVal < 0) {
      alert(currentLang === 'hi'
        ? "कृपया महिला छूट सीमा व अधिकतम निबंधन शुल्क हेतु मान्य धनात्मक संख्यात्मक मान दर्ज करें।"
        : "Please enter valid non-negative numbers for female limit and max registration fee.");
      return;
    }

    const modal = document.getElementById('modalSettingsConfirm');
    if (!modal) {
      const confirmMsg = currentLang === 'hi'
        ? `क्या आप सेटिंग्स सुरक्षित करना चाहते हैं?\n• महिला छूट सीमा: ${formatINR(ceilingVal)}\n• अधिकतम निबंधन शुल्क: ${formatINR(maxRegVal)}\n• गाँव सूची क्रम: ${selectedSort === 'default' ? 'डेटासेट मूल क्रम' : 'वर्णमाला क्रम'}`
        : `Do you want to save these settings?\n• Female Limit: ${formatINR(ceilingVal)}\n• Max Reg Fee: ${formatINR(maxRegVal)}\n• Village Sort: ${selectedSort === 'default' ? 'Original Dataset Order' : 'Alphabetical'}`;
      if (confirm(confirmMsg)) {
        executeSaveSettings(ceilingVal, maxRegVal, selectedSort);
      }
      return;
    }

    const iconContainer = document.getElementById('modalSettingsIconContainer');
    const titleEl = document.getElementById('modalSettingsTitle');
    const subEl = document.getElementById('modalSettingsSub');
    const msgBox = document.getElementById('modalSettingsMessageBox');
    const previewBox = document.getElementById('modalSettingsPreviewBox');
    const actionBox = document.getElementById('modalSettingsActionButtons');

    if (iconContainer) {
      iconContainer.className = "w-11 h-11 rounded-xl bg-emerald-500/15 dark:bg-emerald-400/20 border border-emerald-500/30 dark:border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-xs";
      iconContainer.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
        </svg>
      `;
    }

    if (titleEl) {
      titleEl.innerText = currentLang === 'hi' ? "सेटिंग्स सुरक्षित करें?" : "Save Settings?";
    }
    if (subEl) {
      subEl.innerText = currentLang === 'hi' ? "विन्यास परिवर्तन पुष्टि" : "Confirm configuration changes";
    }

    if (msgBox) {
      msgBox.className = "p-3.5 rounded-xl border border-emerald-500/25 bg-emerald-50/80 dark:bg-emerald-500/10 text-xs leading-relaxed text-slate-800 dark:text-slate-200 space-y-1";
      msgBox.innerHTML = currentLang === 'hi'
        ? `<span>क्या आप वर्तमान सेटिंग्स को सहेजना और लागू करना चाहते हैं? ये दर सीमाएँ आगामी मूल्यांकनों पर प्रभावी होंगी।</span>`
        : `<span>Are you sure you want to save and apply these settings? These parameters will apply to upcoming valuations.</span>`;
    }

    const sortText = selectedSort === 'default'
      ? (currentLang === 'hi' ? 'डेटासेट का मूल क्रम' : 'Original Dataset Order')
      : (currentLang === 'hi' ? 'वर्णमाला क्रम (अ-ज्ञ)' : 'Alphabetical (A-Z)');

    if (previewBox) {
      previewBox.innerHTML = `
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'महिला छूट संचयी मूल्य सीमा:' : 'Female Exemption Limit:'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-sans">${formatINR(ceilingVal)}</span>
        </div>
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'अधिकतम निबंधन शुल्क सीमा:' : 'Max Registration Fee:'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-sans">${formatINR(maxRegVal)}</span>
        </div>
        <div class="flex items-center justify-between text-xs py-0.5">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'गाँव सूची क्रम:' : 'Village List Order:'}</span>
          <span class="font-bold text-slate-900 dark:text-white">${sortText}</span>
        </div>
      `;
    }

    if (actionBox) {
      actionBox.innerHTML = `
        <button type="button" onclick="closeSettingsModal()" class="flex-1 min-h-[52px] sm:min-h-[56px] py-3.5 px-5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold text-sm sm:text-base rounded-2xl border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-xs">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          <span>${currentLang === 'hi' ? 'रद्द करें' : 'Cancel'}</span>
        </button>
        <button type="button" onclick="executeSaveSettings(${ceilingVal}, ${maxRegVal}, '${selectedSort}')" class="flex-1 min-h-[52px] sm:min-h-[56px] py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 transition-all flex items-center justify-center space-x-2.5 cursor-pointer">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          <span>${currentLang === 'hi' ? 'हाँ, सुरक्षित करें' : 'Yes, Save'}</span>
        </button>
      `;
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  window.promptSaveSettings = promptSaveSettings;
  window.saveSettings = promptSaveSettings;

  function executeSaveSettings(ceilingVal, maxRegVal, selectedSort) {
    closeSettingsModal();
    sortMode = (selectedSort === 'default') ? 'default' : 'auto';
    localStorage.setItem('circle_rate_sort_mode', sortMode);

    femaleValueCeiling = ceilingVal;
    localStorage.setItem('circle_rate_female_ceiling', femaleValueCeiling.toString());

    maxRegFeeCap = maxRegVal;
    localStorage.setItem('circle_rate_max_reg_fee', maxRegFeeCap.toString());

    populateVillages();
    recalculate();
    saveFormState();

    if (typeof showToast === 'function') {
      showToast(currentLang === 'hi' ? "सेटिंग्स सफलतापूर्वक सहेजी गईं।" : "Settings saved successfully.", "success");
    } else {
      alert(currentLang === 'hi' ? "सेटिंग्स सफलतापूर्वक सहेजी गईं।" : "Settings saved successfully.");
    }
  }
  window.executeSaveSettings = executeSaveSettings;

  function promptRestoreDefaultSettings() {
    // Show popup BEFORE restoring; do not change any fields in the setting tab yet
    const modal = document.getElementById('modalSettingsConfirm');
    if (!modal) {
      const confirmMsg = currentLang === 'hi'
        ? "क्या आप डिफ़ॉल्ट सेटिंग्स पुनः स्थापित करना चाहते हैं?\n• महिला छूट सीमा: ₹ 25,00,000\n• अधिकतम निबंधन शुल्क: ₹ 50,000\n• गाँव सूची क्रम: वर्णमाला क्रम\n• थीम: स्वतः"
        : "Do you want to restore default settings?\n• Female Limit: ₹ 25,00,000\n• Max Reg Fee: ₹ 50,000\n• Village Sort: Alphabetical\n• Theme: Auto";
      if (confirm(confirmMsg)) {
        executeRestoreDefaultSettings();
      }
      return;
    }

    const iconContainer = document.getElementById('modalSettingsIconContainer');
    const titleEl = document.getElementById('modalSettingsTitle');
    const subEl = document.getElementById('modalSettingsSub');
    const msgBox = document.getElementById('modalSettingsMessageBox');
    const previewBox = document.getElementById('modalSettingsPreviewBox');
    const actionBox = document.getElementById('modalSettingsActionButtons');

    if (iconContainer) {
      iconContainer.className = "w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-xs";
      iconContainer.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      `;
    }

    if (titleEl) {
      titleEl.innerText = currentLang === 'hi' ? "डिफ़ॉल्ट सेटिंग्स पुनः स्थापित करें?" : "Restore Default Settings?";
    }
    if (subEl) {
      subEl.innerText = currentLang === 'hi' ? "पूर्वनिर्धारित मानों पर रीसेट" : "Reset to predetermined system defaults";
    }

    if (msgBox) {
      msgBox.className = "p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-500/25 bg-amber-50/70 dark:bg-amber-500/10 text-xs leading-relaxed text-amber-900 dark:text-amber-200 space-y-1";
      msgBox.innerHTML = currentLang === 'hi'
        ? `<span>क्या आप सभी सेटिंग्स को सिस्टम के पूर्वनिर्धारित मानों पर पुनर्स्थापित करना चाहते हैं? इससे आपकी वर्तमान सेटिंग्स रीसेट हो जाएंगी।</span>`
        : `<span>Are you sure you want to restore all settings to system predetermined values? Your current settings will be reset.</span>`;
    }

    if (previewBox) {
      previewBox.innerHTML = `
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'महिला छूट संचयी मूल्य सीमा:' : 'Female Exemption Limit:'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-sans">₹ 25,00,000 <span class="text-[10px] text-emerald-600 font-normal">(${currentLang === 'hi' ? 'डिफ़ॉल्ट' : 'Default'})</span></span>
        </div>
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'अधिकतम निबंधन शुल्क सीमा:' : 'Max Registration Fee:'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-sans">₹ 50,000 <span class="text-[10px] text-emerald-600 font-normal">(${currentLang === 'hi' ? 'डिफ़ॉल्ट' : 'Default'})</span></span>
        </div>
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'गाँव सूची क्रम:' : 'Village List Order:'}</span>
          <span class="font-bold text-slate-900 dark:text-white">${currentLang === 'hi' ? 'वर्णमाला क्रम (अ-ज्ञ)' : 'Alphabetical (A-Z)'}</span>
        </div>
        <div class="flex items-center justify-between text-xs py-0.5">
          <span class="text-slate-600 dark:text-slate-400">${currentLang === 'hi' ? 'थीम मोड:' : 'Theme Mode:'}</span>
          <span class="font-bold text-slate-900 dark:text-white">${currentLang === 'hi' ? 'स्वतः (सिस्टम अनुसार)' : 'Auto (System)'}</span>
        </div>
      `;
    }

    if (actionBox) {
      actionBox.innerHTML = `
        <button type="button" onclick="closeSettingsModal()" class="flex-1 min-h-[52px] sm:min-h-[56px] py-3.5 px-5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold text-sm sm:text-base rounded-2xl border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-xs">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          <span>${currentLang === 'hi' ? 'रद्द करें' : 'Cancel'}</span>
        </button>
        <button type="button" onclick="executeRestoreDefaultSettings()" class="flex-1 min-h-[52px] sm:min-h-[56px] py-3.5 px-5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md shadow-amber-600/30 hover:shadow-lg hover:shadow-amber-600/40 transition-all flex items-center justify-center space-x-2.5 cursor-pointer">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          <span>${currentLang === 'hi' ? 'हाँ, पुनः स्थापित करें' : 'Yes, Restore'}</span>
        </button>
      `;
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  window.promptRestoreDefaultSettings = promptRestoreDefaultSettings;
  window.restoreDefaultSettings = promptRestoreDefaultSettings;

  function executeRestoreDefaultSettings() {
    closeSettingsModal();

    // Set predetermined values into the setting tab fields
    const elCeiling = document.getElementById('settingFemaleValLimit');
    if (elCeiling) elCeiling.value = "2500000";

    const elMaxReg = document.getElementById('settingMaxRegFee');
    if (elMaxReg) elMaxReg.value = "50000";

    const sortRadio = document.querySelector('input[name="settingSortMode"][value="auto"]');
    if (sortRadio) sortRadio.checked = true;

    // Reset runtime variables
    femaleValueCeiling = 2500000;
    maxRegFeeCap = 50000;
    sortMode = 'auto';

    if (typeof setThemeMode === 'function') {
      setThemeMode('auto');
    }

    localStorage.setItem('circle_rate_female_ceiling', '2500000');
    localStorage.setItem('circle_rate_max_reg_fee', '50000');
    localStorage.setItem('circle_rate_sort_mode', 'auto');
    localStorage.setItem('circle_rate_theme_mode', 'auto');

    populateVillages();
    recalculate();
    saveFormState();

    if (typeof showToast === 'function') {
      showToast(currentLang === 'hi' ? "डिफ़ॉल्ट सेटिंग्स सफलतापूर्वक पुनः स्थापित की गईं।" : "Default settings restored successfully.", "success");
    } else {
      alert(currentLang === 'hi' ? "डिफ़ॉल्ट सेटिंग्स सफलतापूर्वक पुनः स्थापित की गईं।" : "Default settings restored successfully.");
    }
  }
  window.executeRestoreDefaultSettings = executeRestoreDefaultSettings;

  function resetToOfficialData() {
    const confirmMsg = currentLang === 'hi'
      ? "क्या आप आधिकारिक सर्किल दर डेटा पुनः लोड करना चाहते हैं? आयातित कस्टम डेटा रीसेट हो जाएगा।"
      : "Are you sure you want to reload the official circle rate dataset? Any imported dataset will be reset.";
    if (!confirm(confirmMsg)) return;

    rawDataset = (typeof unpackCircleRatesData === 'function' && window.CIRCLE_RATES_DATA)
      ? unpackCircleRatesData(window.CIRCLE_RATES_DATA)
      : (window.DEFAULT_BAGESHWAR_DATA || []);
    rawDataset.forEach(item => {
      if (!item.district) item.district = "Bageshwar";
      if (!item.tehsil) item.tehsil = "Kapkot";
    });
    localStorage.removeItem('circle_rate_active_dataset');
    populateDistrictTehsilFilters();
    populateVillages();
    recalculate();
    if (typeof showToast === 'function') {
      showToast(currentLang === 'hi' ? "आधिकारिक डेटासेट सफलतापूर्वक सक्रिय किया गया।" : "Official dataset restored successfully.", "success");
    } else {
      alert(currentLang === 'hi' ? "आधिकारिक डेटासेट सफलतापूर्वक सक्रिय किया गया।" : "Official dataset restored successfully.");
    }
  }
  window.resetToOfficialData = resetToOfficialData;

  function exportDataset() {
    const jsonStr = JSON.stringify(rawDataset, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `circle_rates_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  window.exportDataset = exportDataset;

  // 14. FILE UPLOAD (XLSX or JSON)
  function handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    if (file.name.endsWith('.json')) {
      reader.onload = function(e) {
        try {
          const parsed = JSON.parse(e.target.result);
          const unpacked = (typeof unpackCircleRatesData === 'function' && parsed && (parsed.rate_templates || parsed.districts))
            ? unpackCircleRatesData(parsed)
            : (Array.isArray(parsed) ? parsed : null);
          if (Array.isArray(unpacked) && unpacked.length > 0) {
            rawDataset = unpacked;
            localStorage.setItem('circle_rate_active_dataset', JSON.stringify(parsed));
            populateDistrictTehsilFilters();
            populateVillages();
            recalculate();
            alert(currentLang === 'hi' ? `${rawDataset.length} रिकॉर्ड सफलतापूर्वक लोड हुए!` : `Loaded ${rawDataset.length} records!`);
          } else {
            alert(currentLang === 'hi' ? "अमान्य JSON प्रारूप।" : "Invalid JSON format.");
          }
        } catch(err) {
          alert("Error: " + err.message);
        }
      };
      reader.readAsText(file);
    } else {
      // Excel reader
      reader.onload = function(e) {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json(firstSheet);
          if (json.length > 0) {
            rawDataset = json.map(r => ({
              district: r.district || r.District || "Bageshwar",
              tehsil: r.tehsil || r.Tehsil || "Kapkot",
              vname: r.vname || r.Village || r.Name || "Unknown",
              vname_eng: r.vname_eng || r.Village_Eng || r.vname || "",
              rates: {
                "AGRICULTURE": { "0-50m": parseFloat(r.agri_0_50) || 50, "50-200m": parseFloat(r.agri_50_200) || 45, ">200m": parseFloat(r.agri_200) || 40 },
                "NON AGRICULTURE": { "0-50m": parseFloat(r.nonagri_0_50) || 1200, "50-200m": parseFloat(r.nonagri_50_200) || 1000, ">200m": parseFloat(r.nonagri_200) || 800 },
                "FLAT": { "0-200m": parseFloat(r.flat_0_200) || 15000, ">200m": parseFloat(r.flat_200) || 13000 },
                "COMMERCIAL (SHOP/ RESTURENT/ OFFICE)": { "0-200m": parseFloat(r.comm_shop) || 18000, ">200m": parseFloat(r.comm_shop_200) || 16000 },
                "OTHER COMMERCIAL": { "0-200m": parseFloat(r.comm_other) || 16000, ">200m": parseFloat(r.comm_other_200) || 14000 },
                "NON-COMMERICAL FIRST CLASS": { "0-200m": parseFloat(r.noncomm_1st) || 5000, ">200m": parseFloat(r.noncomm_1st_200) || 4500 },
                "NON-COMMERICAL SECOND CLASS": { "0-200m": parseFloat(r.noncomm_2nd) || 3500, ">200m": parseFloat(r.noncomm_2nd_200) || 3000 }
              }
            }));
            localStorage.setItem('circle_rate_active_dataset', JSON.stringify(rawDataset));
            populateDistrictTehsilFilters();
            populateVillages();
            recalculate();
            alert(currentLang === 'hi' ? `एक्सेल से ${rawDataset.length} रिकॉर्ड लोड हुए!` : `Imported ${rawDataset.length} records from Excel!`);
          }
        } catch(err) {
          alert("Excel parsing error: " + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }
  window.handleFileUpload = handleFileUpload;

  // 15. DOMContentLoaded EVENT
  document.addEventListener('DOMContentLoaded', initApp);

})();