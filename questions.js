const ALLE_VRAGEN = [

  // ============================================================
  // THEMA 1: Noodzakelijkheid & herkomst (Art. 3 lid 2 en 5)
  // ============================================================
  {
    vraag: "Een BOA wil gegevens vastleggen over een persoon die hij verdacht vindt gedragen, maar waarbij geen concrete overtreding is vastgesteld. Wat zegt de Wpg hierover?",
    thema: "Noodzakelijkheid & herkomst",
    artikel: "Art. 3 lid 2 Wpg",
    opties: [
      "Vastleggen mag altijd als er een vermoeden bestaat",
      "Vastleggen is alleen toegestaan als de verwerking noodzakelijk en rechtmatig is voor een concrete opsporingshandeling",
      "De leidinggevende bepaalt per geval of vastleggen mag",
      "Vastleggen mag altijd; verwijderen kan later nog"
    ],
    juist: 1,
    uitleg: "Artikel 3 lid 2 Wpg bepaalt dat politiegegevens alleen mogen worden verwerkt als dit noodzakelijk en rechtmatig is voor de uitvoering van de opsporingstaak. Een vaag vermoeden zonder concrete handeling volstaat niet als grondslag."
  },
  {
    vraag: "BOA Kevin legt vast dat hij een persoon heeft geobserveerd bij een verdachte locatie. Hij noteert de naam en het tijdstip, maar niet hoe hij de informatie heeft verkregen. Wat ontbreekt er?",
    thema: "Noodzakelijkheid & herkomst",
    artikel: "Art. 3 lid 5 Wpg",
    opties: [
      "De geboortedatum van de betrokkene",
      "De vermelding van de herkomst van de gegevens, zodat de betrouwbaarheid later beoordeeld kan worden",
      "Het proces-verbaal nummer",
      "De handtekening van zijn leidinggevende"
    ],
    juist: 1,
    uitleg: "Artikel 3 lid 5 Wpg verplicht de vermelding van de herkomst van gegevens. Zonder herkomstvermelding kan de betrouwbaarheid en juistheid van de gegevens later niet worden beoordeeld. Kevin had moeten vastleggen of het een eigen waarneming, melding of collegainformatie betrof."
  },

  // ============================================================
  // THEMA 2: Juistheid & volledigheid (Art. 4 lid 1)
  // ============================================================
  {
    vraag: "BOA Lena registreert: 'Verdachte woont waarschijnlijk in dit gebied en is mogelijk betrokken bij meerdere incidenten.' Ze heeft dit niet geverifieerd. Wat is het probleem?",
    thema: "Juistheid & volledigheid",
    artikel: "Art. 4 lid 1 Wpg",
    opties: [
      "Ze had de politie moeten inschakelen voor verificatie",
      "De gegevens zijn niet aantoonbaar juist; onverifieerde vermoedens registreren als feit is in strijd met de kwaliteitsplicht",
      "Ze had een apart vermoedensregister moeten aanleggen",
      "Er is geen probleem zolang ze later corrigeert"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 1 Wpg vereist dat politiegegevens juist en volledig zijn. Onverifieerde vermoedens mogen niet als feitelijke gegevens worden geregistreerd. Lena had expliciet moeten aangeven dat het om een vermoeden gaat, niet om een vastgesteld feit."
  },
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
    uitleg: "Artikel 4 lid 1 Wpg verplicht de verwerkingsverantwoordelijke ervoor te zorgen dat politiegegevens juist, volledig en nauwkeurig zijn. De BOA zelf draagt dagelijkse verantwoordelijkheid voor de kwaliteit van wat hij registreert."
  },

  // ============================================================
  // THEMA 3: Onderscheid feiten en oordeel (Art. 4 lid 3)
  // ============================================================
  {
    vraag: "BOA Priya schrijft in haar rapportage: 'Betrokkene is waarschijnlijk de hoofddader, hij gedroeg zich verdacht en maakte een nerveuze indruk.' Wat is hier het juridische probleem?",
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    opties: [
      "De rapportage is te beknopt voor een dossier",
      "Er wordt geen onderscheid gemaakt tussen vastgestelde feiten en het persoonlijk oordeel van de BOA",
      "De naam van de betrokkene ontbreekt in de rapportage",
      "Er is geen probleem; dit is een normale observatie"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 3 Wpg vereist dat duidelijk is wat een feit is en wat een persoonlijke interpretatie. 'Waarschijnlijk de hoofddader' en 'nerveuze indruk' zijn oordelen van Priya, geen vastgestelde feiten. Dit onderscheid moet expliciet worden gemaakt met formuleringen als 'naar het oordeel van verbalisant'."
  },
  {
    vraag: "Welke formulering voldoet aan de Wpg-verplichting om feiten en oordelen te scheiden?",
    thema: "Onderscheid feiten en oordeel",
    artikel: "Art. 4 lid 3 Wpg",
    opties: [
      "'Betrokkene gedroeg zich verdacht en leek nerveus'",
      "'Betrokkene liep bij het zien van verbalisant snel weg; naar het oordeel van verbalisant was sprake van vluchtgedrag'",
      "'Betrokkene is waarschijnlijk betrokken bij de zaak'",
      "'Betrokkene maakte een onbetrouwbare indruk'"
    ],
    juist: 1,
    uitleg: "Artikel 4 lid 3 Wpg verplicht een duidelijk onderscheid: de feitelijke waarneming ('liep snel weg') wordt gescheiden van de beoordeling ('naar het oordeel van verbalisant'). De andere opties zijn oordelen zonder feitelijke onderbouwing."
  },

  // ============================================================
  // THEMA 4: Autorisaties & toegang (Art. 6 lid 1-6, 6a)
  // ============================================================
  {
    vraag: "Een administratief medewerker die processen-verbaal verstuurt heeft hetzelfde toegangsniveau als een actief opsporende BOA. Wat zegt de Wpg hierover?",
    thema: "Autorisaties & toegang",
    artikel: "Art. 6 lid 1 t/m 6 Wpg",
    opties: [
      "Dit is toegestaan zolang iedereen een geheimhoudingsverklaring heeft getekend",
      "Dit is in strijd met de Wpg: autorisaties moeten zijn gebaseerd op functie en taakgebonden noodzaak",
      "Dit is alleen een probleem bij artikel 9-gegevens",
      "Dit is efficiënt en dus aanvaardbaar"
    ],
    juist: 1,
    uitleg: "Artikel 6 lid 1 t/m 6 Wpg vereist dat toegang strikt wordt gebaseerd op functie en taakgebonden noodzaak. Een administratief medewerker heeft voor zijn taak niet dezelfde toegang nodig als een opsporende BOA. Ruime toegang zonder noodzaak is onrechtmatig en vergroot het risico op misbruik."
  },
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
    uitleg: "Artikel 6 lid 1 t/m 6 en artikel 6a Wpg bepalen dat toegang tot politiegegevens strikt gebaseerd moet zijn op de functie en de taakgebonden noodzaak van de medewerker. De verwerkingsverantwoordelijke is verplicht dit systeem actueel te houden — ook bij functieverandering of uitdiensttreding."
  },

  // ============================================================
  // THEMA 5: Categorieën betrokkenen (Art. 6b)
  // ============================================================
  {
    vraag: "BOA Yasmine maakt een registratie van een incident waarbij drie personen betrokken waren: één verdachte, één slachtoffer en één getuige. Ze registreert alle drie onder dezelfde categorie. Wat gaat hier mis?",
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    opties: [
      "Ze had alleen de verdachte mogen registreren",
      "Ze had alle drie onder aparte zaakdossiers moeten registreren",
      "Ze voldoet niet aan de verplichting om onderscheid te maken tussen categorieën betrokkenen",
      "Er gaat niets mis; alle betrokkenen mogen onder dezelfde categorie"
    ],
    juist: 2,
    uitleg: "Artikel 6b Wpg verplicht een duidelijk onderscheid tussen verdachten, slachtoffers en getuigen. Elke categorie heeft andere rechten. Als dit onderscheid ontbreekt kunnen inzageverzoeken niet correct worden afgehandeld en kunnen de rechten van betrokkenen worden geschonden."
  },
  {
    vraag: "Waarom is het onderscheid tussen categorieën betrokkenen (art. 6b Wpg) ook praktisch relevant voor de BOA?",
    thema: "Categorieën betrokkenen",
    artikel: "Art. 6b Wpg",
    opties: [
      "Omdat het systeem dan minder opslagruimte gebruikt",
      "Omdat voor elke categorie andere rechten en verwerkingsregels gelden, en fouten leiden tot onjuiste afhandeling van inzageverzoeken",
      "Omdat dit alleen relevant is bij artikel 9-onderzoeken",
      "Omdat de politie anders geen toegang krijgt tot de gegevens"
    ],
    juist: 1,
    uitleg: "Artikel 6b Wpg verplicht categorisering omdat verdachten, slachtoffers en getuigen verschillende rechten hebben. Als een slachtoffer per abuis als verdachte wordt geregistreerd, worden zijn rechten onjuist toegepast. Bovendien kunnen bezwaar- en beroepsprocedures stranden bij onjuiste categorisering."
  },

  // ============================================================
  // THEMA 6: Geheimhoudingsplicht (Art. 7)
  // ============================================================
  {
    vraag: "BOA Sandra vertelt haar partner thuis details over een lopend opsporingsonderzoek. Haar partner is ook bij de gemeente werkzaam. Welke regel schendt Sandra?",
    thema: "Geheimhoudingsplicht",
    artikel: "Art. 7 Wpg",
    opties: [
      "Geen regel, want haar partner werkt ook in het publieke domein",
      "De geheimhoudingsplicht: die geldt ook buiten werktijd tegenover personen die geen taakgebonden toegang hebben",
      "Alleen de AVG, want het gaat om persoonsgegevens",
      "Er is geen overtreding zolang de partner er niets mee doet"
    ],
    juist: 1,
    uitleg: "Artikel 7 Wpg geldt voor iedereen die over politiegegevens beschikt, ook buiten werktijd en ook tegenover personen in de privésfeer. Het feit dat Sandra's partner bij de gemeente werkt maakt hem niet automatisch bevoegd. De geheimhoudingsplicht kent slechts beperkte uitzonderingen beschreven in de verstrekkingsbepalingen van de Wpg."
  },
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

  // ============================================================
  // THEMA 7: Dagelijkse opsporingstaak (Art. 8 lid 1 en 2)
  // ============================================================
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
    uitleg: "Artikel 8 lid 1 en 2 Wpg zijn van toepassing zodra een BOA optreedt als opsporingsambtenaar bij een strafbaar feit. De afdoening — waarschuwing of boete — is niet bepalend. Varen zonder dodemansknop is een strafbaar feit; de gegevens vallen daarmee onder de Wpg."
  },
  {
    vraag: "Welke van de volgende situaties valt onder de dagelijkse opsporingstaak (art. 8 Wpg) en niet onder art. 9?",
    thema: "Dagelijkse opsporingstaak",
    artikel: "Art. 8 lid 1 Wpg",
    opties: [
      "Een stelselmatige observatie waarbij een baken onder een auto wordt geplaatst",
      "Een BOA die een bon uitschrijft voor het verkeerd aanbieden van afval",
      "Een grootschalig onderzoek naar illegale asbestdumping met meerdere opsporingsambtenaren",
      "Een tap op een mobiele telefoon in een opsporingsonderzoek"
    ],
    juist: 1,
    uitleg: "Artikel 8 lid 1 Wpg regelt alledaagse opsporingshandelingen zoals het uitschrijven van een bon. De overige opties zijn voorbeelden van artikel 9-verwerkingen vanwege de grotere inbreuk op de persoonlijke levenssfeer die daarmee gepaard gaat."
  },

  // ============================================================
  // THEMA 8: Bewaartermijnen (Art. 4 lid 2, 8 lid 6, 9 lid 4, 14)
  // ============================================================
  {
    vraag: "Een BOA-organisatie heeft artikel 8-gegevens die 2 jaar oud zijn. Welk regime is op dit moment van toepassing?",
    thema: "Bewaartermijnen",
    artikel: "Art. 8 lid 6 Wpg",
    opties: [
      "Breed gebruik is nog steeds toegestaan, de eerste fase is immers nog niet voorbij",
      "Alleen gericht zoeken is toegestaan; breed gebruik was alleen toegestaan in het eerste jaar",
      "De gegevens mogen al worden vernietigd",
      "De gegevens zijn uitsluitend beschikbaar voor audits en klachten"
    ],
    juist: 1,
    uitleg: "In het eerste jaar mogen artikel 8-gegevens breed worden gebruikt. Daarna, van jaar 2 t/m jaar 5, is alleen gericht zoeken toegestaan — er moet een concrete aanleiding zijn. Bij 2 jaar oude gegevens geldt dus het gerichte zoekregime."
  },
  {
    vraag: "Een BOA-organisatie heeft artikel 8-gegevens die 6 jaar oud zijn. Wat is het juiste regime?",
    thema: "Bewaartermijnen",
    artikel: "Art. 8 lid 6 jo. art. 14 Wpg",
    opties: [
      "Gericht zoeken is nog steeds toegestaan",
      "De gegevens zijn uitsluitend beschikbaar voor audits en klachten; delen is niet meer toegestaan",
      "De gegevens moeten direct worden vernietigd",
      "Breed gebruik is opnieuw toegestaan na heropening van een zaak"
    ],
    juist: 1,
    uitleg: "Na 5 jaar actieve verwerking begint de bewaartermijn van nogmaals 5 jaar. In die periode zijn gegevens uitsluitend beschikbaar voor audits en klachten — ze mogen niet meer worden gedeeld of operationeel worden gebruikt. Na 10 jaar totaal is vernietiging verplicht."
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
    uitleg: "Artikel 9 lid 4 Wpg bepaalt dat na het bereiken van het doel de bevoegd functionaris nog 6 maanden heeft om gegevens aan te bieden aan collega's voor hergebruik. Daarna volgt een bewaartermijn van 5 jaar, waarna artikel 14 Wpg verplicht tot vernietiging."
  },

  // ============================================================
  // THEMA 9: Verstrekking aan derden (Art. 16, 18, 19, 21, 22)
  // ============================================================
  {
    vraag: "BOA organisatie A werkt samen met een lokale woningbouwvereniging via een rechtsgeldig veiligheidsconvenant. De woningbouwvereniging vraagt om gegevens over overlastgevers. Mag de BOA-organisatie deze gegevens verstrekken?",
    thema: "Verstrekking aan derden",
    artikel: "Art. 19 jo. art. 32 Wpg",
    opties: [
      "Nee, verstrekking aan private partijen is altijd verboden",
      "Ja, maar alleen als er een rechtsgeldig convenant is, de verstrekking noodzakelijk is én wordt vastgelegd",
      "Ja, altijd als er een convenant is, zonder verdere voorwaarden",
      "Alleen als de betrokkene zelf toestemming heeft gegeven"
    ],
    juist: 1,
    uitleg: "Artikel 19 Wpg maakt verstrekking aan samenwerkingspartners onder voorwaarden mogelijk. Er moet een rechtsgeldig convenant zijn, de verstrekking moet noodzakelijk zijn én elke verstrekking moet worden vastgelegd conform artikel 32 Wpg. Zonder vastlegging voldoet de organisatie niet aan haar documentatieplicht."
  },
  {
    vraag: "Onder welke voorwaarden mag een BOA politiegegevens verstrekken aan een partij buiten het Wpg-domein?",
    thema: "Verstrekking aan derden",
    artikel: "Art. 16, 18, 19, 21 en 22 Wpg",
    opties: [
      "Als de ontvanger erom vraagt en het doel nuttig lijkt",
      "Alleen als er een wettelijke grondslag is, het doel duidelijk is en de verstrekking noodzakelijk is",
      "Als de leidinggevende mondeling toestemming geeft",
      "Altijd, zolang de gegevens geanonimiseerd zijn"
    ],
    juist: 1,
    uitleg: "Artikelen 16, 18, 19, 21 en 22 Wpg regelen de verstrekking van politiegegevens buiten het Wpg-domein. Verstrekking is alleen toegestaan als er een expliciete wettelijke grondslag is, het doel duidelijk is en de verstrekking noodzakelijk is. Elke verstrekking moet worden vastgelegd."
  },

  // ============================================================
  // THEMA 10: Documentatie (Art. 32 lid 1-4)
  // ============================================================
  {
    vraag: "Een burger dient een inzageverzoek in en vraagt ook met wie zijn gegevens zijn gedeeld. BOA organisatie X heeft geen overzicht bijgehouden van verstrekkingen. Wat is het probleem?",
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 Wpg",
    opties: [
      "Er is geen probleem; dit hoeft niet bijgehouden te worden",
      "De organisatie voldoet niet aan de documentatieplicht en kan het inzageverzoek niet correct afhandelen",
      "De burger heeft geen recht om te weten met wie zijn gegevens zijn gedeeld",
      "Dit is alleen een probleem bij artikel 9-gegevens"
    ],
    juist: 1,
    uitleg: "Artikel 32 lid 1 Wpg verplicht het vastleggen van alle verstrekkingen. Bij een inzageverzoek moet ook worden medegedeeld aan welke partijen gegevens zijn verstrekt. Zonder registratie kan de organisatie hier niet aan voldoen en schiet zij tekort in haar verantwoordingsplicht."
  },
  {
    vraag: "Welke vier categorieën moet een BOA-organisatie verplicht documenteren op grond van de Wpg?",
    thema: "Documentatie",
    artikel: "Art. 32 lid 1 t/m 4 Wpg",
    opties: [
      "Audits, datalekken, logging en autorisaties",
      "Verstrekkingen, artikel 9-doeleinden, datalekken en besluiten op inzageverzoeken (inclusief afwijzingen)",
      "Verwerkingen, bewaartermijnen, autorisaties en logging",
      "Processen-verbaal, boetes, waarschuwingen en inzageverzoeken"
    ],
    juist: 1,
    uitleg: "Artikel 32 lid 1 t/m 4 Wpg verplicht documentatie van alle verstrekkingen, artikel 9-doeleinden, datalekken en besluiten op inzageverzoeken. Dat laatste omvat uitdrukkelijk ook afwijzingen: ook een geweigerd inzageverzoek moet worden vastgelegd, zodat achteraf kan worden aangetoond dat het besluit rechtmatig tot stand is gekomen."
  },
  {
    vraag: "Een BOA-organisatie wijst een inzageverzoek af omdat de betrokkene al eerder een verzoek heeft ingediend. Moet dit worden gedocumenteerd?",
    thema: "Documentatie",
    artikel: "Art. 32 lid 4 Wpg",
    opties: [
      "Nee, alleen gehonoreerde inzageverzoeken hoeven te worden vastgelegd",
      "Ja, elk besluit op een inzageverzoek moet worden gedocumenteerd, ook afwijzingen",
      "Alleen als de betrokkene bezwaar maakt",
      "Alleen als de afwijzing schriftelijk is medegedeeld"
    ],
    juist: 1,
    uitleg: "Artikel 32 lid 4 Wpg verplicht het documenteren van alle besluiten op inzageverzoeken, inclusief afwijzingen. Zonder documentatie van een afwijzing kan later niet worden aangetoond dat het besluit rechtmatig tot stand is gekomen. Dit geldt ongeacht de reden van afwijzing."
  },

  // ============================================================
  // THEMA 11: Logging (Art. 32a)
  // ============================================================
  {
    vraag: "Een medewerker raadpleegt zonder aanwijsbare reden gegevens over een bekende persoon. Welke verplichting maakt het mogelijk dit achteraf vast te stellen?",
    thema: "Logging",
    artikel: "Art. 32a Wpg",
    opties: [
      "De documentatieplicht van art. 32 Wpg",
      "De loggingsverplichting die alle toegang tot politiegegevens automatisch registreert",
      "De geheimhoudingsplicht van art. 7 Wpg",
      "De autorisatieverplichting van art. 6 Wpg"
    ],
    juist: 1,
    uitleg: "Artikel 32a Wpg verplicht logging van alle toegang tot politiegegevens. Logging maakt het mogelijk achteraf te controleren wie wanneer welke gegevens heeft ingezien of bewerkt. Zonder logging kan ongeautoriseerde toegang niet worden vastgesteld."
  },
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
    uitleg: "Artikel 32a Wpg verplicht logging van alle toegang tot en handelingen met politiegegevens. Het doel is dat achteraf controleerbaar is wie wanneer welke gegevens heeft ingezien of bewerkt. Een systeem zonder logging of met uitgeschakelde logging voldoet niet aan de Wpg."
  },

  // ============================================================
  // THEMA 12: Meldplicht datalekken (Art. 33a)
  // ============================================================
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
    uitleg: "Artikel 33a Wpg verplicht het melden van elk datalek, ongeacht de oorzaak. Een onbedoelde verstrekking aan een onbevoegde is een inbreuk op de beveiliging van politiegegevens en moet altijd worden gemeld. De intentie speelt geen rol bij de meldplicht."
  },
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
  }

];
