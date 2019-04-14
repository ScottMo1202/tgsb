'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({url: "https://github.com/leontaolong/tgsb"})
});

var checked = false;

chrome.runtime.onMessage.addListener(
  function gotMessage(message, sender, sendResponse) {
    if (message.text == 'detected' && checked) {
      chrome.tabs.create({url: "../pages/index.html"})
    } else if (message.text == "check") {
      checked = true;
      console.log("true"+message.text)
    } else if (message.text == "uncheck") {
      checked = false;
      console.log("false"+message.text)
    } else {
      sendResponse({error: "Incorrect message parser."})
    }
  }
)

