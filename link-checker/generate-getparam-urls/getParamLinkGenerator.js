const fs = require("fs");

// Base Url (use http docker url if using ddev)
const BASE_URL = "http://127.0.0.1:32771/suche?q=";

// Define some getparams
const getParams = ['Studiengänge', 'Bewerbung', 'Mechatronik', 'Informatik', 'Wirtschaft', 'Forschung', 'Bibliothek', 'Semesterplan', 'Prüfungsordnung', 'Studiengebühren', 'FH OÖ Login', 'Moodle', 'Campus Linz', 'Campus Wels', 'Campus Steyr', 'Campus Hagenberg', 'ECTS', 'Masterstudium', 'Bachelorstudium', 'Stipendien', 'Studienberatung', 'Aufnahmeprüfung', 'Auslandssemester', 'Lehrveranstaltungen', 'Praktikum', 'Skripten', 'Vorlesungsverzeichnis', 'Studienplan', 'Forschungsprojekte', 'Studentenausweis', 'Mensa', 'Online-Bibliothek', 'Prüfungsanmeldung', 'Studierendenvertretung', 'IT-Support', 'Jobportal', 'Alumni', 'Tutorium', 'Studienabbruch', 'Abschlussarbeit', 'Lehrstuhl', 'Wissenschaftliche Arbeiten', 'Professoren', 'E-Learning', 'Studienanfänger', 'Prüfungszeitraum', 'Studienwechsel', 'Klausuren', 'Studienbeihilfe', 'Studienberatung', 'Rechenzentrum', 'Career Center', 'Stipendium FH OÖ', 'Studiengangwechsel', 'Innovationsförderung', 'Praktikumsbericht', 'Campusplan', 'Bachelorarbeit', 'Studienanforderungen', 'Prüfungstermine', 'Skriptum Download', 'Kursanmeldung', 'Stundenplan', 'Wahlpflichtfächer', 'Forschungsförderung', 'Bibliotheksausweis', 'Campus-WLAN', 'ECTS-Punkte', 'Studienabschluss', 'Studienordnung', 'Online-Kurse', 'FH OÖ News', 'Studierendenheim', 'Campusleben', 'Firmenkooperationen', 'Studentenjobs', 'Forschungsstipendium', 'IT-Services', 'Fachhochschulgesetz', 'Wissenschaftliches Schreiben', 'Studierendenausweis beantragen', 'Bewerbungsfristen', 'Studienplatzvergabe', 'Berufsbegleitendes Studium', 'Lehrveranstaltungsbewertung', 'Projektarbeit', 'Studienfinanzierung', 'Labore', 'Wissenschaftliches Rechnen', 'Forschungslabor', 'Masterarbeit', 'Prüfungsordnung FH OÖ', 'Campus-Bibliothek', 'Klausurtermine', 'Zulassungsvoraussetzungen', 'Prüfungswiederholung', 'Studienzuschuss', 'Hochschulsport', 'Industriekooperationen', 'FH OÖ Kontakt']

function generateUrls(baseUrl, terms) {
  return terms.map(term => `${baseUrl}${encodeURIComponent(term)}`);
}

const urls = generateUrls(BASE_URL, getParams);

const filePath = "generated-urls.json";
fs.writeFileSync(filePath, JSON.stringify(urls, null, 2));

console.log(`✅ URLs wurden erfolgreich in '${filePath}' gespeichert!`);
