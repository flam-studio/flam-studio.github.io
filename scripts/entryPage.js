import { getStorage } from "./localStorage.js";
import { setLight, setDark } from "./mode.js";
import { setDatum } from "./datum.js";
import { setAge } from "./bDay.js";

export function handleEntry(){
    if(getStorage("mode") == "dark"){
        setDark()
    }
    else{
        setLight()
    }
    setDatum()
    setAge()
}