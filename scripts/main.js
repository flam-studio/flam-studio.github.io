import { handleEntry } from "./entryPage.js";
import { setDark, setLight } from "./mode.js";
import { ausklappen, einklappen } from "./menu.js";
import { clickKlappe1, clickKlappe2, clickKlappe3, clickKlappe4 } from "./werdegang.js";

window.setDark = setDark
window.setLight = setLight
window.ausklappen = ausklappen
window.einklappen = einklappen
window.clickKlappe1 = clickKlappe1
window.clickKlappe2 = clickKlappe2
window.clickKlappe3 = clickKlappe3
window.clickKlappe4 = clickKlappe4

handleEntry()