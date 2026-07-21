import { getStorage } from "./localStorage.js";
import { setLight, setDark } from "./mode.js";
import { setDatum } from "./datum.js";

export function handleEntry(){
    if(getStorage("mode") == "dark"){
        setDark()
    }
    else{
        setLight()
    }
    setDatum()
}