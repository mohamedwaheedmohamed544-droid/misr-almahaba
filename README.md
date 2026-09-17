# مستشفى مصر المحبة — Misr Al-Mahaba Hospital

موقع ثنائي اللغة (العربية افتراضيًا + الإنجليزية) لمستشفى مصر المحبة ببني مزار – المنيا.
بدون أي مكتبات خارجية: HTML + CSS + JavaScript، وسكربت بناء واحد يجمع كل شيء في `dist/index.html`.

## التشغيل محليًا
```bash
npm run build      # يبني dist/
npm run dev        # يبني ويشغّل على http://localhost:5173
```
يحتاج Node.js 18 أو أحدث.

## هيكل المشروع
```
src/
  styles/      tokens · base · components · sections
  data/        المحتوى (عربي/إنجليزي): site, departments, services, doctors, content
  assets/img/  اللوجو وصور المبنى (WebP)
  utils/       i18n · core (icons, SEO, motion, calling)
  components/  ui.js
  pages/       home · catalog · people · booking
  services/    api.js
  main.js      router
public/        robots.txt · sitemap.xml
build.mjs      سكربت البناء
netlify.toml   إعدادات Netlify
docs/README.md تحليل المحتوى، الـ Sitemap، الـ Design System
```

## تعديل المحتوى
- كل النصوص في `src/data/` بصيغة `L("عربي", "English")`.
- القيم التي تحتاج اعتمادًا مكتوبة `TBD(...)` — ابحث عنها واستبدلها.
- الأطباء التجريبيون في `src/data/doctors.js` (`demo: true`).
- لإضافة صورة: ضع ملف `.webp` في `src/assets/img/` (مثلاً `icu-room.webp`) ثم اكتب `image: "icuRoom"` في القسم.

## النشر على Netlify
الدومين في الـ SEO والـ sitemap يُضبط تلقائيًا من متغير `URL` الذي يوفره Netlify. لاستخدام دومين مخصص اضبط `SITE_URL` في إعدادات البيئة.
