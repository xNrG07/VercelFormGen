
import { TEMPLATES, getTemplateById } from './templates.js';

/* AdSense is currently connected via the account verification meta tag.
   If live ads are activated later, use a Google-certified CMP first. */

/* ── Mobile Navigation ──────────────────────────────────── */
function initNav() {
  const burger = document.getElementById('nav-burger');
  const menu   = document.getElementById('nav-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── FAQ Accordion ──────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer  = btn.nextElementSibling;
      const isOpen  = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
    btn.setAttribute('aria-expanded', 'false');
  });
}

/* ── Index Search ───────────────────────────────────────── */
function initIndexSearch() {
  const input = document.getElementById('hero-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.card[data-search]').forEach(card => {
      const match = !q || card.dataset.search.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
    });
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) window.location.href = `generator.html?q=${encodeURIComponent(q)}`;
    }
  });
  const btn = document.getElementById('hero-search-btn');
  if (btn) btn.addEventListener('click', () => {
    const q = input.value.trim();
    if (q) window.location.href = `generator.html?q=${encodeURIComponent(q)}`;
  });
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast'; t.setAttribute('role','status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ── Generator ──────────────────────────────────────────── */
function getTodayString() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;
}

function renderTemplate(tpl, values, tone) {
  const body = tpl.bodyTemplate[tone] || tpl.bodyTemplate['neutral'];
  let text = body.replace('{datum}', getTodayString());

  // Standard replacements
  const allFields = [...tpl.requiredFields, ...(tpl.optionalFields || [])];
  allFields.forEach(f => {
    const val = (values[f.id] || '').trim();
    text = text.split(`{${f.id}}`).join(val);
  });

  // Special composite placeholders
  // kundennummer_zeile
  const kn = (values['kundennummer'] || '').trim();
  text = text.split('{kundennummer_zeile}').join(kn ? ` (Kundennummer: ${kn})` : '');

  // kuendigung_grund_zeile
  const kg = (values['kuendigung_grund'] || '').trim();
  text = text.split('{kuendigung_grund_zeile}').join(kg ? `Begründung: ${kg}\n\n` : '');

  // bestellnummer_zeile
  const bn = (values['bestellnummer'] || '').trim();
  text = text.split('{bestellnummer_zeile}').join(bn ? ` (Rechnungsnr.: ${bn})` : '');

  // mahngebuehr_zeile
  const mg = (values['mahngebuehr'] || '').trim();
  text = text.split('{mahngebuehr_zeile}').join(mg ? `\nZuzüglich: ${mg}` : '');

  // mahnung_nr_titel
  const mnr = (values['mahnung_nr'] || '').trim();
  text = text.split('{mahnung_nr_titel}').join(mnr ? `${mnr} ` : '');

  // zusatz_fragen_zeile
  const zf = (values['zusatz_fragen'] || '').trim();
  text = text.split('{zusatz_fragen_zeile}').join(zf ? `\nWeitere Fragen:\n${zf}\n` : '');

  // rueckgabe_info_zeile
  const ri = (values['rueckgabe_info'] || '').trim();
  text = text.split('{rueckgabe_info_zeile}').join(ri ? `\nHinweis zur Rücksendung: ${ri}\n` : '');

  // bisherige_kontakte_zeile
  const bk = (values['bisherige_kontakte'] || '').trim();
  text = text.split('{bisherige_kontakte_zeile}').join(bk ? `\nBisherige Kontaktversuche: ${bk}\n` : '');

  // beilagen_zeile
  const bl = (values['beilagen'] || '').trim();
  text = text.split('{beilagen_zeile}').join(bl ? `\n\nBeilagen: ${bl}` : '');

  // absender_email
  const ae = (values['absender_email'] || '').trim();
  text = text.split('{absender_email}').join(ae);

  return text;
}

function buildFormFields(tpl, container, values) {
  container.innerHTML = '';

  // Tone selector
  if (tpl.toneOptions && tpl.toneOptions.length > 1) {
    const toneDiv = document.createElement('div');
    toneDiv.className = 'form-group';
    toneDiv.innerHTML = `<div class="tone-label">Tonalität</div>
      <div class="tone-group" role="group" aria-label="Tonalität wählen">
        ${tpl.toneOptions.map(t => `<button type="button" class="tone-btn${t === (values._tone || tpl.toneOptions[0]) ? ' active' : ''}" data-tone="${t}">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
      </div>`;
    container.appendChild(toneDiv);
    toneDiv.querySelectorAll('.tone-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        toneDiv.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        values._tone = btn.dataset.tone;
        updatePreview();
      });
    });
  }

  function addFields(fields, optional) {
    fields.forEach(f => {
      const group = document.createElement('div');
      group.className = 'form-group';
      const optLabel = optional ? ' <span class="opt">(optional)</span>' : '';
      const labelEl = document.createElement('label');
      labelEl.setAttribute('for', `field-${f.id}`);
      labelEl.innerHTML = `${f.label}${optLabel}`;
      group.appendChild(labelEl);

      let el;
      if (f.type === 'textarea') {
        el = document.createElement('textarea');
      } else {
        el = document.createElement('input');
        el.type = 'text';
      }
      el.id = `field-${f.id}`;
      el.name = f.id;
      el.placeholder = f.placeholder || '';
      el.value = values[f.id] || '';
      el.setAttribute('autocomplete', 'off');
      el.addEventListener('input', () => { values[f.id] = el.value; updatePreview(); });
      group.appendChild(el);
      container.appendChild(group);
    });
  }

  addFields(tpl.requiredFields, false);
  if (tpl.optionalFields && tpl.optionalFields.length) {
    const sep = document.createElement('p');
    sep.className = 'tone-label mt-md'; sep.textContent = 'Optionale Felder';
    container.appendChild(sep);
    addFields(tpl.optionalFields, true);
  }
}

function initGenerator() {
  if (!document.getElementById('gen-form-fields')) return;

  const listEl    = document.getElementById('tpl-list');
  const formTitle = document.getElementById('gen-form-title');
  const formSub   = document.getElementById('gen-form-sub');
  const formFields= document.getElementById('gen-form-fields');
  const previewEl = document.getElementById('preview-content');
  const searchEl  = document.getElementById('sidebar-search');
  const noRes     = document.getElementById('no-results');

  let currentTpl  = null;
  let values      = {};

  // Detect ?template= or ?q= param
  const params    = new URLSearchParams(window.location.search);
  const paramTpl  = params.get('template');
  const paramQ    = params.get('q');

  // Render sidebar
  function renderList(filter) {
    listEl.innerHTML = '';
    const filtered = TEMPLATES.filter(t =>
      !filter || t.title.toLowerCase().includes(filter) || t.description.toLowerCase().includes(filter) || t.category.toLowerCase().includes(filter)
    );
    if (noRes) noRes.style.display = filtered.length ? 'none' : 'block';
    filtered.forEach(tpl => {
      const li = document.createElement('li');
      li.className = 'tpl-item';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', tpl.title);
      btn.innerHTML = `<span>${tpl.icon} ${tpl.title}</span><span class="tpl-sub">${tpl.category}</span>`;
      if (currentTpl && currentTpl.id === tpl.id) btn.classList.add('active');
      btn.addEventListener('click', () => selectTemplate(tpl));
      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  function selectTemplate(tpl) {
    currentTpl = tpl;
    values = { _tone: tpl.toneOptions[0] };
    formTitle.textContent = tpl.title;
    formSub.textContent   = tpl.description;
    buildFormFields(tpl, formFields, values);
    updatePreview();
    renderList(searchEl ? searchEl.value.toLowerCase().trim() : '');
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('template', tpl.id);
    history.replaceState(null, '', url);
  }

  window.updatePreview = function() {
    if (!currentTpl) return;
    const tone = values._tone || currentTpl.toneOptions[0];
    const text = renderTemplate(currentTpl, values, tone);
    previewEl.classList.remove('empty');
    previewEl.textContent = text;
  };

  if (searchEl) {
    searchEl.addEventListener('input', () => renderList(searchEl.value.toLowerCase().trim()));
  }

  // Copy button
  const copyBtn = document.getElementById('btn-copy');
  if (copyBtn) copyBtn.addEventListener('click', () => {
    const text = previewEl.textContent;
    if (!text || previewEl.classList.contains('empty')) { showToast('Bitte zuerst ein Template auswählen und ausfüllen.'); return; }
    navigator.clipboard.writeText(text).then(() => showToast('✓ Text in Zwischenablage kopiert!')).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta); showToast('✓ Text kopiert!');
    });
  });

  // Print/PDF button
  const printBtn = document.getElementById('btn-print');
  if (printBtn) printBtn.addEventListener('click', () => {
    if (!currentTpl) { showToast('Bitte zuerst ein Template auswählen.'); return; }
    window.print();
  });

  // TXT download
  const txtBtn = document.getElementById('btn-txt');
  if (txtBtn) txtBtn.addEventListener('click', () => {
    const text = previewEl.textContent;
    if (!text || previewEl.classList.contains('empty')) { showToast('Bitte zuerst ein Template ausfüllen.'); return; }
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `vorlage-${currentTpl ? currentTpl.id : 'schreiben'}.txt`;
    a.click(); URL.revokeObjectURL(a.href);
    showToast('✓ Textdatei wird heruntergeladen.');
  });

  // Initial load
  const startId = paramTpl || (paramQ ? null : TEMPLATES[0].id);
  if (startId) {
    const found = getTemplateById(startId);
    if (found) { selectTemplate(found); return; }
  }
  if (paramQ && searchEl) {
    searchEl.value = paramQ;
    renderList(paramQ.toLowerCase());
  }
  // Default: show first
  renderList('');
  previewEl.classList.add('empty');
  previewEl.textContent = 'Wählen Sie links eine Vorlage, füllen Sie das Formular aus – und Ihr Schreiben erscheint hier.';
}

/* ── Contact Form (static, mailto fallback) ─────────────── */
function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name=name]').value;
    const email   = form.querySelector('[name=email]').value;
    const subject = form.querySelector('[name=subject]').value || 'Kontaktanfrage';
    const message = form.querySelector('[name=message]').value;
    const mailto  = `mailto:peter.markelic1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  });
}

/* ── Init all ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
  initIndexSearch();
  initGenerator();
  initContact();
});
