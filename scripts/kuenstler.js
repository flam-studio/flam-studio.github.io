import { mode } from "./mode.js"

const klappeKnoepf = []
for(let i = 0; i < 99; i++){
    klappeKnoepf.push(document.getElementById(`klappeKnoepf${i}`))
    if(klappeKnoepf[i] == null){
        klappeKnoepf.pop()
        break
    }
}

const klappeInhalt = []
for(let i = 0; i < 99; i++){
    klappeInhalt.push(document.getElementById(`klappeInhalt${i}`))
    if(klappeInhalt[i] == null){
        klappeInhalt.pop()
        break
    }
}

const imgKlappe = []
for(let i = 0; i < 99; i++){
    imgKlappe.push(document.getElementById(`imgKlappe${i}`))
    if(imgKlappe[i] == null){
        imgKlappe.pop()
        break
    }
}

var zustandKlappe = []
for(let i = 0; i < klappeKnoepf.length; i++){
    zustandKlappe.push("ausklappen")
}

const scrollBoxKnopfCommunity = document.getElementById("scrollBoxKnopfCommunity")
const scrollBoxKnopfPresse = document.getElementById("scrollBoxKnopfPresse")

const scrollBoxCommunity = document.getElementById("scrollBoxCommunity")
const scrollBoxPresse = document.getElementById("scrollBoxPresse")

const scrollBoxImgCommunity = document.getElementById("scrollBoxImgCommunity")
const scrollBoxImgPresse = document.getElementById("scrollBoxImgPresse")

var zustandScrollBoxCommunity = "ausklappen"
var zustandScrollBoxPresse = "ausklappen"

export function clickKlappe(i){
    if (klappeKnoepf[i].classList.contains("geschlossen")){
        zustandKlappe[i] = "einklappen"

        klappeKnoepf[i].classList.remove("geschlossen")
        klappeInhalt[i].classList.add("offen")
    }
    else{
        zustandKlappe[i] = "ausklappen"

        klappeKnoepf[i].classList.add("geschlossen")
        klappeInhalt[i].classList.remove("offen")
    }
    setKlappenImg(i)
}

export function clickScrollCommunity(){
    if(scrollBoxKnopfCommunity.classList.contains("geschlossen")){
        zustandScrollBoxCommunity = "einklappen"

        scrollBoxKnopfCommunity.classList.remove("geschlossen")
    }
    else{
        zustandScrollBoxCommunity = "ausklappen"

        scrollBoxKnopfCommunity.classList.add("geschlossen")
    }
    setKlappenImg(99)
}
export function clickScrollPresse(){
    if(scrollBoxKnopfPresse.classList.contains("geschlossen")){
        zustandScrollBoxPresse = "einklappen"

        scrollBoxKnopfPresse.classList.remove("geschlossen")
    }
    else{
        zustandScrollBoxPresse = "ausklappen"

        scrollBoxKnopfPresse.classList.add("geschlossen")
    }
    setKlappenImg(100)
}

export function setKlappenImg(i){
    switch(i){
        case 99:
            scrollBoxImgCommunity.src = `../media/kuentler/${zustandScrollBoxCommunity + "" + mode}.svg`
        break
        case 100:
            scrollBoxImgPresse.src = `../media/kuentler/${zustandScrollBoxPresse + "" + mode}.svg`
        break
        default:
            imgKlappe[i].src = `../media/kuentler/${zustandKlappe[i] + "" + mode}.svg`
        break
    }
}