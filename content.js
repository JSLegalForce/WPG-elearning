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
    <p>Een BOA mag alleen politiegegevens verwerken als dat noodzakelijk is voor zijn opsporingstaak. Niet elk gegeven dat interessant lijkt mag worden vastgelegd. Er moet altijd een directe relatie zijn met een concrete opsporingshandeling.</p>
    <p>De verwerking moet ook rechtmatig zijn: er moet een wettelijke grondslag bestaan voor wat de BOA doet. Handelen zonder grondslag is niet toegestaan, ook niet als de intentie goed is.</p>
    <p>Naast de noodzakelijkheid moet de herkomst van gegevens worden vastgelegd. Is het een eigen waarneming? Een melding van een burger? Informatie van een collega? Die herkomst is essentieel — zonder herkomstvermelding is de betrouwbaarheid van gegevens later niet te beoordelen.</p>
    `
  },
  {
    thema: "Juistheid & volledigheid",
    artikel: "Art. 4 lid 1 Wpg",
    titel: "Juistheid & volledigheid",
    tekst: `
    <p>Politiegegevens moeten juist, volledig en ter zake dienend zijn. In de praktijk sluipen er regelmatig fouten in registraties: een verkeerd gespelde naam, een niet geverifieerd adres, een kenteken dat uit het hoofd is opgeschreven.</p>
    <p>Onjuiste gegevens kunnen grote gevolgen hebben. Iemand kan ten onrechte als verdachte worden aangemerkt, of een beslissing kan worden genomen op basis van verkeerde informatie.</p>
    <p>De verwerkingsverantwoordelijke moet processen inrichten die de kwaliteit van gegevens borgen. Dit is geen vrijblijvende aanbeveling. Er moet aantoonbaar aandacht aan worden besteed en medewerkers moeten hierop worden aangesproken.</p>
    `
  },
  {
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    titel: "Onderscheid feiten en oordeel",
    tekst: `
    <p>Een veelgemaakte fout in politieregistraties is het vermengen van feiten en persoonlijke oordelen. "Betrokkene gedroeg zich verdacht" is een oordeel. "Betrokkene liep snel weg bij het zien van de BOA" is een feit. Het verschil lijkt subtiel, maar is juridisch essentieel.</p>
    <p>De Wpg verplicht een BOA dit onderscheid expliciet te maken. Dat beschermt de betrokkene tegen onterechte conclusies en maakt de registratie controleerbaar voor collega's en leidinggevenden.</p>
    <p>Schrijf op wat je feitelijk hebt waargenomen. Geef apart aan wat je daarvan vindt of vermoedt. Gebruik formuleringen als "naar het oordeel van verbalisant" of "verbalisant vermoedt dat" om het onderscheid helder te maken.</p>
    `
  },
  {
    thema: "Autorisaties & toegang",
    artikel: "Art. 6 lid 1 t/m 6 en art. 6a Wpg",
    titel: "Autorisaties & toegang",
    tekst: `
    <p>Niet iedereen binnen een BOA-organisatie mag politiegegevens inzien. Toegang moet zijn gebaseerd op functie en taakgebonden noodzaak. Een administratief medewerker die processen-verbaal verstuurt heeft andere rechten dan een actief opsporende BOA.</p>
    <p>De werkgever moet een actueel autorisatiesysteem bijhouden. Daarin staat per medewerker wat hij mag inzien, wijzigen of verstrekken. Verandert iemand van functie of verlaat hij de organisatie, dan moeten de autorisaties direct worden aangepast.</p>
    <p>Toegang verlenen aan iemand die dit voor zijn taak niet nodig heeft is een overtreding van de Wpg. Het autorisatiesysteem wordt getoetst op opzet, bestaan én werking — niet alleen op papier, maar ook in de dagelijkse praktijk.</p>
    `
  },
  {
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    titel: "Categorieën betrokkenen",
    tekst: `
    <p>In een opsporingsonderzoek zijn vaak meerdere personen betrokken: een verdachte, een slachtoffer en een getuige. De Wpg verplicht dat deze personen als aparte categorieën worden geregistreerd.</p>
    <p>Een verdachte heeft andere rechten dan een slachtoffer. Worden beiden onder dezelfde categorie geregistreerd, dan kunnen die rechten niet correct worden toegepast. Dat leidt tot fouten bij inzageverzoeken en bij de beoordeling van bezwaar en beroep.</p>
    <p>Het gaat niet alleen om de technische inrichting van het systeem. BOA's moeten in hun dagelijkse werk bewust zijn van dit onderscheid en er ook naar handelen.</p>
    `
  },
  {
    thema: "Geheimhoudingsplicht",
    artikel: "Art. 7 Wpg",
    titel: "Geheimhoudingsplicht",
    tekst: `
    <p>Iedereen die politiegegevens verwerkt of er toegang toe heeft is verplicht tot geheimhouding — ook na werktijd en ook voor gegevens van collega's waartoe je toegang hebt.</p>
    <p>De geheimhoudingsplicht reist mee met de gegevens. Worden politiegegevens verstrekt aan een derde partij, dan is die partij eveneens gebonden aan geheimhouding. De ontvanger mag de gegevens alleen gebruiken voor het doel waarvoor ze zijn verstrekt.</p>
    <p>Concreet: geen politiegegevens delen via privéberichten of sociale media. Niet bespreken in het openbaar. Niet opslaan op privéapparaten of in privécloud-omgevingen. Schending van de geheimhoudingsplicht kan leiden tot disciplinaire maatregelen én strafrechtelijke vervolging.</p>
    `
  },
  {
    thema: "Dagelijkse opsporingstaak",
    artikel: "Art. 8 lid 1 en 2 Wpg",
    titel: "Dagelijkse opsporingstaak",
    tekst: `
    <p>Het merendeel van de verwerkingen door een BOA valt onder artikel 8 Wpg. Dit zijn de alledaagse opsporingshandelingen: het opmaken van een proces-verbaal voor wildplassen, het vastleggen van gegevens bij een parkeerovertreding, het opnemen van een aangifte van vernieling.</p>
    <p>Artikel 8-gegevens kennen een getrapt regime. In het eerste jaar mogen gegevens breed worden gebruikt voor lopende onderzoeken. Van jaar 2 tot en met jaar 5 is alleen gericht zoeken toegestaan — er moet een concrete aanleiding zijn. Na vijf jaar begint de bewaartermijn van nogmaals vijf jaar, waarna vernietiging verplicht is.</p>
    <p>Ook een waarschuwing zonder boete of proces-verbaal valt al onder de Wpg. Zodra een BOA optreedt als opsporingsambtenaar bij een strafbaar feit zijn de regels van de Wpg van toepassing. De afdoening is niet bepalend voor het toepasselijke regime.</p>
    `
  },
  {
    thema: "Bewaartermijnen",
    artikel: "Art. 4 lid 2, art. 8 lid 6, art. 9 lid 4 en art. 14 Wpg",
    titel: "Bewaartermijnen, verwijderen en vernietigen",
    tekst: `
    <p>De Wpg kent strikte bewaartermijnen. Voor artikel 8-gegevens geldt een getrapt regime: in het eerste jaar mogen gegevens breed worden gebruikt. Van jaar 2 tot en met jaar 5 is alleen gericht zoeken toegestaan. Daarna volgt een bewaartermijn van vijf jaar waarin de gegevens uitsluitend beschikbaar zijn voor audits en klachten — delen is niet meer toegestaan. Na die tweede termijn zijn de gegevens verplicht te vernietigen.</p>
    <p>Voor artikel 9-gegevens is de situatie anders. De verwerkingstermijn loopt totdat het doel van het onderzoek is bereikt — in de praktijk: totdat een onherroepelijk vonnis is uitgesproken of de verjaringstermijn is bereikt. Na het bereiken van het doel heeft de bevoegd functionaris zes maanden om gegevens aan te bieden aan collega's voor hergebruik. Daarna volgt ook hier een bewaartermijn van vijf jaar, waarna vernietiging verplicht is.</p>
    <p>Vernietiging na het verstrijken van de bewaartermijn is geen aanbeveling. Het is een harde wettelijke eis. Organisaties moeten aantoonbare processen inrichten om gegevens tijdig te verwijderen en te vernietigen.</p>
    `
  },
  {
    thema: "Verstrekking aan derden",
    artikel: "Art. 16, 18, 19, 21 en 22 Wpg",
    titel: "Verstrekking aan derden",
    tekst: `
    <p>Politiegegevens mogen alleen worden verstrekt aan partijen buiten het Wpg-domein als daarvoor een wettelijke grondslag bestaat. De Wpg noemt een beperkt aantal situaties waarbij dit is toegestaan — bijvoorbeeld verstrekking aan de burgemeester voor vergunningsbeslissingen of aan samenwerkingspartners via een rechtsgeldig convenant.</p>
    <p>Zonder wettelijke grondslag mag niet worden verstrekt. Ook niet als een partij er nadrukkelijk om vraagt, en ook niet als het doel goed en nuttig lijkt. De grondslag moet er zijn vóórdat gegevens worden verstrekt.</p>
    <p>Elke verstrekking moet worden vastgelegd: wie heeft welke gegevens ontvangen, op welke datum en op welke grondslag? Bij een inzageverzoek moet de organisatie kunnen aantonen met wie de gegevens van een betrokkene zijn gedeeld. Zonder registratie kan hieraan niet worden voldaan.</p>
    `
  },
  {
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 t/m 4 Wpg",
    titel: "Documentatie",
    tekst: `
    <p>De Wpg verplicht BOA-organisaties vier categorieën te documenteren: alle verstrekkingen, alle artikel 9-doeleinden, alle datalekken en alle besluiten op inzageverzoeken — inclusief afwijzingen. Dit is de verantwoordingsplicht van de verwerkingsverantwoordelijke.</p>
    <p>Elk besluit op een inzageverzoek moet worden vastgelegd, ook als het verzoek wordt afgewezen. Zonder documentatie van een afwijzing is achteraf niet aantoonbaar dat het besluit rechtmatig tot stand is gekomen.</p>
    <p>Systemen moeten zo zijn ingericht dat de vier categorieën automatisch en volledig worden bijgehouden. Wat niet is gedocumenteerd kan niet worden verantwoord — ook niet tegenover de betrokkene zelf.</p>
    `
  },
  {
    thema: "Logging",
    artikel: "Art. 32a Wpg",
    titel: "Logging",
    tekst: `
    <p>Logging betekent dat alle toegang tot en handelingen met politiegegevens automatisch worden geregistreerd door het informatiesysteem: wie heeft wanneer welke gegevens ingezien, gewijzigd of verstrekt? Die informatie moet achteraf opvraagbaar zijn.</p>
    <p>Logging beschermt zowel de betrokkene als de BOA zelf. De betrokkene kan erop vertrouwen dat zijn gegevens alleen worden ingezien door bevoegden. De BOA kan aantonen dat hij rechtmatig heeft gehandeld als daar later vragen over komen.</p>
    <p>Een systeem zonder logging of met uitgeschakelde logging voldoet niet aan de Wpg. Logbestanden moeten worden bewaard en er moet periodiek worden gecontroleerd op ongeautoriseerde toegang.</p>
    `
  },
  {
    thema: "Meldplicht datalekken",
    artikel: "Art. 33a Wpg",
    titel: "Meldplicht datalekken",
    tekst: `
    <p>Een datalek is elke inbreuk op de beveiliging van politiegegevens — of het nu gaat om een gestolen laptop, een e-mail naar het verkeerde adres of ongeautoriseerde toegang door een medewerker. De intentie speelt geen rol. Ook een ongelukje is een datalek dat onverwijld moet worden gemeld.</p>
    <p>Intern moet een datalek zo snel mogelijk worden gemeld bij de verwerkingsverantwoordelijke. Die beoordeelt daarna of het datalek ook bij de Autoriteit Persoonsgegevens moet worden gemeld. Daarvoor geldt een termijn van 72 uur.</p>
    <p>Alle datalekken moeten worden geregistreerd in een intern datalekkenregister — ook datalekken die niet bij de AP worden gemeld. Bij een jaarlijkse externe toetsing wordt gecontroleerd of dit register bestaat, wordt bijgehouden en of medewerkers weten hoe zij een datalek herkennen en melden. Twijfel is geen reden om niet te melden.</p>
    `
  }
];
