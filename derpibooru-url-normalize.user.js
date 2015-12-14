// ==UserScript==
// @name        derpibooru-url-normalize
// @namespace   org.appledash.derpibooru-url-normalize
// @description Normalizes derpibooru links to use the derpibooru.org domain
// @include     https://derpiboo.ru/*
// @include     https://trixiebooru.org/*
// @version     1
// @grant       none
// ==/UserScript==
var badDomains = ["derpiboo.ru", "trixiebooru.org"];
var goodDomain = "derpibooru.org";

for (var i = 0; i < badDomains.length; i++) {
    if (window.location.href.indexOf("https://" + badDomains[i]) == 0) {
        window.location.href = window.location.href.replace(badDomains[i], goodDomain);
        break;
    }
}

