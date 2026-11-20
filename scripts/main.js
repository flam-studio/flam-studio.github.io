import { handleEntry } from "./entryPage.js";
import { setDark, setLight } from "./mode.js";
import { ausklappen, einklappen } from "./menu.js";
import { clickKlappe, clickScrollCommunity, clickScrollPresse } from "./kuenstler.js";

window.setDark = setDark
window.setLight = setLight
window.ausklappen = ausklappen
window.einklappen = einklappen
window.clickKlappe = clickKlappe
window.clickScrollCommunity = clickScrollCommunity
window.clickScrollPresse = clickScrollPresse

handleEntry()