/* =========================================================
   DOCTORS — SAMPLE RECORDS ONLY (demo:true renders a "Sample data" badge).
   Replace with the approved roster; the UI needs no change.
   schedule day: 0=Sun … 6=Sat
   ========================================================= */
const D = (id, dept, name, title, services, schedule) => ({ id, dept, demo: true, name, title, services, schedule, photo: null, qualifications: [],
  bio: L("نبذة مختصرة عن الطبيب وخبراته — تُستبدل بالنبذة المعتمدة.", "A short bio about the doctor’s experience — to be replaced with the approved bio.") });

const DOCTORS = [
  D("dr-dental-1", "dentistry", L("اسم طبيب الأسنان", "Dentist name"), L("أخصائي طب الأسنان", "Dental specialist"), ["dental-cosmetic", "orthodontics"], [{ day: 0, from: "10:00", to: "14:00" }, { day: 2, from: "16:00", to: "20:00" }, { day: 4, from: "10:00", to: "14:00" }]),
  D("dr-dental-2", "dentistry", L("اسم طبيبة الأسنان", "Dentist name"), L("أخصائية طب الأسنان", "Dental specialist"), ["dental-implants", "dental-cosmetic"], [{ day: 1, from: "16:00", to: "20:00" }, { day: 3, from: "16:00", to: "20:00" }]),
  D("dr-physio-1", "physiotherapy", L("اسم أخصائي العلاج الطبيعي", "Physiotherapist name"), L("أخصائي علاج طبيعي وتأهيل", "Physiotherapy & rehab specialist"), ["sports-rehab", "back-pain"], [{ day: 0, from: "09:00", to: "13:00" }, { day: 1, from: "09:00", to: "13:00" }, { day: 3, from: "09:00", to: "13:00" }]),
  D("dr-physio-2", "physiotherapy", L("اسم أخصائية العلاج الطبيعي", "Physiotherapist name"), L("أخصائية علاج طبيعي وتأهيل", "Physiotherapy & rehab specialist"), ["stroke-rehab", "back-pain"], [{ day: 2, from: "12:00", to: "17:00" }, { day: 6, from: "10:00", to: "14:00" }]),
  D("dr-dialysis-1", "dialysis", L("اسم طبيب الكلى", "Nephrologist name"), L("استشاري الكلى والغسيل الكلوي", "Consultant nephrologist"), ["laboratory"], [{ day: 0, from: "11:00", to: "15:00" }, { day: 2, from: "11:00", to: "15:00" }]),
  D("dr-surgery-1", "surgery", L("اسم الجرّاح", "Surgeon name"), L("استشاري الجراحة", "Consultant surgeon"), ["capsule-or"], [{ day: 1, from: "17:00", to: "21:00" }, { day: 4, from: "17:00", to: "21:00" }]),
  D("dr-opd-1", "outpatient", L("اسم طبيب العيادة", "Clinic doctor name"), L("طبيب العيادات الخارجية", "Outpatient physician"), ["laboratory", "radiology"], [{ day: 0, from: "10:00", to: "15:00" }, { day: 1, from: "10:00", to: "15:00" }, { day: 2, from: "10:00", to: "15:00" }, { day: 3, from: "10:00", to: "15:00" }]),
  D("dr-opd-2", "outpatient", L("اسم طبيبة العيادة", "Clinic doctor name"), L("طبيبة العيادات الخارجية", "Outpatient physician"), ["laboratory"], [{ day: 3, from: "16:00", to: "20:00" }, { day: 6, from: "16:00", to: "20:00" }]),
];

const DAY_NAMES = [L("الأحد", "Sunday"), L("الاثنين", "Monday"), L("الثلاثاء", "Tuesday"), L("الأربعاء", "Wednesday"), L("الخميس", "Thursday"), L("الجمعة", "Friday"), L("السبت", "Saturday")];
