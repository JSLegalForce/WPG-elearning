// =============================================
// JS Legal Force — Wpg E-learning
// =============================================

const CONFIG = {
  slagingsdrempel: 0.70,
  afteltijd: 10
};

// State
let deelnemerNaam        = '';
let deelnemerAchternaam  = '';
let deelnemerOrganisatie = '';
let certificaatNummer    = '';

let huidigThemaIndex     = 0;
let huidigVraagInThema   = 0;
let score                = 0;
let totaalVragen         = 0;
let resultatenPerThema   = {};
let afteltimer           = null;

// Herkansing
let herkansingVragen     = [];
let herkansingIndex      = 0;
let herkansingModus      = false;
let herkansingScore      = 0;

// Schermen
const schermen = {
  naam:             document.getElementById('scherm-naam'),
  start:            document.getElementById('scherm-start'),
  intro:            document.getElementById('scherm-intro'),
  vraag:            document.getElementById('scherm-vraag'),
  herkansingIntro:  document.getElementById('scherm-herkansing-intro'),
  einde:            document.getElementById('scherm-einde')
};

function toonScherm(naam) {
  Object.values(schermen).forEach(s => s.classList.remove('actief'));
  schermen[naam].classList.add('actief');
}

// =====================
// NAAMSCHERM
// =====================
document.getElementById('btn-naar-start').addEventListener('click', () => {
  const voornaam    = document.getElementById('input-voornaam').value.trim();
  const achternaam  = document.getElementById('input-achternaam').value.trim();
  const organisatie = document.getElementById('input-organisatie').value.trim();
  const fout        = document.getElementById('naam-fout');

  if (!voornaam || !achternaam) {
    fout.classList.add('zichtbaar');
    return;
  }

  fout.classList.remove('zichtbaar');
  deelnemerNaam        = voornaam;
  deelnemerAchternaam  = achternaam;
  deelnemerOrganisatie = organisatie;
  certificaatNummer    = genereerCertificaatNummer();

  document.getElementById('start-welkom').innerHTML =
    `Welkom, ${voornaam}!<br><span style="font-size:1.3rem;font-weight:600">Wpg E-learning</span>`;

  toonScherm('start');
});

// =====================
// START
// =====================
document.getElementById('btn-start').addEventListener('click', () => {
  huidigThemaIndex   = 0;
  huidigVraagInThema = 0;
  score              = 0;
  totaalVragen       = 0;
  resultatenPerThema = {};
  herkansingVragen   = [];
  toonIntro();
});

// =====================
// INTRO SCHERM
// =====================
function toonIntro() {
  const thema   = THEMA_INHOUD[huidigThemaIndex];
  const totaal  = THEMA_INHOUD.length;
  const huidig  = huidigThemaIndex + 1;
  const pct     = ((huidig - 1) / totaal) * 100;

  document.getElementById('intro-voortgang-tekst').textContent = `Onderwerp ${huidig} van ${totaal}`;
  document.getElementById('intro-voortgang-balk').style.width  = pct + '%';
  document.getElementById('intro-thema-badge').textContent     = thema.thema;
  document.getElementById('intro-artikel-badge').textContent   = thema.artikel;
  document.getElementById('intro-titel').textContent           = thema.titel;
  document.getElementById('intro-tekst').innerHTML             = thema.tekst;
  const icoonEl = document.getElementById('intro-icoon');
  icoonEl.innerHTML = THEMA_ICONEN[thema.thema] || '';

  const btn = document.getElementById('btn-naar-vragen');
  btn.disabled = true;
  btn.textContent = 'Naar de vragen →';

  // Reset aftellen
  clearInterval(afteltimer);
  let seconden = CONFIG.afteltijd;
  const getalEl   = document.getElementById('aftellen-getal');
  const cirkelEl  = document.getElementById('aftellen-cirkel');
  const omtrek    = 94.2;

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
  const thema       = THEMA_INHOUD[huidigThemaIndex];
  const vragen      = getVragenVanThema(thema.thema);
  const vraag       = vragen[huidigVraagInThema];
  const themaNum    = huidigThemaIndex + 1;
  const vraagNum    = huidigVraagInThema + 1;
  const totaalThema = THEMA_INHOUD.length;

  // Voortgang
  const globalVraagNr = (huidigThemaIndex * 2) + huidigVraagInThema + 1;
  const globalTotaal  = THEMA_INHOUD.length * 2;
  const pct = ((globalVraagNr - 1) / globalTotaal) * 100;

  document.getElementById('voortgang-tekst').textContent = `Vraag ${globalVraagNr} van ${globalTotaal}`;
  document.getElementById('voortgang-balk').style.width  = pct + '%';
  document.getElementById('vraag-thema').textContent     = thema.thema;
  document.getElementById('vraag-nummer-badge').textContent = `Vraag ${vraagNum} van 2`;
  document.getElementById('vraag-tekst').textContent     = vraag.vraag;

  // Feedback resetten
  const feedback = document.getElementById('feedback-container');
  feedback.classList.remove('actief', 'juist', 'fout');
  document.getElementById('btn-volgende').classList.remove('actief');

  // Opties
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
  if (!juist) { gekliktBtn.classList.add('fout'); }

  // Score bijhouden
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

  // Feedback
  const feedback = document.getElementById('feedback-container');
  feedback.classList.remove('juist', 'fout');
  feedback.classList.add(juist ? 'juist' : 'fout', 'actief');
  document.getElementById('feedback-icon').textContent = juist ? '✓' : '✗';
  document.getElementById('feedback-tekst').textContent = vraag.uitleg + ' ';
  document.getElementById('feedback-artikel').textContent = '— ' + vraag.artikel;
  document.getElementById('btn-volgende').classList.add('actief');

  // Voortgangsbalk updaten
  const globalVraagNr = (huidigThemaIndex * 2) + huidigVraagInThema + 1;
  const globalTotaal  = THEMA_INHOUD.length * 2;
  document.getElementById('voortgang-balk').style.width = (globalVraagNr / globalTotaal * 100) + '%';
}

document.getElementById('btn-volgende').addEventListener('click', () => {
  const vragen = getVragenVanThema(THEMA_INHOUD[huidigThemaIndex].thema);

  if (huidigVraagInThema < vragen.length - 1) {
    // Volgende vraag in zelfde thema
    huidigVraagInThema++;
    toonVraag();
  } else if (huidigThemaIndex < THEMA_INHOUD.length - 1) {
    // Volgend thema
    huidigThemaIndex++;
    toonIntro();
  } else {
    // Klaar — herkansing of einde
    if (herkansingVragen.length > 0) {
      toonHerkansingIntro();
    } else {
      toonEinde();
    }
  }
});

// =====================
// HERKANSING
// =====================
function toonHerkansingIntro() {
  document.getElementById('herkansing-intro-tekst').textContent =
    `Je hebt ${herkansingVragen.length} vraag${herkansingVragen.length > 1 ? 'en' : ''} niet goed beantwoord. Je krijgt nu de kans om deze opnieuw te maken. Je score verandert niet meer, maar je kunt de stof nog eens oefenen.`;
  toonScherm('herkansingIntro');
}

document.getElementById('btn-start-herkansing').addEventListener('click', () => {
  herkansingIndex = 0;
  herkansingModus = true;
  toonHerkansingVraag();
});

document.getElementById('btn-sla-herkansing-over').addEventListener('click', () => {
  toonEinde();
});

function toonHerkansingVraag() {
  const vraag = herkansingVragen[herkansingIndex];

  document.getElementById('voortgang-tekst').textContent =
    `Herkansing: vraag ${herkansingIndex + 1} van ${herkansingVragen.length}`;
  document.getElementById('voortgang-balk').style.width = '100%';
  document.getElementById('vraag-thema').textContent = vraag.thema;
  document.getElementById('vraag-nummer-badge').textContent = 'Herkansing';
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
    btn.addEventListener('click', () => verwerkHerkansingAntwoord(i, btn, vraag));
    container.appendChild(btn);
  });

  toonScherm('vraag');
}

function verwerkHerkansingAntwoord(gekozenIndex, gekliktBtn, vraag) {
  const knoppen = document.querySelectorAll('.optie-knop');
  knoppen.forEach(k => k.disabled = true);
  const juist = vraag.juist === gekozenIndex;

  knoppen[vraag.juist].classList.add('juist');
  if (!juist) { gekliktBtn.classList.add('fout'); }

  const feedback = document.getElementById('feedback-container');
  feedback.classList.remove('juist', 'fout');
  feedback.classList.add(juist ? 'juist' : 'fout', 'actief');
  document.getElementById('feedback-icon').textContent = juist ? '✓' : '✗';
  document.getElementById('feedback-tekst').textContent = vraag.uitleg + ' ';
  document.getElementById('feedback-artikel').textContent = '— ' + vraag.artikel;

  const btnVolgende = document.getElementById('btn-volgende');
  btnVolgende.classList.add('actief');
  btnVolgende.textContent = herkansingIndex < herkansingVragen.length - 1
    ? 'Volgende herkansing →'
    : 'Naar het resultaat →';
}

// Overschrijf volgende knop voor herkansing
document.getElementById('btn-volgende').addEventListener('click', () => {}, false);

// Vervang de click handler dynamisch
document.getElementById('btn-volgende').onclick = function() {
  if (herkansingModus) {
    if (herkansingIndex < herkansingVragen.length - 1) {
      herkansingIndex++;
      toonHerkansingVraag();
    } else {
      herkansingModus = false;
      toonEinde();
    }
  } else {
    const vragen = getVragenVanThema(THEMA_INHOUD[huidigThemaIndex].thema);
    if (huidigVraagInThema < vragen.length - 1) {
      huidigVraagInThema++;
      toonVraag();
    } else if (huidigThemaIndex < THEMA_INHOUD.length - 1) {
      huidigThemaIndex++;
      toonIntro();
    } else {
      if (herkansingVragen.length > 0) {
        toonHerkansingIntro();
      } else {
        toonEinde();
      }
    }
  }
};

// =====================
// EINDSCHERM
// =====================
function toonEinde() {
  toonScherm('einde');

  const percentage = score / totaalVragen;
  const geslaagd   = percentage >= CONFIG.slagingsdrempel;

  document.getElementById('einde-naam-tekst').textContent =
    `${deelnemerNaam} ${deelnemerAchternaam}${deelnemerOrganisatie ? ' — ' + deelnemerOrganisatie : ''}`;
  document.getElementById('eind-score').textContent      = `${score} van de ${totaalVragen} vragen goed`;
  document.getElementById('eind-percentage').textContent = Math.round(percentage * 100) + '%';

  const beoordeling = document.getElementById('eind-beoordeling');
  beoordeling.className   = 'beoordeling ' + (geslaagd ? 'geslaagd' : 'gezakt');
  beoordeling.textContent = geslaagd ? '✓ Geslaagd' : '✗ Niet geslaagd';

  document.getElementById('eind-beoordeling-tekst').textContent = geslaagd
    ? 'Gefeliciteerd! Je hebt de Wpg e-learning met goed gevolg afgerond.'
    : `Je hebt minimaal ${Math.round(CONFIG.slagingsdrempel * 100)}% nodig om te slagen. Bestudeer de theorie opnieuw en probeer het opnieuw.`;

  // Overzicht per auditpunt
  const overzicht = document.getElementById('auditpunt-overzicht');
  overzicht.innerHTML = '';
  THEMA_INHOUD.forEach(t => {
    const res    = resultatenPerThema[t.thema] || { goed: 0, fout: 0, totaal: 0 };
    const pct    = res.totaal > 0 ? Math.round((res.goed / res.totaal) * 100) : 0;
    const status = res.goed === res.totaal ? 'goed' : res.goed > 0 ? 'half' : 'fout';
    const rij    = document.createElement('div');
    rij.className = `auditpunt-rij ${status}`;
    rij.innerHTML = `
      <span class="auditpunt-naam">${t.thema}</span>
      <span class="auditpunt-score">${res.goed}/${res.totaal} — ${pct}%</span>
      <span class="auditpunt-icoon">${status === 'goed' ? '✓' : status === 'half' ? '~' : '✗'}</span>
    `;
    overzicht.appendChild(rij);
  });

  document.getElementById('btn-certificaat').style.display = geslaagd ? 'flex' : 'none';
}

// =====================
// CERTIFICAAT
// =====================
function genereerCertificaatNummer() {
  const nu    = new Date();
  const jaar  = nu.getFullYear();
  const maand = String(nu.getMonth() + 1).padStart(2, '0');
  const dag   = String(nu.getDate()).padStart(2, '0');
  const rand  = Math.floor(Math.random() * 90000) + 10000;
  return `JSLF-WPG-${jaar}${maand}${dag}-${rand}`;
}

document.getElementById('btn-certificaat').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const W = 297, H = 210;

  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, W, H, 'F');
  doc.setFillColor(26, 42, 94);
  doc.rect(0, 0, W, 28, 'F');
  doc.setFillColor(26, 42, 94);
  doc.rect(0, H - 20, W, 20, 'F');
  doc.setDrawColor(138, 154, 181);
  doc.setLineWidth(1.5);
  doc.line(0, 28, W, 28);
  doc.line(0, H - 20, W, H - 20);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('JS Legal Force', W / 2, 17, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(138, 154, 181);
  doc.text("WET POLITIEGEGEVENS — E-LEARNING VOOR BOA'S", W / 2, 23, { align: 'center' });

  doc.setDrawColor(138, 154, 181);
  doc.setLineWidth(0.5);
  doc.rect(10, 34, W - 20, H - 58, 'S');
  doc.setLineWidth(0.3);
  doc.rect(12, 36, W - 24, H - 62, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(26, 42, 94);
  doc.text('CERTIFICAAT', W / 2, 60, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(74, 85, 120);
  doc.text('van deelname en succesvolle afronding', W / 2, 70, { align: 'center' });

  doc.setDrawColor(138, 154, 181);
  doc.setLineWidth(0.8);
  doc.line(60, 75, W - 60, 75);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(74, 85, 120);
  doc.text('Dit certificaat wordt verleend aan', W / 2, 87, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(26, 42, 94);
  doc.text(`${deelnemerNaam} ${deelnemerAchternaam}`, W / 2, 100, { align: 'center' });

  if (deelnemerOrganisatie) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(74, 85, 120);
    doc.text(deelnemerOrganisatie, W / 2, 108, { align: 'center' });
  }

  doc.setDrawColor(138, 154, 181);
  doc.setLineWidth(0.5);
  doc.line(60, 113, W - 60, 113);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(26, 42, 94);
  doc.text(
    'Heeft deelgenomen aan de Wpg e-learning van JS Legal Force en deze met goed gevolg afgerond.',
    W / 2, 123, { align: 'center', maxWidth: W - 80 }
  );

  const pct = Math.round((score / totaalVragen) * 100);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(26, 122, 74);
  doc.text(`Score: ${score} van de ${totaalVragen} vragen goed (${pct}%)`, W / 2, 135, { align: 'center' });

  const nu    = new Date();
  const datum = nu.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(74, 85, 120);
  doc.text(`Datum: ${datum}`, W / 2, 144, { align: 'center' });

  doc.setFontSize(8);
  doc.setTextColor(138, 154, 181);
  doc.text(`Certificaatnummer: ${certificaatNummer}`, W / 2, 151, { align: 'center' });

  doc.setFont('helvetica', 'italic');
  doc.text('Dit is een educatieve e-learning, geen officieel gecertificeerd examen.', W / 2, 158, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.text("© JS Legal Force — Wpg E-learning voor BOA's", W / 2, H - 10, { align: 'center' });

  doc.save(`Certificaat_Wpg_${deelnemerNaam}_${deelnemerAchternaam}_${nu.getFullYear()}.pdf`);
});

// =====================
// HERSTART
// =====================
document.getElementById('btn-herstart').addEventListener('click', () => {
  toonScherm('start');
});
