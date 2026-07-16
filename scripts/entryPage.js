import { getStorage } from "./localStorage.js";
import { setLight, setDark } from "./mode.js";

export function handleEntry(){
    if(getStorage("mode") == "dark"){
        setDark()
    }
    else{
        setLight()
    }
}