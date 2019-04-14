'use strict';

window.onload = function() {
    var if_use = document.querySelector("input")
    if (if_use.checked) {
        chrome.runtime.sendMessage({text: "check"});
    } else {
        chrome.runtime.sendMessage({text: "uncheck"});
    }
    if_use.onchange = function() {
        if (if_use.checked) {
            chrome.runtime.sendMessage({text: "check"});
        } else {
            chrome.runtime.sendMessage({text: "uncheck"});
        }
    }
}