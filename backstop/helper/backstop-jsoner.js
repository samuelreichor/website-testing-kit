const fs = require('fs');
// Base Url of reference instance
const refUrl = 'https://www.fisch-tools.com'

// Base Url of test instance
const testBaseUrl = 'https://fisch-tools.ddev.site:8443'

// array of uris
const urlArr = {
  entryTypesPerSection: [
    'nachrichten/bundesminister-martin-kocher-zu-gast-bei-fisch-tools',
    'nachrichten/michaela-dorfmeister-hat-unseren-goldenen-alu-speed-eisbohrer-im-einsatz',
    'produkte/973praezisions-bohrstaender',
    'nachrichten/messe-wms-in-toronto',
    'nachrichten/betriebsausflug-riegersburg-manufaktur-gölles',
    'nachrichten/schilcherlauf-auf-zu-neuen-limits',
  ]
}

function formatUrls(urlArray) {
  return urlArray.map(url => {
      const label = url
      return {
          label: label,
          url: `${testBaseUrl}/${label}`,
          referenceUrl: `${refUrl}/${label}`,
          delay: 200,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
      };
  });
}

Object.entries(urlArr).forEach(([key, urls]) => {
  const formattedUrls = formatUrls(urls);

  fs.writeFile(`${key}.json`, JSON.stringify(formattedUrls, null, 2), (err) => {
    if (err) {
      console.error(`Fehler beim Speichern der Datei ${key}.json:`, err);
    } else {
      console.log(`Die Datei ${key}.json wurde erfolgreich gespeichert.`);
    }
  });
});
