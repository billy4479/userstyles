// ==UserScript==
// @name        Github Copy
// @match       https://github.com/*/blob/*
// @grant       none
// @version     0.1
// @author      Billy4479
// @description Add a copy button to Github files
// ==/UserScript==

(function () {
  const classes = 'btn-sm btn BtnGroup-item';
  const parentSelector = 'div.BtnGroup:nth-child(1)';

  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const button = document.createElement('a');
  button.innerText = 'Copy';
  button.className = classes;
  button.onclick = async () => {
    const res = await fetch(
      (document.getElementById('raw-url') as HTMLAnchorElement).href
    );
    const text = await res.text();
    // console.log(text);
    await navigator.clipboard.writeText(text);
  };
  parent.appendChild(button);
})();
