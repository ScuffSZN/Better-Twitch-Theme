// ==UserScript==
// @name         Better Twitch Theme
// @namespace    http://scuffed.dev/Better-Twitch-Theme
// @version      0.1
// @description  Better Twitch Theme
// @author       ScuffedDev
// @match        https://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log('[Better Twitch Theme] added!')
            addStyleString(xhr.responseText);
        }
    }
    xhr.open('GET', 'https://scuffed.dev/Better-Twitch-Theme/assets/theme.css', true);
    xhr.send(null);
})();

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}
