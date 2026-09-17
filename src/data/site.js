/* =========================================================
   SITE DATA — single source of truth for hospital-wide content.
   TBD(L(...)) marks a value awaiting hospital approval; it renders a
   visible "pending approval" marker. Sources: docs/README.md
   ========================================================= */
const TBD = (label) => ({ tbd: true, label });

const SITE = {
  name: L("مستشفى مصر المحبة", "Misr Al-Mahaba Hospital"),
  shortName: L("مصر المحبة", "Misr Al-Mahaba"),
  // Official slogan — from the hospital's own cover artwork
  slogan: L("صحتكم مسئوليتنا… ورعايتكم مهمتنا", "Your health is our responsibility, your care is our mission"),
  affiliation: L("تابعة لأسقفية الخدمات العامة والاجتماعية بالكنيسة القبطية الأرثوذكسية", "Operated by the Bishopric of Public and Social Services of the Coptic Orthodox Church"),
  address: {
    line: L("الطريق الزراعي مصر – أسوان، المدخل الجنوبي لمدينة بني مزار", "Cairo–Aswan Agricultural Road, southern entrance of Beni Mazar"),
    city: L("بني مزار", "Beni Mazar"),
    governorate: L("محافظة المنيا", "Minya Governorate"),
    country: L("مصر", "Egypt"),
  },
  // From Doctorak directory — hospital to re-verify
  phones: [
    { label: L("الرقم الرئيسي", "Main line"), value: "+20863840801", display: "086 384 0801" },
    { label: L("خط إضافي", "Additional line"), value: "+20863840803", display: "086 384 0803" },
    { label: L("خط إضافي", "Additional line"), value: "+20863840804", display: "086 384 0804" },
  ],
  email: TBD(L("البريد الإلكتروني الرسمي", "Official email")),
  hours: {
    emergency: TBD(L("ساعات عمل الطوارئ", "Emergency hours")),
    clinics: TBD(L("مواعيد العيادات الخارجية", "Outpatient clinic hours")),
  },
  social: { facebook: "https://www.facebook.com/MisrAlmahaba" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Misr+Al+Mahaba+Hospital+Beni+Mazar+Minya",
  url: "https://www.misralmahaba.example", // TBD: production domain
  logo: () => IMG.logo256,
};

// Figures stated identically by El Watan, Al-Dostor and Vetogate (13 May 2026)
const STATS = {
  asOf: L("وفق ما أُعلن في مايو 2026", "As announced in May 2026"),
  source: "https://www.elwatannews.com/news/details/8283910",
  items: [
    { n: 144, label: L("سريرًا للإقامة", "inpatient beds") },
    { n: 7, label: L("طوابق", "floors") },
    { n: 4, label: L("غرف عمليات", "operating rooms") },
    { n: 11, label: L("جهاز غسيل كلوي", "dialysis machines") },
    { n: 9, label: L("حضانات", "incubators") },
    { n: 600, prefix: "~", label: L("مريض يوميًا بالعيادات", "outpatients a day") },
  ],
};

const NAV = [
  { path: "/", key: "home" },
  { path: "/about", key: "about" },
  { path: "/departments", key: "departments" },
  { path: "/services", key: "services" },
  { path: "/doctors", key: "doctors" },
  { path: "/facilities", key: "facilities" },
  { path: "/news", key: "news" },
  { path: "/contact", key: "contact" },
];
