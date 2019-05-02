module.exports = {
  "dataElements": {
    "CheckInput": {
      "modulePath": "clean-string-util/src/lib/dataElements/cleanTextExt.js",
      "settings": {
        "value": "%andrew+     -*/roDRiguez"
      },
      "storageDuration": "pageview",
      "forceLowerCase": false,
      "cleanText": false
    }
  },
  "rules": [{
    "id": "RL1556796691200",
    "name": "TestRule",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "sandbox/logEventInfo.js",
      "settings": {}
    }]
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "company": {
    "orgId": "5F9B8A1A54FA14BA0A4C98A6@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "25.4.1",
    "turbineBuildDate": "2019-05-02T11:50:40.733Z",
    "buildDate": "2019-05-02T11:50:40.733Z",
    "environment": "development"
  }
}