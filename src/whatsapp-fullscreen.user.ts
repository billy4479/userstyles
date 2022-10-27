// ==UserScript==
// @name        Whatsapp Web Fullscreen
// @match       https://web.whatsapp.com/
// @grant       GM_addStyle
// @version     0.1
// @author      Billy4479
// @description 10/17/2022, 7:19:03 AM
// ==/UserScript==

GM_addStyle(`
.app-wrapper-web ._1XkO3 {
  top: 0 !important;
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
}
`);
