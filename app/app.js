/**
 * MOTIVUS RESET — Instagram Studio
 * app.js — logika editoru, šablony, export PNG
 */

// ════════════════════════════════════════
//  KONFIGURACE
// ════════════════════════════════════════

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
          <span class="citat-quotemark" style="color:${c.text}">"</span>
          <div class="citat-text">${escapeHtml(quoteText)}</div>
          <div class="citat-divider" style="background:${c.text}"></div>
          <div class="citat-author">${escapeHtml(author)}</div>
          <div class="post-watermark" style="color:${c.text}">@motivus.reset</div>
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
          <div class="post-watermark" style="color:${c.text}">@motivus.reset</div>
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
          <div class="post-watermark" style="color:${c.text}">@motivus.reset</div>
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
          <div class="post-watermark" style="color:${c.text}">@motivus.reset</div>
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
          <div class="post-watermark" style="color:#F5EFE6; z-index:2">@motivus.reset</div>
        </div>`;
      break;
    }
  }

  preview.innerHTML = html;
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

function init() {
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

  // Úvodní render
  renderFields();
  renderPreview();
}

document.addEventListener('DOMContentLoaded', init);
