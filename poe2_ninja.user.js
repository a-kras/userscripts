// ==UserScript==
// @name         poe2.ninja UI tweak
// @namespace    https://monkey130.cc/userscripts
// @version      1.2
// @description  improve UI
// @author       monkey130
// @match        https://poe2.ninja/*
// @license      MIT; https://www.mit.edu/~amini/LICENSE.md
// @icon         https://www.google.com/s2/favicons?sz=64&domain=poe2.ninja
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const styles = `
body.grid {
  grid-template-areas:
        "header header header"
        "main main main"
        "site-footer site-footer site-footer"
        "ad-top ad-top ad-top"
        "ad-bottom ad-bottom ad-bottom"
        !important;
}
#main {
  width: 100% !important;
  max-width: 1800px !important;
  margin: 0 auto !important;
}
.video-bottom {
  visibility: hidden !important;
}
`;

/* Alternative grid:
  grid-template-columns: minmax(300px,1fr) 100fr minmax(300px,1fr) !important;
  grid-template-areas:
        "header header header"
        "ad-top ad-top ad-top"
        "main main main"
        "ad-bottom ad-bottom ad-bottom"
        "site-footer site-footer site-footer" !important;
*/


    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    console.log(styleSheet, styles);
})();