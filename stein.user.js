// ==UserScript==
// @name         Stein UserScript
// @namespace    https://github.com/theizrael/Stein-UserScript-JS/
// @version      0.9
// @encoding     utf-8
// @description  Stein World UserScript!
// @author       Theizrael
// @homepage     https://github.com/theizrael/Stein-UserScript-JS/
// @icon         https://raw.github.com/theizrael/Stein-UserScript-JS/master/favicons.png
// @updateURL    https://raw.githubusercontent.com/theizrael/Stein-UserScript-JS/master/stein.user.js
// @downloadURL  https://raw.githubusercontent.com/theizrael/Stein-UserScript-JS/master/stein.user.js
// @include      https://raw.github.com/theizrael/Stein-UserScript-JS/raw/master/stein.user.css
// @supportURL   https://github.com/theizrael/Stein-UserScript-JS/issues
// @match        https://stein.world/
// @include      http://stein.world/
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_log
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        GM_info
// @grant        GM_getMetadata
// @run-at       document-start
// ==/UserScript==


          this.attributes.srcdoc = '<html><head><link rel="stylesheet" href="' + location.protocol + '//releases.flowplayer.org/6.0.5/skin/functional.css"></script><script src="' + location.protocol + '//code.jquery.com/jquery-1.11.2.min.js"></script><script src="' + location.protocol + '//releases.flowplayer.org/6.0.5/flowplayer.min.js"></script><style type="text/css">html, body{padding:0; margin:0;}</style></head><body><div id="fp-movie"></div><script>flowplayer("#fp-movie", ' + JSON.stringify(this.setup) + ');</script></body></html>';
