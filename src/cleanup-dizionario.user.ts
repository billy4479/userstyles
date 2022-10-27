// ==UserScript==
// @name        Clean up Dizionario
// @match       https://www.dizionario-latino.com/*
// @grant       GM_addStyle
// @version     0.1
// @author      Billy4479
// @description 10/17/2022, 6:37:02 AM
// ==/UserScript==

const css = `

body {
  background-image: none;
}

#container {
  max-width: none;
}

#header {
  width: 100%;
  left: 0;
  margin: 0;
}

`;

declare function GM_addStyle(css: string): HTMLStyleElement;

GM_addStyle(css);

const removeBySelector = (sel: string) => document.querySelector(sel)?.remove();

removeBySelector('#middle > center:nth-child(3)');
removeBySelector('#right');
removeBySelector('#middle > a:nth-child(12)');
removeBySelector('#header > div:nth-child(3)');
removeBySelector('#header > div:nth-child(3)');
removeBySelector('#header > div:nth-child(3)');

document.querySelectorAll('script').forEach((s) => {
  if (
    s.src.includes('facebook') ||
    s.src.includes('ads') ||
    s.src.includes('cookiepro')
  )
    s.remove();
});
