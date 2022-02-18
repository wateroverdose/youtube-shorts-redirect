// ==UserScript==
// @name         youtube shorts redirect
// @description  this script redirects you to the 'watch?v=' site instead of '/shorts/' after clicking on a youtube short
// @description:pl ten skrypt przenosi cię na 'watch?v=' zamiast na '/shorts/' gdy klikasz na jakiegoś shorta na youtubie
// @author       bruhfunny (https://github.com/bruhfunnydev)
// @version      v1
// @match        *://*.youtube.com/*
// @downloadURL  https://github.com/bruhfunnydev/youtube-shorts-redirect/raw/main/main.user.js
// @updateURL    https://github.com/bruhfunnydev/youtube-shorts-redirect/raw/main/main.user.js
// @namespace    http://tampermonkey.net
// @icon         https://www.youtube.com/s/desktop/76df868b/img/favicon.ico
// @run-at       document-start
// @license      unlicense (unlicense.org)
// ==/UserScript==


function redirect() {
    if (window.location.toString().indexOf('youtube.com/shorts') > -1) {
        let newUrl = window.location.href.toString().replace(/shorts/g, 'watch');
        document.location.href = newUrl;
    }
}

window.onload = redirect();
