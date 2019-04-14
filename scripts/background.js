'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({url: "https://github.com/leontaolong/tgsb"})
});

var checked = false;

chrome.runtime.onMessage.addListener(
  function gotMessage(message, sender, sendResponse) {
    if (message.text == 'detected' && message.type == "detector" && checked) {
      chrome.tabs.create({url: "../pages/index.html"})
    } else if (message.text == "check" && message.type == "if_use") {
      checked = true;
      console.log("true, "+message.text)
    } else if (message.text == "uncheck" && message.type == "if_use") {
      checked = false;
      console.log("false, "+message.text)
    } else {
      sendResponse({error: "Incorrect message parser."})
    }
  }
)

