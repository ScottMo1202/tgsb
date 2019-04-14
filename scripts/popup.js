'use strict';

window.onload = function() {
    var if_use = document.querySelector("input")
    if (if_use.checked) {
        chrome.runtime.sendMessage({using: "checked"});
    } else {
        chrome.runtime.sendMessage({using: "not_checked"});
    }
    if_use.onchange = function() {
        if (if_use.checked) {
            chrome.runtime.sendMessage({using: "checked"});
        } else {
            chrome.runtime.sendMessage({using: "not_checked"});
        }
    }
}