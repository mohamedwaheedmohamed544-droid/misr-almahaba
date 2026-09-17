/* =========================================================
   FACILITIES, VALUE PROPOSITIONS, NEWS
   News items summarise real published press; every item links to its source.
   ========================================================= */
const FACILITIES = [
  { id: "building", icon: "hospital", image: "buildingWing", link: "/about",
    title: L("مبنى من سبعة طوابق", "A seven-storey building"),
    text: L("مبنى حديث على الطريق الزراعي مصر–أسوان يضم الأقسام الداخلية والعيادات والعمليات، مع أنظمة غازات طبية مركزية ومولدات ونظام إطفاء حريق آلي.", "A modern building on the Cairo–Aswan road housing wards, clinics and surgery, with central medical gases, generators and automatic fire suppression.") },
  { id: "capsule", icon: "scalpel", link: "/services/capsule-or",
    title: L("غرفة عمليات «الكبسولة»", "The “Capsule” operating room"),
    text: L("غرفة عمليات مخصصة للجراحات الدقيقة، مصممة لتوفير بيئة معقمة عالية التحكم.", "An operating room for delicate procedures, designed as a highly controlled sterile environment.") },
  { id: "mri", icon: "scan", link: "/services/radiology",
    title: L("الأشعة والرنين المغناطيسي", "Radiology & MRI"),
    text: L("وحدة أشعة متكاملة تشمل جهاز رنين مغناطيسي، تخدم الطوارئ والعيادات والأقسام الداخلية.", "A full imaging unit with MRI serving emergency, clinics and inpatient wards.") },
  { id: "dialysis", icon: "drop", link: "/departments/dialysis",
    title: L("وحدة الغسيل الكلوي", "Dialysis unit"),
    text: L("وحدة مجهزة بـ 11 جهاز غسيل كلوي، مع قسم منفصل لمرضى فيروس سي التزامًا بمعايير مكافحة العدوى.", "Equipped with 11 dialysis machines and a separate hepatitis C section, following infection-control standards.") },
  { id: "lab-blood", icon: "flask", link: "/services/laboratory",
    title: L("المختبر وبنك الدم", "Laboratory & blood bank"),
    text: L("مختبر بأجهزة حديثة وبنك دم داخلي يدعمان العمليات والعناية المركزة والطوارئ.", "A modern laboratory and in-house blood bank supporting surgery, intensive care and emergency.") },
  { id: "digital", icon: "tablet", image: "buildingEntrance", link: "/booking",
    title: L("نظام حجز وروشتات رقمي", "Digital booking & prescriptions"),
    text: L("اعتمدت المستشفى منذ افتتاحها نظامًا رقميًا للحجز والروشتات يقلل الاعتماد على الورق.", "Since opening, the hospital has used a digital system for bookings and prescriptions that cuts paperwork.") },
];

const WHY = [
  { icon: "badge", feature: true, chip: L("مايو 2026", "May 2026"),
    title: L("اعتماد GAHAR النهائي", "Final GAHAR accreditation"),
    text: L("أول منشأة صحية في محافظة المنيا تحصل على الاعتماد النهائي من الهيئة العامة للاعتماد والرقابة الصحية، وهو اعتماد يقيس جودة الرعاية وسلامة المرضى.", "The first healthcare facility in Minya to earn final accreditation from Egypt’s General Authority for Healthcare Accreditation and Regulation — a standard that measures quality of care and patient safety.") },
  { icon: "shield", title: L("ضمن التأمين الصحي الشامل", "Part of Universal Health Insurance"), text: L("المستشفى منضمة لمنظومة التأمين الصحي الشامل في المنيا.", "The hospital has joined the Universal Health Insurance system in Minya.") },
  { icon: "grid", title: L("أقسام متكاملة تحت سقف واحد", "Integrated care under one roof"), text: L("طوارئ، عناية مركزة، عمليات، غسيل كلوي، حضانات، عيادات، أشعة ومختبر.", "Emergency, ICU, surgery, dialysis, incubators, clinics, imaging and lab.") },
  { icon: "pin", title: L("سهولة الوصول", "Easy to reach"), text: L("على الطريق الزراعي مصر–أسوان عند المدخل الجنوبي لبني مزار.", "On the Cairo–Aswan road at the southern entrance of Beni Mazar.") },
  { icon: "tablet", title: L("تجربة رقمية أبسط", "A simpler digital experience"), text: L("حجز وروشتات رقمية تقلل الانتظار والأوراق.", "Digital booking and prescriptions mean less waiting and paperwork.") },
];

const NEWS = [
  { slug: "gahar-accreditation-2026", date: "2026-05-13", image: "buildingFull",
    title: L("مستشفى مصر المحبة أول منشأة بالمنيا تحصل على الاعتماد النهائي من GAHAR", "Misr Al-Mahaba becomes Minya’s first facility with final GAHAR accreditation"),
    excerpt: L("أعلن محافظ المنيا خلال جولته بالمستشفى حصولها على الاعتماد النهائي وانضمامها لمنظومة التأمين الصحي الشامل.", "During a visit to the hospital, Minya’s governor announced its final accreditation and its entry into Universal Health Insurance."),
    body: [
      L("تفقد محافظ المنيا مستشفى مصر المحبة ببني مزار، معلنًا حصولها على الاعتماد النهائي من الهيئة العامة للاعتماد والرقابة الصحية (GAHAR)، لتكون أول منشأة بالمحافظة تحقق ذلك.", "Minya’s governor visited Misr Al-Mahaba Hospital in Beni Mazar and announced it had received final accreditation from the General Authority for Healthcare Accreditation and Regulation (GAHAR) — the first facility in the governorate to do so."),
      L("وبحسب ما أُعلن، يقع المبنى على سبعة طوابق ويضم 144 سريرًا و4 غرف عمليات منها غرفة «الكبسولة»، و9 حضانات، و11 جهاز غسيل كلوي، إضافة إلى بنك دم ومختبر ووحدة أشعة مزودة بجهاز رنين مغناطيسي.", "According to the announcement, the seven-storey building has 144 beds, 4 operating rooms including the “Capsule” suite, 9 incubators and 11 dialysis machines, plus a blood bank, laboratory and an imaging unit with MRI."),
      L("وتستقبل العيادات الخارجية نحو 600 مريض يوميًا، فيما تخدم المستشفى قرابة 600 ألف مواطن، وانضمت مؤخرًا إلى منظومة التأمين الصحي الشامل.", "Its outpatient clinics see around 600 patients a day, the hospital serves roughly 600,000 residents, and it recently joined the Universal Health Insurance system."),
    ],
    source: { name: L("الوطن", "El Watan"), url: "https://www.elwatannews.com/news/details/8283910" } },
  { slug: "governor-visit-2026", date: "2026-05-13", image: "buildingEntrance",
    title: L("محافظ المنيا يتفقد مستشفى «مصر المحبة» ويتابع جاهزية الأقسام", "Minya governor tours Misr Al-Mahaba and reviews department readiness"),
    excerpt: L("جولة تفقدية للتأكد من جاهزية المنشآت المنضمة حديثًا لمنظومة التأمين الصحي الشامل.", "An inspection tour to check the readiness of facilities newly added to Universal Health Insurance."),
    body: [
      L("أجرى محافظ المنيا جولة تفقدية بمستشفى مصر المحبة ببني مزار ضمن متابعة جاهزية المنشآت الطبية المنضمة حديثًا لمنظومة التأمين الصحي الشامل.", "Minya’s governor toured Misr Al-Mahaba Hospital in Beni Mazar as part of reviewing the readiness of medical facilities newly added to Universal Health Insurance."),
      L("وشملت الجولة الاطلاع على الأقسام والعيادات والتجهيزات، والاحتفاء بحصول المستشفى على الاعتماد النهائي لمعايير جودة الرعاية الصحية.", "The tour covered departments, clinics and equipment, and marked the hospital’s final accreditation against national healthcare quality standards."),
    ],
    source: { name: L("الدستور", "Al-Dostor"), url: "https://www.dostor.org/5553530" } },
  { slug: "gahar-vetogate-2026", date: "2026-05-13", image: "buildingWing",
    title: L("«مصر المحبة» تحصل على اعتماد GAHAR وتخفف الضغط على المستشفيات الحكومية", "Misr Al-Mahaba earns GAHAR accreditation, easing pressure on public hospitals"),
    excerpt: L("تقرير يستعرض تجهيزات المستشفى ودورها في دعم الخدمات الصحية بالمنيا.", "A report on the hospital’s facilities and its role in supporting healthcare in Minya."),
    body: [
      L("تناول التقرير حصول مستشفى مصر المحبة ببني مزار على اعتماد الهيئة العامة للاعتماد والرقابة الصحية، باعتباره خطوة مهمة لتطوير الخدمات الصحية بالمحافظة.", "The report covers Misr Al-Mahaba Hospital in Beni Mazar receiving GAHAR accreditation as an important step for healthcare services in the governorate."),
      L("وأشار التقرير إلى تجهيزات المستشفى من غرف عمليات ووحدة غسيل كلوي وحضانات وجهاز رنين مغناطيسي ونظام إطفاء آلي، وإلى دورها في تخفيف الضغط على المستشفيات الحكومية.", "It highlights the hospital’s operating rooms, dialysis unit, incubators, MRI and automatic fire suppression, and its role in reducing pressure on public hospitals."),
    ],
    source: { name: L("فيتو", "Vetogate"), url: "https://www.vetogate.com/5654757" } },
  { slug: "about-the-hospital-2020", date: "2020-01-01", dateLabel: "2020", image: "buildingHero",
    title: L("«مصر المحبة».. صرح طبي في الصعيد بخدمات متكاملة", "Misr Al-Mahaba: a comprehensive medical landmark in Upper Egypt"),
    excerpt: L("تقرير صحفي يستعرض أقسام المستشفى وموقعها على الطريق الزراعي مصر–أسوان.", "A press feature on the hospital’s departments and its location on the Cairo–Aswan road."),
    body: [
      L("تناول تقرير صحفي المستشفى بوصفها صرحًا طبيًا يخدم أهالي شمال محافظة المنيا، ويقع على الطريق الزراعي مصر–أسوان عند المدخل الجنوبي لمدينة بني مزار.", "A press feature described the hospital as a medical landmark serving northern Minya, located on the Cairo–Aswan agricultural road at the southern entrance of Beni Mazar."),
      L("واستعرض التقرير أقسام الطوارئ ووحدة الإنعاش، والغسيل الكلوي مع قسم منفصل لمرضى فيروس سي، وغرف العمليات، والحضانات، والعيادات الخارجية، والعلاج الطبيعي، والمختبر، والأشعة، والعناية المركزة.", "It covered emergency and resuscitation, dialysis with a separate hepatitis C section, operating rooms, incubators, outpatient clinics, physiotherapy, the laboratory, imaging and intensive care."),
    ],
    source: { name: L("الوطن", "El Watan"), url: "https://www.elwatannews.com/news/details/4243334" } },
  { slug: "opening-2019", date: "2019-03-19", image: "buildingFull",
    title: L("افتتاح مستشفى مصر المحبة ببني مزار", "Misr Al-Mahaba Hospital opens in Beni Mazar"),
    excerpt: L("الافتتاح الرسمي للمستشفى بعد انتقال تبعيتها إلى الكنيسة القبطية الأرثوذكسية.", "The hospital officially opens after its transfer to the Coptic Orthodox Church."),
    body: [
      L("افتُتحت المستشفى رسميًا في مارس 2019، بعد انتقال تبعيتها في أبريل 2018 إلى أسقفية الخدمات العامة والاجتماعية بالكنيسة القبطية الأرثوذكسية، وتغيير اسمها من «راعي مصر» إلى «مصر المحبة».", "The hospital officially opened in March 2019, after ownership passed in April 2018 to the Coptic Orthodox Church’s Bishopric of Public and Social Services and its name changed from “Raei Misr” to “Misr Al-Mahaba”."),
      L("واعتمدت المستشفى منذ افتتاحها نظامًا رقميًا للحجز وصرف الروشتات.", "From day one, the hospital adopted a digital system for bookings and prescriptions."),
    ],
    source: { name: L("الوطن", "El Watan"), url: "https://www.elwatannews.com/news/details/4073149" } },
];
