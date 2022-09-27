// ==UserScript==
// @name         youtube shorts redirect
// @description  this script redirects you to the 'watch?v=' site instead of '/shorts/' after clicking on a youtube short
// @description:pl ten skrypt przenosi cię na 'watch?v=' zamiast na '/shorts/' gdy klikasz na jakiegoś shorta na youtubie
<<<<<<< HEAD
// @author       bruhfunny (https://github.com/bruhfunnydev)
// @version      v1
// @match        *://*.youtube.com/*
// @downloadURL  https://github.com/bruhfunnydev/youtube-shorts-redirect/raw/main/main.user.js
// @updateURL    https://github.com/bruhfunnydev/youtube-shorts-redirect/raw/main/main.user.js
=======
// @author       purplishflame (https://github.com/purplishflame)
// @version      v1
// @match        *://*.youtube.com/*
// @downloadURL  https://github.com/orangeonfire/youtube-shorts-redirect/raw/main/main.user.js
// @updateURL    https://github.com/orangeonfire/youtube-shorts-redirect/raw/main/main.user.js
>>>>>>> b28404f49d3530ff73cc6e2314e8deebacc0eddb
// @namespace    http://tampermonkey.net
// @icon         https://www.youtube.com/s/desktop/76df868b/img/favicon.ico
// @run-at       document-start
// @license      unlicense (unlicense.org)
// ==/UserScript==

(function() {
<<<<<<< HEAD
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const y = window.setInterval(x, 500);
    function x() { 
      if (window.location.toString().includes('youtube.com/shorts')) {
        let new_url = window.location.href.toString().replace(/shorts/g, 'watch?v=');
        document.location.href = new_url;
        window.clearInterval(y);
      }
    }
  })
})();
=======
   'use strict';
   document.addEventListener('DOMContentLoaded', () => {
      if (window.location.toString().includes('youtube.com/shorts')) {
         let newUrl = window.location.href.toString().replace(/shorts/g, 'watch');
         document.location.href = newUrl;
      }
   })
})();
>>>>>>> b28404f49d3530ff73cc6e2314e8deebacc0eddb
