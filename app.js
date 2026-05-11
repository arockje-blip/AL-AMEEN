// ============================================================
//  AL AMEEN ROLLING SHUTTER - Pure JavaScript Website
//  All content, structure, and logic built entirely in JS
// ============================================================

const BRAND = {
  name: "Al Ameen Rolling Shutter",
  short: "Al Ameen",
  tagline: "Professional Rolling Shutter & Automation Solutions",
  phone1: "96294 95874",
  phone2: "63835 14898",
  phone1Raw: "+919629495874",
  phone2Raw: "+916383514898",
  whatsapp: "https://wa.me/919629495874",
  address: "Danishpet Main Road, Santhaipet, Kadayampatti (Tk)",
  hours: "Mon - Sat: 9AM - 7PM",
  mapSrc: "https://www.google.com/maps?q=Danishpet+Main+Road,+Santhaipet,+Kadayampatti+Tk,+Salem+Tamil+Nadu&output=embed"
};

const PRODUCTS = [
  { name: "Rolling Shutter", tag: "Manual", desc: "Heavy-duty galvanised steel rolling shutters for shops, warehouses and industrial units. Custom widths and heights available.", specs: [["Material","Galvanised Steel"],["Finish","Powder Coated"],["Drive","Manual / Spring"],["Warranty","1 Year"]] },
  { name: "Automatic Rolling Shutter", tag: "Motorised", desc: "Fully motorised shutters with remote control, mobile app support, and safety obstruction sensors for convenience and security.", specs: [["Motor","3-Phase / Single Phase"],["Control","Remote / App"],["Safety","Obstacle Sensor"],["Speed","~0.15 m/s"]] },
  { name: "Grill Shutter", tag: "Security", desc: "Heavy-duty MS rod grill shutters providing ventilation and visibility while ensuring maximum security for storefronts.", specs: [["Material","MS Steel Rods"],["Rod Dia","12mm / 16mm"],["Finish","Powder Coat"],["Lock","Built-in Padlock"]] },
  { name: "Sliding Gate Motor", tag: "Automation", desc: "Heavy-duty sliding gate motor systems for industrial and residential compound gates with remote control.", specs: [["Gate Weight","Up to 800kg"],["Control","Remote / Card"],["Power","230V AC"],["Brand","FAAC / BFT"]] },
  { name: "Boom Barrier", tag: "Access Control", desc: "Commercial-grade boom barriers for parking lots, toll gates, and factory entrances. Fast cycle times and robust build.", specs: [["Boom Length","Up to 6m"],["Cycle Time","2-4 sec"],["Control","Loop / Remote"],["Warranty","1 Year"]] },
  { name: "Gate Wheels", tag: "Accessory", desc: "High-load capacity gate support wheels for smooth sliding gate operation. Suitable for all gate types and weights.", specs: [["Load Capacity","200-500 kg"],["Material","Cast Iron"],["Bearing","Double Ball"],["Fit","Universal"]] },
  { name: "Gear Box", tag: "Component", desc: "Industrial-grade gearboxes for rolling shutters providing smooth, quiet operation and long service life under heavy use.", specs: [["Ratio","1:40 / 1:60"],["Material","Cast Iron"],["Lubrication","Sealed"],["Compatibility","All Shutters"]] },
  { name: "Bottom Plate", tag: "Component", desc: "Sturdy galvanised bottom plates for rolling shutters ensuring a clean, secure bottom seal and weather resistance.", specs: [["Material","Galvanised Steel"],["Thickness","1.5mm / 2mm"],["Finish","Powder Coat"],["Type","Universal Fit"]] },
  { name: "Spring", tag: "Component", desc: "Precision-wound torsion springs for balanced rolling shutter operation. Available for all standard shutter weights.", specs: [["Type","Torsion Spring"],["Material","High Carbon Steel"],["Sizes","Various"],["Treatment","Anti-rust"]] },
  { name: "Wooden Finish Aluminium", tag: "Premium", desc: "Premium aluminium shutters with realistic wood grain finish for showrooms and retail outlets requiring an elegant look.", specs: [["Material","Aluminium"],["Finish","Wood Grain"],["Weight","Light"],["Warranty","2 Years"]] },
  { name: "Glass Door Fittings", tag: "Glass", desc: "Complete glass door hardware - hinges, handles, floor springs, and patch fittings for frameless glass doors.", specs: [["Material","SS 304"],["Finish","Satin / Mirror"],["Load","Up to 100kg"],["Type","Patch / Spider"]] },
];

const SERVICES = [
  { num: "01", title: "Manufacturing", text: "Custom manufacturing of rolling shutters, grill shutters, and aluminium shutters to exact specifications." },
  { num: "02", title: "Installation", text: "Professional on-site installation with skilled technicians ensuring perfect fit and secure mounting." },
  { num: "03", title: "Automation", text: "Complete motorised solutions - remote control, sensor integration, and smart access systems." },
  { num: "04", title: "Repair & AMC", text: "Annual maintenance contracts and rapid repair services. Genuine spare parts and service guarantee." },
  { num: "05", title: "Consultation", text: "Free site assessment and expert consultation to choose the right shutter type and automation solution." },
  { num: "06", title: "Spare Parts Supply", text: "All genuine spare parts - springs, gear boxes, bottom plates, gate wheels readily available." },
];

// Testimonials now loaded from `State.reviews` (persisted storage). Static examples removed.

const FAQS = [
  { q: "What types of rolling shutters do you manufacture?", a: "We manufacture standard rolling shutters, automatic motorised rolling shutters, grill shutters, aluminium shutters with wooden finish, glass shutters, and perforated shutters." },
  { q: "Do you provide installation services along with manufacturing?", a: "Yes, we provide complete end-to-end services including manufacturing, supply, and professional installation by experienced technicians." },
  { q: "What is the warranty on your products?", a: "We offer 1-year warranty on all manufactured shutters. Automatic systems come with manufacturer warranty on motors and controllers." },
  { q: "Do you service all brands of rolling shutters?", a: "Yes, our technicians are trained to service and repair shutters of all brands. We carry genuine spare parts for most brands." },
  { q: "What areas do you serve?", a: "We primarily serve Salem district - Kadayampatti, Danishpet, Santhaipet, Omalur, and surrounding areas. Large projects across Tamil Nadu." },
  { q: "How do I get a quote?", a: "Call us at 96294 95874, WhatsApp us, or fill the contact form. We provide free site visit and quotation within 24 hours." },
];

const NAV_LINKS = [
  { label: "About", target: "about" },
  { label: "Products", target: "products" },
  { label: "Services", target: "services" },
  { label: "Gallery", target: "gallery" },
  { label: "Testimonials", target: "testimonials" },
  { label: "Admin", target: "admin" },
  { label: "Feedback", target: "feedback" },
  { label: "Contact", target: "contact" },
];

const ICONS = {
  shutter: '<path d="M2 6h20v2H2zm0 4h20v2H2zm0 4h20v2H2zm0 4h14v2H2z"/>',
  phone: '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>',
  pin: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
  clock: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>',
  check: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>',
  arrow: '<path d="M8 5v14l11-7z"/>',
  plus: '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  send: '<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>',
  shield: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>',
  tool: '<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>',
  grid: '<path d="M10 10H4V4h6v6zm0 10H4v-6h6v6zm10-10h-6V4h6v6zm0 10h-6v-6h6v6z"/>',
  image: '<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',
  menu: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
  close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>',
  eye: '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  person: '<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>',
};

const STORAGE_KEYS = {
  dashboard: "al_ameen_dashboard",
  feedback: "al_ameen_feedback",
};

STORAGE_KEYS.reviews = "al_ameen_reviews";
STORAGE_KEYS.customers = "al_ameen_customers";
STORAGE_KEYS.admins = "al_ameen_admins";

function createDefaultDashboard() {
  return {
    stats: {
      projects: 500,
      experience: 14,
      clients: 200,
      satisfaction: 98,
    },
    projects: [
      {
        title: "Automatic Rolling Shutter",
        client: "Rajesh Kumar",
        location: "Salem",
        status: "Completed",
        note: "Motorised showroom shutter installation.",
      },
    ],
    clients: [
      {
        customerId: "CUST-001",
        name: "Rajesh Kumar",
        phone: "9876543210",
        category: "Showroom",
      },
    ],
    gallery: [
      {
        title: "Commercial Rolling Shutter",
        note: "Front elevation installation in Salem.",
        year: "2026",
      },
    ],
  };
}

function safeReadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function safeWriteJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable in some file:// contexts.
  }
}

function loadDashboardData() {
  const fallback = createDefaultDashboard();
  const stored = safeReadJSON(STORAGE_KEYS.dashboard, fallback);
  return {
    stats: { ...fallback.stats, ...(stored.stats || {}) },
    projects: Array.isArray(stored.projects) ? stored.projects : fallback.projects,
    clients: Array.isArray(stored.clients) ? stored.clients : fallback.clients,
    gallery: Array.isArray(stored.gallery) ? stored.gallery : fallback.gallery,
  };
}

function loadFeedbackData() {
  const stored = safeReadJSON(STORAGE_KEYS.feedback, []);
  return Array.isArray(stored) ? stored : [];
}

function loadReviewsData() {
  const stored = safeReadJSON(STORAGE_KEYS.reviews, []);
  return Array.isArray(stored) ? stored : [];
}

function loadCustomersData() {
  const stored = safeReadJSON(STORAGE_KEYS.customers, []);
  return Array.isArray(stored) ? stored : [];
}

function loadAdminsData() {
  const stored = safeReadJSON(STORAGE_KEYS.admins, []);
  return Array.isArray(stored) ? stored : [];
}

const State = {
  mobileMenuOpen: false,
  countersStarted: false,
  dashboard: loadDashboardData(),
  feedbacks: loadFeedbackData(),
  reviews: loadReviewsData(),
  customers: loadCustomersData(),
  admins: loadAdminsData(),
};

function persistDashboardData() {
  safeWriteJSON(STORAGE_KEYS.dashboard, State.dashboard);
}

function persistFeedbackData() {
  safeWriteJSON(STORAGE_KEYS.feedback, State.feedbacks);
}

function persistReviewsData() {
  safeWriteJSON(STORAGE_KEYS.reviews, State.reviews);
}

function persistCustomersData() {
  safeWriteJSON(STORAGE_KEYS.customers, State.customers);
}

function persistAdminsData() {
  safeWriteJSON(STORAGE_KEYS.admins, State.admins);
}

function normalizeCustomerId(value) {
  return value.trim().toUpperCase();
}

function formatListValue(value) {
  return value == null || value === "" ? "-" : value;
}

function renderEmptyState(container, text) {
  container.innerHTML = "";
  container.append(el("div", { class: "empty-state" }, text));
}

function refreshStatNodes() {
  document.querySelectorAll("[data-stat-key]").forEach((node) => {
    const key = node.dataset.statKey;
    if (!key) return;
    node.textContent = State.dashboard.stats[key] ?? 0;
  });
}

function renderAdminLists() {
  const projectsList = document.getElementById("adminProjectsList");
  const clientsList = document.getElementById("adminClientsList");
  const galleryList = document.getElementById("adminGalleryList");
  if (projectsList) {
    if (!State.dashboard.projects.length) renderEmptyState(projectsList, "No admin projects added yet.");
    else {
      projectsList.innerHTML = "";
      State.dashboard.projects.slice().reverse().forEach((project) => {
        projectsList.append(
          el("div", { class: "mini-item" },
            el("strong", {}, formatListValue(project.title)),
            el("span", {}, `${formatListValue(project.client)} · ${formatListValue(project.location)}`),
            el("span", { class: "mini-note" }, `${formatListValue(project.status)} · ${formatListValue(project.note)}`)
          )
        );
      });
    }
  }
  if (clientsList) {
    if (!State.customers.length) renderEmptyState(clientsList, "No customers stored yet.");
    else {
      clientsList.innerHTML = "";
      State.customers.slice().reverse().forEach((client) => {
        clientsList.append(
          el("div", { class: "mini-item" },
            el("strong", {}, `${formatListValue(client.name)} (${formatListValue(client.customerId)})`),
            el("span", {}, `${formatListValue(client.phone)} · ${formatListValue(client.category)}`)
          )
        );
      });
    }
  }
  if (galleryList) {
    if (!State.dashboard.gallery.length) renderEmptyState(galleryList, "No gallery entries added yet.");
    else {
      galleryList.innerHTML = "";
      State.dashboard.gallery.slice().reverse().forEach((item) => {
        galleryList.append(
          el("div", { class: "mini-item" },
            el("strong", {}, formatListValue(item.title)),
            el("span", {}, formatListValue(item.note)),
            el("span", { class: "mini-note" }, formatListValue(item.year))
          )
        );
      });
    }
  }
}

function renderAdminSummary() {
  const summaryProjects = document.getElementById("summaryProjects");
  const summaryExperience = document.getElementById("summaryExperience");
  const summaryClients = document.getElementById("summaryClients");
  const summarySatisfaction = document.getElementById("summarySatisfaction");
  if (summaryProjects) summaryProjects.textContent = State.dashboard.stats.projects ?? 0;
  if (summaryExperience) summaryExperience.textContent = State.dashboard.stats.experience ?? 0;
  if (summaryClients) summaryClients.textContent = State.dashboard.stats.clients ?? 0;
  if (summarySatisfaction) summarySatisfaction.textContent = `${State.dashboard.stats.satisfaction ?? 0}%`;
}

function renderFeedbackList() {
  const feedbackList = document.getElementById("customerFeedbackList");
  const feedbackCount = document.getElementById("feedbackCount");
  const feedbackAverage = document.getElementById("feedbackAverage");
  if (!feedbackList) return;

  const total = State.feedbacks.length;
  const average = total ? Math.round(State.feedbacks.reduce((sum, item) => sum + Number(item.satisfaction || 0), 0) / total) : 0;
  if (feedbackCount) feedbackCount.textContent = total;
  if (feedbackAverage) feedbackAverage.textContent = `${average}%`;

  if (!total) {
    renderEmptyState(feedbackList, "No customer feedback submitted yet.");
    return;
  }

  feedbackList.innerHTML = "";
  State.feedbacks.slice().reverse().forEach((item) => {
    feedbackList.append(
      el("div", { class: "feedback-card" },
        el("div", { class: "feedback-top" },
          el("div", {},
            el("div", { class: "feedback-name" }, item.name),
            el("div", { class: "feedback-id" }, `Customer ID: ${item.customerId}`)
          ),
          el("div", { class: "feedback-score" }, `${item.satisfaction}%`)
        ),
        el("div", { class: "feedback-meta" }, `${formatListValue(item.service)} · ${formatListValue(item.phone)}`),
        el("p", { class: "feedback-text" }, formatListValue(item.message))
      )
    );
  });
}

function refreshDashboardView() {
  refreshStatNodes();
  renderAdminSummary();
  renderAdminLists();
  renderFeedbackList();
}

function injectStyles() {
  if (document.getElementById("siteStyles")) return;
  const style = document.createElement("style");
  style.id = "siteStyles";
  style.textContent = `
    :root {
      --bg: #071118;
      --bg2: #0b1b22;
      --panel: rgba(9, 22, 28, 0.86);
      --panel-strong: rgba(8, 18, 24, 0.96);
      --line: rgba(255, 255, 255, 0.10);
      --text: #e7f0ec;
      --muted: rgba(231, 240, 236, 0.72);
      --muted-2: rgba(231, 240, 236, 0.56);
      --accent: #3ddc84;
      --accent-2: #f4c94a;
      --accent-3: #2ea7ff;
      --shadow: 0 22px 65px rgba(0, 0, 0, 0.35);
      --radius: 24px;
      --radius-sm: 16px;
      --max: 1200px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background:
        radial-gradient(circle at top left, rgba(61, 220, 132, 0.14), transparent 30%),
        radial-gradient(circle at top right, rgba(244, 201, 74, 0.10), transparent 24%),
        linear-gradient(180deg, #050b10 0%, var(--bg) 46%, #041016 100%);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow-x: hidden;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 42px 42px;
      opacity: 0.22;
      mask-image: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.65));
    }
    a { color: inherit; text-decoration: none; }
    img, svg, canvas { display: block; }
    button, input, select, textarea { font: inherit; }
    button { cursor: pointer; }
    #root { min-height: 100vh; }
    section, footer { position: relative; }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 0.9rem;
      border: 1px solid rgba(61, 220, 132, 0.22);
      background: rgba(61, 220, 132, 0.08);
      color: #baf3d0;
      border-radius: 999px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 0.72rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .section-title {
      margin: 0;
      font-size: clamp(2rem, 4.8vw, 4.5rem);
      line-height: 0.95;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      text-wrap: balance;
    }
    .section-desc {
      margin: 1rem 0 0;
      color: var(--muted);
      max-width: 68ch;
      line-height: 1.75;
      font-size: 1.02rem;
    }
    .reveal {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.8s ease, transform 0.8s ease;
      will-change: transform, opacity;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    #loader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at center, rgba(61, 220, 132, 0.12), transparent 28%), linear-gradient(180deg, #071118 0%, #02070b 100%);
      overflow: hidden;
    }
    .shutter-wrap {
      position: relative;
      width: min(88vw, 760px);
      height: 320px;
      display: grid;
      place-items: center;
      margin-bottom: 1.2rem;
    }
    .logo-behind {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      gap: 0.8rem;
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.4s ease, transform 0.4s ease;
      text-align: center;
    }
    .logo-behind h1 {
      margin: 0;
      font-size: clamp(2rem, 8vw, 4.8rem);
      letter-spacing: 0.24em;
    }
    .brand-icon, .nav-logo-icon, .footer-logo-icon, .service-icon, .contact-icon, .product-icon, .why-check, .faq-icon, .author-avatar, .float-whatsapp, .float-call {
      display: grid;
      place-items: center;
    }
    .brand-icon svg, .nav-logo-icon svg, .footer-logo-icon svg, .service-icon svg, .contact-icon svg, .product-icon svg, .why-check svg, .faq-icon svg, .float-whatsapp svg, .float-call svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
    .shutter-panel {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(86vw, 640px);
      display: grid;
      gap: 8px;
      background: rgba(255,255,255,0.02);
      padding: 18px;
      border-radius: 28px;
      border: 1px solid rgba(255,255,255,0.06);
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
    }
    .shutter-slat {
      height: 16px;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(61,220,132,0.18), rgba(255,255,255,0.12), rgba(61,220,132,0.16));
      border: 1px solid rgba(255,255,255,0.07);
    }
    .loader-text {
      margin: 0 0 1rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.82rem;
      font-weight: 700;
    }
    .loader-bar-wrap {
      width: min(88vw, 420px);
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .loader-bar {
      width: 0;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      box-shadow: 0 0 28px rgba(61, 220, 132, 0.55);
    }
    .loader-sparks .spark {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent-2);
      box-shadow: 0 0 16px rgba(244, 201, 74, 0.8);
      opacity: 0;
    }

    nav#navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1200;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: min(100%, 100vw);
      padding: 1rem clamp(1rem, 2vw, 2rem);
      transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
    }
    nav#navbar.scrolled {
      background: rgba(5, 11, 16, 0.72);
      backdrop-filter: blur(18px);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.26);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      flex: 0 0 auto;
    }
    .nav-logo-text {
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.85rem;
      line-height: 1.05;
    }
    .nav-logo-text span { color: var(--accent); }
    .nav-logo-icon, .footer-logo-icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      background: linear-gradient(145deg, rgba(61,220,132,0.16), rgba(46,167,255,0.12));
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--accent);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .nav-links {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: var(--muted);
      font-weight: 600;
      font-size: 0.96rem;
      transition: color 0.2s ease;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-cta, .btn-primary, .btn-outline, .btn-whatsapp, .modal-close, .footer-social-btn, .float-whatsapp, .float-call {
      border: 0;
      outline: 0;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.01em;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
    }
    .nav-cta, .btn-primary {
      background: linear-gradient(135deg, var(--accent), #2cb6ff);
      color: #051016;
      padding: 0.9rem 1.25rem;
      box-shadow: 0 16px 34px rgba(61, 220, 132, 0.22);
    }
    .nav-cta:hover, .btn-primary:hover, .btn-outline:hover, .btn-whatsapp:hover, .footer-social-btn:hover, .float-whatsapp:hover, .float-call:hover {
      transform: translateY(-2px);
    }
    .btn-outline {
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.03);
      color: var(--text);
      padding: 0.9rem 1.25rem;
      backdrop-filter: blur(8px);
    }
    .btn-whatsapp {
      background: linear-gradient(135deg, #31c46b, #2dbd84);
      color: #04120b;
      padding: 0.9rem 1.25rem;
      box-shadow: 0 16px 34px rgba(45, 189, 132, 0.2);
    }
    .hamburger { display: none; width: 46px; height: 46px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); align-items: center; justify-content: center; gap: 4px; flex-direction: column; }
    .hamburger span { width: 18px; height: 2px; border-radius: 999px; background: var(--text); transition: transform 0.2s ease, opacity 0.2s ease; }
    .hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

    .mobile-menu {
      position: fixed;
      inset: 0;
      z-index: 1100;
      display: grid;
      align-content: start;
      gap: 0.75rem;
      padding: 7.5rem 1.25rem 1.25rem;
      background: rgba(3, 7, 10, 0.92);
      backdrop-filter: blur(16px);
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }
    .mobile-menu.open { transform: translateY(0); }
    .mobile-menu a {
      padding: 1rem 1.1rem;
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      font-weight: 700;
    }

    #hero {
      min-height: 100vh;
      padding: 8.5rem clamp(1.25rem, 3vw, 2rem) 4rem;
      display: grid;
      place-items: center;
      overflow: clip;
    }
    .hero-bg, .hero-grid, .particles-canvas { position: absolute; inset: 0; }
    .hero-bg {
      background:
        radial-gradient(circle at 20% 20%, rgba(61,220,132,0.2), transparent 25%),
        radial-gradient(circle at 80% 18%, rgba(46,167,255,0.12), transparent 22%),
        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 58%);
    }
    .hero-grid {
      background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      opacity: 0.1;
      mask-image: radial-gradient(circle at center, black, transparent 78%);
    }
    .hero-content {
      position: relative;
      z-index: 2;
      width: min(100%, var(--max));
      margin: 0 auto;
      text-align: left;
      display: grid;
      gap: 1rem;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      gap: 0.5rem;
      padding: 0.6rem 0.95rem;
      border-radius: 999px;
      border: 1px solid rgba(61,220,132,0.18);
      background: rgba(61,220,132,0.08);
      color: #c0f7d5;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .hero-title {
      margin: 0;
      display: grid;
      gap: 0.15em;
      font-size: clamp(3rem, 10vw, 7.6rem);
      line-height: 0.88;
      letter-spacing: -0.08em;
      text-transform: uppercase;
      max-width: 9ch;
    }
    .hero-title-line {
      opacity: 0;
      transform: translateY(22px);
      will-change: transform, opacity;
    }
    .hero-title .accent {
      color: var(--accent);
      text-shadow: 0 0 32px rgba(61,220,132,0.4);
    }
    .hero-sub {
      margin: 0;
      max-width: 56ch;
      color: var(--muted);
      font-size: clamp(1rem, 1.8vw, 1.25rem);
      line-height: 1.8;
      opacity: 0;
      transform: translateY(18px);
    }
    .hero-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 0.9rem;
      opacity: 0;
      transform: translateY(18px);
    }
    .hero-btns svg, .btn-primary svg, .btn-outline svg, .btn-whatsapp svg, .footer-social-btn svg, .float-whatsapp svg, .float-call svg, .nav-cta svg {
      width: 18px;
      height: 18px;
    }
    .hero-scroll {
      position: absolute;
      left: 50%;
      bottom: 1.35rem;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 0.6rem;
      color: var(--muted-2);
      text-transform: uppercase;
      letter-spacing: 0.22em;
      font-size: 0.68rem;
      font-weight: 700;
    }
    .scroll-line {
      width: 1px;
      height: 68px;
      background: linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent);
      position: relative;
      overflow: hidden;
    }
    .scroll-line::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent, var(--accent), transparent);
      animation: pulseLine 1.8s infinite;
    }
    @keyframes pulseLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }

    .marquee-section {
      overflow: hidden;
      border-top: 1px solid rgba(255,255,255,0.06);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: rgba(255,255,255,0.02);
    }
    .marquee-track {
      display: flex;
      width: max-content;
      gap: 1rem;
      padding: 0.95rem 0;
      animation: marquee 26s linear infinite;
    }
    .marquee-item {
      white-space: nowrap;
      padding: 0.6rem 1rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      color: var(--muted);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.09em;
      font-size: 0.76rem;
    }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    #about, #products, #services, #counters, #why, #testimonials, #gallery, #faq, #contact {
      width: min(100%, var(--max));
      margin: 0 auto;
      padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 3vw, 2rem);
    }
    .about-grid, .why-grid, .contact-grid {
      display: grid;
      gap: 2rem;
      align-items: center;
      grid-template-columns: 1.05fr 0.95fr;
    }
    .about-icon-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
    .about-icon-card, .stat-card, .service-card, .testimonial-card, .gallery-item, .faq-item, .contact-item, .contact-form, .map-frame, .why-visual, .why-item, .counter-item {
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
    }
    .about-icon-card {
      min-height: 140px;
      border-radius: 24px;
      display: grid;
      place-items: center;
      gap: 0.7rem;
      text-align: center;
      color: #d7eee5;
    }
    .about-icon-card svg { width: 28px; height: 28px; color: var(--accent); }
    .about-img-frame, .why-visual, .contact-form, .map-frame { border-radius: var(--radius); padding: 1.25rem; }
    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .stat-card, .counter-item {
      border-radius: 22px;
      padding: 1.2rem;
    }
    .stat-number, .counter-number { font-size: 2rem; font-weight: 900; letter-spacing: -0.05em; }
    .stat-label, .counter-label { color: var(--muted); margin-top: 0.3rem; }
    .counter-val { font-variant-numeric: tabular-nums; }

    #products, #services, #testimonials, #gallery, #faq, #contact { padding-top: 0; }
    .products-grid, .services-grid, .testimonials-grid, .gallery-grid, .faq-list, .counters-grid {
      display: grid;
      gap: 1rem;
    }
    .products-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-top: 1.5rem;
    }
    .product-card {
      position: relative;
      min-height: 220px;
      border-radius: 24px;
      padding: 1.2rem;
      display: grid;
      align-content: start;
      gap: 0.7rem;
      cursor: pointer;
      overflow: hidden;
      transition: transform 0.25s ease, border-color 0.25s ease;
    }
    .product-card:hover { transform: translateY(-4px); border-color: rgba(61,220,132,0.22); }
    .product-card::after {
      content: "";
      position: absolute;
      inset: auto -15% -22% auto;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(61,220,132,0.18), transparent 70%);
      pointer-events: none;
    }
    .product-icon {
      width: 52px;
      height: 52px;
      border-radius: 18px;
      background: rgba(61,220,132,0.11);
      color: var(--accent);
      border: 1px solid rgba(61,220,132,0.16);
    }
    .product-name, .service-name, .why-item-title, .author-name, .contact-label, .footer-col-title, .modal-title {
      font-weight: 800;
      letter-spacing: -0.03em;
    }
    .product-name { font-size: 1.2rem; }
    .product-desc, .service-text, .testimonial-text, .why-item-desc, .gallery-note, .footer-tagline, .footer-credit, .contact-value, .modal-desc, .faq-a p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }
    .product-tag {
      width: fit-content;
      padding: 0.4rem 0.7rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      color: #dbe9e3;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .product-arrow {
      margin-top: auto;
      justify-self: end;
      color: var(--accent);
      opacity: 0.9;
    }
    .product-arrow svg { width: 20px; height: 20px; }

    #services { padding-top: clamp(1rem, 2vw, 2rem); }
    .services-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 1.5rem; }
    .service-card {
      border-radius: 24px;
      padding: 1.2rem;
      display: grid;
      gap: 0.7rem;
      min-height: 220px;
    }
    .service-num {
      font-size: 0.8rem;
      font-weight: 900;
      color: var(--accent-2);
      letter-spacing: 0.18em;
    }
    .service-icon {
      width: 50px;
      height: 50px;
      border-radius: 18px;
      background: rgba(46,167,255,0.12);
      color: #8fd0ff;
    }
    .service-name { font-size: 1.18rem; }

    .counters-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .counter-item { text-align: center; border-radius: 22px; }
    .counter-number { display: inline-flex; align-items: baseline; gap: 0.15rem; color: var(--text); }
    .counter-suffix { color: var(--accent); font-size: 1.2rem; font-weight: 900; }

    .why-grid { grid-template-columns: 0.98fr 1.02fr; }
    .why-list { display: grid; gap: 0.9rem; margin-top: 1.35rem; }
    .why-item {
      border-radius: 22px;
      padding: 1rem;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.9rem;
      align-items: start;
    }
    .why-check {
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background: rgba(61,220,132,0.12);
      color: var(--accent);
      flex: 0 0 auto;
    }
    .why-visual-title {
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted-2);
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .why-bar-item { display: grid; gap: 0.5rem; margin-bottom: 1rem; }
    .why-bar-label { display: flex; justify-content: space-between; gap: 1rem; color: #dde9e5; font-size: 0.95rem; }
    .why-bar-track {
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      overflow: hidden;
    }
    .why-bar-fill {
      height: 100%;
      width: 0%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--accent), var(--accent-3));
      transition: width 1.2s ease;
    }
    .why-area-badge {
      margin-top: 1.35rem;
      padding: 1rem;
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(61,220,132,0.12), rgba(46,167,255,0.08));
      border: 1px solid rgba(61,220,132,0.14);
    }
    .area-label { margin: 0; text-transform: uppercase; letter-spacing: 0.16em; font-size: 0.72rem; color: var(--muted-2); font-weight: 800; }
    .area-name { margin: 0.3rem 0 0; font-size: 1.1rem; font-weight: 800; }
    .area-sub { margin: 0.25rem 0 0; color: var(--muted); }

    .testimonials-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 1.5rem; }
    .testimonial-card {
      border-radius: 24px;
      padding: 1.2rem;
      display: grid;
      gap: 1rem;
    }
    .stars { display: inline-flex; gap: 0.1rem; color: var(--accent-2); }
    .stars svg { width: 16px; height: 16px; }
    .testimonial-author { display: flex; align-items: center; gap: 0.9rem; }
    .author-avatar {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      background: rgba(61,220,132,0.12);
      color: var(--accent);
      font-weight: 900;
    }
    .author-role { color: var(--muted-2); font-size: 0.92rem; }

    .gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 1.5rem; }
    .gallery-item {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      min-height: 220px;
    }
    .gallery-placeholder {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      gap: 0.8rem;
      background:
        radial-gradient(circle at 20% 20%, rgba(61,220,132,0.16), transparent 26%),
        linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
      color: rgba(231,240,236,0.88);
      text-align: center;
      padding: 1rem;
    }
    .gallery-placeholder svg { width: 32px; height: 32px; color: var(--accent); }
    .gallery-overlay {
      position: absolute;
      inset: auto 1rem 1rem auto;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      background: rgba(5, 11, 16, 0.75);
      display: grid;
      place-items: center;
      color: var(--text);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
    }
    .gallery-overlay svg { width: 20px; height: 20px; }
    .gallery-note { margin-top: 1rem; }

    .faq-list { gap: 0.85rem; margin-top: 1.5rem; }
    .faq-item {
      border-radius: 20px;
      overflow: hidden;
    }
    .faq-q {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.1rem;
      cursor: pointer;
      font-weight: 700;
      color: #eef6f3;
    }
    .faq-icon {
      width: 38px;
      height: 38px;
      border-radius: 999px;
      background: rgba(255,255,255,0.06);
      flex: 0 0 auto;
      color: var(--accent);
      transition: transform 0.2s ease;
    }
    .faq-item.active .faq-icon { transform: rotate(45deg); }
    .faq-a {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      border-top: 1px solid transparent;
    }
    .faq-a.open { max-height: 180px; border-top-color: rgba(255,255,255,0.06); }
    .faq-a p { padding: 0 1.1rem 1rem; }

    .contact-grid { grid-template-columns: 0.92fr 1.08fr; align-items: start; }
    .contact-info { display: grid; gap: 0.9rem; }
    .contact-item {
      border-radius: 20px;
      padding: 1rem;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.9rem;
      align-items: start;
    }
    .contact-icon {
      width: 46px;
      height: 46px;
      border-radius: 16px;
      background: rgba(61,220,132,0.11);
      color: var(--accent);
    }
    .contact-value { white-space: pre-line; margin-top: 0.25rem; }
    .contact-value a { color: #c7f4d7; text-decoration: underline; text-decoration-color: rgba(199,244,215,0.35); }
    .contact-form { display: grid; gap: 1rem; }
    .contact-form-title {
      margin: 0;
      font-size: 1.25rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { display: grid; gap: 0.45rem; }
    .form-label { color: #dfece7; font-weight: 700; font-size: 0.92rem; }
    .form-input, .form-select, .form-textarea {
      width: 100%;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      border-radius: 16px;
      padding: 0.95rem 1rem;
      outline: none;
      transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: rgba(61,220,132,0.42);
      background: rgba(255,255,255,0.06);
    }
    .form-textarea { min-height: 140px; resize: vertical; }
    .form-success {
      display: none;
      padding: 0.9rem 1rem;
      border-radius: 16px;
      background: rgba(61,220,132,0.12);
      border: 1px solid rgba(61,220,132,0.18);
      color: #d8fae5;
      font-weight: 700;
    }
    .map-frame { margin-top: 1rem; padding: 0.9rem; overflow: hidden; }
    .map-frame iframe { width: 100%; min-height: 320px; border: 0; border-radius: 18px; filter: saturate(0.95) contrast(1.02); }

    .admin-grid, .feedback-grid {
      display: grid;
      gap: 1rem;
      align-items: start;
      margin-top: 1.5rem;
      grid-template-columns: 1fr 0.95fr;
    }
    .admin-stack, .feedback-stack {
      display: grid;
      gap: 1rem;
    }
    .admin-card, .feedback-card, .data-card {
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
      border-radius: 24px;
      padding: 1.2rem;
    }
    .admin-card-title, .feedback-heading {
      margin: 0 0 1rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.8rem;
      color: var(--muted-2);
      font-weight: 800;
    }
    .admin-mini-grid {
      display: grid;
      gap: 0.85rem;
      margin-top: 1rem;
    }
    .mini-item {
      display: grid;
      gap: 0.35rem;
      padding: 0.85rem 0.9rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .mini-item strong { font-size: 0.96rem; }
    .mini-item span, .mini-note {
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.5;
    }
    .admin-summary {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.85rem;
      margin-bottom: 1rem;
    }
    .summary-chip {
      padding: 0.85rem;
      border-radius: 18px;
      background: rgba(61,220,132,0.08);
      border: 1px solid rgba(61,220,132,0.12);
    }
    .summary-chip span {
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
    }
    .summary-chip strong {
      display: block;
      margin-top: 0.25rem;
      font-size: 1.35rem;
      letter-spacing: -0.04em;
    }
    .empty-state {
      padding: 0.95rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.04);
      border: 1px dashed rgba(255,255,255,0.12);
      color: var(--muted);
      text-align: center;
    }
    .feedback-overview {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.85rem;
      margin-bottom: 1rem;
    }
    .feedback-stat {
      padding: 1rem;
      border-radius: 18px;
      background: rgba(46,167,255,0.08);
      border: 1px solid rgba(46,167,255,0.12);
    }
    .feedback-stat span {
      display: block;
      color: var(--muted);
      font-size: 0.82rem;
    }
    .feedback-stat strong {
      display: block;
      margin-top: 0.25rem;
      font-size: 1.4rem;
      letter-spacing: -0.04em;
    }
    .feedback-card { display: grid; gap: 0.7rem; }
    .feedback-top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: start;
    }
    .feedback-name { font-weight: 800; }
    .feedback-id, .feedback-meta { color: var(--muted-2); font-size: 0.9rem; }
    .feedback-score {
      padding: 0.45rem 0.7rem;
      border-radius: 999px;
      background: rgba(61,220,132,0.12);
      border: 1px solid rgba(61,220,132,0.16);
      color: #c9f7d8;
      font-weight: 800;
      white-space: nowrap;
    }
    .feedback-text { margin: 0; color: var(--muted); line-height: 1.7; }

    footer {
      width: min(100%, var(--max));
      margin: 0 auto;
      padding: 0 1.25rem 2rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 0.8fr;
      gap: 1rem;
      padding: 1.3rem;
      border-radius: 28px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 0.9rem;
    }
    .footer-logo-text { font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; }
    .footer-social { display: flex; gap: 0.7rem; margin-top: 1rem; }
    .footer-social-btn { width: 48px; height: 48px; border-radius: 999px; background: rgba(61,220,132,0.11); color: var(--accent); border: 1px solid rgba(61,220,132,0.16); }
    .footer-links { display: grid; gap: 0.65rem; margin-top: 0.8rem; }
    .footer-links a { color: var(--muted); transition: color 0.2s ease; }
    .footer-links a:hover { color: var(--text); }
    .footer-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem 1rem;
      padding: 1rem 0 0;
      color: var(--muted-2);
    }
    .footer-copyright, .footer-credit { margin: 0; }

    .floating-btns {
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      z-index: 1150;
      display: grid;
      gap: 0.75rem;
    }
    .float-whatsapp, .float-call {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.26);
      color: #051016;
    }
    .float-whatsapp { background: linear-gradient(135deg, #31c46b, #2dbd84); }
    .float-call { background: linear-gradient(135deg, #f4c94a, #ffdb77); }

    .modal-overlay {
      position: fixed;
      inset: 0;
      z-index: 1300;
      display: grid;
      place-items: center;
      padding: 1.25rem;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }
    .modal-overlay.open { opacity: 1; pointer-events: auto; }
    .modal-box {
      width: min(100%, 640px);
      border-radius: 28px;
      padding: 1.2rem;
      background: linear-gradient(180deg, rgba(10, 20, 26, 0.98), rgba(8, 14, 18, 0.98));
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: var(--shadow);
    }
    .modal-close {
      width: 42px;
      height: 42px;
      margin-left: auto;
      background: rgba(255,255,255,0.06);
      color: var(--text);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .modal-tag {
      display: inline-flex;
      margin-top: 1rem;
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      background: rgba(61,220,132,0.1);
      color: #c8f7d9;
      border: 1px solid rgba(61,220,132,0.16);
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      font-weight: 800;
    }
    .modal-title { margin: 0.6rem 0 0.5rem; font-size: clamp(1.8rem, 4vw, 2.8rem); }
    .modal-specs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.9rem;
      margin-top: 1rem;
    }
    .spec-item {
      padding: 0.95rem;
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .spec-key { color: var(--muted-2); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 800; }
    .spec-val { margin-top: 0.4rem; font-weight: 700; color: #f0f7f3; }

    @media (max-width: 1100px) {
      .nav-links, .nav-cta { display: none; }
      .hamburger { display: inline-flex; }
      .about-grid, .why-grid, .contact-grid { grid-template-columns: 1fr; }
      .products-grid, .services-grid, .testimonials-grid, .gallery-grid, .counters-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .admin-grid, .feedback-grid { grid-template-columns: 1fr; }
      .admin-summary, .feedback-overview { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 760px) {
      .hero-content { text-align: left; }
      .hero-title { max-width: 100%; }
      .hero-btns { flex-direction: column; align-items: stretch; }
      .products-grid, .services-grid, .testimonials-grid, .gallery-grid, .counters-grid, .about-stats, .modal-specs, .admin-summary, .feedback-overview { grid-template-columns: 1fr; }
      .form-row, .footer-grid { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; }
      .section-title { font-size: clamp(2rem, 10vw, 3.4rem); }
      .hero-title { font-size: clamp(3rem, 16vw, 5.4rem); }
    }
  `;
  document.head.appendChild(style);
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "style" && typeof value === "object") Object.assign(node.style, value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
    else node.setAttribute(key, value);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function svg(path, cls = "") {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttribute("viewBox", "0 0 24 24");
  if (cls) s.setAttribute("class", cls);
  s.setAttribute("aria-hidden", "true");
  s.innerHTML = path;
  return s;
}

function SectionLabel(label) {
  return el("span", { class: "section-label" }, label);
}

function Stars(count = 5) {
  return el("div", { class: "stars", "aria-hidden": "true" },
    ...Array.from({ length: count }, () => svg(ICONS.star, "star"))
  );
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

function watchReveal(node) {
  node.classList.add("reveal");
  revealObserver.observe(node);
  return node;
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.done) {
      entry.target.dataset.done = "1";
      const target = parseInt(entry.target.dataset.target || "0", 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        entry.target.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 25);
    }
  });
}, { threshold: 0.5 });

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.style.width = `${entry.target.dataset.width || 0}%`;
  });
}, { threshold: 0.3 });

function buildLoader() {
  const slats = Array.from({ length: 12 }, () => el("div", { class: "shutter-slat" }));
  const panel = el("div", { id: "shutterPanel", class: "shutter-panel" }, ...slats);
  const logoBehind = el("div", { id: "logoBehind", class: "logo-behind" },
    el("div", { class: "brand-icon" }, svg(ICONS.shutter)),
    el("h1", {}, BRAND.short.toUpperCase())
  );
  const sparks = el("div", { id: "sparksContainer", class: "loader-sparks", "aria-hidden": "true" });
  return el("div", { id: "loader" },
    el("div", { class: "shutter-wrap" }, logoBehind, panel, sparks),
    el("p", { class: "loader-text" }, "Loading Experience"),
    el("div", { class: "loader-bar-wrap" }, el("div", { id: "loaderBar", class: "loader-bar" }))
  );
}

function buildNav() {
  const logoIcon = el("div", { class: "nav-logo-icon" }, svg(ICONS.shutter));
  const logoText = el("span", { class: "nav-logo-text" });
  logoText.innerHTML = `AL <span>AMEEN</span>`;
  const logo = el("a", { href: "#hero", class: "nav-logo", "aria-label": BRAND.name }, logoIcon, logoText);

  const links = el("ul", { class: "nav-links" },
    ...NAV_LINKS.map((link) => {
      const href = link.target === 'admin' ? (window.ADMIN_PAGE ? `#${link.target}` : 'admin.html') : `#${link.target}`;
      return el("li", {}, el("a", { href }, link.label));
    })
  );

  const cta = el("a", { href: "#contact", class: "nav-cta" }, "Get Quote");
  const ham = el("button", { id: "hamburger", class: "hamburger", type: "button", "aria-label": "Open menu" }, el("span"), el("span"), el("span"));
  ham.addEventListener("click", toggleMobileMenu);

  const navChildren = [logo, links];
  if (window.ADMIN_PAGE) navChildren.push(el("a", { href: "index.html", class: "btn-outline" }, "Home"));
  navChildren.push(cta, ham);
  const nav = el("nav", { id: "navbar" }, ...navChildren);
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 50), { passive: true });
  return nav;
}

function buildMobileMenu() {
  const anchors = NAV_LINKS.map((link) => {
    const href = link.target === 'admin' ? (window.ADMIN_PAGE ? `#${link.target}` : 'admin.html') : `#${link.target}`;
    const anchor = el("a", { href }, link.label);
    anchor.addEventListener("click", closeMobileMenu);
    return anchor;
  });
  if (window.ADMIN_PAGE) anchors.unshift(el("a", { href: "index.html" }, "Home"));
  return el("div", { id: "mobileMenu", class: "mobile-menu" }, ...anchors);
}

function toggleMobileMenu() {
  State.mobileMenuOpen = !State.mobileMenuOpen;
  document.getElementById("hamburger").classList.toggle("open", State.mobileMenuOpen);
  document.getElementById("mobileMenu").classList.toggle("open", State.mobileMenuOpen);
  document.body.style.overflow = State.mobileMenuOpen ? "hidden" : "";
}

function closeMobileMenu() {
  State.mobileMenuOpen = false;
  document.getElementById("hamburger")?.classList.remove("open");
  document.getElementById("mobileMenu")?.classList.remove("open");
  document.body.style.overflow = "";
}

function buildHero() {
  const badge = el("div", { class: "hero-badge" }, "Salem, Tamil Nadu - Est. 2010");
  const titleLines = ["AL AMEEN", "ROLLING", "SHUTTER"].map((word, index) => {
    const span = el("span", { class: "hero-title-line" });
    if (index === 1) span.innerHTML = `<span class="accent">${word}</span>`;
    else span.textContent = word;
    return span;
  });
  const title = el("h1", { class: "hero-title" }, ...titleLines);
  const sub = el("p", { class: "hero-sub" }, BRAND.tagline);

  const btnContact = el("a", { href: "#contact", class: "btn-primary" }, svg(ICONS.phone), "Contact Now");
  const btnProducts = el("a", { href: "#products", class: "btn-outline" }, svg(ICONS.shutter), "View Products");
  const btnWA = el("a", { href: BRAND.whatsapp, target: "_blank", rel: "noreferrer", class: "btn-whatsapp" }, svg(ICONS.whatsapp), "WhatsApp Us");
  const btns = el("div", { class: "hero-btns" }, btnContact, btnProducts, btnWA);

  const scrollHint = el("div", { class: "hero-scroll" }, el("span", {}, "Scroll"), el("div", { class: "scroll-line" }));
  const canvas = el("canvas", { class: "particles-canvas", id: "particlesCanvas" });

  return el("section", { id: "hero" },
    el("div", { class: "hero-bg" }),
    el("div", { class: "hero-grid" }),
    canvas,
    el("div", { class: "hero-content" }, badge, title, sub, btns),
    scrollHint
  );
}

function buildMarquee() {
  const items = ["Rolling Shutters", "Automatic Shutters", "Grill Shutters", "Boom Barriers", "Sliding Gate Motors", "Gate Wheels", "Glass Door Fittings", "Gear Box", "Automation Solutions", "Salem, Tamil Nadu"];
  const track = el("div", { class: "marquee-track" }, ...[...items, ...items].map((item) => el("span", { class: "marquee-item" }, item)));
  return el("div", { class: "marquee-section" }, track);
}

function buildAbout() {
  const iconCards = [
    { icon: ICONS.shutter, label: "Rolling Shutters" },
    { icon: ICONS.check, label: "Automation" },
    { icon: ICONS.shield, label: "Trusted Brand" },
    { icon: ICONS.tool, label: "Quality Parts" },
  ].map((card) => el("div", { class: "about-icon-card" }, svg(card.icon), el("p", {}, card.label)));

  const frame = el("div", { class: "about-img-frame" }, el("div", { class: "about-icon-grid" }, ...iconCards));

  const stats = [
    { key: "projects", suffix: "+", label: "Projects Done" },
    { key: "experience", suffix: "+", label: "Years Experience" },
    { key: "satisfaction", suffix: "%", label: "Satisfaction" },
  ].map((stat) => {
    const currentValue = State.dashboard.stats[stat.key] ?? 0;
    const numEl = el("span", { class: "counter-val", "data-target": currentValue, "data-stat-key": stat.key }, String(currentValue));
    counterObserver.observe(numEl);
    return watchReveal(el("div", { class: "stat-card" },
      el("div", { class: "stat-number" }, numEl, stat.suffix),
      el("div", { class: "stat-label" }, stat.label)
    ));
  });

  const left = watchReveal(el("div", {},
    SectionLabel("Who We Are"),
    el("h2", { class: "section-title" }, "TRUSTED SHUTTER\nMANUFACTURER"),
    el("p", { class: "section-desc" }, "Al Ameen Rolling Shutter Manufacturing has been the leading provider of premium rolling shutter and automation solutions in Salem, Tamil Nadu. We deliver industrial-grade products built to last."),
    el("p", { class: "section-desc" }, "From manual grill shutters to fully automated rolling systems, we serve commercial, industrial, and residential clients across the region."),
    el("div", { class: "about-stats" }, ...stats)
  ));

  return el("section", { id: "about" }, el("div", { class: "about-grid" }, left, watchReveal(el("div", { class: "about-visual" }, frame))));
}

function buildProductCard(product, index) {
  const card = el("div", { class: "product-card" },
    el("div", { class: "product-icon" }, svg(ICONS.shutter)),
    el("div", { class: "product-name" }, product.name),
    el("p", { class: "product-desc" }, `${product.desc.substring(0, 90)}…`),
    el("span", { class: "product-tag" }, product.tag),
    el("div", { class: "product-arrow" }, svg(ICONS.arrow))
  );
  card.addEventListener("click", () => openModal(index));
  return watchReveal(card);
}

function buildProducts() {
  return el("section", { id: "products" },
    SectionLabel("Our Products"),
    watchReveal(el("h2", { class: "section-title" }, "COMPLETE SHUTTER RANGE")),
    watchReveal(el("p", { class: "section-desc" }, "Premium quality rolling shutters and accessories for every requirement")),
    el("div", { class: "products-grid" }, ...PRODUCTS.map((product, index) => buildProductCard(product, index)))
  );
}

function buildModal() {
  const content = el("div", { id: "modalContent" });
  const closeBtn = el("button", { class: "modal-close", type: "button", onclick: closeModal, "aria-label": "Close modal" }, "✕");
  const inquireBtn = el("a", { href: "#contact", class: "btn-primary" }, svg(ICONS.send), "Enquire Now");
  inquireBtn.addEventListener("click", closeModal);
  const box = el("div", { class: "modal-box" }, closeBtn, content, inquireBtn);
  const overlay = el("div", { class: "modal-overlay", id: "productModal" }, box);
  overlay.addEventListener("click", (event) => { if (event.target === overlay) closeModal(); });
  return overlay;
}

function openModal(index) {
  const product = PRODUCTS[index];
  const specsGrid = el("div", { class: "modal-specs" },
    ...product.specs.map(([key, value]) => el("div", { class: "spec-item" }, el("div", { class: "spec-key" }, key), el("div", { class: "spec-val" }, value)))
  );
  const content = document.getElementById("modalContent");
  content.innerHTML = "";
  content.append(el("span", { class: "modal-tag" }, product.tag), el("h2", { class: "modal-title" }, product.name), el("p", { class: "modal-desc" }, product.desc), specsGrid);
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
}

function buildServices() {
  return el("section", { id: "services" },
    SectionLabel("What We Do"),
    watchReveal(el("h2", { class: "section-title" }, "OUR SERVICES")),
    el("div", { class: "services-grid" }, ...SERVICES.map((service) => watchReveal(el("div", { class: "service-card" }, el("span", { class: "service-num" }, service.num), el("div", { class: "service-icon" }, svg(ICONS.tool)), el("h3", { class: "service-name" }, service.title), el("p", { class: "service-text" }, service.text)))))
  );
}

function buildCounters() {
  const counts = [
    { key: "projects", suffix: "+", label: "Projects Completed" },
    { key: "experience", suffix: "+", label: "Years Experience" },
    { key: "clients", suffix: "+", label: "Happy Clients" },
    { key: "satisfaction", suffix: "%", label: "Satisfaction Rate" },
  ];
  return el("section", { id: "counters" },
    el("div", { class: "counters-grid" }, ...counts.map((count) => {
      const currentValue = State.dashboard.stats[count.key] ?? 0;
      const numEl = el("span", { class: "count-up", "data-target": currentValue, "data-stat-key": count.key }, String(currentValue));
      counterObserver.observe(numEl);
      return watchReveal(el("div", { class: "counter-item" },
        el("div", { class: "counter-number" }, numEl, el("span", { class: "counter-suffix" }, count.suffix)),
        el("div", { class: "counter-label" }, count.label)
      ));
    }))
  );
}

function buildWhy() {
  const reasons = [
    { title: "Premium Quality Materials", desc: "High-grade galvanised steel, aluminium, and certified components for every shutter." },
    { title: "Fast Turnaround", desc: "Quick manufacturing and installation - we respect your timeline and business continuity." },
    { title: "Competitive Pricing", desc: "Factory-direct pricing without middlemen. Best value for all customers." },
    { title: "After-Sale Support", desc: "Responsive AMC and repair support long after installation. We stand behind our products." },
  ];

  const whyList = el("div", { class: "why-list" },
    ...reasons.map((reason) => watchReveal(el("div", { class: "why-item" }, el("div", { class: "why-check" }, svg(ICONS.check)), el("div", {}, el("div", { class: "why-item-title" }, reason.title), el("div", { class: "why-item-desc" }, reason.desc))))));

  const bars = [
    { label: "Product Quality", val: 98 },
    { label: "On-Time Delivery", val: 95 },
    { label: "Customer Satisfaction", val: 97 },
    { label: "After-Sale Support", val: 99 },
  ].map((bar) => {
    const fill = el("div", { class: "why-bar-fill", "data-width": bar.val }, "");
    barObserver.observe(fill);
    return el("div", { class: "why-bar-item" }, el("div", { class: "why-bar-label" }, el("span", {}, bar.label), el("span", {}, `${bar.val}%`)), el("div", { class: "why-bar-track" }, fill));
  });

  const visual = watchReveal(el("div", { class: "why-visual" },
    el("div", { class: "why-visual-title" }, "PERFORMANCE METRICS"),
    ...bars,
    el("div", { class: "why-area-badge" }, el("p", { class: "area-label" }, "Service Area"), el("p", { class: "area-name" }, "Salem District & Surrounding"), el("p", { class: "area-sub" }, "Kadayampatti - Danishpet - Santhaipet"))
  ));

  return el("section", { id: "why" },
    el("div", { class: "why-grid" },
      el("div", {},
        SectionLabel("Why Us"),
        watchReveal((() => { const title = el("h2", { class: "section-title" }); title.innerHTML = `WHY CHOOSE<br><span style="color:var(--accent)">AL AMEEN</span>`; return title; })()),
        watchReveal(el("p", { class: "section-desc", style: { marginBottom: "30px" } }, "Decades of experience and hundreds of satisfied customers make us the most trusted shutter manufacturer in Salem district.")),
        whyList
      ),
      visual
    )
  );
}

function buildTestimonials() {
  const reviews = State.reviews || [];
  if (!reviews.length) {
    return el("section", { id: "testimonials" },
      SectionLabel("Client Reviews"),
      watchReveal(el("h2", { class: "section-title" }, "WHAT CLIENTS SAY")),
      el("p", { class: "section-desc" }, "No online reviews yet. Customers may submit reviews via the Feedback form."));
  }

  const cards = reviews.slice().reverse().map((r) => watchReveal(el("div", { class: "testimonial-card" }, Stars(Math.min(5, Math.round((r.satisfaction || 80) / 20))), el("p", { class: "testimonial-text" }, `"${r.message || r.text || '—'}"`), el("div", { class: "testimonial-author" }, el("div", { class: "author-avatar" }, (r.name || "?").slice(0,2).toUpperCase()), el("div", {}, el("div", { class: "author-name" }, r.name || "Anonymous"), el("div", { class: "author-role" }, r.service || "Customer"))))));

  return el("section", { id: "testimonials" },
    SectionLabel("Client Reviews"),
    watchReveal(el("h2", { class: "section-title" }, "WHAT CLIENTS SAY")),
    el("div", { class: "testimonials-grid" }, ...cards)
  );
}

function buildGallery() {
  const items = ["Rolling Shutter Project", "Automatic Shutter", "Grill Shutter", "Boom Barrier", "Sliding Gate", "Commercial Project"].map((label) =>
    watchReveal(el("div", { class: "gallery-item" },
      el("div", { class: "gallery-placeholder" }, svg(ICONS.image), el("p", {}, label)),
      el("div", { class: "gallery-overlay" }, svg(ICONS.eye))
    ))
  );
  return el("section", { id: "gallery" },
    SectionLabel("Our Work"),
    watchReveal(el("h2", { class: "section-title" }, "PROJECT GALLERY")),
    watchReveal(el("p", { class: "section-desc" }, "Showcasing installations across Salem and surrounding districts")),
    el("div", { class: "gallery-grid" }, ...items),
    el("p", { class: "gallery-note" }, "Gallery displays actual project photos once connected to CMS")
  );
}

function buildFAQ() {
  const items = FAQS.map((faq) => {
    const answer = el("div", { class: "faq-a" }, el("p", {}, faq.a));
    const icon = el("div", { class: "faq-icon" }, svg(ICONS.plus));
    const question = el("div", { class: "faq-q" }, faq.q, icon);
    const item = el("div", { class: "faq-item" }, question, answer);
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("active");
        other.querySelector(".faq-a")?.classList.remove("open");
      });
      if (!isOpen) {
        item.classList.add("active");
        answer.classList.add("open");
      }
    });
    return item;
  });

  return el("section", { id: "faq" },
    SectionLabel("FAQ"),
    watchReveal((() => { const title = el("h2", { class: "section-title faq-title" }); title.innerHTML = "FREQUENTLY ASKED<br>QUESTIONS"; return title; })()),
    el("div", { class: "faq-list" }, ...items)
  );
}

function buildAdminPortal() {
  const projectName = el("input", { type: "text", class: "form-input", id: "adminProjectName", placeholder: "Project name", required: "" });
  const projectClient = el("input", { type: "text", class: "form-input", id: "adminProjectClient", placeholder: "Client name", required: "" });
  const projectLocation = el("input", { type: "text", class: "form-input", id: "adminProjectLocation", placeholder: "Location", required: "" });
  const projectStatus = el("select", { class: "form-select", id: "adminProjectStatus" }, ...["Planned", "In Progress", "Completed", "Maintenance"].map((option) => el("option", {}, option)));
  const projectNote = el("textarea", { class: "form-textarea", id: "adminProjectNote", placeholder: "Project note" });
  const projectFormMsg = el("div", { class: "form-success", id: "adminProjectMsg" }, "Project saved.");
  const projectForm = el("form", { id: "adminProjectForm" },
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminProjectName" }, "Project"), projectName),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminProjectClient" }, "Client"), projectClient)
    ),
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminProjectLocation" }, "Location"), projectLocation),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminProjectStatus" }, "Status"), projectStatus)
    ),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminProjectNote" }, "Note"), projectNote),
    el("button", { type: "submit", class: "btn-primary", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.plus), "Add Project"),
    projectFormMsg
  );

  const clientId = el("input", { type: "text", class: "form-input", id: "adminClientId", placeholder: "Customer ID", required: "" });
  const clientName = el("input", { type: "text", class: "form-input", id: "adminClientName", placeholder: "Customer name", required: "" });
  const clientPhone = el("input", { type: "tel", class: "form-input", id: "adminClientPhone", placeholder: "Phone number", required: "" });
  const clientCategory = el("input", { type: "text", class: "form-input", id: "adminClientCategory", placeholder: "Category / Type" });
  const clientFormMsg = el("div", { class: "form-success", id: "adminClientMsg" }, "Client saved.");
  const clientForm = el("form", { id: "adminClientForm" },
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminClientId" }, "Customer ID"), clientId),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminClientName" }, "Name"), clientName)
    ),
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminClientPhone" }, "Phone"), clientPhone),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminClientCategory" }, "Type"), clientCategory)
    ),
    el("button", { type: "submit", class: "btn-primary", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.person), "Add Client"),
    clientFormMsg
  );

  const galleryTitle = el("input", { type: "text", class: "form-input", id: "adminGalleryTitle", placeholder: "Gallery title", required: "" });
  const galleryNote = el("textarea", { class: "form-textarea", id: "adminGalleryNote", placeholder: "Gallery note" });
  const galleryYear = el("input", { type: "text", class: "form-input", id: "adminGalleryYear", placeholder: "Year / tag" });
  const galleryFormMsg = el("div", { class: "form-success", id: "adminGalleryMsg" }, "Gallery item saved.");
  const galleryForm = el("form", { id: "adminGalleryForm" },
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminGalleryTitle" }, "Title"), galleryTitle),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminGalleryNote" }, "Note"), galleryNote),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminGalleryYear" }, "Year / Tag"), galleryYear),
    el("button", { type: "submit", class: "btn-primary", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.image), "Add Gallery Item"),
    galleryFormMsg
  );

  const experienceYears = el("input", { type: "number", min: "0", max: "60", class: "form-input", id: "adminExperienceYears", value: String(State.dashboard.stats.experience ?? 0), required: "" });
  const statsFormMsg = el("div", { class: "form-success", id: "adminStatsMsg" }, "Experience updated.");
  const statsForm = el("form", { id: "adminStatsForm" },
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminExperienceYears" }, "Years of Experience"), experienceYears),
    el("button", { type: "submit", class: "btn-primary", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.check), "Update Experience"),
    statsFormMsg
  );

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    State.dashboard.projects.push({
      title: projectName.value.trim(),
      client: projectClient.value.trim(),
      location: projectLocation.value.trim(),
      status: projectStatus.value,
      note: projectNote.value.trim(),
    });
    State.dashboard.stats.projects = (State.dashboard.stats.projects ?? 0) + 1;
    persistDashboardData();
    refreshDashboardView();
    projectFormMsg.style.display = "block";
    projectForm.reset();
    projectStatus.value = "Planned";
    setTimeout(() => { projectFormMsg.style.display = "none"; }, 2200);
  });

  clientForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const customerIdValue = normalizeCustomerId(clientId.value);
    const existingIndex = State.customers.findIndex((client) => normalizeCustomerId(client.customerId || "") === customerIdValue);
    const payload = {
      customerId: customerIdValue,
      name: clientName.value.trim(),
      phone: clientPhone.value.trim(),
      category: clientCategory.value.trim(),
    };
    if (existingIndex >= 0) State.customers[existingIndex] = payload;
    else {
      State.customers.push(payload);
      State.dashboard.stats.clients = (State.dashboard.stats.clients ?? 0) + 1;
    }
    persistCustomersData();
    refreshDashboardView();
    clientFormMsg.style.display = "block";
    clientForm.reset();
    setTimeout(() => { clientFormMsg.style.display = "none"; }, 2200);
  });

  galleryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    State.dashboard.gallery.push({
      title: galleryTitle.value.trim(),
      note: galleryNote.value.trim(),
      year: galleryYear.value.trim(),
    });
    persistDashboardData();
    refreshDashboardView();
    galleryFormMsg.style.display = "block";
    galleryForm.reset();
    setTimeout(() => { galleryFormMsg.style.display = "none"; }, 2200);
  });

  statsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const experienceValue = Math.max(0, parseInt(experienceYears.value || "0", 10));
    State.dashboard.stats.experience = experienceValue;
    persistDashboardData();
    refreshDashboardView();
    statsFormMsg.style.display = "block";
    setTimeout(() => { statsFormMsg.style.display = "none"; }, 2200);
  });

  const summary = el("div", { class: "admin-summary" },
    el("div", { class: "summary-chip" }, el("span", {}, "Projects"), el("strong", { id: "summaryProjects" }, "0")),
    el("div", { class: "summary-chip" }, el("span", {}, "Experience"), el("strong", { id: "summaryExperience" }, "0")),
    el("div", { class: "summary-chip" }, el("span", {}, "Clients"), el("strong", { id: "summaryClients" }, "0")),
    el("div", { class: "summary-chip" }, el("span", {}, "Satisfaction"), el("strong", { id: "summarySatisfaction" }, "0%"))
  );

  const lists = el("div", { class: "admin-mini-grid" },
    el("div", { class: "admin-card" },
      el("div", { class: "admin-card-title" }, "Projects"),
      el("div", { class: "admin-mini-grid", id: "adminProjectsList" })
    ),
    el("div", { class: "admin-card" },
      el("div", { class: "admin-card-title" }, "Clients"),
      el("div", { class: "admin-mini-grid", id: "adminClientsList" })
    ),
    el("div", { class: "admin-card" },
      el("div", { class: "admin-card-title" }, "Gallery"),
      el("div", { class: "admin-mini-grid", id: "adminGalleryList" })
    )
  );

  return el("section", { id: "admin" },
    SectionLabel("Admin Control"),
    watchReveal(el("h2", { class: "section-title" }, "ADMIN DATA HUB")),
    watchReveal(el("p", { class: "section-desc" }, "Use this dashboard to add projects, client records, gallery items, and company experience. All edits are stored in your browser and reflected on the page immediately.")),
    el("div", { class: "admin-grid" },
      el("div", { class: "admin-stack" },
        el("div", { class: "admin-card" }, el("h3", { class: "contact-form-title" }, "Add Project"), projectForm),
        el("div", { class: "admin-card" }, el("h3", { class: "contact-form-title" }, "Add Client"), clientForm),
        el("div", { class: "admin-card" }, el("h3", { class: "contact-form-title" }, "Add Gallery Item"), galleryForm),
        el("div", { class: "admin-card" }, el("h3", { class: "contact-form-title" }, "Update Experience"), statsForm)
      ),
      el("div", { class: "admin-stack" },
        el("div", { class: "admin-card" }, el("h3", { class: "contact-form-title" }, "Live Summary"), summary),
        lists
      )
    )
  );
}

function buildCustomerFeedback() {
  const customerId = el("input", { type: "text", class: "form-input", id: "feedbackCustomerId", placeholder: "Customer ID", required: "" });
  const customerName = el("input", { type: "text", class: "form-input", id: "feedbackCustomerName", placeholder: "Customer name", required: "" });
  const customerPhone = el("input", { type: "tel", class: "form-input", id: "feedbackCustomerPhone", placeholder: "Phone number" });
  const serviceType = el("input", { type: "text", class: "form-input", id: "feedbackServiceType", placeholder: "Project / service" });
  const satisfaction = el("input", { type: "number", min: "1", max: "100", class: "form-input", id: "feedbackSatisfaction", value: "100", required: "" });
  const satisfactionLabel = el("div", { class: "mini-note", id: "feedbackSatisfactionLabel" }, "100% satisfaction");
  satisfaction.addEventListener("input", () => {
    const value = Math.max(1, Math.min(100, parseInt(satisfaction.value || "100", 10)));
    satisfactionLabel.textContent = `${value}% satisfaction`;
  });
  const message = el("textarea", { class: "form-textarea", id: "feedbackMessage", placeholder: "Customer comment", required: "" });
  const feedbackMsg = el("div", { class: "form-success", id: "feedbackMsg" }, "Feedback saved.");

  const form = el("form", { id: "customerFeedbackForm" },
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "feedbackCustomerId" }, "Customer ID"), customerId),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "feedbackCustomerName" }, "Name"), customerName)
    ),
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "feedbackCustomerPhone" }, "Phone"), customerPhone),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "feedbackServiceType" }, "Service"), serviceType)
    ),
    el("div", { class: "form-group rating-row" },
      el("label", { class: "form-label", for: "feedbackSatisfaction" }, "Satisfaction (1-100)"),
      satisfaction,
      satisfactionLabel
    ),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "feedbackMessage" }, "Feedback"), message),
    el("button", { type: "submit", class: "btn-primary", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.send), "Save Feedback"),
    feedbackMsg
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const customerIdValue = normalizeCustomerId(customerId.value);
    if (!customerIdValue) return;
    if (State.feedbacks.some((item) => normalizeCustomerId(item.customerId || "") === customerIdValue)) {
      feedbackMsg.textContent = "This customer ID already has a feedback entry.";
      feedbackMsg.style.display = "block";
      return;
    }

    const entry = {
      customerId: customerIdValue,
      name: customerName.value.trim(),
      phone: customerPhone.value.trim(),
      service: serviceType.value.trim(),
      satisfaction: Math.max(1, Math.min(100, parseInt(satisfaction.value || "100", 10))),
      message: message.value.trim(),
      createdAt: new Date().toISOString(),
    };

    State.feedbacks.push(entry);
    // ensure customer is registered in customers DB when they submit feedback
    if (entry.customerId) {
      const exists = State.customers.some((c) => normalizeCustomerId(c.customerId || "") === entry.customerId);
      if (!exists) {
        State.customers.push({ customerId: entry.customerId, name: entry.name, phone: entry.phone, category: entry.service || "" });
        State.dashboard.stats.clients = (State.dashboard.stats.clients ?? 0) + 1;
        persistCustomersData();
        persistDashboardData();
      }
    }
    const average = Math.round(State.feedbacks.reduce((sum, item) => sum + Number(item.satisfaction || 0), 0) / State.feedbacks.length);
    State.dashboard.stats.satisfaction = average;
    persistFeedbackData();
    persistDashboardData();
    refreshDashboardView();

    feedbackMsg.textContent = "Feedback saved.";
    feedbackMsg.style.display = "block";
    form.reset();
    satisfaction.value = "100";
    satisfactionLabel.textContent = "100% satisfaction";
    setTimeout(() => { feedbackMsg.style.display = "none"; }, 2200);
  });

  // Also store review entries into the `reviews` database so testimonials show only when submitted online
  form.addEventListener("submit", (event) => {
    // entry object is created above; reuse the same values via form elements
    const review = {
      customerId: normalizeCustomerId(customerId.value),
      name: customerName.value.trim() || "Anonymous",
      phone: customerPhone.value.trim(),
      service: serviceType.value.trim(),
      satisfaction: Math.max(1, Math.min(100, parseInt(satisfaction.value || "100", 10))),
      message: message.value.trim(),
      createdAt: new Date().toISOString(),
    };
    // prevent duplicates by customerId
    if (review.customerId && !State.reviews.some((r) => normalizeCustomerId(r.customerId || "") === review.customerId)) {
      State.reviews.push(review);
      persistReviewsData();
    }
  });

  const overview = el("div", { class: "feedback-overview" },
    el("div", { class: "feedback-stat" }, el("span", {}, "Feedback Count"), el("strong", { id: "feedbackCount" }, "0")),
    el("div", { class: "feedback-stat" }, el("span", {}, "Average Satisfaction"), el("strong", { id: "feedbackAverage" }, "0%"))
  );

  return el("section", { id: "feedback" },
    SectionLabel("Customer Feedback"),
    watchReveal(el("h2", { class: "section-title" }, "ONE FEEDBACK PER CUSTOMER ID")),
    watchReveal(el("p", { class: "section-desc" }, "Customers can submit one feedback record per ID. The satisfaction score is limited to 1-100 and the average is reflected in the dashboard.")),
    el("div", { class: "feedback-grid" },
      el("div", { class: "feedback-stack" },
        el("div", { class: "feedback-card" }, el("h3", { class: "feedback-heading" }, "Submit Feedback"), overview, form)
      ),
      el("div", { class: "feedback-stack" },
        el("div", { class: "feedback-card" }, el("h3", { class: "feedback-heading" }, "Saved Feedback"), el("div", { class: "admin-mini-grid", id: "customerFeedbackList" }))
      )
    )
  );
}

function buildContact() {
  const infoItems = [
    { icon: ICONS.phone, label: "Phone Numbers", content: () => { const node = el("div", { class: "contact-value" }); node.innerHTML = `<a href="tel:${BRAND.phone1Raw}">${BRAND.phone1}</a><br><a href="tel:${BRAND.phone2Raw}">${BRAND.phone2}</a>`; return node; } },
    { icon: ICONS.pin, label: "Address", content: () => { const node = el("div", { class: "contact-value" }); node.textContent = `${BRAND.address}\nTamil Nadu`; return node; } },
    { icon: ICONS.whatsapp, label: "WhatsApp", content: () => { const node = el("div", { class: "contact-value" }); node.innerHTML = `<a href="${BRAND.whatsapp}" target="_blank" rel="noreferrer">Chat on WhatsApp →</a>`; return node; } },
    { icon: ICONS.clock, label: "Working Hours", content: () => el("div", { class: "contact-value" }, `${BRAND.hours}\nSunday: By Appointment`) },
  ].map((item) => watchReveal(el("div", { class: "contact-item" }, el("div", { class: "contact-icon" }, svg(item.icon)), el("div", {}, el("div", { class: "contact-label" }, item.label), item.content()))));

  const fname = el("input", { type: "text", class: "form-input", id: "fname", placeholder: "Your Name", required: "" });
  const fphone = el("input", { type: "tel", class: "form-input", id: "fphone", placeholder: "9876543210", required: "" });
  const fproduct = el("select", { class: "form-select", id: "fproduct" }, ...["Select Product", "Rolling Shutter", "Automatic Rolling Shutter", "Grill Shutter", "Boom Barrier", "Sliding Gate Motor", "Repair / AMC Service", "Other"].map((option) => el("option", {}, option)));
  const fmsg = el("textarea", { class: "form-textarea", id: "fmessage", placeholder: "Describe your requirement..." });
  const submitBtn = el("button", { type: "submit", class: "btn-primary", id: "submitBtn", style: { width: "100%", justifyContent: "center" } }, svg(ICONS.send), "Send Enquiry");
  const successMsg = el("div", { class: "form-success", id: "formSuccess" }, "✓ Enquiry sent! We'll contact you soon.");

  const form = el("form", { id: "contactForm" },
    el("div", { class: "form-row" },
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "fname" }, "Your Name"), fname),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "fphone" }, "Phone"), fphone)
    ),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "fproduct" }, "Product / Service"), fproduct),
    el("div", { class: "form-group" }, el("label", { class: "form-label", for: "fmessage" }, "Message"), fmsg),
    submitBtn,
    successMsg
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = fname.value.trim();
    const phone = fphone.value.trim();
    const product = fproduct.value;
    const message = fmsg.value.trim();
    const waText = `New Enquiry from Website:\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nMessage: ${message}`;
    window.open(`${BRAND.whatsapp}?text=${encodeURIComponent(waText)}`, "_blank", "noreferrer");
    successMsg.style.display = "block";
    submitBtn.textContent = "Sent!";
    setTimeout(() => {
      successMsg.style.display = "none";
      submitBtn.innerHTML = "";
      submitBtn.append(svg(ICONS.send), document.createTextNode(" Send Enquiry"));
      form.reset();
    }, 4000);
  });

  const formWrap = watchReveal(el("div", { class: "contact-form" }, el("h3", { class: "contact-form-title" }, "SEND ENQUIRY"), form));
  const map = el("div", { class: "map-frame" }, el("iframe", { src: BRAND.mapSrc, loading: "lazy", allowfullscreen: "" }));

  return el("section", { id: "contact" },
    SectionLabel("Reach Us"),
    watchReveal(el("h2", { class: "section-title" }, "GET IN TOUCH")),
    el("div", { class: "contact-grid" }, el("div", { class: "contact-info" }, ...infoItems), formWrap),
    watchReveal(map)
  );
}

function buildFooter() {
  const logo = el("div", { class: "footer-logo" }, el("div", { class: "footer-logo-icon" }, svg(ICONS.shutter)), el("span", { class: "footer-logo-text" }, "AL AMEEN ROLLING SHUTTER"));
  const waLink = el("a", { href: BRAND.whatsapp, target: "_blank", rel: "noreferrer", class: "footer-social-btn", "aria-label": "WhatsApp" }, svg(ICONS.whatsapp));
  const brand = el("div", { class: "footer-brand" },
    logo,
    el("p", { class: "footer-tagline" }, "Professional Rolling Shutter Manufacturing & Automation Solutions in Salem, Tamil Nadu. Quality you can trust."),
    el("div", { class: "footer-social" }, waLink)
  );

  const targets = ["about", "products", "services", "gallery", "testimonials", "admin", "feedback", "contact"];
  const quickLinks = ["About Us", "Products", "Services", "Gallery", "Testimonials", "Admin", "Feedback", "Contact"].map((label, index) => {
    const target = targets[index];
    const href = target === 'admin' ? (window.ADMIN_PAGE ? `#${target}` : 'admin.html') : `#${target}`;
    return el("a", { href }, label);
  });
  const productLinks = ["Rolling Shutter", "Automatic Shutter", "Grill Shutter", "Boom Barrier", "Sliding Gate Motor", "Glass Door Fittings"].map((label) => el("a", { href: "#products" }, label));

  return el("footer", {},
    el("div", { class: "footer-grid" },
      brand,
      el("div", {}, el("div", { class: "footer-col-title" }, "Quick Links"), el("div", { class: "footer-links" }, ...quickLinks)),
      el("div", {}, el("div", { class: "footer-col-title" }, "Products"), el("div", { class: "footer-links" }, ...productLinks))
    ),
    el("div", { class: "footer-bottom" },
      el("p", { class: "footer-copyright" }, `© ${new Date().getFullYear()} Al Ameen Rolling Shutter Manufacturing. All rights reserved.`),
      el("p", { class: "footer-credit" }, "Danishpet Main Road, Santhaipet, Kadayampatti (Tk), Salem")
    )
  );
}

function buildFloatingBtns() {
  return el("div", { class: "floating-btns" },
    el("a", { href: `tel:${BRAND.phone1Raw}`, class: "float-call", title: "Call Us", "aria-label": "Call Us" }, svg(ICONS.phone)),
    el("a", { href: BRAND.whatsapp, target: "_blank", rel: "noreferrer", class: "float-whatsapp", title: "WhatsApp Us", "aria-label": "WhatsApp Us" }, svg(ICONS.whatsapp))
  );
}

function initParticles() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    o: Math.random() * 0.45 + 0.05,
  }));

  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(61,220,132,${particle.o})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  };
  tick();
}

function initLiquidEffect() {
  const hero = document.getElementById("hero");
  if (!hero) return;
  if (document.getElementById("liquidOverlay")) return;
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("id", "liquidOverlay");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.position = "absolute";
  svg.style.inset = "0";
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.zIndex = "1";
  svg.style.pointerEvents = "none";
  svg.style.opacity = "0.34";
  svg.style.mixBlendMode = "overlay";

  const defs = document.createElementNS(svgNS, "defs");
  const filter = document.createElementNS(svgNS, "filter");
  filter.setAttribute("id", "liquidFilter");

  const turb = document.createElementNS(svgNS, "feTurbulence");
  turb.setAttribute("type", "fractalNoise");
  turb.setAttribute("baseFrequency", "0.014 0.018");
  turb.setAttribute("numOctaves", "3");
  turb.setAttribute("result", "turb");

  const disp = document.createElementNS(svgNS, "feDisplacementMap");
  disp.setAttribute("in", "SourceGraphic");
  disp.setAttribute("in2", "turb");
  disp.setAttribute("scale", "32");

  filter.appendChild(turb);
  filter.appendChild(disp);
  defs.appendChild(filter);

  const grad = document.createElementNS(svgNS, "linearGradient");
  grad.setAttribute("id", "liquidGrad");
  grad.setAttribute("x1", "0%");
  grad.setAttribute("y1", "0%");
  grad.setAttribute("x2", "100%");
  grad.setAttribute("y2", "100%");
  const stop1 = document.createElementNS(svgNS, "stop"); stop1.setAttribute("offset", "0%"); stop1.setAttribute("stop-color", "#003338"); stop1.setAttribute("stop-opacity", "0.0");
  const stop2 = document.createElementNS(svgNS, "stop"); stop2.setAttribute("offset", "50%"); stop2.setAttribute("stop-color", "#2ea7ff"); stop2.setAttribute("stop-opacity", "0.6");
  const stop3 = document.createElementNS(svgNS, "stop"); stop3.setAttribute("offset", "100%"); stop3.setAttribute("stop-color", "#3ddc84"); stop3.setAttribute("stop-opacity", "0.6");
  grad.appendChild(stop1); grad.appendChild(stop2); grad.appendChild(stop3);
  defs.appendChild(grad);

  svg.appendChild(defs);

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", "100%");
  rect.setAttribute("height", "100%");
  rect.setAttribute("fill", "url(#liquidGrad)");
  rect.setAttribute("filter", "url(#liquidFilter)");
  svg.appendChild(rect);

  const heroContent = hero.querySelector(".hero-content");
  hero.insertBefore(svg, heroContent);

  let t = 0;
  function animate() {
    t += 0.01;
    const bf1 = 0.014 + Math.sin(t * 1.5) * 0.006;
    const bf2 = 0.018 + Math.cos(t * 1.1) * 0.006;
    try {
      turb.setAttribute("baseFrequency", `${bf1} ${bf2}`);
      disp.setAttribute("scale", `${26 + Math.sin(t * 2.2) * 22}`);
    } catch (e) {
      // ignore if elements removed
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function runLoader(onComplete) {
  const panel = document.getElementById("shutterPanel");
  const logoBehind = document.getElementById("logoBehind");
  const bar = document.getElementById("loaderBar");
  const sparks = document.getElementById("sparksContainer");
  const loader = document.getElementById("loader");

  if (!panel || !logoBehind || !bar || !sparks || !loader) {
    onComplete();
    return;
  }

  let progress = 0;
  const barInterval = setInterval(() => {
    progress += 2;
    bar.style.width = `${progress}%`;
    if (progress >= 100) clearInterval(barInterval);
  }, 30);

  function createSpark() {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 30}%;`;
    sparks.appendChild(spark);
    if (window.gsap) {
      gsap.to(spark, { opacity: 1, y: -20, x: (Math.random() - 0.5) * 30, duration: 0.3, onComplete: () => gsap.to(spark, { opacity: 0, duration: 0.2, onComplete: () => spark.remove() }) });
    } else {
      setTimeout(() => spark.remove(), 500);
    }
  }

  setTimeout(() => {
    const sparkInterval = setInterval(createSpark, 60);
    if (window.gsap) {
      gsap.to(panel, { y: "-220px", duration: 1.4, ease: "power2.inOut", onComplete: () => { clearInterval(sparkInterval); gsap.to(logoBehind, { opacity: 1, y: 0, duration: 0.4 }); } });
    } else {
      panel.style.transform = "translateY(-220px)";
      panel.style.transition = "transform 1.4s ease";
      clearInterval(sparkInterval);
      logoBehind.style.opacity = "1";
      logoBehind.style.transform = "translateY(0)";
    }
  }, 1500);

  setTimeout(() => {
    if (window.gsap) {
      gsap.to(loader, { opacity: 0, duration: 0.6, onComplete: () => { loader.remove(); onComplete(); } });
    } else {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.6s";
      setTimeout(() => { loader.remove(); onComplete(); }, 600);
    }
  }, 3200);
}

function animateHero() {
  const lines = document.querySelectorAll(".hero-title-line");
  const sub = document.querySelector(".hero-sub");
  const btns = document.querySelector(".hero-btns");

  if (window.gsap) {
    gsap.to(lines, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" });
    gsap.to(sub, { y: 0, opacity: 1, duration: 0.7, delay: 0.6, ease: "power2.out" });
    gsap.to(btns, { y: 0, opacity: 1, duration: 0.7, delay: 0.8, ease: "power2.out" });
  } else {
    [lines, [sub], [btns]].flat().forEach((node) => {
      if (node) {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      }
    });
  }
}

function init() {
  const root = document.getElementById("root");
  if (!root) throw new Error("Missing #root container");
  injectStyles();
  document.documentElement.style.scrollBehavior = "smooth";
  document.body.style.overflow = "hidden";
  const loader = buildLoader();
  const nav = buildNav();
  const mobileMenu = buildMobileMenu();
  const modal = buildModal();
  const floatingBtns = buildFloatingBtns();

  // Admin page mode: show intro then require login before revealing admin portal
  if (window.ADMIN_PAGE) {
    const mainAdmin = el("main", {}, buildHero());
    document.body.insertBefore(loader, document.body.firstChild);
    root.append(nav, mobileMenu, mainAdmin, modal, floatingBtns);

    runLoader(() => {
      document.body.style.overflow = "";
      animateHero();
      initParticles();
      initLiquidEffect();
      showAdminLogin(() => {
        // on success - replace main with hero + admin portal
        const newMain = el("main", {}, buildHero(), buildAdminPortal());
        mainAdmin.replaceWith(newMain);
        refreshDashboardView();
      });
    });
    return;
  }

  const main = el("main", {},
    buildHero(),
    buildMarquee(),
    buildAbout(),
    buildProducts(),
    buildServices(),
    buildCounters(),
    buildWhy(),
    buildTestimonials(),
    buildGallery(),
    buildFAQ(),
    buildCustomerFeedback(),
    buildContact(),
    buildFooter()
  );

  document.body.insertBefore(loader, document.body.firstChild);
  root.append(nav, mobileMenu, main, modal, floatingBtns);

  refreshDashboardView();

  runLoader(() => {
    document.body.style.overflow = "";
    animateHero();
    initParticles();
    initLiquidEffect();
  });
}

function showAdminLogin(onSuccess) {
  // Simple login overlay that matches site theme
  const overlay = el("div", { class: "modal-overlay open", id: "adminLoginOverlay", style: { zIndex: 2000, display: "grid", placeItems: "center" } },
    el("div", { class: "modal-box", style: { width: "min(520px, 92%)", textAlign: "left" } },
      el("h3", { class: "modal-title" }, "Admin Login"),
      el("p", { class: "section-desc" }, "Enter administrator credentials to access the Admin Data Hub."),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminUser" }, "Username"), el("input", { id: "adminUser", class: "form-input", placeholder: "admin" })),
      el("div", { class: "form-group" }, el("label", { class: "form-label", for: "adminPass" }, "Password"), el("input", { id: "adminPass", class: "form-input", type: "password", placeholder: "••••••" })),
      el("div", { style: { display: "flex", gap: "0.6rem", marginTop: "0.6rem" } }, el("button", { class: "btn-primary", id: "adminLoginBtn" }, "Sign in"), el("button", { class: "btn-outline", id: "adminCancelBtn" }, "Cancel")),
      el("div", { class: "form-success", id: "loginError", style: { display: "none", marginTop: "0.8rem" } }, "Invalid credentials")
    )
  );

  document.body.appendChild(overlay);

  // admin credentials come from State.admins (persisted). If none exist, provision a default account.
  let adminCreds = { user: "admin", pass: "admin123" };
  if (Array.isArray(State.admins) && State.admins.length) {
    adminCreds = State.admins[0];
  } else {
    State.admins = [adminCreds];
    persistAdminsData();
  }

  const attemptLogin = () => {
    const user = document.getElementById("adminUser").value.trim();
    const pass = document.getElementById("adminPass").value.trim();
    if (user === adminCreds.user && pass === adminCreds.pass) {
      overlay.remove();
      onSuccess?.();
    } else {
      const err = document.getElementById("loginError");
      err.style.display = "block";
      setTimeout(() => { err.style.display = "none"; }, 2200);
    }
  };

  document.getElementById("adminLoginBtn").addEventListener("click", attemptLogin);
  document.getElementById("adminCancelBtn").addEventListener("click", () => { overlay.remove(); });
}

document.addEventListener("DOMContentLoaded", init);
