const ALLE_VRAGEN = [

  // ============================================================
  // AUDITPUNT 1: Noodzakelijkheid & herkomst (Art. 3 lid 2 en 5)
  // ============================================================
  {
    vraag: "Wat vereist de Wpg van een BOA bij het vastleggen van politiegegevens met betrekking tot de noodzakelijkheid van de verwerking?",
    thema: "Noodzakelijkheid & herkomst",
    artikel: "Art. 3 lid 2 Wpg",
    opties: [
      "Dat gegevens altijd worden gedeeld met de politie",
      "Dat de verwerking noodzakelijk en rechtmatig is voor de uitvoering van de opsporingstaak",
      "Dat gegevens minimaal 5 jaar worden bewaard",
      "Dat de leidinggevende elke verwerking goedkeurt"
    ],
    juist: 1,
    uitleg: "Artikel 3 lid 2 Wpg bepaalt dat politiegegevens alleen mogen worden verwerkt als dit noodzakelijk en rechtmatig is voor de uitvoering van de politietaak. Een BOA moet dit altijd kunnen aantonen."
  },
  {
    vraag: "BOA Kevin legt vast dat hij een persoon heeft geobserveerd bij een verdachte locatie. Hij noteert alleen de naam en het tijdstip, maar niet waar hij de informatie vandaan heeft. Wat ontbreekt er in zijn registratie?",
    thema: "Noodzakelijkheid & herkomst",
    artikel: "Art. 3 lid 5 Wpg",
    opties: [
      "De geboortedatum van de betrokkene",
      "De vermelding van de herkomst van de gegevens zodat de betrouwbaarheid beoordeeld kan worden",
      "Het proces-verbaal nummer",
      "De handtekening van zijn leidinggevende"
    ],
    juist: 1,
    uitleg: "Artikel 3 lid 5 Wpg verplicht de vermelding van de herkomst van gegevens. Zonder deze vermelding kan de betrouwbaarheid en juistheid van de gegevens niet worden beoordeeld. Kevin had moeten vastleggen waar en hoe hij de informatie heeft verkregen."
  },

  // ============================================================
  // AUDITPUNT 2: Juistheid & volledigheid (Art. 4 lid 1)
  // ============================================================
  {
    vraag: "Wat vereist de Wpg van een BOA bij het registreren van politiegegevens met betrekking tot de kwaliteit van die gegevens?",
    thema: "Juistheid & volledigheid",
    artikel: "Art. 4 lid 1 Wpg",
    opties: [
      "Dat gegevens worden gedeeld met alle collega's",
      "Dat gegevens juist, volledig en ter zake dienend zijn",
      "Dat gegevens altijd worden geverifieerd door de politie",
      "Dat gegevens in een landelijk systeem worden opgeslagen"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 1 Wpg verplicht de verwerkingsverantwoordelijke ervoor te zorgen dat politiegegevens juist, volledig en nauwkeurig zijn. Dit is een van de kernverplichtingen die bij elke audit wordt getoetst."
  },
  {
    vraag: "BOA Lena registreert in haar systeem: 'Verdachte woont waarschijnlijk in dit gebied en is mogelijk betrokken bij meerdere incidenten.' Ze heeft dit niet geverifieerd. Wat is het probleem met deze registratie?",
    thema: "Juistheid & volledigheid",
    artikel: "Art. 4 lid 1 Wpg",
    opties: [
      "Ze had de politie moeten inschakelen",
      "De gegevens zijn niet aantoonbaar juist, wat in strijd is met de verplichting om juiste en volledige gegevens te verwerken",
      "Ze had een proces-verbaal moeten opmaken",
      "Er is geen probleem, vermoedens mogen worden vastgelegd"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 1 Wpg vereist dat politiegegevens juist en volledig zijn. Onverifieerde vermoedens als feitelijke gegevens registreren is een schending van dit artikel. Lena had duidelijk moeten aangeven dat het om een vermoeden gaat en niet om een vastgesteld feit."
  },

  // ============================================================
  // AUDITPUNT 3: Onderscheid feiten en oordeel (Art. 4 lid 3)
  // ============================================================
  {
    vraag: "Wat verplicht de Wpg een BOA bij het opmaken van een registratie met betrekking tot feiten en oordelen?",
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    opties: [
      "Dat hij altijd een getuige erbij haalt",
      "Dat hij een duidelijk onderscheid maakt tussen vastgestelde feiten en zijn persoonlijk oordeel of vermoeden",
      "Dat hij alleen feiten registreert en nooit zijn mening geeft",
      "Dat hij zijn registratie laat controleren door een leidinggevende"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 3 Wpg verplicht een duidelijk onderscheid tussen feiten en persoonlijke beoordelingen of vermoedens in registraties. Dit is essentieel voor de betrouwbaarheid van politiegegevens en een vast auditpunt."
  },
  {
    vraag: "BOA Priya schrijft in haar rapportage: 'Betrokkene is waarschijnlijk de hoofddader, hij gedroeg zich verdacht en maakte een nerveuze indruk.' Wat is hier het probleem?",
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    opties: [
      "De rapportage is te kort",
      "Er wordt geen onderscheid gemaakt tussen vastgestelde feiten en persoonlijk oordeel",
      "De naam van de betrokkene ontbreekt",
      "Er is geen probleem, dit is een normale observatie"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 3 Wpg vereist dat duidelijk is wat een feit is en wat een persoonlijke interpretatie. 'Waarschijnlijk de hoofddader' en 'nerveuze indruk' zijn oordelen van Priya, geen vastgestelde feiten. Dit onderscheid moet expliciet worden gemaakt in de registratie."
  },

  // ============================================================
  // AUDITPUNT 4: Autorisaties & toegang (Art. 6 lid 1-6, 6a)
  // ============================================================
  {
    vraag: "Waar moeten autorisaties voor toegang tot politiegegevens op gebaseerd zijn volgens de Wpg?",
    thema: "Autorisaties & toegang",
    artikel: "Art. 6 lid 1 t/m 6 en art. 6a Wpg",
    opties: [
      "Op de wens van de medewerker zelf",
      "Op de functie en taakgebonden noodzaak van de medewerker",
      "Op het oordeel van de leidinggevende per geval",
      "Op het aantal jaren werkervaring"
    ],
    juist: 1,
    uitleg: "Artikel 6 lid 1 t/m 6 en artikel 6a Wpg bepalen dat toegang tot politiegegevens strikt gebaseerd moet zijn op de functie en de taakgebonden noodzaak van de medewerker. De verwerkingsverantwoordelijke is verplicht een systeem van autorisaties bij te houden en te beheren."
  },
  {
    vraag: "BOA organisatie Z heeft aan alle medewerkers, ook administratief personeel, volledige toegang gegeven tot alle politiegegevens. Wat is het probleem hiermee?",
    thema: "Autorisaties & toegang",
    artikel: "Art. 6 lid 1 t/m 6 Wpg",
    opties: [
      "Er is geen probleem, meer toegang is efficiënter",
      "Dit is in strijd met de Wpg: autorisaties moeten gebaseerd zijn op functie en taakgebonden noodzaak",
      "Dit is alleen een probleem bij artikel 9-gegevens",
      "Dit is toegestaan zolang iedereen een geheimhoudingsverklaring heeft getekend"
    ],
    juist: 1,
    uitleg: "Artikel 6 lid 1 t/m 6 Wpg vereist dat toegang strikt wordt gebaseerd op functie en taak. Ruime toegang zonder noodzaak is onrechtmatig en vergroot het risico op misbruik en datalekken. Auditors toetsen dit standaard bij elke audit."
  },

  // ============================================================
  // AUDITPUNT 5: Categorieën betrokkenen (Art. 6b)
  // ============================================================
  {
    vraag: "Welke categorieën betrokkenen moeten worden onderscheiden in politieregistraties?",
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    opties: [
      "Alleen verdachten en slachtoffers",
      "Verdachten, veroordeelden, slachtoffers, getuigen en andere betrokkenen",
      "Alleen verdachten en getuigen",
      "Alle burgers worden onder dezelfde categorie geregistreerd"
    ],
    juist: 1,
    uitleg: "Artikel 6b Wpg verplicht een duidelijk onderscheid tussen verdachten, veroordeelden, slachtoffers, getuigen en andere betrokkenen in de registratie. Dit onderscheid is verplicht omdat voor elke categorie andere regels en rechten gelden."
  },
  {
    vraag: "BOA Yasmine maakt een registratie van een incident waarbij drie personen betrokken waren: één verdachte, één slachtoffer en één getuige. Ze registreert alle drie onder dezelfde categorie. Wat gaat hier mis?",
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    opties: [
      "Ze had alleen de verdachte mogen registreren",
      "Ze had alle drie onder een aparte zaak moeten registreren",
      "Ze voldoet niet aan de verplichting om onderscheid te maken tussen categorieën betrokkenen",
      "Er gaat niets mis, alle betrokkenen mogen onder dezelfde categorie"
    ],
    juist: 2,
    uitleg: "Artikel 6b Wpg verplicht een duidelijk onderscheid tussen categorieën betrokkenen. Een verdachte, slachtoffer en getuige hebben verschillende rechten en voor hun gegevens gelden andere regels. Dit onderscheid moet correct worden vastgelegd en is een vast auditpunt."
  },

  // ============================================================
  // AUDITPUNT 6: Geheimhoudingsplicht (Art. 7)
  // ============================================================
  {
    vraag: "Voor wie geldt de geheimhoudingsplicht bij politiegegevens en wanneer geldt deze?",
    thema: "Geheimhoudingsplicht",
    artikel: "Art. 7 Wpg",
    opties: [
      "Alleen voor de verwerkingsverantwoordelijke",
      "Alleen voor BOA's tijdens werktijd",
      "Voor iedereen die over politiegegevens beschikt, ook buiten werktijd",
      "Alleen voor gegevens over verdachten"
    ],
    juist: 2,
    uitleg: "Artikel 7 Wpg verplicht iedereen die over politiegegevens beschikt tot geheimhouding, ook buiten werktijd en ook tegenover personen in de privésfeer. De geheimhoudingsplicht reist mee met de gegevens, ook na verstrekking aan derden."
  },
  {
    vraag: "BOA Sandra vertelt haar partner thuis details over een lopend opsporingsonderzoek. Welke regel schendt zij?",
    thema: "Geheimhoudingsplicht",
    artikel: "Art. 7 Wpg",
    opties: [
      "Geen regel, want het blijft in de privésfeer",
      "De geheimhoudingsplicht die ook buiten werktijd geldt tegenover onbevoegden",
      "Alleen de AVG, want het gaat om persoonsgegevens",
      "Er is geen overtreding zolang de partner er niets mee doet"
    ],
    juist: 1,
    uitleg: "Artikel 7 Wpg geldt ook buiten werktijd en in de privésfeer. Sandra's partner heeft geen taakgebonden toegang tot deze gegevens en is daarmee een onbevoegde. De geheimhoudingsplicht kent slechts beperkte uitzonderingen die zijn beschreven in de verstrekkingsbepalingen van de Wpg."
  },

  // ============================================================
  // AUDITPUNT 7: Dagelijkse opsporingstaak (Art. 8 lid 1 en 2)
  // ============================================================
  {
    vraag: "Welke van de volgende situaties valt onder de dagelijkse opsporingstaak in de zin van de Wpg?",
    thema: "Dagelijkse opsporingstaak",
    artikel: "Art. 8 lid 1 Wpg",
    opties: [
      "Een stelselmatige observatie waarbij een baken onder een auto wordt geplaatst",
      "Een BOA die een bon uitschrijft voor het verkeerd aanbieden van afval",
      "Een grootschalig onderzoek naar illegale asbestdumping met meerdere opsporingsambtenaren",
      "Een tap op een mobiele telefoon in een opsporingsonderzoek"
    ],
    juist: 1,
    uitleg: "Artikel 8 lid 1 Wpg regelt de verwerking van gegevens voor de dagelijkse opsporingstaak. Hieronder vallen alledaagse overtredingen zoals foutief aanbieden van afval, wildplassen en loslopende honden. De andere opties zijn voorbeelden van artikel 9-verwerkingen vanwege de grotere inbreuk op de privacy."
  },
  {
    vraag: "BOA Thomas schrijft een waarschuwing uit voor iemand die zonder dodemansknop vaart met een snelle motorboot. Vallen de gegevens die hij daarbij vastlegt onder de Wpg?",
    thema: "Dagelijkse opsporingstaak",
    artikel: "Art. 8 lid 1 en 2 Wpg",
    opties: [
      "Nee, want hij geeft alleen een waarschuwing en geen boete",
      "Ja, want het gaat om een strafbaar feit en Thomas treedt op als opsporingsambtenaar",
      "Nee, want vaarwegregels vallen onder de AVG",
      "Alleen als er later een proces-verbaal wordt opgemaakt"
    ],
    juist: 1,
    uitleg: "Artikel 8 lid 1 en 2 Wpg zijn van toepassing zodra een BOA optreedt als opsporingsambtenaar bij een strafbaar feit. Het feit dat er een waarschuwing wordt gegeven in plaats van een boete is niet relevant. Varen zonder dodemansknop is een strafbaar feit, dus de gegevens vallen onder de Wpg."
  },

  // ============================================================
  // AUDITPUNT 8: Bewaartermijnen (Art. 4 lid 2, 8 lid 6, 9 lid 4, 14)
  // ============================================================
  {
    vraag: "Hoe lang mogen gegevens uit de dagelijkse opsporingstaak actief worden verwerkt en hoe lang is daarna de bewaartermijn?",
    thema: "Bewaartermijnen",
    artikel: "Art. 8 lid 6 jo. art. 14 Wpg",
    opties: [
      "1 jaar verwerken, daarna 1 jaar bewaren",
      "3 jaar verwerken, daarna 2 jaar bewaren",
      "5 jaar verwerken, daarna 5 jaar bewaren, waarna vernietiging verplicht is",
      "10 jaar verwerken, daarna direct vernietigen"
    ],
    juist: 2,
    uitleg: "Artikel 8 lid 6 Wpg bepaalt dat gegevens verwerkt voor de dagelijkse opsporingstaak 5 jaar actief mogen worden verwerkt. Daarna volgt een bewaartermijn van 5 jaar waarin de gegevens buiten de operationele omgeving zijn maar nog niet vernietigd. Na die bewaartermijn verplicht artikel 14 Wpg tot vernietiging."
  },
  {
    vraag: "BOA organisatie B heeft een opsporingsonderzoek naar illegale asbestdumping afgesloten. Het doel is bereikt. Wat moet er nu met de gegevens gebeuren?",
    thema: "Bewaartermijnen",
    artikel: "Art. 9 lid 4 jo. art. 14 Wpg",
    opties: [
      "De gegevens moeten direct worden vernietigd zodra het doel is bereikt",
      "De bevoegd functionaris heeft nog 6 maanden om gegevens aan collega's aan te bieden, daarna volgt een bewaartermijn van 5 jaar, waarna vernietiging verplicht is",
      "De gegevens mogen 10 jaar worden bewaard na afsluiting",
      "De gegevens blijven beschikbaar zolang de zaak relevant is"
    ],
    juist: 1,
    uitleg: "Artikel 9 lid 4 Wpg bepaalt dat na het bereiken van het doel de bevoegd functionaris nog 6 maanden heeft om informatie aan te bieden aan collega's voor hergebruik. Daarna volgt een bewaartermijn van 5 jaar, waarna artikel 14 Wpg verplicht tot vernietiging van de gegevens."
  },

  // ============================================================
  // AUDITPUNT 9: Verstrekking aan derden (Art. 16, 18, 19, 21, 22)
  // ============================================================
  {
    vraag: "Onder welke voorwaarden mag een BOA politiegegevens verstrekken aan een partij buiten het Wpg-domein?",
    thema: "Verstrekking aan derden",
    artikel: "Art. 16, 18, 19, 21 en 22 Wpg",
    opties: [
      "Als de ontvanger erom vraagt",
      "Alleen als er een wettelijke grondslag is, het doel duidelijk is en de verstrekking noodzakelijk is",
      "Als de leidinggevende mondeling toestemming geeft",
      "Altijd, zolang de gegevens geanonimiseerd zijn"
    ],
    juist: 1,
    uitleg: "Artikelen 16, 18, 19, 21 en 22 Wpg regelen de verstrekking van politiegegevens buiten het Wpg-domein. Verstrekking is alleen toegestaan als er een expliciete wettelijke grondslag is, het doel duidelijk is en de verstrekking noodzakelijk is. Elke verstrekking moet worden vastgelegd conform artikel 32 Wpg."
  },
  {
    vraag: "BOA organisatie A werkt samen met een lokale woningbouwvereniging via een rechtsgeldig veiligheidsconvenant. De woningbouwvereniging vraagt om gegevens over overlastgevers. Mag de BOA-organisatie deze gegevens verstrekken?",
    thema: "Verstrekking aan derden",
    artikel: "Art. 19 jo. art. 32 Wpg",
    opties: [
      "Nee, verstrekking aan private partijen is altijd verboden",
      "Ja, maar alleen als er een rechtsgeldig convenant is, de verstrekking noodzakelijk is én wordt vastgelegd",
      "Ja, altijd als er een convenant is zonder verdere voorwaarden",
      "Alleen als de betrokkene zelf toestemming heeft gegeven"
    ],
    juist: 1,
    uitleg: "Artikel 19 Wpg maakt verstrekking aan samenwerkingspartners onder voorwaarden mogelijk. Er moet een rechtsgeldig convenant zijn, de verstrekking moet noodzakelijk zijn én elke verstrekking moet worden vastgelegd conform artikel 32 Wpg. Zonder vastlegging voldoet de organisatie niet aan haar documentatieplicht."
  },

  // ============================================================
  // AUDITPUNT 10: Documentatie (Art. 32 lid 1-4)
  // ============================================================
  {
    vraag: "Welke vier categorieën moet een BOA-organisatie verplicht documenteren op grond van de Wpg?",
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 t/m 4 Wpg",
    opties: [
      "Audits, datalekken, logging en autorisaties",
      "Verstrekkingen, artikel 9-doeleinden, datalekken en weigeringen van inzageverzoeken",
      "Verwerkingen, bewaartermijnen, autorisaties en logging",
      "Processen-verbaal, boetes, waarschuwingen en inzageverzoeken"
    ],
    juist: 1,
    uitleg: "Artikel 32 lid 1 t/m 4 Wpg verplicht documentatie van alle verstrekkingen, artikel 9-doeleinden, datalekken en weigeringen van inzageverzoeken. Dit is de verantwoordingsplicht van de verwerkingsverantwoordelijke en een van de belangrijkste auditpunten."
  },
  {
    vraag: "BOA organisatie X heeft geen overzicht van welke gegevens zij heeft verstrekt aan welke partijen. Een burger dient een inzageverzoek in en vraagt ook met wie zijn gegevens zijn gedeeld. Wat is het probleem?",
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 Wpg",
    opties: [
      "Er is geen probleem, dit hoeft niet bijgehouden te worden",
      "De organisatie voldoet niet aan de documentatieplicht en kan het inzageverzoek niet correct afhandelen",
      "De burger heeft geen recht om te weten met wie zijn gegevens zijn gedeeld",
      "Dit is alleen een probleem bij artikel 9-gegevens"
    ],
    juist: 1,
    uitleg: "Artikel 32 lid 1 Wpg verplicht het vastleggen van alle verstrekkingen. Bij een inzageverzoek moet ook worden medegedeeld aan welke partijen gegevens zijn verstrekt. Zonder registratie kan de organisatie hier niet aan voldoen en schiet zij tekort in haar verantwoordingsplicht."
  },

  // ============================================================
  // AUDITPUNT 11: Logging (Art. 32a)
  // ============================================================
  {
    vraag: "Wat is het doel van de loggingsverplichting in de Wpg?",
    thema: "Logging",
    artikel: "Art. 32a Wpg",
    opties: [
      "Het versnellen van zoekopdrachten in het systeem",
      "Het achteraf kunnen controleren wie welke politiegegevens heeft ingezien of bewerkt",
      "Het automatisch verwijderen van verlopen gegevens",
      "Het bijhouden van werktijden van medewerkers"
    ],
    juist: 1,
    uitleg: "Artikel 32a Wpg verplicht logging van alle toegang tot en handelingen met politiegegevens. Het doel is dat achteraf controleerbaar is wie wanneer welke gegevens heeft ingezien of bewerkt. Dit is een vast toetspunt bij interne en externe audits."
  },
  {
    vraag: "Een auditor vraagt BOA organisatie Y om aan te tonen dat alleen bevoegde medewerkers toegang hebben gehad tot een specifiek dossier. Op welke verplichting baseert de auditor deze eis?",
    thema: "Logging",
    artikel: "Art. 32a Wpg",
    opties: [
      "De documentatieplicht",
      "De loggingsverplichting die alle toegang tot politiegegevens registreerbaar moet maken",
      "De geheimhoudingsplicht",
      "De autorisatieverplichting"
    ],
    juist: 1,
    uitleg: "Artikel 32a Wpg verplicht logging van alle toegang tot politiegegevens. De logging maakt het mogelijk achteraf te controleren wie wanneer welke gegevens heeft ingezien. Zonder adequate logging kan een organisatie niet aantonen dat alleen bevoegde medewerkers toegang hebben gehad."
  },

  // ============================================================
  // AUDITPUNT 12: Meldplicht datalekken (Art. 33a)
  // ============================================================
  {
    vraag: "Binnen welke termijn moet een datalek intern worden gemeld bij de verwerkingsverantwoordelijke?",
    thema: "Meldplicht datalekken",
    artikel: "Art. 33a Wpg",
    opties: [
      "Binnen 72 uur",
      "Binnen 48 uur",
      "Zo snel mogelijk, uiterlijk binnen 24 uur",
      "Binnen een week"
    ],
    juist: 2,
    uitleg: "Artikel 33a Wpg verplicht het melden van datalekken. Intern moet dit zo snel mogelijk gebeuren, uiterlijk binnen 24 uur, ook bij twijfel. De verwerkingsverantwoordelijke beoordeelt daarna of melding bij de Autoriteit Persoonsgegevens nodig is, waarvoor een termijn van 72 uur geldt."
  },
  {
    vraag: "BOA Ahmed ontdekt dat zijn collega per ongeluk een e-mail met politiegegevens naar een verkeerd adres heeft gestuurd. De collega wil het niet melden omdat het per ongeluk was. Wat is de juiste handelswijze?",
    thema: "Meldplicht datalekken",
    artikel: "Art. 33a Wpg",
    opties: [
      "Niets doen, want het was per ongeluk en dus geen datalek",
      "Afwachten of de ontvanger iets met de gegevens doet",
      "Het datalek zo snel mogelijk intern melden, ook als het per ongeluk was",
      "Alleen melden als de ontvanger de gegevens heeft gebruikt"
    ],
    juist: 2,
    uitleg: "Artikel 33a Wpg verplicht het melden van elk datalek, ongeacht de oorzaak. Een onbedoelde verstrekking aan een onbevoegde is een inbreuk op de beveiliging van politiegegevens en moet altijd worden gemeld, ook bij twijfel. De intentie speelt geen rol bij de meldplicht."
  }

];
