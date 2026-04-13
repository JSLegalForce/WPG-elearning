// =============================================
// JS Legal Force — Wpg E-learning
// =============================================

const CONFIG = {
  slagingsdrempel: 0.70,
  afteltijd: 15,
  totaalVragenVast: 24
};

// State
let deelnemerNaam = '';
let deelnemerAchternaam = '';
let deelnemerOrganisatie = '';
let certificaatNummer = '';
let huidigThemaIndex = 0;
let huidigVraagInThema = 0;
let score = 0;
let totaalVragen = 0;
let resultatenPerThema = {};
let afteltimer = null;

// Herkansing
let herkansingVragen = [];
let herkansingIndex = 0;
let herkansingModus = false;
let herkansingScore = 0;

// Paginaverlaat-waarschuwing
let quizBezig = false;

window.addEventListener('beforeunload', (e) => {
  if (quizBezig) {
    e.preventDefault();
    e.returnValue = '';
  }
});

// Schermen
const schermen = {
  naam: document.getElementById('scherm-naam'),
  start: document.getElementById('scherm-start'),
  intro: document.getElementById('scherm-intro'),
  vraag: document.getElementById('scherm-vraag'),
  herkansingIntro: document.getElementById('scherm-herkansing-intro'),
  einde: document.getElementById('scherm-einde')
};

function toonScherm(naam) {
  Object.values(schermen).forEach(s => s.classList.remove('actief'));
  schermen[naam].classList.add('actief');
}

// =====================
// LOCALSTORAGE
// =====================

function slaVoortgangOp() {
  const voortgang = {
    deelnemerNaam,
    deelnemerAchternaam,
    deelnemerOrganisatie,
    certificaatNummer,
    huidigThemaIndex,
    huidigVraagInThema,
    score,
    totaalVragen,
    resultatenPerThema,
    herkansingVragen,
    herkansingIndex,
    herkansingModus,
    herkansingScore
  };
  localStorage.setItem('wpg_voortgang', JSON.stringify(voortgang));
}

function laadVoortgang() {
  const opgeslagen = localStorage.getItem('wpg_voortgang');
  if (!opgeslagen) return false;
  try {
    const v = JSON.parse(opgeslagen);
    deelnemerNaam = v.deelnemerNaam || '';
    deelnemerAchternaam = v.deelnemerAchternaam || '';
    deelnemerOrganisatie = v.deelnemerOrganisatie || '';
    certificaatNummer = v.certificaatNummer || '';
    huidigThemaIndex = v.huidigThemaIndex || 0;
    huidigVraagInThema = v.huidigVraagInThema || 0;
    score = v.score || 0;
    totaalVragen = v.totaalVragen || 0;
    resultatenPerThema = v.resultatenPerThema || {};
    herkansingVragen = v.herkansingVragen || [];
    herkansingIndex = v.herkansingIndex || 0;
    herkansingModus = v.herkansingModus || false;
    herkansingScore = v.herkansingScore || 0;
    return true;
  } catch (e) {
    return false;
  }
}

function wisVoortgang() {
  localStorage.removeItem('wpg_voortgang');
}

// =====================
// NAAMSCHERM
// =====================

document.getElementById('btn-naar-start').addEventListener('click', () => {
  const voornaam = document.getElementById('input-voornaam').value.trim();
  const achternaam = document.getElementById('input-achternaam').value.trim();
  const organisatie = document.getElementById('input-organisatie').value.trim();
  const fout = document.getElementById('naam-fout');

  if (!voornaam || !achternaam) {
    fout.classList.add('zichtbaar');
    return;
  }

  fout.classList.remove('zichtbaar');
  deelnemerNaam = voornaam;
  deelnemerAchternaam = achternaam;
  deelnemerOrganisatie = organisatie;
  certificaatNummer = genereerCertificaatNummer();

  document.getElementById('start-welkom').innerHTML =
    `Welkom, ${voornaam}!<br><span style="font-size:1.3rem;font-weight:600">Wpg E-learning</span>`;

  const heeftVoortgang = laadVoortgang();
  if (
    heeftVoortgang &&
    deelnemerNaam === voornaam &&
    deelnemerAchternaam === achternaam
  ) {
    const hervatten = confirm(
      `Welkom terug, ${voornaam}! Er is opgeslagen voortgang gevonden (onderwerp ${huidigThemaIndex + 1} van 12). Wil je verdergaan waar je gebleven was?`
    );
    if (hervatten) {
      quizBezig = true;
      if (herkansingModus) {
        toonHerkansingVraag();
      } else if (totaalVragen >= CONFIG.totaalVragenVast) {
        toonEinde();
      } else {
        toonVraag();
      }
      return;
    } else {
      wisVoortgang();
      deelnemerNaam = voornaam;
      deelnemerAchternaam = achternaam;
      deelnemerOrganisatie = organisatie;
      certificaatNummer = genereerCertificaatNummer();
    }
  }

  toonScherm('start');
});

// =====================
// START
// =====================

document.getElementById('btn-start').addEventListener('click', () => {
  huidigThemaIndex = 0;
  huidigVraagInThema = 0;
  score = 0;
  totaalVragen = 0;
  resultatenPerThema = {};
  herkansingVragen = [];
  quizBezig = true;
  wisVoortgang();
  toonIntro();
});

// =====================
// INTRO SCHERM
// =====================

function toonIntro() {
  const thema = THEMA_INHOUD[huidigThemaIndex];
  const totaal = THEMA_INHOUD.length;
  const huidig = huidigThemaIndex + 1;
  const pct = ((huidig - 1) / totaal) * 100;

  document.getElementById('intro-voortgang-tekst').textContent =
    `Onderwerp ${huidig} van ${totaal}`;
  document.getElementById('intro-voortgang-balk').style.width = pct + '%';
  document.getElementById('intro-thema-badge').textContent = thema.thema;
  document.getElementById('intro-artikel-badge').textContent = thema.artikel;
  document.getElementById('intro-titel').textContent = thema.titel;
  document.getElementById('intro-tekst').innerHTML = thema.tekst;

  const icoonEl = document.getElementById('intro-icoon');
  icoonEl.innerHTML = THEMA_ICONEN[thema.thema] || '';

  const btn = document.getElementById('btn-naar-vragen');
  btn.disabled = true;
  btn.textContent = 'Naar de vragen →';

  clearInterval(afteltimer);
  let seconden = CONFIG.afteltijd;
  const getalEl = document.getElementById('aftellen-getal');
  const cirkelEl = document.getElementById('aftellen-cirkel');
  const omtrek = 94.2;

  getalEl.textContent = seconden;
  cirkelEl.style.strokeDashoffset = 0;
  document.getElementById('intro-aftellen').style.display = 'flex';

  afteltimer = setInterval(() => {
    seconden--;
    getalEl.textContent = seconden;
    const offset = omtrek * (1 - seconden / CONFIG.afteltijd);
    cirkelEl.style.strokeDashoffset = offset;
    if (seconden <= 0) {
      clearInterval(afteltimer);
      btn.disabled = false;
      document.getElementById('intro-aftellen').style.display = 'none';
    }
  }, 1000);

  toonScherm('intro');
}

document.getElementById('btn-naar-vragen').addEventListener('click', () => {
  clearInterval(afteltimer);
  huidigVraagInThema = 0;
  toonVraag();
});

// =====================
// VRAAG SCHERM
// =====================

function getVragenVanThema(thema) {
  return ALLE_VRAGEN.filter(v => v.thema === thema);
}

function toonVraag() {
  const thema = THEMA_INHOUD[huidigThemaIndex];
  const vragen = getVragenVanThema(thema.thema);
  const vraag = vragen[huidigVraagInThema];
  const vraagNum = huidigVraagInThema + 1;

  const globalVraagNr = (huidigThemaIndex * 2) + huidigVraagInThema + 1;
  const globalTotaal = THEMA_INHOUD.length * 2;
  const pct = ((globalVraagNr - 1) / globalTotaal) * 100;

  document.getElementById('voortgang-tekst').textContent =
    `Vraag ${globalVraagNr} van ${globalTotaal}`;
  document.getElementById('voortgang-balk').style.width = pct + '%';
  document.getElementById('vraag-thema').textContent = thema.thema;
  document.getElementById('vraag-nummer-badge').textContent =
    `Vraag ${vraagNum} van 2`;
  document.getElementById('vraag-tekst').textContent = vraag.vraag;

  const feedback = document.getElementById('feedback-container');
  feedback.classList.remove('actief', 'juist', 'fout');
  document.getElementById('btn-volgende').classList.remove('actief');

  const container = document.getElementById('opties-container');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  vraag.opties.forEach((optie, i) => {
    const btn = document.createElement('button');
    btn.className = 'optie-knop';
    btn.innerHTML = `<span class="optie-letter">${letters[i]}</span><span class="optie-tekst">${optie}</span>`;
    btn.addEventListener('click', () => verwerkAntwoord(i, btn, vraag));
    container.appendChild(btn);
  });

  toonScherm('vraag');
}

let huidigAntwoordGoed = false;

function verwerkAntwoord(gekozenIndex, gekliktBtn, vraag) {
  const knoppen = document.querySelectorAll('.optie-knop');
  knoppen.forEach(k => k.disabled = true);

  const juist = vraag.juist === gekozenIndex;
  huidigAntwoordGoed = juist;

  knoppen[vraag.juist].classList.add('juist');
  if (!juist) {
    gekliktBtn.classList.add('fout');
  }

  const themaThema = THEMA_INHOUD[huidigThemaIndex].thema;
  if (!resultatenPerThema[themaThema]) {
    resultatenPerThema[themaThema] = { goed: 0, fout: 0, totaal: 0 };
  }

  resultatenPerThema[themaThema].totaal++;
  totaalVragen++;

  if (juist) {
    score++;
    resultatenPerThema[themaThema].goed++;
  } else {
    resultatenPerThema[themaThema].fout++;
    herkansingVragen.push(vraag);
  }

  const feedback = document.getElementById('feedback-container');
  feedback.classList.remove('juist', 'fout');
  feedback.classList.add(juist ? 'juist' : 'fout', 'actief');
  document.getElementById('feedback-icon').textContent = juist ? '✓' : '✗';
  document.getElementById('feedback-tekst').textContent = vraag.uitleg + ' ';
  document.getElementById('feedback-artikel').textContent = '— ' + vraag.artikel;
  document.getElementById('bt
