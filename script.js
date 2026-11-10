/* Contact details. Leave empty to hide the card. */
const EMAIL = '';      // e.g. 'yourname@example.com'
const WHATSAPP = '03715404349';   // country code first, no plus sign, e.g. '923001234567'

const USER = 'hamzashaikh440692-hub';
const PAGES = `https://${USER}.github.io/`;
const REPO = `https://github.com/${USER}/`;

const PROJECTS = [
  
  {n:'PORTFOLIO', t:'Portfolio', d:'My first portfolio website, built while learning frontend development.', c:'website'},
  ...Array.from({length:16},(_,i)=>16-i).map(i=>({
    n:'assignment-'+i, t:'Assignment '+i,
    d:'Course assignment '+i+', built with HTML and CSS.', c:'assignment'}))
];
const FORK = {n:'github-profile-readme-generator', t:'GitHub Profile README Generator', d:'A fork of an open-source tool by its original author (rahuldkjain). Not my own work.', c:'other',
  live:'https://rahuldkjain.github.io/github-profile-readme-generator'};

const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const card = p => {
  const live = p.live || `${PAGES}${p.n}/`;
  const label = {website:'Website', assignment:'Course assignment', other:'Fork'}[p.c];
  return `<article class="card proj"><span class="tag">${label}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
    <div class="row"><a href="${esc(live)}" target="_blank" rel="noopener">Live demo</a>
    <a href="${REPO}${esc(p.n)}" target="_blank" rel="noopener">Source code</a></div></article>`;
};
const box = document.getElementById('repos');
if (box) {
  const all = [...PROJECTS, FORK];
  const limit = parseInt(box.dataset.limit || '0', 10);
  const draw = cat => { box.innerHTML = all.filter(p => cat==='all'||p.c===cat).slice(0, limit||99).map(card).join(''); };
  draw('all');
  document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); draw(b.dataset.f);
  }));
}

const burger = document.querySelector('.burger'), links = document.querySelector('.links');
if (burger) burger.addEventListener('click', () => { burger.setAttribute('aria-expanded', links.classList.toggle('open')); });
document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());

const direct = document.getElementById('direct');
if (direct) {
  let h = '';
  if (WHATSAPP) h += `<a class="card cc" href="https://wa.me/${esc(WHATSAPP)}" target="_blank" rel="noopener"><small>WhatsApp</small><b>Message me</b></a>`;
  if (EMAIL) h += `<a class="card cc" href="mailto:${esc(EMAIL)}"><small>Email</small><b>${esc(EMAIL)}</b></a>`;
  direct.innerHTML = h;
}
