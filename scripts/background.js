'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({url: "https://github.com/leontaolong/tgsb"})
});

chrome.runtime.onMessage.addListener(
  function gotMessage(message, sender, sendResponse) {
    if (message.text == 'detected') {
      chrome.tabs.create({url: "../pages/index.html"})
    }
  }
)

