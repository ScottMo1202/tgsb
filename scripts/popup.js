'use strict';

window.onload = function () {
    Initialize();
    checkBox();
}

function Initialize() {
    var even = document.querySelector(".even");
    var git = document.querySelector(".github");
    var mail = document.querySelector(".mail");
    var checker = document.querySelector(".switch-input");
    even.onclick = function () {
        chrome.tabs.create({
            url: "https://evenfinancial.com"
        })
    };
    git.onclick = function () {
        chrome.tabs.create({
            url: "https://github.com/leontaolong/tgsb"
        })
    };
    mail.onclick = function () {
        chrome.tabs.create({
            url: "mailto:johnny.xcy1997@gmail.com"
        })
    };
    checker.onchange = change_check;
}

function checkBox() {
    var checker = document.querySelector(".switch-input");
    chrome.storage.sync.get(["check"], function (data) {
        checker.checked = data.check
    });
}

function change_check() {
    var checker = document.querySelector(".switch-input");
    chrome.storage.sync.set({
        "check": checker.checked
    });
    if (checker.checked) {
        chrome.runtime.sendMessage({
            text: "check",
            type: "if_use"
        });
        chrome.browserAction.setIcon({path: "../styles/favicon.png"});
    } else {
        chrome.runtime.sendMessage({
            text: "uncheck",
            type: "if_use"
        });
        chrome.browserAction.setIcon({path: "../styles/favicon_off.png"});
    }
}