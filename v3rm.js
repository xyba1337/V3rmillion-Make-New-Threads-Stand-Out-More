// ==UserScript==
// @name         V3rmillion Highlight Old Threads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xyba | https://github.com/xyba1337/
// @match        https://v3rmillion.net/forumdisplay.php*
// @icon         https://pbs.twimg.com/profile_images/549393909147639809/inDjQlSs_400x400.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let collection = document.querySelectorAll('.subject_old');

    for(let item of collection) {
        item.childNodes[0].classList.add("oldThread");

        var parentStored1 = getParentNode(item, 3)
        parentStored1.classList.add("parentOld");
    }

    function getParentNode(element, level = 1) {
        while (level-- > 0) {
            element = element.parentNode;
            if (!element) return null;
        }
        return element;
    }

    GM_addStyle('.oldThread { color: #b6302f !important; } .parentOld { background: linear-gradient(90deg, rgba(32,32,32,1) 0%, rgb(21 21 21) 1%, rgba(32,32,32,1) 79%) !important }')
})();