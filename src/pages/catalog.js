/* ================= DEPARTMENTS / SERVICES / FACILITIES / ABOUT ================= */

/* Searchable + filterable directory — searches both languages */
function mountDirectory({ root, items, categories, getCat, getText, renderCard, noun }) {
  const state = { q: "", cat: "all" };
  const grid = $("[data-grid]", root), count = $("[data-count-label]", root), input = $("[data-search]", root);
  const draw = (animate = true) => {
    const q = normalize(state.q.trim());
    const list = items.filter((it) => (state.cat === "all" || getCat(it) === state.cat) && (!q || normalize(getText(it)).includes(q)));
    count.textContent = `${new Intl.NumberFormat(loc()).format(list.length)} ${tr(noun)}`;
    grid.classList.remove("grid-anim"); void grid.offsetWidth; if (animate) grid.classList.add("grid-anim");
    grid.innerHTML = list.length ? list.map((it) => renderCard(it).replace(" data-rv", "")).join("") : UI.empty(t("noResults"), `<button class="btn btn--soft btn--sm" type="button" data-reset>${t("clearSearch")}</button>`);
  };
  let tm; input?.addEventListener("input", (e) => { state.q = e.target.value; clearTimeout(tm); tm = setTimeout(draw, 120); });
  root.addEventListener("click", (e) => {
    const pill = e.target.closest("[data-cat]");
    if (pill) { state.cat = pill.dataset.cat; $$("[data-cat]", root).forEach((p) => p.setAttribute("aria-pressed", String(p === pill))); draw(); }
    if (e.target.closest("[data-reset]")) { state.q = ""; state.cat = "all"; if (input) input.value = ""; $$("[data-cat]", root).forEach((p) => p.setAttribute("aria-pressed", String(p.dataset.cat === "all"))); draw(); }
  });
  draw(false);
}

const directoryToolbar = ({ placeholder, categories, label }) => `
  <div class="toolbar">
    <div class="search"><label class="sr-only" for="dir-search">${esc(label)}</label>${icon("search")}<input id="dir-search" class="input" type="search" placeholder="${esc(placeholder)}" data-search autocomplete="off"></div>
    ${categories ? `<div class="filters" role="group" aria-label="${t("filterBy")}">${categories.map((c, i) => `<button type="button" class="pill" data-cat="${c.id}" aria-pressed="${i === 0}">${esc(c.label)}</button>`).join("")}</div>` : ""}
    <p class="result-count" data-count-label aria-live="polite"></p>
  </div>`;

const DepartmentsPage = {
  meta: () => ({ title: STR.departments, description: L("أقسام مستشفى مصر المحبة: الطوارئ، العناية المركزة، العمليات، الغسيل الكلوي، الحضانات، العيادات الخارجية، العلاج الطبيعي وطب الأسنان.", "Misr Al-Mahaba departments: emergency, ICU, surgery, dialysis, newborn care, outpatient clinics, physiotherapy and dentistry."), path: "/departments" }),
  render() {
    return `${UI.pageHero({ title: L("الأقسام والتخصصات الطبية", "Departments & Specialties"), lead: L("اختر القسم المناسب لتتعرف على ما يقدمه، ولمن يناسب، وكيف تحجز.", "Choose a department to see what it offers, who it’s for, and how to book."), crumbs: [{ label: t("departments") }] })}
    <section class="section" style="padding-top:var(--sp-6)"><div class="container" data-dir>
      ${directoryToolbar({ placeholder: L("ابحث عن قسم… مثل: أسنان، غسيل، طوارئ", "Search departments… e.g. dental, dialysis"), categories: DEPT_CATEGORIES, label: L("ابحث في الأقسام", "Search departments") })}
      <div class="grid grid-3" data-grid></div>
    </div></section>${UI.ctaBand()}`;
  },
  mount(root) { mountDirectory({ root: $("[data-dir]", root), items: DEPARTMENTS, categories: DEPT_CATEGORIES, getCat: (d) => d.category, getText: (d) => bothLangs(d.name) + bothLangs(d.summary) + d.offers.map(bothLangs).join(" "), renderCard: UI.deptCard, noun: L("قسم", "departments") }); },
};

const detailBody = ({ intro, offers, forWhom, note }) => `
  <div class="prose">
    <p style="font-size:var(--fs-lg);color:var(--ink)">${esc(intro)}</p>
    <h2>${t("whatWeOffer")}</h2><ul>${offers.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
    <h2>${t("whoFor")}</h2><ul>${forWhom.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
    ${note ? `<div class="notice">${icon("info")}<span>${val(note)}</span></div>` : ""}
    <p class="muted" style="font-size:var(--fs-xs)">${t("infoDisclaimer")}</p>
  </div>`;

const bookAside = (bookable, bookHref) => `<div class="aside-card">
  <h3>${bookable ? t("bookHere") : t("urgentHelp")}</h3>
  <p class="muted" style="font-size:var(--fs-sm)">${bookable ? t("bookHereText") : t("urgentText")}</p>
  ${UI.callBtn({ cls: "btn btn--block", label: `${t("callNow")} · <span class="num">${SITE.phones[0].display}</span>` })}
  ${bookable ? `<a class="btn btn--ghost btn--block" href="${bookHref}">${icon("calendar")}${t("book")}</a>` : ""}
</div>`;

const DepartmentDetailPage = {
  meta: ({ slug }) => { const d = bySlug.dept(slug); return d && { title: d.name, description: d.summary, path: "/departments/" + slug,
    jsonld: { "@context": "https://schema.org", "@type": "MedicalClinic", name: `${tr(d.name)} — ${tr(SITE.name)}`, description: tr(d.summary), parentOrganization: { "@type": "Hospital", name: tr(SITE.name) } } }; },
  render({ slug }) {
    const d = bySlug.dept(slug); if (!d) return NotFoundPage.render();
    const docs = DOCTORS.filter((x) => x.dept === slug);
    const services = d.services.map(bySlug.service).filter(Boolean);
    return `${UI.pageHero({ title: d.name, lead: d.summary, crumbs: [{ href: link("/departments"), label: t("departments") }, { label: d.name }] })}
    <section class="section" style="padding-top:var(--sp-6)"><div class="container detail">
      <div>
        ${UI.media({ src: d.image, cls: "detail-media", icon: d.icon, alt: "" })}
        ${detailBody(d)}
        ${docs.length ? `<h2 class="h3" style="margin-block:var(--sp-7) var(--sp-4)">${t("deptDoctors")}</h2><div class="grid grid-3">${docs.map(UI.doctorCard).join("")}</div>` : ""}
      </div>
      <aside class="aside">
        ${bookAside(d.bookable, link("/booking") + "?dept=" + d.slug)}
        ${services.length ? `<div class="aside-card"><h3>${t("relatedServices")}</h3><div class="related">${services.map((s) => `<a href="${link("/services/" + s.slug)}">${esc(s.name)}${icon("chev")}</a>`).join("")}</div></div>` : ""}
      </aside>
    </div></section>`;
  },
};

const ServicesPage = {
  meta: () => ({ title: STR.services, description: L("الخدمات الطبية في مستشفى مصر المحبة: التحاليل، الأشعة والرنين، بنك الدم، العلاج الطبيعي، وتجميل وزراعة وتقويم الأسنان.", "Services at Misr Al-Mahaba: lab tests, imaging and MRI, blood bank, physiotherapy, and cosmetic dentistry, implants and braces."), path: "/services" }),
  render() {
    return `${UI.pageHero({ title: L("الخدمات الطبية", "Medical Services"), lead: L("خدمات التشخيص والعلاج والتأهيل والخدمات المساندة — ابحث باسم الخدمة أو تصفّح حسب الفئة.", "Diagnostic, treatment, rehab and support services — search by name or browse by category."), crumbs: [{ label: t("services") }] })}
    <section class="section" style="padding-top:var(--sp-6)"><div class="container" data-dir>
      ${directoryToolbar({ placeholder: L("ابحث عن خدمة… مثل: رنين، تقويم، تأهيل", "Search services… e.g. MRI, braces, rehab"), categories: SERVICE_CATEGORIES, label: L("ابحث في الخدمات", "Search services") })}
      <div class="grid grid-3" data-grid></div>
    </div></section>${UI.ctaBand()}`;
  },
  mount(root) { mountDirectory({ root: $("[data-dir]", root), items: SERVICES, categories: SERVICE_CATEGORIES, getCat: (s) => s.category, getText: (s) => bothLangs(s.name) + bothLangs(s.summary) + s.offers.map(bothLangs).join(" "), renderCard: UI.serviceCard, noun: L("خدمة", "services") }); },
};

const ServiceDetailPage = {
  meta: ({ slug }) => { const s = bySlug.service(slug); return s && { title: s.name, description: s.summary, path: "/services/" + slug,
    jsonld: { "@context": "https://schema.org", "@type": "MedicalProcedure", name: tr(s.name), description: tr(s.summary), provider: { "@type": "Hospital", name: tr(SITE.name) } } }; },
  render({ slug }) {
    const s = bySlug.service(slug); if (!s) return NotFoundPage.render();
    const dept = s.dept ? bySlug.dept(s.dept) : null;
    const docs = DOCTORS.filter((d) => d.services.includes(slug) || (dept && d.dept === dept.slug));
    return `${UI.pageHero({ title: s.name, lead: s.summary, crumbs: [{ href: link("/services"), label: t("services") }, { label: s.name }] })}
    <section class="section" style="padding-top:var(--sp-6)"><div class="container detail">
      <div>
        ${UI.media({ cls: "detail-media", icon: s.icon })}
        ${detailBody({ intro: s.summary, offers: s.offers, forWhom: s.forWhom, note: s.note })}
        ${docs.length ? `<h2 class="h3" style="margin-block:var(--sp-7) var(--sp-4)">${t("relatedDoctors")}</h2><div class="grid grid-3">${docs.slice(0, 3).map(UI.doctorCard).join("")}</div>` : ""}
      </div>
      <aside class="aside">
        <div class="aside-card">
          <h3>${t("serviceDetails")}</h3>
          <dl class="kv">
            <div><dt>${t("specialty")}</dt><dd>${dept ? `<a class="link-arrow" href="${link("/departments/" + dept.slug)}">${esc(dept.name)}</a>` : t("sharedService")}</dd></div>
            <div><dt>${t("category")}</dt><dd>${esc(SERVICE_CATEGORIES.find((c) => c.id === s.category).label)}</dd></div>
            <div><dt>${t("booking")}</dt><dd>${t("byPhone")}</dd></div>
          </dl>
        </div>
        ${bookAside(s.bookable, link("/booking") + (dept ? "?dept=" + dept.slug : ""))}
      </aside>
    </div></section>`;
  },
};

const FacilitiesPage = {
  meta: () => ({ title: STR.facilities, description: L("مرافق مستشفى مصر المحبة: غرفة عمليات الكبسولة، الرنين المغناطيسي، وحدة الغسيل الكلوي، المختبر وبنك الدم.", "Misr Al-Mahaba facilities: the Capsule operating room, MRI, dialysis unit, laboratory and blood bank."), path: "/facilities" }),
  render() {
    return `${UI.pageHero({ title: L("المرافق والوحدات", "Facilities & Units"), lead: L("بنية مجهزة تدعم التشخيص الدقيق والتدخل السريع وسلامة المرضى.", "Infrastructure built for accurate diagnosis, rapid response and patient safety."), crumbs: [{ label: t("facilities") }] })}
    <section class="section"><div class="container fac-list">
      ${FACILITIES.map((f) => `<article class="fac">
        ${UI.media({ src: f.image, icon: f.icon, alt: f.image ? f.title : "", rv: true })}
        <div class="fac-copy" data-rv><div class="icon-tile">${icon(f.icon)}</div><h2 class="h2">${esc(f.title)}</h2><p class="lead" style="font-size:var(--fs-md)">${esc(f.text)}</p><a class="link-arrow" href="${link(f.link)}">${t("more")}${icon("arrow")}</a></div>
      </article>`).join("")}
    </div></section>${UI.ctaBand()}`;
  },
};

const AboutPage = {
  meta: () => ({ title: STR.about, description: L("تعرّف على مستشفى مصر المحبة ببني مزار: التبعية، الموقع، الأقسام، واعتماد GAHAR النهائي.", "About Misr Al-Mahaba Hospital in Beni Mazar: ownership, location, departments and final GAHAR accreditation."), path: "/about" }),
  render() {
    const p = [
      L("أُنشئت المستشفى في الأصل باسم «راعي مصر»، ثم انتقلت تبعيتها في أبريل 2018 إلى أسقفية الخدمات العامة والاجتماعية بالكنيسة القبطية الأرثوذكسية، وتغيّر اسمها إلى «مصر المحبة». وافتُتحت رسميًا في مارس 2019.", "The hospital was originally built as “Raei Misr”. In April 2018 it passed to the Coptic Orthodox Church’s Bishopric of Public and Social Services and was renamed “Misr Al-Mahaba”. It officially opened in March 2019."),
      L("تقع المستشفى على الطريق الزراعي مصر–أسوان عند المدخل الجنوبي لمدينة بني مزار، في مبنى من سبعة طوابق يضم 144 سريرًا، وتخدم قرابة 600 ألف مواطن.", "It stands on the Cairo–Aswan agricultural road at the southern entrance of Beni Mazar, in a seven-storey building with 144 beds, serving roughly 600,000 people."),
      L("في مايو 2026 أصبحت أول منشأة صحية بمحافظة المنيا تحصل على الاعتماد النهائي من الهيئة العامة للاعتماد والرقابة الصحية، وانضمت إلى منظومة التأمين الصحي الشامل.", "In May 2026 it became the first healthcare facility in Minya to earn final accreditation from GAHAR, and joined the Universal Health Insurance system."),
    ];
    const tl = [[L("أبريل 2018", "April 2018"), L("انتقال التبعية وتغيير الاسم", "New ownership and name")], [L("مارس 2019", "March 2019"), L("الافتتاح الرسمي", "Official opening")], [L("مايو 2026", "May 2026"), L("اعتماد GAHAR النهائي", "Final GAHAR accreditation")], [L("2026", "2026"), L("الانضمام للتأمين الصحي الشامل", "Joined Universal Health Insurance")]];
    return `${UI.pageHero({ title: L("عن مستشفى مصر المحبة", "About Misr Al-Mahaba Hospital"), lead: SITE.slogan, crumbs: [{ label: t("about") }] })}
    <section class="section"><div class="container split">
      <div class="split-copy">
        <span class="eyebrow">${tr(L("قصتنا", "Our story"))}</span>
        <h2 class="h2">${tr(L("من «راعي مصر» إلى «مصر المحبة»", "From “Raei Misr” to “Misr Al-Mahaba”"))}</h2>
        <div class="prose">${p.map((x) => `<p>${esc(x)}</p>`).join("")}</div>
      </div>
      <div class="split-media">${UI.media({ src: "buildingFull", alt: L("مبنى المستشفى", "Hospital building"), rv: true })}</div>
    </div></section>

    <section class="section section--tint"><div class="container">
      <div class="section-head"><div><span class="eyebrow">${tr(L("محطات موثّقة", "Documented milestones"))}</span><h2 class="h2">${tr(L("رحلتنا حتى اليوم", "Our journey so far"))}</h2></div></div>
      <div class="timeline" data-rv>${tl.map(([d, x]) => `<div><small>${esc(d)}</small><b>${esc(x)}</b></div>`).join("")}</div>
      <div class="stats" style="margin-top:var(--sp-5)" data-rv>
        ${STATS.items.map((s) => `<div class="stat"><b data-count="${s.n}" data-prefix="${s.prefix || ""}">${s.prefix || ""}${s.n}</b><small>${esc(s.label)}</small></div>`).join("")}
      </div>
      <p class="stats-note">${esc(STATS.asOf)} · <a href="${STATS.source}" target="_blank" rel="noopener">${t("source")}</a></p>
    </div></section>

    <section class="section"><div class="container">
      <div class="section-head"><div><span class="eyebrow">${tr(L("الرؤية والرسالة والقيم", "Vision, mission & values"))}</span><h2 class="h2">${tr(L("ما نلتزم به", "What we stand for"))}</h2></div></div>
      <div class="grid grid-3">
        <div class="aside-card" data-rv><h3>${tr(L("شعارنا", "Our motto"))}</h3><p class="lead" style="font-size:var(--fs-md);color:var(--primary)">${esc(SITE.slogan)}</p></div>
        ${[L("الرؤية", "Vision"), L("الرسالة", "Mission")].map((x) => `<div class="aside-card" data-rv><h3>${esc(x)}</h3><p>${val(TBD(L("النص المعتمد من الإدارة", "Approved text from management")))}</p></div>`).join("")}
      </div>
    </div></section>
    ${UI.ctaBand()}`;
  },
};
