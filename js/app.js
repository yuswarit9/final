const ORD = ['DGA', 'DGD', 'IGD', 'AFX', 'DEN'];

const HERO_SVGS = {
  DGA: `<svg class="hero-art-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g-dga" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A1813"/><stop offset="100%" stop-color="#3D2B1F"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-dga)"/><circle cx="150" cy="180" r="100" fill="#E5B822" opacity="0.15"/><path d="M150 70 L180 120 L230 110 L195 155 L225 200 L170 190 L150 240 L130 190 L75 200 L105 155 L70 110 L120 120 Z" fill="#E5B822" opacity="0.85"/><circle cx="150" cy="155" r="28" fill="#F7D96F"/><text x="150" y="165" font-family="'Oswald', sans-serif" font-size="32" font-weight="bold" fill="#1A1813" text-anchor="middle">♔</text><path d="M40 310 Q 110 270, 150 320 T 260 290" stroke="#E5F24C" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M60 340 Q 150 310, 240 350" stroke="#D9A76A" stroke-width="6" stroke-linecap="round" fill="none"/><text x="150" y="380" font-family="'Oswald', sans-serif" font-size="20" fill="#E5B822" letter-spacing="4" text-anchor="middle">BLESSING KING</text></svg>`,
  DGD: `<svg class="hero-art-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g-dgd" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1C1412"/><stop offset="100%" stop-color="#3E1A10"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-dgd)"/><polygon points="170,40 80,210 145,210 115,360 220,170 155,170" fill="#F26419"/><polygon points="165,55 95,200 150,200 125,330 205,180 160,180" fill="#F7E07E"/><rect x="30" y="30" width="240" height="340" fill="none" stroke="#F26419" stroke-width="2" stroke-dasharray="8 6"/><text x="150" y="375" font-family="'Oswald', sans-serif" font-size="20" fill="#F26419" letter-spacing="4" text-anchor="middle">JACK SPARK</text></svg>`,
  IGD: `<svg class="hero-art-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g-igd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0A1628"/><stop offset="100%" stop-color="#102542"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-igd)"/><path d="M0 200 L300 200 M0 250 L300 250 M0 300 L300 300 M0 350 L300 350" stroke="#1E88E5" stroke-width="1" opacity="0.2"/><path d="M150 70 Q 220 170, 150 230 Q 80 170, 150 70 Z" fill="#1E88E5"/><polygon points="150,220 135,255 165,255" fill="#1E88E5"/><circle cx="150" cy="140" r="25" fill="#0A1628"/><text x="150" y="150" font-family="'Oswald', sans-serif" font-size="28" font-weight="bold" fill="#4FC3F7" text-anchor="middle">♠</text><rect x="70" y="270" width="160" height="60" rx="12" fill="#102542" stroke="#4FC3F7" stroke-width="3"/><circle cx="110" cy="300" r="10" fill="#1E88E5"/><circle cx="190" cy="290" r="6" fill="#E91E63"/><circle cx="205" cy="305" r="6" fill="#F7D96F"/><text x="150" y="380" font-family="'Oswald', sans-serif" font-size="20" fill="#4FC3F7" letter-spacing="4" text-anchor="middle">ACERUNNER</text></svg>`,
  AFX: `<svg class="hero-art-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g-afx" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#240A15"/><stop offset="100%" stop-color="#4A1128"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-afx)"/><path d="M80 180 L105 100 L150 150 L195 100 L220 180 Z" fill="#E91E63"/><circle cx="105" cy="95" r="8" fill="#F8BBD0"/><circle cx="150" cy="85" r="10" fill="#F8BBD0"/><circle cx="195" cy="95" r="8" fill="#F8BBD0"/><circle cx="150" cy="210" r="60" fill="none" stroke="#E57373" stroke-width="4" stroke-dasharray="12 8"/><circle cx="150" cy="210" r="40" fill="none" stroke="#E91E63" stroke-width="3"/><text x="150" y="222" font-family="'Oswald', sans-serif" font-size="34" fill="#FFF" text-anchor="middle">♕</text><path d="M40 330 Q 150 280, 260 330" stroke="#F8BBD0" stroke-width="5" fill="none"/><text x="150" y="375" font-family="'Oswald', sans-serif" font-size="20" fill="#E91E63" letter-spacing="4" text-anchor="middle">LITTLE QUEEN</text></svg>`,
  DEN: `<svg class="hero-art-svg" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g-den" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#092016"/><stop offset="100%" stop-color="#143D2B"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-den)"/><path d="M60 140 Q 150 70, 240 140 Q 250 230, 150 270 Q 50 230, 60 140 Z" fill="#1DB979" opacity="0.9"/><path d="M85 150 Q 115 130, 130 160 Q 100 175, 85 150 Z" fill="#092016"/><path d="M215 150 Q 185 130, 170 160 Q 200 175, 215 150 Z" fill="#092016"/><path d="M110 200 Q 150 240, 190 200" stroke="#092016" stroke-width="5" fill="none" stroke-linecap="round"/><polygon points="150,40 165,85 210,85 172,110 188,155 150,128 112,155 128,110 90,85 135,85" fill="#7CB342"/><text x="150" y="375" font-family="'Oswald', sans-serif" font-size="19" fill="#26D094" letter-spacing="3" text-anchor="middle">MASCARADE JOKER</text></svg>`
};

let GAME_DATA = null;
const sc = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
let q = [], a52 = null, first = [], qi = 0, total = 0, nick = '';

const m = document.getElementById('m');
const bar = document.getElementById('bar');
const bgLayer = document.getElementById('bg-layer');

function setBg(key, fallbackKey = '') {
  if (!GAME_DATA) return;
  const { backgrounds, defaultBg } = GAME_DATA;
  const url = backgrounds[key] || (fallbackKey && backgrounds[fallbackKey]) || defaultBg;
  if (!url) { bgLayer.style.opacity = '0'; return; }
  const tester = new Image();
  tester.onload = () => { bgLayer.style.backgroundImage = `url("${url}")`; bgLayer.style.opacity = '1'; };
  tester.onerror = () => { bgLayer.style.opacity = '0'; };
  tester.src = url;
}

const shuffle = a => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ranked = () => ORD.map((c, i) => [c, sc[c], i]).sort((x, y) =>
  y[1] - x[1] || (y[0] === a52 ? 1 : 0) - (x[0] === a52 ? 1 : 0) || x[2] - y[2]
);

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'modal-toast';
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function go(html) {
  m.innerHTML = html;
  scrollTo(0, 0);
  m.classList.remove('out');
  const h = m.querySelector('h1,h2');
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
}

function prog() { bar.style.width = Math.min(100, (qi / total) * 100) + '%'; }

function next() {
  const s = q[qi++];
  prog();
  if (!s) return;
  m.classList.add('out');
  setTimeout(() => render(s), matchMedia('(prefers-reduced-motion:reduce)').matches ? 0 : 380);
}

function render(s) {
  if (s.k === 'ch') {
    const chData = GAME_DATA.chapters[s.n];
    setBg(`ch${s.n}`);
    go(`<div class="sci-panel">
      <div class="sci-panel-tab">CHAPTER 0${s.n}</div>
      <div class="big-ch" aria-hidden="true">0${s.n}</div>
      <span class="tag">CHAPTER 0${s.n}</span>
      <h2>${chData[0]}</h2>
      <p>${chData[1]}</p>
      <button class="btn" id="go">ก้าวต่อไป</button>
    </div>`);
    document.getElementById('go').onclick = () => { if (s.n === 3) planDistricts(); next(); };
  }
  else if (s.k === 'scene') scene(s);
  else if (s.k === 'dist') dist(s);
  else if (s.k === 'card') card();
  else if (s.k === 'end') end();
}

function scene(s) {
  setBg(s.id);
  const d = GAME_DATA.scenes[s.id];
  const opts = shuffle(ORD.map((c, i) => [c, d[2][i]]));
  go(`<div class="sci-panel">
    <div class="sci-panel-tab">${d[0]}</div>
    <span class="tag">${d[0]}</span>
    <h2>${d[1]}</h2>
    <div class="opts">${opts.map(o => `<button class="opt" data-c="${o[0]}">${o[1]}</button>`).join('')}</div>
  </div>`);
  pick(c => { sc[c]++; if (s.id === 's52') a52 = c; next(); });
}

function dist(s) {
  setBg(`dist_${s.c}`);
  const d = GAME_DATA.districts[s.c];
  const opts = shuffle(d[2]);
  go(`<div class="sci-panel">
    <div class="sci-panel-tab">${d[0]}</div>
    <span class="tag">${d[0]}</span>
    <h2>${d[1]}</h2>
    <div class="opts">${opts.map(o => `<button class="opt" data-j="${o[1]}">${o[0]}</button>`).join('')}</div>
  </div>`);
  m.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    b.classList.add('sel');
    first.push(b.dataset.j);
    m.querySelectorAll('.opt').forEach(x => x.disabled = true);
    setTimeout(next, 360);
  });
}

function pick(f) {
  m.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    b.classList.add('sel');
    m.querySelectorAll('.opt').forEach(x => x.disabled = true);
    setTimeout(() => f(b.dataset.c), 360);
  });
}

function planDistricts() {
  const r = ranked(), ds = [{ k: 'dist', c: r[0][0] }];
  if (r[0][1] - r[1][1] <= 1) ds.push({ k: 'dist', c: r[1][0] });
  q.splice(qi, 0, ...ds);
  total += ds.length;
}

function card() {
  setBg('card');
  const formFields = GAME_DATA.form;
  go(`<div class="sci-panel">
    <div class="sci-panel-tab">FINAL GATE · PASS REGISTRATION</div>
    <span class="tag">FINAL GATE · บัตรผ่านเข้าสู่เทศกาล</span>
    <h2>ลงนามก่อนขึ้นเวที</h2>
    <p>ผู้เฝ้าประตูขอดูบัตรผ่านสักใบก่อนเปิดม่านเทศกาล กรอกเท่าที่สะดวกได้เลย ข้อไหนไม่อยากตอบก็ข้ามได้</p>
    <form class="card-form" id="f">${formFields.map((f, i) => f[1] ? (f[2] ? `<fieldset><legend>${f[0]}</legend>${f[1].map(o => `<label style="display:inline-block;margin:6px 16px 6px 0;font-weight:300"><input type="checkbox" style="display:inline;width:auto;margin:0 8px 0 0">${o}</label>`).join('')}</fieldset>` : `<label>${f[0]}<select><option value="">ข้าม</option>${f[1].map(o => `<option>${o}</option>`).join('')}</select></label>`) : `<label>${f[0]}<input type="text" ${i === 0 ? 'id="nickInput" placeholder="ระบุชื่อเล่นของเธอ..."' : ''}></label>`).join('')}
    <button class="btn" type="submit">ก้าวขึ้นสู่เวทีใหญ่</button></form>
  </div>`);
  document.getElementById('f').onsubmit = e => {
    e.preventDefault();
    const el = document.getElementById('nickInput');
    if (el && el.value.trim()) nick = el.value.trim();
    next();
  };
}

function jobsFor(c) {
  const p = new Set(first);
  const jobList = GAME_DATA.jobs[c];
  const mine = jobList.filter(j => p.has(j));
  return [...mine.map(j => [j, 1]), ...jobList.filter(j => !mine.includes(j)).map(j => [j, 0])];
}

function end() {
  const r = ranked();
  const c = r[0][0];
  const h = GAME_DATA.hero[c];
  const mainColor = h.color;
  const svgArt = HERO_SVGS[c];

  setBg(`end_${c}`, 'end');
  document.documentElement.style.setProperty('--accent', mainColor);
  document.body.classList.add('inv');
  bar.style.width = '100%';

  go(`<div class="sci-panel">
    <div class="sci-panel-tab">HERO CARD UNLOCKED</div>
    <span class="tag" style="border-color:${mainColor};color:${mainColor}">THE PALETTE OF REBELLION · ${nick ? `ฮีโร่ของ ${nick}` : 'สีสันกลับคืนสู่เมืองแล้ว'}</span>
    <h1 class="result-title">${h.role}</h1>
    <p>ค่ำคืนนี้ความจำเจได้พังทลายลงด้วยพลังสร้างสรรค์ของเธอ และนี่คือการ์ดฮีโร่ที่จารึกชื่อเธอไว้ในประวัติศาสตร์ของ Imagine City</p>
    <div class="playing-card" style="--hc:${h.color}">
      <div class="card-layout">
        <div class="hero-art-wrap">
          <img src="${h.img}" alt="การ์ดฮีโร่ ${h.card} (${c})" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div style="display:none;width:100%;height:100%">${svgArt}</div>
        </div>
        <div>
          <div class="card-top">
            <div class="card-rank">${h.rank} · ${c}</div>
            <div class="card-score">พลังสร้างสรรค์ ${sc[c]} / 11</div>
          </div>
          <div class="hero-title">${h.card}</div>
          <div class="hero-sub">${h.role}</div>
          <p>${h.desc}</p>
          <div class="swatches" title="Color Palette ประจำตัวละคร">${h.swatches.map(hex => `<span style="background:${hex}"></span>`).join('')}</div>
          <div class="dept-box">สาขาที่ใช่สำหรับเธอ: <strong>${h.dept}</strong> · School of Digital Media (SDM)</div>
          <ul class="jobs">${jobsFor(c).map(j => `<li class="${j[1] ? 'f' : ''}">${j[0]}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
    <h2 class="disp" style="margin-top:36px">JOIN THE REBELLION</h2>
    <p>เมืองนี้ยังมีพื้นที่รอให้นักออกแบบรุ่นใหม่มาเติมสีสัน สมัครสมาชิกเพื่อรับข่าวกิจกรรมของ SDM และข้อมูลทุนการศึกษาก่อนใคร</p>
    <button class="btn" id="btnJoin" style="background:${mainColor};border-color:${mainColor};color:#fff">สมัครสมาชิกรับข้อมูลทุน SDM</button>
    <button class="btn ghost" onclick="location.reload()">เล่นอีกครั้ง</button>
  </div>`);

  document.getElementById('btnJoin').onclick = () => {
    showToast(`ยินดีต้อนรับ ${nick || 'นักปฏิวัติ'} เข้าสู่คอมมูนิตี้ SDM!`);
  };
}

function start() {
  q = [
    { k: 'ch', n: 1 }, ...['s11', 's12', 's13'].map(id => ({ k: 'scene', id })),
    { k: 'ch', n: 2 }, ...['s21', 's22', 's23'].map(id => ({ k: 'scene', id })),
    { k: 'ch', n: 3 }, { k: 'scene', id: 'gate' },
    { k: 'ch', n: 4 }, { k: 'scene', id: 's41' }, { k: 'scene', id: 's42' },
    { k: 'ch', n: 5 }, { k: 'scene', id: 's51' }, { k: 'scene', id: 's52' },
    { k: 'card' }, { k: 'end' }
  ];
  total = q.length;
  qi = 0;
  next();
}

function renderIntro() {
  setBg('start');
  go(`<div class="sci-panel">
    <div class="sci-panel-tab">IMAGINE CITY · REBELLION BRIEF</div>
    <span class="tag">THE PALETTE OF REBELLION</span>
    <h1>IMAGINE CITY</h1>
    <h2>คืนสุดท้ายก่อนสีจะหายไป</h2>
    <div class="palette-strip" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
    <p>คืนนี้สีสันของ Imagine City กำลังจะหายไปทั้งเมือง และมีเธอเป็นคนเดียวที่ช่วยได้ Imagine City เคยเป็นเมืองที่เต็มไปด้วยภาพวาด ป้ายไฟ เสียงเพลง และเกมที่ใครก็เล่นได้ แต่ตอนนี้ทุกอย่างซีดเป็นสีเทา เหลือเวลาอีกแค่คืนเดียวก่อนที่สีจะหายไปตลอดกาล ถ้ามีใครขึ้นเวทีในเทศกาล Imagine Design Event แล้วทำให้คนทั้งเมืองกลับมายิ้มได้ สีทั้งหมดก็จะกลับมา</p>
    <p>เธอตื่นขึ้นกลางจัตุรัสโดยไม่รู้ว่ามาได้ยังไง ตรงหน้ามีดวงไฟดวงเล็ก ๆ ลอยอยู่ มันบอกว่าจะนำทางให้ แต่ต้องให้เธอเป็นคนตัดสินใจเองทุกอย่าง</p>
    <button class="btn" id="st">เริ่มการปฏิวัติสีสัน</button>
  </div>`);
  document.getElementById('st').onclick = start;
}

fetch('data/scenes.json')
  .then(res => {
    if (!res.ok) throw new Error('ไม่สามารถโหลดไฟล์ scenes.json ได้');
    return res.json();
  })
  .then(data => {
    GAME_DATA = data;
    renderIntro();
  })
  .catch(err => {
    console.error(err);
    go(`<div class="sci-panel">
      <div class="sci-panel-tab">SYSTEM NOTICE</div>
      <h2>ไม่สามารถโหลดข้อมูลเกมได้</h2>
      <p>กรุณาเปิดเว็บไซต์ผ่าน Live Server หรือ GitHub Pages และตรวจสอบว่าไฟล์ <code>scenes.json</code> อยู่ในโฟลเดอร์เดียวกับ <code>index.html</code></p>
    </div>`);
  });
