/**
 * MOTIVUS RESET — Instagram Studio
 * app.js — logika editoru, šablony, export PNG
 */

// ════════════════════════════════════════
//  KONFIGURACE
// ════════════════════════════════════════

// Logo jako base64 (načteme asynchronně)
let LOGO_SRC = 'assets/symbol.png';


const COLORS = {
  terracotta: { bg: '#C4714F', text: '#F5EFE6', accent: '#F5EFE6',  name: 'Terracotta' },
  green:      { bg: '#8BAF8E', text: '#2D5016', accent: '#2D5016',  name: 'Šalvějová'  },
  cream:      { bg: '#F5EFE6', text: '#2D5016', accent: '#C4714F',  name: 'Smetanová'  },
  forest:     { bg: '#2D5016', text: '#F5EFE6', accent: '#C9A84C',  name: 'Lesní'      },
  dark:       { bg: '#1a1208', text: '#F5EFE6', accent: '#C4714F',  name: 'Tmavá'      }
};

const TEMPLATES = {
  citat: {
    label: 'Citát',
    fields: [
      { key: 'quote',  label: 'Citát',         type: 'textarea', placeholder: 'Vyhoření není slabost. Je to cena za to, že vám záleží.' },
      { key: 'author', label: 'Autor / podpis', type: 'input',    placeholder: 'Mgr. Kristýna Nosová' }
    ],
    caption: '✨ Myšlenka, která mi dnes přišla pod ruce.\n\nCo vy — rezonuje to s vaší zkušeností? 👇\n\n#motivusreset #pomahajiciprofese #prevencevyhoreni #regenerace #socialnipraxe'
  },
  edukace: {
    label: 'Edukace',
    fields: [
      { key: 'title', label: 'Nadpis',  type: 'input', placeholder: '5 signálů, že potřebujete pauzu' },
      { key: 'b1',    label: '1. bod',  type: 'input', placeholder: 'Cítíte se vyčerpaně i po víkendu' },
      { key: 'b2',    label: '2. bod',  type: 'input', placeholder: 'Ztratili jste radost z práce' },
      { key: 'b3',    label: '3. bod',  type: 'input', placeholder: 'Klienti vás začínají dráždit' },
      { key: 'b4',    label: '4. bod',  type: 'input', placeholder: 'Přemýšlíte o práci doma' },
      { key: 'b5',    label: '5. bod',  type: 'input', placeholder: 'Zanedbáváte vlastní potřeby' }
    ],
    caption: '📚 Uložte si tento příspěvek — může se hodit.\n\nKterý bod vám nejvíce rezonuje? Napište mi do komentářů 👇\n\n#motivusreset #prevencevyhoreni #pomahajiciprofese #regenerace #burnout #socialnipraxe'
  },
  workshop: {
    label: 'Workshop',
    fields: [
      { key: 'eventName', label: 'Název akce',     type: 'input', placeholder: 'Program REGENERACE' },
      { key: 'subtitle',  label: 'Podtitul / téma', type: 'input', placeholder: 'Modul 1: Prevence vyhoření' },
      { key: 'date',      label: 'Datum',           type: 'input', placeholder: '15. září 2026' },
      { key: 'location',  label: 'Místo',           type: 'input', placeholder: 'Praha / Online' },
      { key: 'cta',       label: 'Výzva k akci',    type: 'input', placeholder: 'Přihlaste se v odkazu v biu ↑' }
    ],
    caption: '🗓️ Přihlašování je otevřené!\n\nMíst je omezený počet — nenechte to na poslední chvíli.\n\nLink v biu 👆\n\n#motivusreset #workshop #programregenerace #prevencevyhoreni #pomahajiciprofese'
  },
  tipy: {
    label: 'Tipy',
    fields: [
      { key: 'title', label: 'Nadpis',  type: 'input', placeholder: 'Technika STOP' },
      { key: 't1',    label: '1. krok', type: 'input', placeholder: 'Stop — zastavte se' },
      { key: 't2',    label: '2. krok', type: 'input', placeholder: 'Take a breath — nádech a výdech' },
      { key: 't3',    label: '3. krok', type: 'input', placeholder: 'Observe — vnímejte tělo a emoci' },
      { key: 't4',    label: '4. krok', type: 'input', placeholder: 'Proceed — vědomě reagujte' }
    ],
    caption: '✅ Praktická technika pro váš pracovní den.\n\nUložte si to pro příště! 🔖\n\nZkusili jste ji někdy? Napište mi, jak vám to jde 👇\n\n#motivusreset #tipy #prevencevyhoreni #pomahajiciprofese #regenerace'
  },
  osobni: {
    label: 'Osobní',
    fields: [
      { key: 'text',  label: 'Text příspěvku', type: 'textarea', placeholder: 'Napište myšlenku, krátký příběh nebo pocit...' },
      { key: 'image', label: 'Fotografie',     type: 'image' }
    ],
    caption: '🌿 Sdílím kousek ze zákulisí.\n\nPíšu to pro vás — i pro sebe.\n\n#motivusreset #pomahajiciprofese #regenerace #kristynanosova'
  },
  karusel: {
    label: 'Karusel',
    fields: [
      { key: 'slide', label: 'Číslo slidu (1–5)', type: 'input',    placeholder: '1' },
      { key: 'total', label: 'Celkem slidů',      type: 'input',    placeholder: '5' },
      { key: 'title', label: 'Nadpis slidu',      type: 'input',    placeholder: 'Jak funguje vyhoření?' },
      { key: 'body',  label: 'Text slidu',        type: 'textarea', placeholder: 'Napište obsah tohoto slidu...' },
      { key: 'cta',   label: 'CTA (na posledním slidu)', type: 'input', placeholder: 'Uložte si to → sdílejte s kolegy' }
    ],
    caption: '👉 Přejeďte doprava — celá série.\n\nUložte si příspěvek pro příště! 🔖\n\n#motivusreset #prevencevyhoreni #pomahajiciprofese #regenerace'
  }
};

// ════════════════════════════════════════
//  STAV APLIKACE
// ════════════════════════════════════════

const state = {
  template: 'citat',
  color:    'terracotta',
  fields:   {},
  imageData: null
};

// ════════════════════════════════════════
//  RENDER POLÍ
// ════════════════════════════════════════

function renderFields() {
  const container = document.getElementById('fields-container');
  const tpl = TEMPLATES[state.template];

  container.innerHTML = tpl.fields.map(f => {
    if (f.type === 'image') {
      return `
        <div class="field-group">
          <div class="field-label">${f.label}</div>
          <div class="image-upload-area" id="upload-area"
               onclick="document.getElementById('img-file-input').click()"
               ondragover="event.preventDefault()"
               ondrop="handleDrop(event)">
            <div class="upload-icon">🖼️</div>
            <div class="upload-text">Klikněte nebo přetáhněte foto</div>
            <div class="upload-hint">JPG · PNG · WEBP</div>
          </div>
          <input type="file" id="img-file-input" accept="image/*" style="display:none"
                 onchange="handleImageUpload(this.files[0])">
        </div>`;
    }

    const tag = f.type === 'textarea' ? 'textarea' : 'input';
    const attrs = f.type === 'textarea' ? '' : `type="text"`;
    const val   = escapeHtml(state.fields[f.key] || '');
    const cls   = f.type === 'textarea' ? 'field-textarea' : 'field-input';

    return `
      <div class="field-group">
        <div class="field-label">${f.label}</div>
        <${tag} class="${cls}" ${attrs}
          data-key="${f.key}"
          placeholder="${f.placeholder}"
          oninput="onFieldChange('${f.key}', this.value)"
        >${f.type === 'textarea' ? val : ''}</${tag}>
        ${f.type !== 'textarea' ? `<script>document.querySelector('[data-key="${f.key}"]').value=${JSON.stringify(val)};<\/script>` : ''}
      </div>`;
  }).join('');

  // Nastav výchozí caption
  document.getElementById('caption-input').value = tpl.caption;
}

// ════════════════════════════════════════
//  RENDER NÁHLEDU
// ════════════════════════════════════════

function renderPreview() {
  const preview = document.getElementById('post-preview');
  const c = COLORS[state.color];
  const f = state.fields;

  let html = '';

  switch (state.template) {

    // ── CITÁT ──────────────────────────────
    case 'citat': {
      const quoteText = f.quote  || 'Napište citát do pole vlevo...';
      const author    = f.author || '@motivus.reset';
      html = `
        <div class="tpl-citat"
             style="background:${c.bg}; color:${c.text}; width:100%; height:100%;">
          <span class="citat-quotemark" style="color:${c.text}">&ldquo;</span>
          <div class="citat-text">${escapeHtml(quoteText)}</div>
          <div class="citat-divider" style="background:${c.text}"></div>
          <div class="citat-author">${escapeHtml(author)}</div>
          ${logoWatermark(c.text)}
        </div>`;
      break;
    }

    // ── EDUKACE ────────────────────────────
    case 'edukace': {
      const title   = f.title || 'Nadpis vzdělávacího příspěvku';
      const bullets = ['b1','b2','b3','b4','b5']
        .map(k => f[k]).filter(Boolean);

      const bulletsHtml = bullets.length
        ? bullets.map((b, i) => `
            <div class="edu-bullet">
              <div class="edu-num" style="color:${c.accent}">0${i+1}</div>
              <div class="edu-text">${escapeHtml(b)}</div>
            </div>`).join('')
        : `<div class="edu-bullet">
             <div class="edu-num" style="color:${c.accent}">01</div>
             <div class="edu-text" style="opacity:0.45">Vyplňte body vlevo...</div>
           </div>`;

      html = `
        <div class="tpl-edukace"
             style="background:${c.bg}; color:${c.text}; width:100%; height:100%;">
          <div class="edu-bar" style="background:${c.accent}"></div>
          <div class="edu-title">${escapeHtml(title)}</div>
          <div class="edu-bullets">${bulletsHtml}</div>
          ${logoWatermark(c.text)}
        </div>`;
      break;
    }

    // ── WORKSHOP ───────────────────────────
    case 'workshop': {
      const eventName = f.eventName || 'Název akce';
      const subtitle  = f.subtitle  || 'Podtitul nebo téma';
      const dateStr   = f.date      ? `<div class="ws-detail">📅 ${escapeHtml(f.date)}</div>` : '';
      const locStr    = f.location  ? `<div class="ws-detail">📍 ${escapeHtml(f.location)}</div>` : '';
      const ctaStr    = f.cta       ? `<div class="ws-cta" style="border-color:${c.accent}; color:${c.accent}">${escapeHtml(f.cta)}</div>` : '';

      html = `
        <div class="tpl-workshop"
             style="background:${c.bg}; color:${c.text}; width:100%; height:100%;">
          <div class="ws-label" style="color:${c.text}">Program REGENERACE · Workshop</div>
          <div class="ws-name">${escapeHtml(eventName)}</div>
          <div class="ws-subtitle">${escapeHtml(subtitle)}</div>
          <div class="ws-details">${dateStr}${locStr}</div>
          ${ctaStr}
          ${logoWatermark(c.text)}
        </div>`;
      break;
    }

    // ── TIPY ───────────────────────────────
    case 'tipy': {
      const title = f.title || 'Název techniky nebo tipu';
      const tips  = ['t1','t2','t3','t4'].map(k => f[k]).filter(Boolean);

      const tipsHtml = tips.length
        ? tips.map((t, i) => `
            <div class="tipy-item">
              <div class="tipy-num" style="color:${c.text}">${i+1}</div>
              <div class="tipy-text">${escapeHtml(t)}</div>
            </div>`).join('')
        : `<div class="tipy-item">
             <div class="tipy-num" style="color:${c.text}">1</div>
             <div class="tipy-text" style="opacity:0.45">Vyplňte kroky vlevo...</div>
           </div>`;

      html = `
        <div class="tpl-tipy"
             style="background:${c.bg}; color:${c.text}; width:100%; height:100%;">
          <div class="tipy-title">${escapeHtml(title)}</div>
          <div class="tipy-list">${tipsHtml}</div>
          ${logoWatermark(c.text)}
        </div>`;
      break;
    }

    // ── OSOBNÍ ─────────────────────────────
    case 'osobni': {
      const text  = f.text || 'Napište svůj příběh nebo myšlenku...';
      const bgImg = state.imageData
        ? `background-image: url('${state.imageData}');`
        : `background: linear-gradient(145deg, #C4714F 0%, #8BAF8E 100%);`;

      html = `
        <div class="tpl-osobni" style="${bgImg} width:100%; height:100%;">
          <div class="osobni-overlay"></div>
          <div class="osobni-content">
            <div class="osobni-text">${escapeHtml(text)}</div>
          </div>
          ${logoWatermark('#F5EFE6', true)}
        </div>`;
      break;
    }

    // ── KARUSEL ────────────────────────────
    case 'karusel': {
      const slideNum = f.slide || '1';
      const total    = f.total || '5';
      const title    = f.title || 'Nadpis slidu';
      const body     = f.body  || 'Napište obsah tohoto slidu...';
      const cta      = f.cta;
      const isLast   = slideNum === total;

      html = `
        <div class="tpl-karusel"
             style="background:${c.bg}; color:${c.text}; width:100%; height:100%;">
          <div class="kar-top">
            <div class="kar-progress">
              ${Array.from({length: parseInt(total)||5}, (_,i) =>
                `<div class="kar-dot ${i < parseInt(slideNum) ? 'active' : ''}" style="background:${i < parseInt(slideNum) ? c.accent : 'rgba(255,255,255,0.25)'}; ${i < parseInt(slideNum) ? '' : 'opacity:0.35'}"></div>`
              ).join('')}
            </div>
            <div class="kar-num" style="color:${c.text}">${slideNum}/${total}</div>
          </div>
          <div class="kar-body">
            <div class="kar-title" style="color:${c.text}">${escapeHtml(title)}</div>
            <div class="kar-text"  style="color:${c.text}">${escapeHtml(body)}</div>
            ${isLast && cta ? `<div class="kar-cta" style="border-color:${c.accent}; color:${c.accent}">${escapeHtml(cta)}</div>` : ''}
          </div>
          <div class="kar-swipe" style="color:${c.text}">👉 přejeďte</div>
          ${logoWatermark(c.text)}
        </div>`;
      break;
    }
  }

  preview.innerHTML = html;
}

// ════════════════════════════════════════
//  VODOZNAK S LOGEM
// ════════════════════════════════════════

function logoWatermark(textColor, overlay = false) {
  const z = overlay ? 'z-index:2; position:absolute;' : '';
  return `
    <div class="post-watermark" style="color:${textColor}; ${z}">
      <img src="assets/symbol.png"
           style="width:18px; height:18px; object-fit:contain; vertical-align:middle;
                  opacity:0.55; filter:${textColor === '#F5EFE6' || textColor === '#f5efe6' ? 'brightness(10)' : 'brightness(0)'};
                  margin-right:5px;"
           alt="">
      @motivus.reset
    </div>`;
}

// ════════════════════════════════════════
//  HANDLERY
// ════════════════════════════════════════

function setTemplate(name) {
  state.template = name;
  state.fields   = {};
  state.imageData = null;

  document.querySelectorAll('.tpl-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.template === name);
  });

  renderFields();
  renderPreview();
}

function setColor(name) {
  state.color = name;

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === name);
  });

  renderPreview();
}

function onFieldChange(key, value) {
  state.fields[key] = value;
  renderPreview();
}

function handleImageUpload(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    state.imageData = e.target.result;

    const area = document.getElementById('upload-area');
    if (area) {
      area.classList.add('has-image');
      area.innerHTML = `<img src="${e.target.result}" alt="Nahrané foto">`;
    }
    renderPreview();
  };
  reader.readAsDataURL(file);
}

function handleDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) handleImageUpload(file);
}

// ════════════════════════════════════════
//  EXPORT PNG
// ════════════════════════════════════════

async function exportPNG() {
  const preview = document.getElementById('post-preview');
  const btn     = document.getElementById('btn-export');

  btn.disabled = true;
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Generuji...`;

  try {
    // Počkáme na načtení fontů
    await document.fonts.ready;

    const canvas = await html2canvas(preview, {
      scale:           2,        // 540 × 2 = 1080 px
      useCORS:         true,
      allowTaint:      true,
      backgroundColor: null,
      logging:         false,
      imageTimeout:    0
    });

    const date = new Date().toISOString().slice(0,10);
    const name = `motivus-reset_${state.template}_${date}.png`;

    const link    = document.createElement('a');
    link.download = name;
    link.href     = canvas.toDataURL('image/png');
    link.click();

    showToast(`✅ Staženo: ${name}`);

  } catch (err) {
    showToast('❌ Export selhal – zkuste to znovu');
    console.error('[Export]', err);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Stáhnout PNG (1080×1080)`;
  }
}

// ════════════════════════════════════════
//  KOPÍROVAT POPISEK
// ════════════════════════════════════════

function copyCaption() {
  const text = document.getElementById('caption-input').value;
  const btn  = document.getElementById('btn-copy');

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Zkopírováno!`;

    showToast('📋 Popisek je ve schránce – vložte ho do Instagramu');

    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Kopírovat popisek`;
    }, 2800);
  }).catch(() => {
    showToast('❌ Schránka není dostupná – zkopírujte text ručně');
  });
}

// ════════════════════════════════════════
//  TOAST NOTIFIKACE
// ════════════════════════════════════════

let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ════════════════════════════════════════
//  POMOCNÉ FUNKCE
// ════════════════════════════════════════

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

// ════════════════════════════════════════
//  INICIALIZACE
// ════════════════════════════════════════

// Původní init nahrazen rozšířeným init na konci souboru (viz nový DOMContentLoaded)

// ════════════════════════════════════════
//  PŘEPÍNÁNÍ POHLEDŮ (Editor / Kalendář)
// ════════════════════════════════════════

function switchView(view) {
  document.getElementById('view-editor').classList.toggle('hidden', view !== 'editor');
  document.getElementById('view-calendar').classList.toggle('hidden', view !== 'calendar');
  document.getElementById('tab-editor').classList.toggle('active', view === 'editor');
  document.getElementById('tab-calendar').classList.toggle('active', view === 'calendar');

  if (view === 'calendar') renderCalendar(currentMonth);
}

// ════════════════════════════════════════
//  FORMÁT PŘÍSPĚVKU (Příspěvek / Karusel / Stories)
// ════════════════════════════════════════

let currentPostType = 'prispevek';

function setPostType(pt) {
  currentPostType = pt;

  document.querySelectorAll('.pt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.pt === pt);
  });

  const wrapper   = document.getElementById('preview-wrapper');
  const badge     = document.getElementById('preview-badge');

  if (pt === 'stories') {
    wrapper.classList.add('stories-mode');
    badge.textContent = '1080 × 1920 px · Instagram Stories';
  } else {
    wrapper.classList.remove('stories-mode');
    badge.textContent = '1080 × 1080 px · Instagram Feed';
  }

  // Aktualizuj label exportu
  const exportBtn = document.getElementById('btn-export');
  if (pt === 'stories') {
    exportBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Stáhnout PNG (Stories)`;
  } else {
    exportBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Stáhnout PNG (1080×1080)`;
  }
}

// ════════════════════════════════════════
//  KALENDÁŘ — RENDER
// ════════════════════════════════════════

let currentMonth = '2026-09';

const MONTH_LABELS = {
  '2026-09': 'září 2026',
  '2026-10': 'října 2026',
  '2026-11': 'listopadu 2026',
  '2026-12': 'prosince 2026',
  '2027-01': 'ledna 2027',
};

const SERIES_EMOJIS = {
  1: '🔥', 2: '🧠', 3: '🫁', 4: '🌿',
  5: '💚', 6: '🦋', 7: '💛', 8: '🔴',
  9: '🌍', 10: '✨'
};

const FORMAT_EMOJIS = {
  prispevek: '📷',
  karusel:   '📱',
  stories:   '📲',
};

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
  const months = ['ledna', 'února', 'března', 'dubna', 'května', 'června',
                  'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
  return `${days[d.getDay()]} ${d.getDate()}. ${months[d.getMonth()]}`;
}

function filterMonth(month) {
  currentMonth = month;
  document.querySelectorAll('.month-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.month === month);
  });
  renderCalendar(month);
}

function renderCalendar(month) {
  const grid = document.getElementById('calendar-grid');
  if (!grid || typeof CONTENT_LIBRARY === 'undefined') return;

  const items = month === 'all'
    ? CONTENT_LIBRARY
    : CONTENT_LIBRARY.filter(t => t.date.startsWith(month));

  if (items.length === 0) {
    grid.innerHTML = '<div class="cal-empty">V tomto měsíci nejsou žádná témata.</div>';
    return;
  }

  grid.innerHTML = items.map(topic => {
    const isKarusel = topic.template === 'karusel';
    const slides    = isKarusel && topic.slides ? ` · ${topic.slides.length + 1} slidů` : '';
    const emoji     = SERIES_EMOJIS[topic.series] || '📌';
    const fmtEmoji  = FORMAT_EMOJIS[topic.postType] || '📷';

    return `
    <div class="cal-card" onclick="loadTopic(${topic.id})">
      <div class="cal-card-stripe" style="background:${topic.seriesColor}"></div>
      <div class="cal-card-inner">
        <div class="cal-card-header">
          <div class="cal-date">${formatDate(topic.date)}</div>
          <div class="cal-format-badge">${fmtEmoji} ${topic.postType === 'karusel' ? 'Karusel' + slides : topic.postType === 'stories' ? 'Stories' : 'Příspěvek'}</div>
        </div>
        <div class="cal-series">${emoji} Série ${topic.series}: ${topic.seriesName}</div>
        <div class="cal-title">${topic.title}</div>
        <div class="cal-author">✍️ ${topic.author}</div>
        <button class="cal-load-btn" onclick="loadTopic(${topic.id}); event.stopPropagation();">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Načíst do editoru
        </button>
      </div>
    </div>`;
  }).join('');
}

// ════════════════════════════════════════
//  NAČTENÍ TÉMATU DO EDITORU
// ════════════════════════════════════════

function loadTopic(id) {
  const topic = CONTENT_LIBRARY.find(t => t.id === id);
  if (!topic) return;

  // Nastav šablonu
  setTemplate(topic.template);

  // Nastav barvu
  setColor(topic.color);

  // Nastav formát příspěvku
  setPostType(topic.postType);

  // Vyplň pole
  state.fields = { ...topic.fields };

  // Aktualizuj hodnoty v DOM polích
  Object.entries(topic.fields).forEach(([key, val]) => {
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) el.value = val;
  });

  // Nastav caption
  document.getElementById('caption-input').value = topic.caption || '';

  // Překresli náhled
  renderPreview();

  // Přepni na editor
  switchView('editor');

  // Zobraz notifikaci
  showToast(`✅ Téma načteno: „${topic.title}"`);

  // Scroll nahoru
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ════════════════════════════════════════
//  INICIALIZACE KARUSEL SLIDŮ V EDITORU
// ════════════════════════════════════════

// Přidej tlačítka pro navigaci slidů při načtení karuselu
function renderSlideNavigator(topic) {
  if (!topic || !topic.slides || topic.slides.length === 0) return;

  // Do fields-container přidej navigaci slidů
  const container = document.getElementById('fields-container');
  const allSlides = [{ title: topic.fields.title, body: topic.fields.body, cta: '' }, ...topic.slides];

  const navHtml = `
    <div class="slide-nav" style="margin-top:8px; padding:10px; background:rgba(255,255,255,0.07); border-radius:8px;">
      <div class="field-label" style="margin-bottom:8px;">Navigace slidů</div>
      <div class="slide-nav-btns">
        ${allSlides.map((slide, i) => `
          <button class="slide-nav-btn ${i === 0 ? 'active' : ''}"
                  onclick="loadSlide(${topic.id}, ${i})"
                  title="${slide.title || 'Slide ' + (i + 1)}">
            ${i + 1}
          </button>`).join('')}
      </div>
      <div class="slide-nav-hint" style="font-size:11px; opacity:0.5; margin-top:6px;">
        Klikněte na číslo slidu pro náhled
      </div>
    </div>`;

  container.insertAdjacentHTML('beforeend', navHtml);
}

let currentSlideTopicId = null;

function loadSlide(topicId, slideIndex) {
  const topic = CONTENT_LIBRARY.find(t => t.id === topicId);
  if (!topic || !topic.slides) return;

  currentSlideTopicId = topicId;
  const allSlides = [{ title: topic.fields.title, body: topic.fields.body, cta: '' }, ...topic.slides];
  const slide = allSlides[slideIndex];

  if (!slide) return;

  const slideNum = slideIndex + 1;
  const total    = allSlides.length;

  const newFields = {
    slide: String(slideNum),
    total: String(total),
    title: slide.title || '',
    body:  slide.body  || '',
    cta:   slide.cta   || ''
  };

  state.fields = newFields;

  // Aktualizuj DOM pole
  Object.entries(newFields).forEach(([key, val]) => {
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) el.value = val;
  });

  renderPreview();

  // Zvýrazni aktivní slide button
  document.querySelectorAll('.slide-nav-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === slideIndex);
  });
}

// ════════════════════════════════════════
//  ROZŠÍŘENÍ INIT O NOVÉ FUNKCE
// ════════════════════════════════════════

// Override původní init, přidáme ho znovu po DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Tlačítka šablon
  document.querySelectorAll('.tpl-btn').forEach(btn => {
    btn.addEventListener('click', () => setTemplate(btn.dataset.template));
  });

  // Tlačítka barev
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => setColor(btn.dataset.color));
  });

  // Export a kopírování
  document.getElementById('btn-export').addEventListener('click', exportPNG);
  document.getElementById('btn-copy').addEventListener('click', copyCaption);

  // Inicializace
  renderFields();
  renderPreview();
  renderCalendar(currentMonth);
});

// ════════════════════════════════════════
//  ZÁLOŽKA TEXTY & TECHNIKY
// ════════════════════════════════════════

let currentTextId = 1;

function switchView(view) {
  document.getElementById('view-editor').classList.toggle('hidden', view !== 'editor');
  document.getElementById('view-calendar').classList.toggle('hidden', view !== 'calendar');
  document.getElementById('view-texts').classList.toggle('hidden', view !== 'texts');

  document.getElementById('tab-editor').classList.toggle('active', view === 'editor');
  document.getElementById('tab-calendar').classList.toggle('active', view === 'calendar');
  document.getElementById('tab-texts').classList.toggle('active', view === 'texts');

  if (view === 'calendar') renderCalendar(currentMonth);
  if (view === 'texts') {
    renderTextsList();
    renderTextArticle(currentTextId);
  }
}

function renderTextsList(searchQuery = '') {
  const listEl = document.getElementById('texts-list');
  if (!listEl || typeof CONTENT_LIBRARY === 'undefined') return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = CONTENT_LIBRARY.filter(t => {
    if (!query) return true;
    const full = TEXTS_LIBRARY[t.id] ? TEXTS_LIBRARY[t.id].fullText : '';
    return t.title.toLowerCase().includes(query) ||
           t.author.toLowerCase().includes(query) ||
           t.seriesName.toLowerCase().includes(query) ||
           full.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="texts-item-empty">Žádné téma neodpovídá hledání.</div>';
    return;
  }

  listEl.innerHTML = filtered.map(t => {
    const activeClass = t.id === currentTextId ? 'active' : '';
    return `
      <div class="texts-item ${activeClass}" onclick="selectTextTopic(${t.id})">
        <div class="texts-item-num">#${t.id}</div>
        <div class="texts-item-body">
          <div class="texts-item-title">${t.title}</div>
          <div class="texts-item-sub">Série ${t.series}: ${t.seriesName}</div>
        </div>
      </div>
    `;
  }).join('');
}

function selectTextTopic(id) {
  currentTextId = id;
  renderTextsList(document.getElementById('texts-search')?.value || '');
  renderTextArticle(id);
}

function filterTexts(query) {
  renderTextsList(query);
}

function renderTextArticle(id) {
  const container = document.getElementById('texts-article-container');
  if (!container) return;

  const topicData = CONTENT_LIBRARY.find(t => t.id === id);
  const textData  = typeof TEXTS_LIBRARY !== 'undefined' ? TEXTS_LIBRARY[id] : null;

  if (!topicData || !textData) {
    container.innerHTML = '<div class="text-error">Text pro toto téma nebyl nalezen.</div>';
    return;
  }

  container.innerHTML = `
    <article class="text-article">
      <div class="text-article-header">
        <div class="text-article-meta">
          <span class="text-badge" style="background:${topicData.seriesColor}">Série ${topicData.series}: ${topicData.seriesName}</span>
          <span class="text-date">📅 Plánované datum: ${formatDate(topicData.date)}</span>
          <span class="text-author">✍️ ${topicData.author}</span>
        </div>
        <h1 class="text-article-title">${textData.title}</h1>
        <div class="text-article-actions">
          <button class="btn-primary" onclick="loadTopic(${topicData.id})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Načíst toto téma do Editoru šablon
          </button>
        </div>
      </div>
      <div class="text-article-body">
        ${textData.fullText}
      </div>
    </article>
  `;
}


// ════════════════════════════════════════
//  ZÁLOŽKA REELS STRATEGIE
// ════════════════════════════════════════

// Aktualizovaná funkce switchView s podporou záložky reels
const origSwitchView = switchView;
switchView = function(view) {
  document.getElementById('view-editor').classList.toggle('hidden', view !== 'editor');
  document.getElementById('view-calendar').classList.toggle('hidden', view !== 'calendar');
  document.getElementById('view-texts').classList.toggle('hidden', view !== 'texts');
  document.getElementById('view-reels')?.classList.toggle('hidden', view !== 'reels');

  document.getElementById('tab-editor').classList.toggle('active', view === 'editor');
  document.getElementById('tab-calendar').classList.toggle('active', view === 'calendar');
  document.getElementById('tab-texts').classList.toggle('active', view === 'texts');
  document.getElementById('tab-reels')?.classList.toggle('active', view === 'reels');

  if (view === 'calendar') renderCalendar(currentMonth);
  if (view === 'texts') {
    renderTextsList();
    renderTextArticle(currentTextId);
  }
};
