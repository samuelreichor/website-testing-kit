# How to use

Make sure to have backstop installed globally.

```bash
  npm install -g backstopjs
```

## 1. Generate cookie file of ref and test domain

Generate a cookie json file with that browser extension of your ref and test domain 
https://github.com/ktty1220/export-cookie-for-puppeteer

## 2. Add szenarios in the backstop.json

Add arr of szenarios in the backstop json file

## 3. Add cookie file in backstop.json file for ref domain

```json
  "scenarioDefaults": {
    "cookiePath": "stage.sturm.fredmansky.com.cookies.json"
  },
```

## 4. Make some ref images

just run `backstop reference`


## 5. Add cookie file in backstop.json file for test domain

```json
  "scenarioDefaults": {
    "cookiePath": "sksturm.at.cookies.json"
  },
```

## 6. Run tests

just run `backstop test`


## More links

- https://github.com/garris/BackstopJS?tab=readme-ov-file
- https://github.com/ktty1220/export-cookie-for-puppeteer
- Regex for `0 => "`: `^\s*\d+\s*=>\s*"`