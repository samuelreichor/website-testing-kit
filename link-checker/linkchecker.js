const http = require("http");
const https = require("https");

// List of all urls to check (use http with docker url when using ddev)
const urls = [
  "http://127.0.0.1:32771/suche?q=Studieng%C3%A4nge",
  "http://127.0.0.1:32771/suche?q=Bewerbung",
  "http://127.0.0.1:32771/suche?q=Mechatronik",
]

function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith("https") ? https : http;
    
    const req = protocol.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ url, status: "✅ OK", code: res.statusCode });
      } else {
        resolve({ url, status: "❌ ERROR", code: res.statusCode });
      }
    });

    req.on("error", () => resolve({ url, status: "❌ ERROR", code: "No Response" }));
    req.end();
  });
}

async function checkAllUrls() {
  console.log("\n🔍 Checking URLs...\n");
  
  const results = await Promise.all(urls.map(checkUrl));

  results.forEach(({ url, status, code }) => {
    console.log(`${status} [${code}] → ${url}`);
  });

  console.log("\n✅ Check complete.");
}

checkAllUrls();
