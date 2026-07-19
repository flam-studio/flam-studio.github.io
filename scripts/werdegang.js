import { mode } from "./mode.js"

const klappeKnoepf1 = document.getElementById("klappeKnoepf1")
const klappeKnoepf2 = document.getElementById("klappeKnoepf2")
const klappeKnoepf3 = document.getElementById("klappeKnoepf3")
const klappeKnoepf4 = document.getElementById("klappeKnoepf4")

const klappeInhalt1 = document.getElementById("klappeInhalt1")
const klappeInhalt2 = document.getElementById("klappeInhalt2")
const klappeInhalt3 = document.getElementById("klappeInhalt3")
const klappeInhalt4 = document.getElementById("klappeInhalt4")

const imgKlappe1 = document.getElementById("imgKlappe1")
const imgKlappe2 = document.getElementById("imgKlappe2")
const imgKlappe3 = document.getElementById("imgKlappe3")
const imgKlappe4 = document.getElementById("imgKlappe4")

var zustandKlappe1 = "ausklappen"
var zustandKlappe2 = "ausklappen"
var zustandKlappe3 = "ausklappen"
var zustandKlappe4 = "ausklappen"



export function clickKlappe1(){
    if(klappeKnoepf1.classList.contains("geschlossen")){
        zustandKlappe1 = "einklappen"

        klappeKnoepf1.classList.remove("geschlossen")
        klappeInhalt1.classList.add("offen")
    }
    else{
        zustandKlappe1 = "ausklappen"

        klappeKnoepf1.classList.add("geschlossen")
        klappeInhalt1.classList.remove("offen")
    }
    setKlappenImg(1)
}
export function clickKlappe2(){
    if(klappeKnoepf2.classList.contains("geschlossen")){
        zustandKlappe2 = "einklappen"

        klappeKnoepf2.classList.remove("geschlossen")
        klappeInhalt2.classList.add("offen")
    }
    else{
        zustandKlappe2 = "ausklappen"
        
        klappeKnoepf2.classList.add("geschlossen")
        klappeInhalt2.classList.remove("offen")
    }
    setKlappenImg(2)
}
export function clickKlappe3(){
    if(klappeKnoepf3.classList.contains("geschlossen")){
        zustandKlappe3 = "einklappen"

        klappeKnoepf3.classList.remove("geschlossen")
        klappeInhalt3.classList.add("offen")
    }
    else{
        zustandKlappe3 = "ausklappen"

        klappeKnoepf3.classList.add("geschlossen")
        klappeInhalt3.classList.remove("offen")
    }
    setKlappenImg(3)
}
export function clickKlappe4(){
    if(klappeKnoepf4.classList.contains("geschlossen")){
        zustandKlappe4 = "einklappen"

        klappeKnoepf4.classList.remove("geschlossen")
        klappeInhalt4.classList.add("offen")
    }
    else{
        zustandKlappe4 = "ausklappen"

        klappeKnoepf4.classList.add("geschlossen")
        klappeInhalt4.classList.remove("offen")
    }
    setKlappenImg(4)
}

export function setKlappenImg(klappenIndex){
    switch(klappenIndex){
        case 1:
            imgKlappe1.src = `../media/kuentler/${zustandKlappe1 + "" + mode}.svg`
        break
        case 2:
            imgKlappe2.src = `../media/kuentler/${zustandKlappe2 + "" + mode}.svg`
        break
        case 3:
            imgKlappe3.src = `../media/kuentler/${zustandKlappe3 + "" + mode}.svg`
        break
        case 4:
            imgKlappe4.src = `../media/kuentler/${zustandKlappe4 + "" + mode}.svg`
        break
    }
}