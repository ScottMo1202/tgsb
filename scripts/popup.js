'use strict';

window.onload = function() {
    Initialize();
}

function Initialize() {
    var if_use = document.querySelector("input");
    chrome.runtime.sendMessage({text: "check", type: "if_use"});
    var even = document.querySelector(".even");
    var git = document.querySelector(".github");
    var mail = document.querySelector(".mail");
    even.onclick = function() {
        chrome.tabs.create({url: "https://evenfinancial.com"})
    };
    git.onclick = function() {
        chrome.tabs.create({url: "https://github.com/leontaolong/tgsb"})
    };
    mail.onclick = function() {
        chrome.tabs.create({url: "mailto:johnny.xcy1997@gmail.com"})
    };
    if_use.onchange = check_change;
}

function check_change() {
    if (this.checked) {
        chrome.runtime.sendMessage({text: "check", type: "if_use"});
    } else {
        chrome.runtime.sendMessage({text: "uncheck", type: "if_use"});
    }
}