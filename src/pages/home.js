/* ================= HOME ================= */
const HomePage = {
  meta: () => ({ path: "/" }),
  render() {
    const featured = ["emergency", "icu", "surgery", "dialysis", "physiotherapy", "dentistry"].map(bySlug.dept);
    const quick = [
      { href: link("/booking"), icon: "calendar", t: L("احجز موعدًا", "Book a visit"), s: L("اختر الطبيب ثم اتصل للتأكيد", "Pick a doctor, then call to confirm"), primary: true },
      { href: link("/doctors"), icon: "users", t: L("الأطباء", "Doctors"), s: L("دليل الأطباء والتخصصات", "Doctor directory") },
      { href: link("/departments"), icon: "grid", t: L("الأقسام الطبية", "Departments"), s: L("من الطوارئ إلى العيادات", "From emergency to clinics") },
      { href: link("/services"), icon: "flask", t: L("الخدمات", "Services"), s: L("أشعة، مختبر، تأهيل", "Imaging, lab, rehab") },
      { call: true, icon: "phone", t: L("اتصل بنا", "Call us"), s: L(SITE.phones[0].display, SITE.phones[0].display) },
    ];
    const steps = [
      { icon: "search", t: L("اكتشف الخدمة", "Find the service"), p: L("تصفح الأقسام والخدمات المتاحة", "Browse departments and services"), href: link("/services") },
      { icon: "grid", t: L("اختر التخصص", "Choose a specialty"), p: L("حدد القسم المناسب لحالتك", "Pick the right department"), href: link("/departments") },
      { icon: "user", t: L("تعرّف على الطبيب", "Meet your doctor"), p: L("اطلع على ملف الطبيب ومواعيده", "See the doctor’s profile and hours"), href: link("/doctors") },
      { icon: "phone", t: L("اتصل واحجز", "Call to book"), p: L("حدد موعدك المفضل واتصل بنا للتأكيد", "Choose a time and call us to confirm"), href: link("/booking") },
      { icon: "heart", t: L("احصل على الرعاية", "Receive care"), p: L("استقبال منظم ومتابعة بعد الزيارة", "Organized reception and follow-up"), href: link("/contact") },
    ];
    const heroTitle = LANG === "ar"
      ? `<span class="line"><span>صحتكم مسئوليتنا…</span></span> <span class="line"><span>ورعايتكم <em>مهمتنا</em></span></span>`
      : `<span class="line"><span>Your health, our responsibility.</span></span> <span class="line"><span>Your care, our <em>mission</em>.</span></span>`;
    return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-bg" aria-hidden="true"><i></i><i></i></div>
      <div class="container hero-grid">
        <div class="hero-copy load-seq">
          <span class="eyebrow">${esc(SITE.name)} · ${esc(SITE.address.city)}</span>
          <h1 class="hero-title" id="hero-title">${heroTitle}</h1>
          <p class="lead">${tr(L("مستشفى متكامل يخدم أهالي شمال المنيا: طوارئ وعناية مركزة، عمليات وغسيل كلوي، عيادات خارجية وتأهيل، مع أشعة ومختبر تحت سقف واحد.", "A full-service hospital for northern Minya: emergency and intensive care, surgery and dialysis, outpatient clinics and rehab — with imaging and lab under one roof."))}</p>
          <div class="hero-actions">
            ${UI.callBtn({ cls: "btn btn--lg", label: t("callToBook") })}
            <a class="btn btn--ghost btn--lg" href="${link("/services")}">${tr(L("استكشف خدماتنا", "Explore our services"))}${icon("arrow")}</a>
          </div>
          <div class="hero-trust">
            <span>${icon("badge")}${tr(L("معتمدة نهائيًا من GAHAR", "Fully GAHAR-accredited"))}</span>
            <span>${icon("shield")}${tr(L("ضمن التأمين الصحي الشامل", "Universal Health Insurance partner"))}</span>
          </div>
        </div>
        <div class="hero-visual">
          <span class="hero-outline" aria-hidden="true"></span>
          <div class="hero-frame">
            <img src="${IMG.buildingHero}" alt="${esc(L("مبنى مستشفى مصر المحبة ببني مزار", "Misr Al-Mahaba Hospital building in Beni Mazar"))}" fetchpriority="high" decoding="async">
            <span class="hero-caption">${icon("pin")}${esc(SITE.address.city)}${comma()}${esc(SITE.address.governorate)}</span>
          </div>
          <div class="float-card float-card--logo" aria-hidden="true"><img src="${IMG.logo256}" alt=""></div>
          <div class="float-card float-card--badge">
            <div class="icon-tile">${icon("badge")}</div>
            <div><b>${tr(L("أول منشأة بالمنيا", "First in Minya"))}</b><small>${tr(L("تحصل على الاعتماد النهائي من الهيئة العامة للاعتماد والرقابة الصحية", "to earn final accreditation from Egypt’s healthcare accreditation authority"))}</small></div>
          </div>
        </div>
      </div>
    </section>

    <section class="quick" aria-label="${t("quickActions")}">
      <div class="container"><div class="quick-list">
        ${quick.map((q) => {
          const inner = `<span class="icon-tile">${icon(q.icon)}</span><span><b>${tr(q.t)}</b><small class="${q.call ? "num" : ""}">${tr(q.s)}</small></span>`;
          return q.call ? `<a class="quick-item" href="tel:${SITE.phones[0].value}" data-call="${SITE.phones[0].value}">${inner}</a>` : `<a class="quick-item ${q.primary ? "quick-item--primary" : ""}" href="${q.href}">${inner}</a>`;
        }).join("")}
      </div></div>
    </section>

    <section class="section" aria-labelledby="stats-h" style="padding-bottom:0">
      <div class="container">
        <h2 class="sr-only" id="stats-h">${tr(L("المستشفى بالأرقام", "The hospital in numbers"))}</h2>
        <div class="stats" data-rv>
          ${STATS.items.map((s) => `<div class="stat"><b data-count="${s.n}" data-prefix="${s.prefix || ""}">${s.prefix || ""}${new Intl.NumberFormat(loc()).format(s.n)}</b><small>${esc(s.label)}</small></div>`).join("")}
        </div>
        <p class="stats-note">${esc(STATS.asOf)} · <a href="${STATS.source}" target="_blank" rel="noopener">${t("source")}</a></p>
      </div>
    </section>

    <section class="section" aria-labelledby="about-h">
      <div class="container split">
        <div class="split-media">
          ${UI.media({ src: "buildingEntrance", alt: L("المدخل الرئيسي للمستشفى", "Hospital main entrance"), rv: true })}
          <figure class="media" style="background:#fff;display:grid;place-items:center" data-rv><img src="${IMG.logo256}" alt="${esc(L("شعار مستشفى مصر المحبة", "Misr Al-Mahaba Hospital logo"))}" style="width:80%;height:auto;object-fit:contain"></figure>
        </div>
        <div class="split-copy">
          <span class="eyebrow">${t("about")}</span>
          <h2 class="h2" id="about-h">${tr(L("صرح طبي قريب من الناس، ومبني على خدمتهم", "A hospital close to its community, built to serve it"))}</h2>
          <p class="lead" style="font-size:var(--fs-md)">${esc(SITE.affiliation)}${tr(L("، افتُتحت عام 2019 لتقدم رعاية متكاملة لأهالي بني مزار والمراكز المحيطة.", ". Opened in 2019 to provide complete care for Beni Mazar and surrounding districts."))}</p>
          <div class="pillars">
            <div class="pillar"><span class="q">${tr(L("من نحن؟", "Who we are"))}</span><b>${tr(L("مستشفى عام متعدد التخصصات", "A multi-specialty general hospital"))}</b><p>${tr(L("مبنى من سبعة طوابق على الطريق الزراعي مصر–أسوان.", "A seven-storey building on the Cairo–Aswan road."))}</p></div>
            <div class="pillar"><span class="q">${tr(L("ماذا نقدم؟", "What we offer"))}</span><b>${tr(L("رعاية عاجلة، جراحية، مزمنة وتأهيلية", "Urgent, surgical, chronic and rehab care"))}</b><p>${tr(L("من الطوارئ والعناية المركزة إلى الغسيل الكلوي والعيادات والعلاج الطبيعي.", "From emergency and ICU to dialysis, clinics and physiotherapy."))}</p></div>
            <div class="pillar"><span class="q">${tr(L("ما الذي يميزنا؟", "What sets us apart"))}</span><b>${tr(L("جودة معتمدة وتجربة أبسط", "Accredited quality, simpler experience"))}</b><p>${tr(L("اعتماد GAHAR النهائي، ونظام رقمي للحجز والروشتات.", "Final GAHAR accreditation and digital booking and prescriptions."))}</p></div>
          </div>
          <a class="link-arrow" href="${link("/about")}">${tr(L("تعرّف على المستشفى", "About the hospital"))}${icon("arrow")}</a>
        </div>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="dept-h">
      <div class="container">
        <div class="section-head">
          <div><span class="eyebrow">${tr(L("التخصصات والأقسام", "Specialties & departments"))}</span><h2 class="h2" id="dept-h">${tr(L("كل ما تحتاجه من رعاية في مكان واحد", "All the care you need, in one place"))}</h2></div>
          <a class="btn btn--ghost" href="${link("/departments")}">${tr(L("كل الأقسام", "All departments"))}${icon("arrow")}</a>
        </div>
        <div class="grid grid-3">${featured.map(UI.deptCard).join("")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="doc-h">
      <div class="container">
        <div class="section-head">
          <div><span class="eyebrow">${t("doctors")}</span><h2 class="h2" id="doc-h">${tr(L("تعرّف على طبيبك قبل زيارتك", "Meet your doctor before your visit"))}</h2><p class="muted">${tr(L("ملفات الأطباء نماذج توضيحية إلى حين اعتماد القائمة الرسمية.", "Doctor profiles are samples until the official roster is approved."))}</p></div>
          <a class="btn btn--ghost" href="${link("/doctors")}">${tr(L("دليل الأطباء", "Doctor directory"))}${icon("arrow")}</a>
        </div>
        <div class="grid grid-4">${DOCTORS.slice(0, 4).map(UI.doctorCard).join("")}</div>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="why-h">
      <div class="container">
        <div class="section-head"><div><span class="eyebrow">${tr(L("لماذا مصر المحبة؟", "Why Misr Al-Mahaba?"))}</span><h2 class="h2" id="why-h">${tr(L("ثقة يمكن التحقق منها", "Trust you can verify"))}</h2></div></div>
        <div class="why">
          ${WHY.map((w) => w.feature
            ? `<div class="why-item why-item--feature" data-rv><img class="why-logo" src="${IMG.logo256}" alt=""><span class="chip">${esc(w.chip)}</span><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`
            : `<div class="why-item" data-rv><div class="icon-tile">${icon(w.icon)}</div><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="journey-h">
      <div class="container">
        <div class="section-head"><div><span class="eyebrow">${tr(L("رحلة المريض", "Patient journey"))}</span><h2 class="h2" id="journey-h">${tr(L("من أول نقرة حتى تلقي الرعاية", "From first click to receiving care"))}</h2></div></div>
        <div class="journey" role="list">
          <span class="journey-track" aria-hidden="true"><i></i></span>
          ${steps.map((s) => `<div class="step" role="listitem"><span class="step-dot">${icon(s.icon)}</span><b>${tr(s.t)}</b><p>${tr(s.p)}</p><a href="${s.href}" aria-label="${esc(s.t)}"></a></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="news-h">
      <div class="container">
        <div class="section-head"><div><span class="eyebrow">${t("news")}</span><h2 class="h2" id="news-h">${tr(L("آخر أخبار المستشفى", "Latest hospital news"))}</h2></div><a class="btn btn--ghost" href="${link("/news")}">${tr(L("كل الأخبار", "All news"))}${icon("arrow")}</a></div>
        <div class="grid grid-3">${NEWS.slice(0, 3).map(UI.newsCard).join("")}</div>
      </div>
    </section>

    ${UI.ctaBand()}`;
  },
};
