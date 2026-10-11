// Número de WhatsApp de StruoLab en formato internacional, sin "+" ni espacios.
// PENDIENTE: reemplazar por el número real (ej. 573001234567). Vacío = el botón de WhatsApp no se muestra.
const WHATSAPP = '';
// Correo que recibe las solicitudes. PENDIENTE: confirmar la dirección real.
const EMAIL = 'hola@struolab.com';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Barra superior: sombra al hacer scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menú móvil
const toggle = document.getElementById('navToggle');
const setMenu = open => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* ===== Firma: antes / después =====
   Cada dolor tiene un "antes" y un "después" de ejemplo (datos inventados, rotulados en la página). */
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
const SCENES = {
  inventario: {
    before: `<div class="layer-mess"><table class="sheet"><caption class="sr-only">Antes: inventario en una hoja de cálculo</caption>
      <thead><tr><th>Producto</th><th>Stock</th><th>Actualizado</th></tr></thead>
      <tbody>
        <tr><td>Tornillo 3/8</td><td class="bad">120??</td><td>hace 9 días</td></tr>
        <tr class="dup"><td>Tornillo 3/8 (2)</td><td>95</td><td>¿?</td></tr>
        <tr><td class="hl">tornillo 3/8 NUEVO</td><td>12</td><td>—</td></tr>
        <tr><td>Cable #12</td><td class="bad">#¡REF!</td><td>—</td></tr>
        <tr><td>Cinta aislante</td><td>40</td><td class="hl">preguntarle a Jorge</td></tr>
        <tr><td>Breaker 20A</td><td class="bad">-3</td><td>marzo</td></tr>
        <tr class="dup"><td>Breaker 20 A</td><td>7</td><td>¿marzo?</td></tr>
        <tr><td>Tubo PVC 1/2</td><td class="hl">ver bodega 2</td><td>hace 2 meses</td></tr>
      </tbody></table>
      <p class="sticky">NO BORRAR esta hoja. Jorge tiene la otra versión</p></div>`,
    after: `<div class="board">
      <div class="tiles">
        <p><strong>1.284</strong>referencias</p>
        <p><strong>3</strong>bajo mínimo</p>
        <p><strong>0</strong>duplicados</p>
      </div>
      <ul class="board__list">
        <li>Tornillo 3/8 <b>95 und.</b></li>
        <li>Breaker 20 A <b>7 und.</b></li>
        <li>Tubo PVC 1/2 <b>Bodega 2 · 60 und.</b></li>
      </ul>
      <p class="board__alert">Cable #12 está por debajo del mínimo. Pedido sugerido: 200 m.</p>
      <p class="board__kpi"><span>Actualizado hoy, 8:42 a. m., desde las ventas del día</span></p></div>`
  },
  pedidos: {
    before: `<div class="chat">
      <p>Buenas, me manda 20 cajas<small>9:14 a. m.</small></p>
      <p class="me">¿Cuáles cajas?<small>11:02 a. m.</small></p>
      <p>Las de siempre<small>11:40 a. m.</small></p>
      <p class="me">¿Las de 12 o las de 24?<small>11:41 a. m.</small></p>
      <p>Mándeme foto de la factura pasada<small>1:10 p. m.</small></p>
      <p>¿Ya salió mi pedido??<small>3:25 p. m.</small></p></div>`,
    after: `<div class="board"><ul class="board__list">
      <li>Pedido 1042 · 20 cajas C-12 <b>En despacho</b></li>
      <li>Pedido 1041 · 8 rollos de cinta <b>Entregado</b></li>
      <li>Pedido 1040 · 150 m de cable <b>Facturado</b></li></ul>
      <p class="board__alert">El cliente recibe el estado de su pedido sin tener que preguntar.</p></div>`
  },
  cobros: {
    before: `<div class="mess">
      <p><strong>cobros_final_v3.xlsx</strong> · ¿la factura 0381 ya la pagaron?</p>
      <p><strong>cobros_final_v3 (copia).xlsx</strong> · aquí dice que no</p>
      <p>Llamar a Ferretería El Roble (otra vez)</p>
      <p>Revisar el extracto del banco a mano</p>
      <p>Facturas vencidas: <strong>no sabemos cuántas</strong></p></div>`,
    after: `<div class="board">
      <p class="board__kpi"><strong>3</strong> facturas vencidas <span>recordatorio automático enviado hoy</span></p>
      <ul class="board__list"><li>Factura 0381 · El Roble <b>Pagada</b></li><li>Factura 0379 · La 14 <b>Vence en 2 días</b></li></ul></div>`
  },
  reportes: {
    before: `<div class="mess">
      <p><strong>reporte_ventas_marzo_FINAL(2).xlsx</strong></p>
      <p><strong>reporte_ventas_marzo_FINAL_ahora_si.xlsx</strong></p>
      <p>Última edición: hace 41 días</p>
      <p>«¿Quién tiene la versión buena?»</p>
      <p>Cuadrar cifras: <strong>2 días al mes</strong></p></div>`,
    after: `<div class="board">
      <div class="bars" aria-hidden="true"><i style="height:45%"></i><i style="height:60%"></i><i style="height:52%"></i><i style="height:75%"></i><i style="height:68%"></i><i style="height:90%"></i></div>
      <p class="board__kpi">Ventas de la semana por día <span>actualizado hace 5 minutos, sin tocar Excel</span></p></div>`
  },
  herramientas: {
    before: `<div class="mess">
      <p>1. Copiar el pedido de la tienda en línea</p>
      <p>2. Pegarlo en el Excel de inventario</p>
      <p>3. Digitarlo otra vez en el programa contable</p>
      <p><strong>Repetir 30 veces al día</strong></p></div>`,
    after: `<div class="board">
      <p class="flow"><span>Tienda en línea</span>${arrow}<span>Inventario</span>${arrow}<span>Contabilidad</span></p>
      <p class="board__alert">Cada venta se registra sola en los tres sistemas.</p></div>`
  }
};

const panel = document.getElementById('panel');
const panelName = document.getElementById('panelName');
const layerBefore = document.getElementById('layerBefore');
const layerAfter = document.getElementById('layerAfter');
const switchBtns = panel.querySelectorAll('.switch__btn');
const painInputs = [...document.querySelectorAll('#pains input')];
let autoFlip;

const setView = view => {
  panel.classList.toggle('is-after', view === 'after');
  switchBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
};
switchBtns.forEach(b => b.addEventListener('click', () => { clearTimeout(autoFlip); setView(b.dataset.view); }));

const showScene = (key, label) => {
  const scene = SCENES[key];
  panelName.textContent = label;
  layerBefore.innerHTML = scene.before;
  layerAfter.innerHTML = scene.after;
  setView('before');
  // Demostración: tras un momento el panel pasa solo al "después"
  clearTimeout(autoFlip);
  autoFlip = setTimeout(() => setView('after'), reduceMotion.matches ? 400 : 900);
};

painInputs.forEach(input => input.addEventListener('change', () => {
  if (input.checked) return showScene(input.value, input.dataset.label);
  const last = painInputs.filter(i => i.checked).pop();
  if (last) showScene(last.value, last.dataset.label);
}));

const selectedPains = () => painInputs.filter(i => i.checked).map(i => i.dataset.label);

// Escena inicial: el chip marcado por defecto; al entrar en pantalla se reproduce sola una vez
const first = painInputs.find(i => i.checked) || painInputs[0];
layerBefore.innerHTML = SCENES[first.value].before;
layerAfter.innerHTML = SCENES[first.value].after;
panelName.textContent = first.dataset.label;
if ('IntersectionObserver' in window) {
  const panelIO = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    panelIO.disconnect();
    if (!panel.classList.contains('is-after')) autoFlip = setTimeout(() => setView('after'), 1200);
  }, { threshold: 0.6 });
  panelIO.observe(panel);
}

// "Quiero esto para mi negocio": lleva lo marcado al formulario
const form = document.getElementById('contactForm');
document.getElementById('demoCta').addEventListener('click', () => {
  const pains = selectedPains();
  if (pains.length && !form.elements.mensaje.value.trim()) {
    form.elements.mensaje.value = `Lo que más tiempo nos quita: ${pains.join(', ')}.\n`;
  }
});

// WhatsApp: solo aparece cuando hay número configurado
document.querySelectorAll('.js-whatsapp').forEach(link => {
  if (!WHATSAPP) return;
  link.hidden = false;
  link.target = '_blank';
  link.rel = 'noopener';
  link.addEventListener('click', () => {
    const pains = selectedPains();
    const text = pains.length
      ? `Hola StruoLab, quiero un diagnóstico. Lo que más tiempo nos quita: ${pains.join(', ')}.`
      : 'Hola StruoLab, quiero un diagnóstico para mi negocio.';
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  });
});

// Números del proceso: suben al entrar en pantalla
const steps = document.querySelectorAll('.step');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  steps.forEach(s => io.observe(s));
} else {
  steps.forEach(s => s.classList.add('is-in'));
}

// Formulario: no hay servidor todavía, así que arma el correo y lo abre en el programa del usuario
const status = document.getElementById('formStatus');
form.addEventListener('input', e => {
  e.target.classList.remove('is-invalid');
  e.target.removeAttribute('aria-invalid');
});
form.addEventListener('submit', e => {
  e.preventDefault();
  let firstInvalid = null;
  form.querySelectorAll('[required]').forEach(field => {
    const ok = field.value.trim() !== '';
    field.classList.toggle('is-invalid', !ok);
    field.setAttribute('aria-invalid', String(!ok));
    if (!ok && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) {
    status.textContent = 'Falta completar los campos marcados en rojo.';
    status.className = 'form__status err';
    firstInvalid.focus();
    return;
  }
  const f = form.elements;
  const body = [
    `Nombre: ${f.nombre.value.trim()}`,
    `Empresa: ${f.empresa.value.trim() || '—'}`,
    `Contacto: ${f.correo.value.trim()}`,
    `Necesidad: ${f.servicio.value}`,
    '',
    f.mensaje.value.trim()
  ].join('\n');
  const subject = `Diagnóstico para ${f.empresa.value.trim() || f.nombre.value.trim()}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Abrimos tu correo con el mensaje listo. Solo falta que lo envíes.';
  status.className = 'form__status ok';
});

document.getElementById('year').textContent = new Date().getFullYear();
