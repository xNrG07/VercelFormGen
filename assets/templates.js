/* ============================================================
   templates.js – Vorlagen-Daten
   ============================================================ */

export const TEMPLATES = [
  {
    id: "kuendigung",
    title: "Kündigung (Allgemein)",
    description: "Vertrag, Mitgliedschaft oder Abo ordentlich kündigen.",
    icon: "📄",
    category: "Verträge",
    url: "vorlagen/kuendigung.html",
    requiredFields: [
      { id: "absender_name",       label: "Ihr vollständiger Name",                   type: "text",     placeholder: "Max Mustermann" },
      { id: "absender_adresse",    label: "Ihre Adresse (Straße, PLZ, Ort)",          type: "text",     placeholder: "Musterstraße 1, 1010 Wien" },
      { id: "empfaenger_name",     label: "Empfänger (Unternehmen/Person)",           type: "text",     placeholder: "Muster GmbH" },
      { id: "empfaenger_adresse",  label: "Adresse des Empfängers",                   type: "text",     placeholder: "Beispielgasse 5, 1020 Wien" },
      { id: "vertrag_bezeichnung", label: "Bezeichnung des Vertrags/Abonnements",     type: "text",     placeholder: "Mitgliedschaft Nr. 12345" },
      { id: "kuendigung_zum",      label: "Kündigung zum (Datum)",                    type: "text",     placeholder: "30.06.2026 oder nächstmöglichen Termin" }
    ],
    optionalFields: [
      { id: "kundennummer",        label: "Kundennummer / Vertragsnummer",            type: "text",     placeholder: "KD-98765" },
      { id: "kuendigung_grund",    label: "Kurze Begründung (optional)",              type: "textarea", placeholder: "z. B. Umzug, persönliche Gründe" }
    ],
    toneOptions: ["neutral", "freundlich", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Kündigung – {vertrag_bezeichnung}

Sehr geehrte Damen und Herren,

hiermit kündige ich den oben genannten Vertrag ({vertrag_bezeichnung}){kundennummer_zeile} ordentlich und fristgerecht zum {kuendigung_zum}.

{kuendigung_grund_zeile}Ich bitte um eine schriftliche Bestätigung der Kündigung.

Mit freundlichen Grüßen

{absender_name}`,
      freundlich: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Kündigung – {vertrag_bezeichnung}

Sehr geehrte Damen und Herren,

ich wende mich heute an Sie, um meinen bestehenden Vertrag ({vertrag_bezeichnung}){kundennummer_zeile} zum {kuendigung_zum} zu kündigen.

{kuendigung_grund_zeile}Für die bisherige Zusammenarbeit bedanke ich mich herzlich und bitte um eine Kündigungsbestätigung.

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: KÜNDIGUNG – {vertrag_bezeichnung} – zum {kuendigung_zum}

Sehr geehrte Damen und Herren,

ich kündige hiermit den Vertrag „{vertrag_bezeichnung}"{kundennummer_zeile} fristgerecht und ausdrücklich zum {kuendigung_zum}.

{kuendigung_grund_zeile}Eine schriftliche Kündigungsbestätigung wird binnen 14 Tagen erbeten.

Mit freundlichen Grüßen

{absender_name}`
    }
  },

  {
    id: "maengelruege",
    title: "Mängelrüge",
    description: "Mangelhafte Ware oder fehlerhafte Dienstleistung reklamieren.",
    icon: "⚠️",
    category: "Verbraucher",
    url: "vorlagen/maengelruege.html",
    requiredFields: [
      { id: "absender_name",      label: "Ihr vollständiger Name",                   type: "text",     placeholder: "Maria Musterfrau" },
      { id: "absender_adresse",   label: "Ihre Adresse",                             type: "text",     placeholder: "Hauptstraße 10, 8010 Graz" },
      { id: "empfaenger_name",    label: "Händler / Unternehmen",                    type: "text",     placeholder: "Elektro Müller GmbH" },
      { id: "empfaenger_adresse", label: "Adresse des Händlers",                     type: "text",     placeholder: "Gewerbestraße 3, 8020 Graz" },
      { id: "produkt",            label: "Produkt / Dienstleistung",                 type: "text",     placeholder: "Waschmaschine Modell XY, Kauf 15.01.2026" },
      { id: "mangel",             label: "Beschreibung des Mangels",                 type: "textarea", placeholder: "Das Gerät zeigt folgendes Problem: ..." },
      { id: "forderung",          label: "Gewünschte Lösung",                        type: "text",     placeholder: "Reparatur, Austausch oder Rückerstattung" },
      { id: "frist",              label: "Frist zur Mängelbeseitigung",              type: "text",     placeholder: "14 Tage ab Eingang dieses Schreibens" }
    ],
    optionalFields: [
      { id: "bestellnummer",      label: "Bestellnummer / Rechnungsnummer",          type: "text",     placeholder: "RE-2026-00451" }
    ],
    toneOptions: ["neutral", "freundlich", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Mängelrüge – {produkt}{bestellnummer_zeile}

Sehr geehrte Damen und Herren,

ich wende mich an Sie bezüglich eines Mangels an folgendem Produkt/folgender Dienstleistung:

Produkt: {produkt}

Festgestellter Mangel:
{mangel}

Ich fordere Sie auf, den Mangel innerhalb von {frist} zu beheben bzw. {forderung}. Sollte keine zufriedenstellende Lösung erfolgen, behalte ich mir weitere rechtliche Schritte vor.

Mit freundlichen Grüßen

{absender_name}`,
      freundlich: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Reklamation – {produkt}{bestellnummer_zeile}

Sehr geehrte Damen und Herren,

ich wende mich an Sie, weil ich mit folgendem Produkt leider ein Problem habe:

Produkt: {produkt}

Festgestellter Mangel:
{mangel}

Ich würde mich über eine schnelle und unkomplizierte Lösung freuen und bitte um: {forderung}. Als angemessene Frist schlage ich {frist} vor.

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: MÄNGELRÜGE / FRISTSETZUNG – {produkt}{bestellnummer_zeile}

Sehr geehrte Damen und Herren,

ich rüge hiermit ausdrücklich folgenden Mangel:

Produkt/Leistung: {produkt}
Mangelbeschreibung: {mangel}

Ich setze Ihnen eine Frist bis {frist} zur Behebung des Mangels bzw. zur {forderung}. Nach Ablauf dieser Frist werde ich rechtliche Schritte einleiten.

Mit freundlichen Grüßen

{absender_name}`
    }
  },

  {
    id: "widerruf-onlinekauf",
    title: "Widerruf Onlinekauf",
    description: "Online-Bestellung innerhalb der gesetzlichen 14-Tage-Frist widerrufen.",
    icon: "🔄",
    category: "Verbraucher",
    url: "vorlagen/widerruf-onlinekauf.html",
    requiredFields: [
      { id: "absender_name",      label: "Ihr vollständiger Name",                   type: "text",     placeholder: "Thomas Muster" },
      { id: "absender_adresse",   label: "Ihre Adresse",                             type: "text",     placeholder: "Ringstraße 7, 4020 Linz" },
      { id: "empfaenger_name",    label: "Onlineshop / Unternehmen",                 type: "text",     placeholder: "ShopBrand GmbH" },
      { id: "empfaenger_adresse", label: "Widerrufsadresse des Shops",               type: "text",     placeholder: "Kundenservice, Musterweg 1, 10115 Berlin" },
      { id: "bestellung",         label: "Bestellnummer / Artikel",                  type: "text",     placeholder: "Bestellnr. 2026-88921, Jacke Modell XY" },
      { id: "bestell_datum",      label: "Datum der Bestellung",                     type: "text",     placeholder: "18.02.2026" },
      { id: "erhalt_datum",       label: "Datum des Erhalts der Ware",               type: "text",     placeholder: "22.02.2026" }
    ],
    optionalFields: [
      { id: "rueckgabe_info",     label: "Hinweis zur Rücksendung (optional)",       type: "text",     placeholder: "Paket wird retourniert / bereits versendet am ..." }
    ],
    toneOptions: ["neutral", "freundlich", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Widerruf meiner Bestellung – {bestellung}

Sehr geehrte Damen und Herren,

hiermit widerrufe ich gemäß § 11 FAGG (Österreich) / § 355 BGB (Deutschland) meinen Kaufvertrag über folgende Bestellung:

Bestellung: {bestellung}
Bestelldatum: {bestell_datum}
Erhalt der Ware: {erhalt_datum}
{rueckgabe_info_zeile}
Ich bitte um Bestätigung des Widerrufs sowie um Rückerstattung des Kaufpreises.

Mit freundlichen Grüßen

{absender_name}`,
      freundlich: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Widerruf – Bestellung {bestellung}

Sehr geehrte Damen und Herren,

ich möchte von meinem gesetzlichen Widerrufsrecht Gebrauch machen und widerrufe meine Bestellung ({bestellung}, aufgegeben am {bestell_datum}, erhalten am {erhalt_datum}).
{rueckgabe_info_zeile}
Bitte bestätigen Sie den Widerruf und veranlassen Sie die Rückerstattung. Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: WIDERRUF – Bestellung {bestellung} – Fristsetzung Rückerstattung

Sehr geehrte Damen und Herren,

ich erkläre hiermit den ausdrücklichen Widerruf meines Kaufvertrags:

Bestellung: {bestellung}
Bestelldatum: {bestell_datum}
Warenzugang: {erhalt_datum}
Rechtsgrundlage: § 11 FAGG / § 355 BGB i.V.m. EU-Verbraucherrechterichtlinie 2011/83/EU.
{rueckgabe_info_zeile}
Ich erwarte die vollständige Rückerstattung des Kaufpreises binnen 14 Tagen.

Mit freundlichen Grüßen

{absender_name}`
    }
  },

  {
    id: "mahnung",
    title: "Zahlungserinnerung / Mahnung",
    description: "Offene Rechnung höflich oder bestimmt anmahnen.",
    icon: "💶",
    category: "Finanzen",
    url: "vorlagen/mahnung.html",
    requiredFields: [
      { id: "absender_name",      label: "Ihr Name / Firmenname",                    type: "text",     placeholder: "Lisa Muster" },
      { id: "absender_adresse",   label: "Ihre Adresse",                             type: "text",     placeholder: "Bahnhofstraße 2, 6020 Innsbruck" },
      { id: "empfaenger_name",    label: "Schuldner (Name/Firma)",                   type: "text",     placeholder: "Kunde Müller" },
      { id: "empfaenger_adresse", label: "Adresse des Schuldners",                   type: "text",     placeholder: "Testgasse 4, 5020 Salzburg" },
      { id: "rechnungsnummer",    label: "Rechnungsnummer",                          type: "text",     placeholder: "RE-2026-042" },
      { id: "rechnungsbetrag",    label: "Offener Betrag (inkl. Währung)",           type: "text",     placeholder: "€ 350,00" },
      { id: "rechnungsdatum",     label: "Rechnungsdatum",                           type: "text",     placeholder: "01.02.2026" },
      { id: "zahlungsfrist",      label: "Neue Zahlungsfrist bis",                   type: "text",     placeholder: "16.03.2026" }
    ],
    optionalFields: [
      { id: "mahnung_nr",         label: "Mahnstufe (1. / 2. / 3. Mahnung)",        type: "text",     placeholder: "1. Mahnung" },
      { id: "mahngebuehr",        label: "Mahngebühr (optional)",                   type: "text",     placeholder: "€ 10,00 Bearbeitungsgebühr" }
    ],
    toneOptions: ["neutral", "freundlich", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Zahlungserinnerung – Rechnung {rechnungsnummer} vom {rechnungsdatum}

Sehr geehrte Damen und Herren,

möglicherweise hat sich Ihre Zahlung mit diesem Schreiben gekreuzt. Falls nicht, möchten wir Sie darauf hinweisen, dass folgende Rechnung noch offen ist:

Rechnungsnummer: {rechnungsnummer}
Rechnungsdatum: {rechnungsdatum}
Offener Betrag: {rechnungsbetrag}{mahngebuehr_zeile}

Wir bitten um Überweisung bis spätestens {zahlungsfrist}.

Mit freundlichen Grüßen

{absender_name}`,
      freundlich: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Freundliche Erinnerung – Rechnung {rechnungsnummer}

Sehr geehrte Damen und Herren,

wir erlauben uns, Sie freundlich an die folgende offene Rechnung zu erinnern:

Rechnungsnummer: {rechnungsnummer}
Rechnungsdatum: {rechnungsdatum}
Offener Betrag: {rechnungsbetrag}

Sollte die Zahlung bereits veranlasst worden sein, betrachten Sie dieses Schreiben bitte als gegenstandslos. Andernfalls bitten wir um Begleichung bis {zahlungsfrist}.

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: {mahnung_nr_titel}– Rechnung {rechnungsnummer} – LETZTE FRISTSETZUNG

Sehr geehrte Damen und Herren,

trotz unserer vorherigen Zahlungsaufforderung ist folgende Rechnung weiterhin unbeglichen:

Rechnungsnummer: {rechnungsnummer}
Rechnungsdatum: {rechnungsdatum}
Offener Betrag: {rechnungsbetrag}{mahngebuehr_zeile}

Wir setzen Ihnen hiermit eine letzte Frist bis {zahlungsfrist}. Nach Ablauf werden wir ohne weitere Ankündigung rechtliche Schritte einleiten.

Mit freundlichen Grüßen

{absender_name}`
    }
  },

  {
    id: "dsgvo-auskunft",
    title: "DSGVO-Auskunftsersuchen",
    description: "Auskunft über gespeicherte Daten gemäß Art. 15 DSGVO verlangen.",
    icon: "🔒",
    category: "Datenschutz",
    url: "vorlagen/dsgvo-auskunft.html",
    requiredFields: [
      { id: "absender_name",      label: "Ihr vollständiger Name",                   type: "text",     placeholder: "Anna Mustermann" },
      { id: "absender_adresse",   label: "Ihre Adresse",                             type: "text",     placeholder: "Friedrichstraße 12, 10117 Berlin" },
      { id: "absender_email",     label: "Ihre E-Mail-Adresse",                      type: "text",     placeholder: "anna@beispiel.at" },
      { id: "empfaenger_name",    label: "Verantwortliche Stelle (Firma)",           type: "text",     placeholder: "Beispiel AG" },
      { id: "empfaenger_adresse", label: "Adresse / Datenschutzbeauftragter",        type: "text",     placeholder: "Datenschutz, Beispielstr. 1, 1010 Wien" }
    ],
    optionalFields: [
      { id: "kundennummer",       label: "Kundennummer / Benutzer-ID",               type: "text",     placeholder: "KD-00123 oder Benutzer: anna@beispiel.at" },
      { id: "zusatz_fragen",      label: "Weitere spezifische Fragen",               type: "textarea", placeholder: "z. B. An welche Drittparteien wurden meine Daten weitergegeben?" }
    ],
    toneOptions: ["neutral", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}
E-Mail: {absender_email}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Auskunftsersuchen gemäß Art. 15 DSGVO{kundennummer_zeile}

Sehr geehrte Damen und Herren,

gemäß Art. 15 der Datenschutz-Grundverordnung (DSGVO) ersuche ich Sie um vollständige Auskunft über die zu meiner Person gespeicherten personenbezogenen Daten.

Konkret bitte ich um Auskunft über:
1. Die verarbeiteten Kategorien personenbezogener Daten
2. Die Verarbeitungszwecke und Rechtsgrundlagen
3. Die Empfänger oder Kategorien von Empfängern
4. Die geplante Speicherdauer
5. Das Bestehen eines Rechts auf Berichtigung, Löschung oder Einschränkung
6. Das Beschwerderecht bei einer Aufsichtsbehörde
7. Die Herkunft der Daten (soweit nicht direkt erhoben)
{zusatz_fragen_zeile}
Gemäß Art. 12 Abs. 3 DSGVO bitte ich um Beantwortung binnen eines Monats.

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}
E-Mail: {absender_email}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: AUSKUNFTSERSUCHEN Art. 15 DSGVO – FRIST 30 TAGE{kundennummer_zeile}

Sehr geehrte Damen und Herren,

ich mache von meinem Auskunftsrecht gemäß Art. 15 DSGVO Gebrauch und fordere Sie auf, mir binnen 30 Tagen (Art. 12 Abs. 3 DSGVO) vollständige Auskunft zu erteilen:

1. Alle gespeicherten personenbezogenen Daten (Kopie gem. Art. 15 Abs. 3 DSGVO)
2. Verarbeitungszwecke und Rechtsgrundlagen (Art. 6 DSGVO)
3. Empfänger und Drittländerübermittlungen inkl. Garantien
4. Speicherfristen
5. Herkunft der Daten
6. Automatisierte Entscheidungsfindung/Profiling (Art. 22 DSGVO)
{zusatz_fragen_zeile}
Bei Nichteinhaltung der Frist werde ich Beschwerde bei der zuständigen Datenschutzbehörde einreichen.

Mit freundlichen Grüßen

{absender_name}`
    }
  },

  {
    id: "widerspruch-bescheid",
    title: "Widerspruch gegen Bescheid (DE)",
    description: "Deutschland: Gegen einen behördlichen Bescheid fristgerecht Widerspruch einlegen. In Österreich ist stattdessen oft eine Beschwerde vorgesehen.",
    icon: "🏛️",
    category: "Behörden",
    url: "generator.html?template=widerspruch-bescheid",
    requiredFields: [
      { id: "absender_name",             label: "Ihr vollständiger Name",                type: "text",     placeholder: "Peter Mustermann" },
      { id: "absender_adresse",          label: "Ihre Adresse",                          type: "text",     placeholder: "Alpenstraße 3, 5020 Salzburg" },
      { id: "empfaenger_name",           label: "Behörde / Amt",                         type: "text",     placeholder: "Finanzamt Salzburg-Stadt" },
      { id: "empfaenger_adresse",        label: "Adresse der Behörde",                   type: "text",     placeholder: "Aignerstraße 10, 5026 Salzburg" },
      { id: "bescheid_datum",            label: "Datum des Bescheids",                   type: "text",     placeholder: "10.02.2026" },
      { id: "bescheid_nr",               label: "Geschäftszahl / Aktenzeichen",          type: "text",     placeholder: "GZ 123-456/2026" },
      { id: "widerspruch_begruendung",   label: "Begründung des Widerspruchs",           type: "textarea", placeholder: "Der Bescheid ist aus folgenden Gründen unrichtig: ..." }
    ],
    optionalFields: [
      { id: "beilagen",                  label: "Beilagen (Dokumente)",                  type: "text",     placeholder: "Kopie Bescheid, Nachweis XY" }
    ],
    toneOptions: ["neutral", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: Widerspruch gegen Bescheid vom {bescheid_datum}, GZ {bescheid_nr}

Sehr geehrte Damen und Herren,

gegen den Bescheid vom {bescheid_datum} mit der Geschäftszahl {bescheid_nr} erhebe ich hiermit fristgerecht Widerspruch.

Begründung:
{widerspruch_begruendung}

Ich beantrage die Aufhebung bzw. Abänderung des angefochtenen Bescheids.{beilagen_zeile}

Mit freundlichen Grüßen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{empfaenger_name}
{empfaenger_adresse}

Betreff: WIDERSPRUCH – Bescheid {bescheid_nr} vom {bescheid_datum}

Sehr geehrte Damen und Herren,

ich erhebe gegen den Bescheid vom {bescheid_datum} (GZ: {bescheid_nr}) fristgerecht und ausdrücklich Widerspruch.

Begründung:
{widerspruch_begruendung}

Ich beantrage die ersatzlose Aufhebung des Bescheids, hilfsweise dessen Abänderung zu meinen Gunsten. Ergänzende Unterlagen bleiben vorbehalten.{beilagen_zeile}

Mit freundlichen Grüßen

{absender_name}`
    }
  }
  ,{
    id: "mietminderung",
    title: "Mietminderung",
    description: "Wohnungsmangel melden und eine Mietminderung vorbereiten – mit allgemeinen Hinweisen fuer Oesterreich und Deutschland.",
    icon: "\u{1F3E0}",
    category: "Wohnen",
    url: "vorlagen/mietminderung.html",
    requiredFields: [
      { id: "absender_name",     label: "Ihr vollstaendiger Name",           type: "text",     placeholder: "Maria Muster" },
      { id: "absender_adresse",  label: "Ihre Adresse (Mietobjekt)",         type: "text",     placeholder: "Hauptstrasse 5, 1010 Wien" },
      { id: "vermieter_name",    label: "Name des Vermieters / Verwaltung",  type: "text",     placeholder: "Hausverwaltung GmbH" },
      { id: "vermieter_adresse", label: "Adresse des Vermieters",            type: "text",     placeholder: "Ringstrasse 1, 1010 Wien" },
      { id: "mangel",            label: "Beschreibung des Mangels",          type: "textarea", placeholder: "Heizungsausfall seit dem 01.02.2026." },
      { id: "mangel_seit",       label: "Mangel vorhanden seit",             type: "text",     placeholder: "01.02.2026" },
      { id: "minderung_prozent", label: "Minderungsbetrag (% oder Euro)",    type: "text",     placeholder: "20 % der Nettomiete" },
      { id: "frist",             label: "Frist zur Maengelbehebung",         type: "text",     placeholder: "14 Tage ab Eingang dieses Schreibens" }
    ],
    optionalFields: [
      { id: "nachweise",         label: "Beweise / Nachweise",               type: "text",     placeholder: "Fotos vorhanden" }
    ],
    toneOptions: ["neutral", "bestimmt"],
    bodyTemplate: {
      neutral: `{absender_name}
{absender_adresse}

{datum}

{vermieter_name}
{vermieter_adresse}

Betreff: Maengelanzeige betreffend Mietobjekt – {absender_adresse}

Sehr geehrte Damen und Herren,

ich zeige Ihnen hiermit an, dass in der von mir gemieteten Wohnung folgender Mangel besteht:

{mangel}

Der Mangel besteht seit {mangel_seit} und beeintraechtigt die vertragsgemaesse Nutzung erheblich.

Ich fordere Sie auf, den Mangel bis {frist} zu beheben.

Aufgrund des Mangels halte ich eine Mietzins- bzw. Mietminderung in Hoehe von {minderung_prozent} fuer angemessen. Ich ersuche Sie um rasche Behebung und behalte mir vor, meine Rechte nach fruchtlosem Ablauf der Frist entsprechend geltend zu machen.

Mit freundlichen Gruessen

{absender_name}`,
      bestimmt: `{absender_name}
{absender_adresse}

{datum}

{vermieter_name}
{vermieter_adresse}

Betreff: MAENGELANZEIGE betreffend Mietobjekt – {absender_adresse}

Sehr geehrte Damen und Herren,

ich zeige hiermit ausdruecklich folgenden Mangel in der Mietwohnung an:

{mangel}

Dieser Mangel besteht seit {mangel_seit} und verletzt die Pflicht zur Ueberlassung einer mangelfreien Mietsache.

Ich setze Ihnen eine Frist bis {frist} zur vollstaendigen Behebung des Mangels.

Fuer die Dauer der erheblichen Beeintraechtigung kuendige ich an, eine angemessene Mietzins- bzw. Mietminderung in Hoehe von {minderung_prozent} geltend zu machen. Eine endgueltige rechtliche Bewertung des Einzelfalls bleibt vorbehalten.

Sollte keine Behebung erfolgen, behalte ich mir weitere rechtliche Schritte ausdruecklich vor.

Mit freundlichen Gruessen

{absender_name}`
    }
  }

];

export function getTemplateById(id) {
  return TEMPLATES.find(t => t.id === id) || null;
}
