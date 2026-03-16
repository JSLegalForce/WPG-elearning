const THEMA_ICONEN = {
  "Noodzakelijkheid & herkomst": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="12" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M31 31L40 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 17v5l3 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="22" cy="22" r="2" fill="currentColor"/>
  </svg>`,

  "Juistheid & volledigheid": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M15 20h18M15 26h12M15 32h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M28 32l3 3 5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Onderscheid feiten en oordeel": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8L8 20v4h32v-4L24 8z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
    <path d="M16 24v12M24 24v12M32 24v12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M10 36h28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="14" r="2" fill="currentColor"/>
  </svg>`,

  "Autorisaties & toegang": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="22" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M18 22v-6a6 6 0 0112 0v6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="30" r="2.5" fill="currentColor"/>
    <path d="M24 32v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  "Categorieën betrokkenen": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <circle cx="32" cy="16" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M8 36c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M24 36c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M20 20l8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/>
  </svg>`,

  "Geheimhoudingsplicht": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 10C16 10 10 16 10 24s6 14 14 14 14-6 14-14S32 10 24 10z" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M18 24c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M10 10l28 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "Dagelijkse opsporingstaak": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="28" height="28" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M10 20h28" stroke="currentColor" stroke-width="2.5"/>
    <path d="M18 8v8M30 8v8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M16 28l4 4 8-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Bewaartermijnen": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="14" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M24 18v8l5 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 10h16M24 10v4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "Verstrekking aan derden": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <rect x="28" y="8" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <rect x="28" y="28" width="14" height="12" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M20 22h4l4-8M20 26h4l4 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  "Documentatie": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8h18l8 8v24H12V8z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
    <path d="M30 8v8h8" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M18 22h12M18 28h12M18 34h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  "Logging": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <path d="M14 20h6M14 26h10M14 32h4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="34" cy="20" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M34 23v9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  "Meldplicht datalekken": `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8L6 38h36L24 8z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
    <path d="M24 22v8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="34" r="1.5" fill="currentColor"/>
  </svg>`
};

const THEMA_INHOUD = [
  {
    thema: "Noodzakelijkheid & herkomst",
    artikel: "Art. 3 lid 2 en 5 Wpg",
    titel: "Noodzakelijkheid & herkomst",
    tekst: `
      <p>Een BOA mag alleen politiegegevens verwerken als dit noodzakelijk is voor zijn opsporingstaak. Niet elk gegeven dat interessant lijkt mag worden vastgelegd. Er moet altijd een directe relatie zijn met een concrete opsporingshandeling.</p>
      <p>De Wpg schrijft voor dat de verwerking ook rechtmatig moet zijn. Dit betekent dat er een wettelijke grondslag moet bestaan voor wat de BOA doet. Handelen zonder grondslag is niet toegestaan, ook al is de intentie goed.</p>
      <p>Naast de noodzakelijkheid moet de herkomst van gegevens worden vastgelegd. Is het een eigen waarneming? Een melding van een burger? Of informatie van een collega? Die herkomst is essentieel. Zonder herkomstvermelding kan de betrouwbaarheid van gegevens later niet worden beoordeeld. Auditors controleren dit altijd.</p>
    `
  },
  {
    thema: "Juistheid & volledigheid",
    artikel: "Art. 4 lid 1 Wpg",
    titel: "Juistheid & volledigheid",
    tekst: `
      <p>Politiegegevens moeten juist, volledig en ter zake dienend zijn. In de praktijk sluipen er regelmatig fouten in registraties. Denk aan een verkeerd gespelde naam, een niet geverifieerd adres of een kenteken dat uit het hoofd is opgeschreven.</p>
      <p>Onjuiste gegevens kunnen grote gevolgen hebben voor een betrokkene. Iemand kan ten onrechte als verdachte worden aangemerkt of een beslissing kan worden genomen op basis van verkeerde informatie.</p>
      <p>De verwerkingsverantwoordelijke is verplicht processen in te richten die de kwaliteit van gegevens waarborgen. Dit is geen vrijblijvende aanbeveling. Bij een audit wordt altijd gecontroleerd of hier aantoonbaar aandacht aan wordt besteed en of medewerkers hier op worden aangesproken.</p>
    `
  },
  {
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    titel: "Onderscheid feiten en oordeel",
    tekst: `
      <p>Een veelgemaakte fout in politieregistraties is het vermengen van feiten en persoonlijke oordelen. "Betrokkene gedroeg zich verdacht" is een oordeel. "Betrokkene liep snel weg bij het zien van de BOA" is een feit. Dit verschil lijkt subtiel maar is juridisch essentieel.</p>
      <p>De Wpg verplicht een BOA om dit onderscheid expliciet te maken in zijn registraties. Dit beschermt de betrokkene tegen onterechte conclusies. Het maakt de registratie ook controleerbaar voor collega's, leidinggevenden en auditors.</p>
      <p>In de praktijk betekent dit: schrijf op wat je feitelijk hebt waargenomen. Geef apart aan wat je daarvan vindt of wat je vermoedt. Gebruik formuleringen als "naar het oordeel van verbalisant" of "verbalisant vermoedt dat" om het onderscheid duidelijk te maken.</p>
    `
  },
  {
    thema: "Autorisaties & toegang",
    artikel: "Art. 6 lid 1 t/m 6 en art. 6a Wpg",
    titel: "Autorisaties & toegang",
    tekst: `
      <p>Niet iedereen binnen een BOA-organisatie mag politiegegevens inzien. Toegang moet zijn gebaseerd op functie en taakgebonden noodzaak. Een administratief medewerker die processen-verbaal verstuurt heeft andere rechten dan een actief opsporende BOA.</p>
      <p>De werkgever is verplicht een systeem van autorisaties bij te houden. Daarin staat per medewerker wat hij mag inzien, wijzigen of verstrekken. Dit systeem moet actueel zijn. Als een medewerker van functie verandert of de organisatie verlaat moeten de autorisaties direct worden aangepast.</p>
      <p>Toegang verlenen aan iemand die dit voor zijn taak niet nodig heeft is een overtreding van de Wpg. Auditors toetsen altijd de opzet, het bestaan én de werking van het autorisatiesysteem. Zij controleren niet alleen op papier maar ook in de praktijk.</p>
    `
  },
  {
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    titel: "Categorieën betrokkenen",
    tekst: `
      <p>In een opsporingsonderzoek zijn vaak meerdere personen betrokken. Denk aan een verdachte, een slachtoffer en een getuige. De Wpg verplicht dat deze personen als aparte categorieën worden geregistreerd.</p>
      <p>Een verdachte heeft andere rechten dan een slachtoffer. Als beide onder dezelfde categorie worden geregistreerd kunnen die rechten niet correct worden toegepast. Dit kan leiden tot fouten bij inzageverzoeken en bij de beoordeling van bezwaar en beroep.</p>
      <p>Auditors controleren of systemen en werkprocessen dit onderscheid in de praktijk waarborgen. Het gaat niet alleen om de technische inrichting van het systeem. Het gaat er ook om dat BOA's in hun dagelijkse werk bewust zijn van dit onderscheid en ernaar handelen.</p>
    `
  },
  {
    thema: "Geheimhoudingsplicht",
    artikel: "Art. 7 Wpg",
    titel: "Geheimhoudingsplicht",
    tekst: `
      <p>Iedereen die politiegegevens verwerkt of er toegang toe heeft is verplicht tot geheimhouding. Dit geldt niet alleen tijdens werktijd. Het geldt ook na werktijd en ook voor gegevens van collega's waar je toegang toe hebt.</p>
      <p>De geheimhoudingsplicht reist mee met de gegevens. Als politiegegevens worden verstrekt aan een derde partij is die partij eveneens gebonden aan geheimhouding. De ontvanger mag de gegevens alleen gebruiken voor het doel waarvoor ze zijn verstrekt.</p>
      <p>In de praktijk betekent dit: geen politiegegevens delen via privéberichten of sociale media. Niet bespreken in het openbaar. Niet opslaan op privéapparaten of in privécloud-omgevingen. Schending van de geheimhoudingsplicht kan leiden tot disciplinaire maatregelen en strafrechtelijke vervolging.</p>
    `
  },
  {
    thema: "Dagelijkse opsporingstaak",
    artikel: "Art. 8 lid 1 en 2 Wpg",
    titel: "Dagelijkse opsporingstaak",
    tekst: `
      <p>Het merendeel van de verwerkingen door een BOA valt onder artikel 8 van de Wpg. Dit zijn de alledaagse opsporingshandelingen. Denk aan het opmaken van een proces-verbaal voor wildplassen, het vastleggen van gegevens bij een parkeerovertreding of het opnemen van een aangifte van vernieling.</p>
      <p>Artikel 8-gegevens mogen vijf jaar actief worden verwerkt. In die periode kunnen ze worden geraadpleegd als dat voor een nieuw onderzoek noodzakelijk is. Na die vijf jaar begint de bewaartermijn van nogmaals vijf jaar. Na die bewaartermijn zijn de gegevens verplicht te vernietigen.</p>
      <p>Belangrijk om te weten: ook een waarschuwing zonder boete of proces-verbaal valt al onder de Wpg. Zodra een BOA optreedt in zijn hoedanigheid als opsporingsambtenaar bij een strafbaar feit zijn de regels van de Wpg van toepassing. De afdoening is niet bepalend voor het toepasselijke regime.</p>
    `
  },
  {
    thema: "Bewaartermijnen",
    artikel: "Art. 4 lid 2, art. 8 lid 6, art. 9 lid 4 en art. 14 Wpg",
    titel: "Bewaartermijnen, verwijderen en vernietigen",
    tekst: `
      <p>De Wpg kent strikte bewaartermijnen. Voor artikel 8-gegevens geldt een verwerkingstermijn van vijf jaar. Daarna volgt een bewaartermijn van vijf jaar. Na die tweede termijn zijn de gegevens verplicht te vernietigen.</p>
      <p>Voor artikel 9-gegevens is de situatie anders. De verwerkingstermijn loopt totdat het doel van het onderzoek is bereikt. In de praktijk betekent dit: totdat een onherroepelijk vonnis is uitgesproken of de verjaringstermijn is bereikt. Na het bereiken van het doel heeft de bevoegd functionaris zes maanden om gegevens aan te bieden aan collega's voor hergebruik. Daarna volgt ook hier een bewaartermijn van vijf jaar waarna vernietiging verplicht is.</p>
      <p>Vernietiging na het verstrijken van de bewaartermijn is geen aanbeveling. Het is een harde wettelijke eis. Auditors controleren of organisaties aantoonbare processen hebben ingericht om gegevens tijdig te verwijderen en te vernietigen en of dit ook daadwerkelijk gebeurt.</p>
    `
  },
  {
    thema: "Verstrekking aan derden",
    artikel: "Art. 16, 18, 19, 21 en 22 Wpg",
    titel: "Verstrekking aan derden",
    tekst: `
      <p>Politiegegevens mogen alleen worden verstrekt aan partijen buiten het Wpg-domein als daar een wettelijke grondslag voor bestaat. De Wpg noemt een beperkt aantal situaties waarbij dit is toegestaan. Denk aan verstrekking aan de burgemeester voor vergunningsbeslissingen of aan samenwerkingspartners via een rechtsgeldig convenant.</p>
      <p>Zonder wettelijke grondslag mag niet worden verstrekt. Ook niet als een partij er nadrukkelijk om vraagt. Ook niet als het doel goed en nuttig lijkt. De grondslag moet er altijd zijn voordat gegevens worden verstrekt.</p>
      <p>Elke verstrekking moet worden vastgelegd. Wie heeft welke gegevens ontvangen, op welke datum en op welke grondslag? Bij een inzageverzoek van een betrokkene moet de organisatie kunnen aantonen met wie zijn gegevens zijn gedeeld. Zonder registratie kan hieraan niet worden voldaan.</p>
    `
  },
  {
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 t/m 4 Wpg",
    titel: "Documentatie",
    tekst: `
      <p>De Wpg verplicht BOA-organisaties vier categorieën te documenteren. Dit zijn alle verstrekkingen, alle artikel 9-doeleinden, alle datalekken en alle weigeringen van inzageverzoeken. Dit is de verantwoordingsplicht van de verwerkingsverantwoordelijke.</p>
      <p>Goede documentatie is de basis voor elke audit. Zonder gedegen registraties kan een organisatie niet aantonen dat zij conform de Wpg handelt. Dit geldt zowel voor interne audits als voor externe audits door een gecertificeerde auditor.</p>
      <p>In de praktijk moeten systemen zo zijn ingericht dat de vier categorieën automatisch en volledig worden bijgehouden. Een verstrekking die mondeling is gedaan maar niet is geregistreerd telt voor de auditor niet mee. Wat niet is gedocumenteerd is voor de auditor niet gebeurd.</p>
    `
  },
  {
    thema: "Logging",
    artikel: "Art. 32a Wpg",
    titel: "Logging",
    tekst: `
      <p>Logging houdt in dat alle toegang tot en handelingen met politiegegevens automatisch worden geregistreerd door het informatiesysteem. Wie heeft wanneer welke gegevens ingezien, gewijzigd of verstrekt? Die informatie moet achteraf opvraagbaar zijn.</p>
      <p>Logging beschermt zowel de betrokkene als de BOA zelf. De betrokkene kan erop vertrouwen dat zijn gegevens alleen worden ingezien door bevoegden. De BOA kan aantonen dat hij rechtmatig heeft gehandeld als daar later vragen over komen.</p>
      <p>Auditors controleren of logging is ingeschakeld in de gebruikte systemen. Zij controleren ook of de logbestanden worden bewaard en of er periodiek wordt gecontroleerd op ongeautoriseerde toegang. Een systeem zonder logging of met uitgeschakelde logging voldoet niet aan de Wpg.</p>
    `
  },
  {
    thema: "Meldplicht datalekken",
    artikel: "Art. 33a Wpg",
    titel: "Meldplicht datalekken",
    tekst: `
      <p>Een datalek is elke inbreuk op de beveiliging van politiegegevens. Het maakt niet uit of het om een gestolen laptop gaat, een e-mail naar het verkeerde adres of ongeautoriseerde toegang door een medewerker. De intentie speelt geen rol. Ook een ongelukje is een datalek dat onverwijld moet worden gemeld.</p>
      <p>Intern moet een datalek zo snel mogelijk worden gemeld bij de verwerkingsverantwoordelijke. De verwerkingsverantwoordelijke beoordeelt daarna of het datalek ook bij de Autoriteit Persoonsgegevens moet worden gemeld. Daarvoor geldt een termijn van 72 uur.</p>
      <p>Alle datalekken moeten worden geregistreerd in een intern datalekkenregister. Dit geldt ook voor datalekken die niet bij de AP worden gemeld. Auditors controleren of dit register bestaat, wordt bijgehouden en of medewerkers weten hoe zij een datalek herkennen en melden. Twijfel over of iets een datalek is mag geen reden zijn om niet te melden.</p>
    `
  }
];
