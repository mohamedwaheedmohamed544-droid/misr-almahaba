# مستشفى مصر المحبة — Misr Al-Mahaba Hospital

موقع ثنائي اللغة (العربية افتراضيًا + الإنجليزية) مع **لوحة تحكم كاملة** لإدارة المحتوى على `/admin`.

- **الموقع**: HTML + CSS + JavaScript بدون مكتبات، يُبنى في `dist/`.
- **لوحة التحكم**: [Decap CMS](https://decapcms.org) بواجهة عربية — كل حفظ = Commit على GitHub ← Netlify ينشر تلقائيًا.
- **الحماية**: فحص تلقائي للمحتوى قبل كل نشر (Netlify + GitHub Actions). أي خطأ يوقف النشر والموقع الحالي يبقى كما هو.

---

## ما الذي يمكن التحكم فيه من اللوحة؟

| القسم | إضافة | تعديل | حذف/إخفاء |
|---|:-:|:-:|:-:|
| الأطباء (الاسم، اللقب، الصورة، القسم، المؤهلات، الخدمات، **مواعيد العمل**) | ✅ | ✅ | ✅ |
| الأقسام الطبية (الوصف، ماذا نقدم، لمن يناسب، الصورة، الأيقونة، متاح للحجز) | ✅ | ✅ | ✅ |
| الخدمات الطبية | ✅ | ✅ | ✅ |
| الأخبار والمقالات التوعوية | ✅ | ✅ | ✅ |
| الصفحة الرئيسية (العنوان، الصورة، الأقسام المميزة، لماذا نحن، دعوة الحجز) | — | ✅ | — |
| عن المستشفى (القصة، المحطات، الرؤية، الرسالة، القيم) | ✅ | ✅ | ✅ |
| المرافق | ✅ | ✅ | ✅ |
| الهوية: الاسم، الشعار، اللوجو، أيقونة المتصفح، وصف SEO | — | ✅ | — |
| **شريط إعلان** أعلى الموقع (تشغيل/إيقاف) | — | ✅ | — |
| التواصل: الهواتف، واتساب، البريد، العنوان، المواعيد، الخريطة، السوشيال | ✅ | ✅ | ✅ |
| أرقام المستشفى (العدادات) | ✅ | ✅ | ✅ |
| فئات الأقسام والخدمات | ✅ | ✅ | ✅ |
| الصور (رفع وحذف) | ✅ | — | ✅ |

دليل الاستخدام للمحررين موجود داخل اللوحة: `/admin/guide.html`

---

## الإعداد لأول مرة (مرة واحدة فقط)

### 1) ارفع المشروع على GitHub
```bash
git init
git add .
git commit -m "Misr Al-Mahaba website + CMS"
git branch -M main
git remote add origin https://github.com/USERNAME/misr-almahaba.git
git push -u origin main
```

### 2) اربطه بـ Netlify
Netlify ← **Add new project ← Import an existing project ← GitHub** ← اختر المستودع ← **Deploy**.
الإعدادات تُقرأ تلقائيًا من `netlify.toml` (Build: `npm run build` · Publish: `dist`).

> اسم المستودع والفرع يُضافان تلقائيًا للوحة التحكم أثناء البناء — لا تحتاج تعديل أي ملف.

### 3) فعّل تسجيل الدخول بحساب GitHub
**أ. أنشئ OAuth App على GitHub**
1. GitHub ← صورتك ← **Settings ← Developer settings ← OAuth Apps ← New OAuth App**
2. املأ:
   - **Application name**: `Misr Al-Mahaba CMS`
   - **Homepage URL**: رابط موقعك على Netlify، مثل `https://misr-almahaba.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. **Register application** ← انسخ **Client ID** ← **Generate a new client secret** وانسخه.

**ب. أضفه في Netlify**
Netlify ← المشروع ← **Project configuration ← Access & security ← OAuth** (قد تظهر باسم *Access control ← OAuth*) ← **Install provider** ← اختر **GitHub** ← الصق Client ID و Client Secret ← **Install**.

### 4) ادخل على اللوحة
افتح `https://your-site.netlify.app/admin` ← **الدخول بحساب GitHub** ← ابدأ التعديل.

### 5) أضف فريق التحرير
GitHub ← المستودع ← **Settings ← Collaborators ← Add people**. أي شخص له صلاحية الكتابة على المستودع يستطيع الدخول للوحة.

> **بديل** إذا لم تظهر خيارات OAuth في حسابك على Netlify: استخدم خدمة [DecapBridge](https://decapbridge.com) المجانية لتسجيل الدخول بالبريد الإلكتروني، ثم عدّل قسم `backend` في `admin/config.js` حسب تعليماتها.

---

## التشغيل والتعديل على جهازك
```bash
npm run build      # فحص المحتوى + بناء dist/
npm run validate   # فحص المحتوى فقط
npm run dev        # بناء وتشغيل الموقع على http://localhost:5173
npm run cms        # (في نافذة ثانية) تشغيل اللوحة محليًا بدون GitHub ← http://localhost:5173/admin/
```
يحتاج Node.js 18 أو أحدث.

---

## هيكل المشروع
```
content/              ← كل محتوى الموقع (تديره لوحة التحكم)
  settings/           general · contact · stats · categories
  pages/              home · about · facilities
  departments/*.json  services/*.json  doctors/*.json  news/*.json
  uploads/            الصور
admin/                ← لوحة التحكم
  index.html          تحميل Decap CMS + الواجهة العربية
  config.js           تعريف كل الحقول والأقسام
  locale-ar.js        ترجمة الواجهة للعربية
  guide.html          دليل المحررين
scripts/
  content.mjs         تحميل وفحص المحتوى
  validate.mjs        أمر الفحص
src/                  ← كود الموقع (styles · utils · data · components · pages · main.js)
build.mjs             بناء الموقع
netlify.toml          إعدادات Netlify (البناء، الهيدرز، الروابط)
.github/workflows/    فحص تلقائي مع كل تعديل
docs/README.md        تحليل المحتوى والـ Design System
```

## ملاحظات تقنية
- **الصور**: على Netlify تُقدَّم عبر Netlify Image CDN (تحويل تلقائي إلى WebP/AVIF وتصغير حسب المقاس).
- **SEO**: `sitemap.xml` و`robots.txt` يُولَّدان تلقائيًا من المحتوى المنشور مع روابط العربية والإنجليزية.
- **إضافة حقل جديد**: عرّفه في `admin/config.js`، ثم استخدمه في صفحة الموقع المناسبة داخل `src/pages`.
- **لوحة التحكم معزولة**: `/admin` مستبعدة من محركات البحث.
