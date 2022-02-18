// ==UserScript==
// @name         youtube shorts redirect
// @description  this script changes all hrefs referencing 'youtube.com/shorts' to 'youtube.com/watch&v='
// @description:pl 
// @author       bruhfunny (https://github.com/bruhfunnydev)
// @version      v1
// @match        *://*.youtube.com/shorts/*
// @downloadURL  https://github.com/bruhfunnydev/youtube-shorts-redirect/main.user.js
// @updateURL    https://github.com/bruhfunnydev/youtube-shorts-redirect/main.user.js
// @namespace    http://tampermonkey.net
// @icon         https://www.youtube.com/s/desktop/76df868b/img/favicon.ico
// @run-at       document-start
// @grant        window.onurlchange
// @license      unlicense (unlicense.org)
// ==/UserScript==


if (window.location.toString().indexOf('youtube.com/shorts') > -1) {
    newUrl = window.location.href.toString().replace(/shorts/g, 'watch');
    document.location.href = newUrl;
}