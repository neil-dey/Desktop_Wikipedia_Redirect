chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    return {
      redirectUrl: "https://"+ details.url.match((^https?:\/\/)(.+?(?=\.m\.|.wikipedia))u)[2] + ".wikipedia.org" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
    };
  },
  {
    urls: [
      "*m.wikipedia.org/*"
    ],
    types: [
      "main_frame",
      "sub_frame",
    ]
  },
  ["blocking"]
)
