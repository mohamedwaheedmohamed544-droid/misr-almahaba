/* =========================================================
   DEPARTMENTS — all units confirmed by press coverage (2019–2026).
   image: set to an IMG key / URL when real photos are supplied;
   until then a branded illustration panel is rendered.
   ========================================================= */
const DEPARTMENTS = [
  {
    slug: "emergency", icon: "pulse", category: "acute", bookable: false, image: null,
    name: L("الطوارئ والاستقبال", "Emergency & Reception"),
    summary: L("استقبال الحالات العاجلة وتقييمها وتوجيهها للتخصص المناسب، مع وحدة للإنعاش القلبي الرئوي.", "Receives, assesses and routes urgent cases, with a dedicated cardiopulmonary resuscitation unit."),
    intro: L("قسم الطوارئ هو نقطة الاستقبال الأولى للحالات العاجلة. يضم أسرّة كشف مخصصة لفرز الحالات وتقييمها سريعًا، ووحدة للإنعاش القلبي الرئوي، ويرتبط مباشرة بالأشعة والمختبر والعناية المركزة وغرف العمليات.",
      "The emergency department is the first point of contact for urgent cases. It has dedicated examination beds for rapid triage, a cardiopulmonary resuscitation unit, and direct links to radiology, the laboratory, intensive care and the operating rooms."),
    offers: [L("فرز الحالات وتقييمها الفوري", "Immediate triage and assessment"), L("وحدة الإنعاش القلبي الرئوي", "CPR unit"), L("تحويل داخلي سريع للأشعة والمختبر", "Fast internal referral to radiology and lab"), L("التنسيق مع العناية المركزة والعمليات", "Coordination with ICU and surgery")],
    forWhom: [L("الإصابات والحوادث", "Injuries and accidents"), L("الأعراض الحادة المفاجئة", "Sudden acute symptoms"), L("الحالات التي تحتاج تقييمًا طبيًا عاجلًا", "Anyone needing urgent medical assessment")],
    services: ["cpr-unit", "laboratory", "radiology"],
  },
  {
    slug: "icu", icon: "heart", category: "acute", bookable: false, image: null,
    name: L("العناية المركزة", "Intensive Care"),
    summary: L("رعاية مركزة عامة وتخصصية للحالات الحرجة تحت متابعة طبية وتمريضية مستمرة.", "General and specialized intensive care for critical cases under continuous medical and nursing monitoring."),
    intro: L("تضم المستشفى وحدات عناية مركزة عامة وتخصصية لرعاية الحالات الحرجة بعد العمليات الكبرى أو عند الحاجة لمراقبة دقيقة ومستمرة للعلامات الحيوية.",
      "The hospital runs general and specialized intensive care units for critical patients after major surgery or whenever close, continuous monitoring of vital signs is needed."),
    offers: [L("عناية مركزة عامة", "General intensive care"), L("عناية مركزة تخصصية", "Specialized intensive care"), L("مراقبة مستمرة للعلامات الحيوية", "Continuous vital-sign monitoring"), L("رعاية ما بعد العمليات الكبرى", "Post-operative critical care")],
    forWhom: [L("الحالات الحرجة", "Critically ill patients"), L("مرضى ما بعد الجراحات الكبرى", "Patients after major surgery"), L("الحالات المحوّلة من الطوارئ", "Cases referred from emergency")],
    services: ["laboratory", "blood-bank"],
  },
  {
    slug: "dialysis", icon: "drop", category: "chronic", bookable: true, image: null,
    name: L("الغسيل الكلوي", "Dialysis"),
    summary: L("وحدة غسيل كلوي مجهزة، مع قسم منفصل لمرضى فيروس سي حفاظًا على سلامة المرضى.", "An equipped dialysis unit with a separate section for hepatitis C patients to protect patient safety."),
    intro: L("وحدة الغسيل الكلوي مخصصة لمرضى الفشل الكلوي الذين يحتاجون جلسات منتظمة، وتضم قسمًا منفصلًا لمرضى فيروس سي وفق معايير مكافحة العدوى.",
      "The dialysis unit serves kidney-failure patients who need regular sessions, with a separate section for hepatitis C patients in line with infection-control standards."),
    offers: [L("جلسات الغسيل الكلوي الدورية", "Regular dialysis sessions"), L("قسم منفصل لمرضى فيروس سي", "Separate hepatitis C section"), L("متابعة التحاليل الدورية لمرضى الغسيل", "Routine lab follow-up for dialysis patients")],
    forWhom: [L("مرضى الفشل الكلوي المزمن", "Patients with chronic kidney failure"), L("المرضى المحوّلون لبدء جلسات الغسيل", "Patients referred to start dialysis")],
    services: ["laboratory"],
  },
  {
    slug: "surgery", icon: "scalpel", category: "acute", bookable: true, image: null,
    name: L("العمليات الجراحية", "Surgery"),
    summary: L("غرف عمليات مجهزة، من بينها غرفة «الكبسولة» المخصصة للجراحات الدقيقة.", "Equipped operating rooms, including the “Capsule” suite for delicate procedures."),
    intro: L("يضم مجمع العمليات غرفًا مجهزة للتدخلات الجراحية المختلفة، ومنها غرفة العمليات «الكبسولة» المصممة للجراحات الدقيقة التي تتطلب أعلى درجات التعقيم.",
      "The surgical suite has operating rooms equipped for a range of procedures, including the “Capsule” room designed for delicate operations that demand the highest sterility."),
    offers: [L("غرف عمليات مجهزة", "Equipped operating rooms"), L("غرفة «الكبسولة» للجراحات الدقيقة", "The “Capsule” suite for delicate surgery"), L("رعاية ما قبل العملية وبعدها", "Pre- and post-operative care"), L("ارتباط مباشر بالعناية المركزة وبنك الدم", "Direct link to ICU and blood bank")],
    forWhom: [L("المرضى المحوّلون لتدخل جراحي", "Patients referred for surgery"), L("الجراحات المجدولة والطارئة", "Scheduled and emergency operations")],
    services: ["capsule-or", "blood-bank", "laboratory"],
  },
  {
    slug: "nicu", icon: "baby", category: "acute", bookable: false, image: null,
    name: L("رعاية حديثي الولادة", "Newborn Care"),
    summary: L("حضانات مجهزة لرعاية المواليد الذين يحتاجون متابعة خاصة بعد الولادة.", "Equipped incubators for newborns who need special monitoring after birth."),
    intro: L("يوفر القسم حضانات مجهزة لرعاية حديثي الولادة الذين يحتاجون إلى مراقبة أو رعاية خاصة في أيامهم الأولى.", "The unit provides equipped incubators for newborns who need monitoring or special care in their first days."),
    offers: [L("حضانات مجهزة", "Equipped incubators"), L("متابعة طبية وتمريضية للمواليد", "Medical and nursing follow-up for newborns")],
    forWhom: [L("المواليد المبتسرون", "Premature babies"), L("المواليد الذين يحتاجون مراقبة خاصة", "Newborns needing close monitoring")],
    services: ["laboratory"],
  },
  {
    slug: "outpatient", icon: "stethoscope", category: "clinics", bookable: true, image: null,
    name: L("العيادات الخارجية", "Outpatient Clinics"),
    summary: L("عيادات تخصصية متعددة تستقبل نحو 600 مريض يوميًا للكشف والمتابعة دون إقامة.", "Specialty clinics seeing around 600 patients a day for consultations and follow-up."),
    intro: L("تضم المستشفى مجموعة من العيادات الخارجية التي تغطي تخصصات متعددة للكشف والاستشارة والمتابعة الدورية.", "The hospital’s outpatient clinics cover multiple specialties for consultations and routine follow-up."),
    offers: [L("الكشف والاستشارة التخصصية", "Specialist consultations"), L("المتابعة الدورية", "Routine follow-up"), L("التحويل للفحوصات والأشعة", "Referral for tests and imaging")],
    forWhom: [L("المرضى الذين يحتاجون كشفًا أو متابعة دون إقامة", "Patients who need a visit without admission")],
    services: ["laboratory", "radiology", "uhi"],
    note: TBD(L("القائمة المعتمدة لتخصصات العيادات ومواعيدها", "Approved list of clinic specialties and hours")),
  },
  {
    slug: "physiotherapy", icon: "motion", category: "clinics", bookable: true, image: null,
    name: L("العلاج الطبيعي والتأهيل", "Physiotherapy & Rehabilitation"),
    summary: L("برامج تأهيل لإصابات الملاعب وآلام الظهر والأربطة، والتأهيل بعد الجلطات.", "Rehab programs for sports injuries, back pain, ligament injuries and post-stroke recovery."),
    intro: L("يقدم قسم العلاج الطبيعي برامج تأهيلية تهدف إلى استعادة الحركة وتخفيف الألم وتحسين جودة الحياة، بإشراف أخصائيين في العلاج الطبيعي.", "The physiotherapy department offers rehabilitation programs that restore movement, relieve pain and improve quality of life, supervised by physiotherapists."),
    offers: [L("تأهيل إصابات الملاعب", "Sports injury rehab"), L("التأهيل بعد الجلطات", "Post-stroke rehab"), L("علاج آلام الظهر", "Back pain treatment"), L("تأهيل إصابات الأربطة", "Ligament injury rehab")],
    forWhom: [L("الرياضيون والمصابون", "Athletes and injured patients"), L("مرضى ما بعد الجلطات", "Stroke survivors"), L("من يعانون آلام الظهر والمفاصل", "People with back and joint pain")],
    services: ["sports-rehab", "stroke-rehab", "back-pain"],
  },
  {
    slug: "dentistry", icon: "tooth", category: "clinics", bookable: true, image: null,
    name: L("طب الأسنان", "Dentistry"),
    summary: L("علاج وتجميل الأسنان: الحشوات التجميلية، علاج العصب، التقويم، الزراعة والتبييض.", "Dental treatment and cosmetics: fillings, root canals, braces, implants and whitening."),
    intro: L("يقدم قسم الأسنان خدمات علاجية وتجميلية متكاملة، من الكشف والتنظيف حتى الزراعة والتقويم.", "The dental department offers complete treatment and cosmetic care, from check-ups and cleaning to implants and braces."),
    offers: [L("الحشوات التجميلية وعلاج العصب", "Cosmetic fillings and root canals"), L("التيجان والقشور (الفينير)", "Crowns and veneers"), L("التقويم المعدني", "Metal braces"), L("زراعة الأسنان", "Dental implants"), L("تبييض الأسنان", "Teeth whitening"), L("تنظيف اللثة", "Gum cleaning"), L("خلع الأسنان المدفونة", "Impacted tooth extraction"), L("علاج آلام الفكين", "Jaw pain treatment")],
    forWhom: [L("الكبار والأطفال", "Adults and children"), L("من يرغب في تجميل ابتسامته", "Anyone wanting a better smile"), L("حالات آلام الأسنان والفكين", "Tooth and jaw pain")],
    services: ["dental-cosmetic", "dental-implants", "orthodontics"],
  },
];

const DEPT_CATEGORIES = [
  { id: "all", label: L("الكل", "All") },
  { id: "acute", label: L("رعاية عاجلة وحرجة", "Urgent & critical") },
  { id: "clinics", label: L("عيادات وتأهيل", "Clinics & rehab") },
  { id: "chronic", label: L("رعاية مزمنة", "Chronic care") },
];
