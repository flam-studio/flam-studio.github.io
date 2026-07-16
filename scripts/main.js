import { handleEntry } from "./entryPage.js";
import { setDark, setLight } from "./mode.js";
import { ausklappen, einklappen } from "./menu.js";

window.setDark = setDark
window.setLight = setLight
window.ausklappen = ausklappen
window.einklappen = einklappen

handleEntry()