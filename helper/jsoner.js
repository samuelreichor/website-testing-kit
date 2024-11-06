const fs = require('fs');

const refUrl = 'https://stage.sturm.fredmansky.com'
const testBaseUrl = 'https://sksturm.at'

const urlArr = {
  pages: [
      "https://sksturm.at/en/c/klub",
  ],
  squadsAndPlayers: [
    "https://sksturm.at/en/t/profis/squad",
  ],
  'schedules-tables': [
    "https://sksturm.at/en/t/profis/schedule",
  ]
}



function formatUrls(urlArray) {
    return urlArray.map(url => {
        const label = url.replace(testBaseUrl, "");
        return {
            label: label,
            url: url,
            referenceUrl: `${refUrl}${label}`,
            delay: 200,
            misMatchThreshold: 0.1,
            requireSameDimensions: true
        };
    });
}

Object.entries(urlArr).forEach(([key, urls]) => {
  const formattedUrls = formatUrls(urls);

  fs.writeFile(`/scenarios/${key}.json`, JSON.stringify(formattedUrls, null, 2), (err) => {
    if (err) {
      console.error(`Fehler beim Speichern der Datei ${key}.json:`, err);
    } else {
      console.log(`Die Datei ${key}.json wurde erfolgreich gespeichert.`);
    }
  });
});
