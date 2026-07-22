import { setStorage } from "./localStorage.js"
import { setKlappenImg } from "./kuenstler.js"

const r = document.querySelector(':root')
const rs = getComputedStyle(r)

const backLight = rs.getPropertyValue('--backLight')
const outLight = rs.getPropertyValue('--outLight')
const highLight = rs.getPropertyValue('--highLight')
const textLight = rs.getPropertyValue('--textLight')
const headLight = rs.getPropertyValue('--headLight')

const backDark = rs.getPropertyValue('--backDark')
const outDark = rs.getPropertyValue('--outDark')
const highDark = rs.getPropertyValue('--highDark')
const textDark = rs.getPropertyValue('--textDark')
const headDark = rs.getPropertyValue('--headDark')

const setMode = document.getElementById('setMode')
const modeImg = document.getElementById('modeImg')

const logoNav = document.getElementById('logoNav')

const leistungEntwicklung = document.getElementById("leistungEntwicklung")
const leistungPlanung = document.getElementById("leistungPlanung")
const leistungErstellung = document.getElementById("leistungErstellung")
const leistungAnalyse = document.getElementById("leistungAnalyse")
const leistungSocialMedia = document.getElementById("leistungSocialMedia")
const leistungCommunity = document.getElementById("leistungCommunity")
const leistungKommunikation = document.getElementById("leistungKommunikation")

const logoPage = document.getElementById("logoPage")
const linkLeistungen = document.getElementById("linkLeistungen")
const linkKontakt = document.getElementById("linkKontakt")
const arrowLeistungen = document.getElementById("arrowLeistungen")
const arrowKontakt = document.getElementById("arrowKontakt")

const exampleUeberUns = document.getElementById("exampleUeberUns")

const imgMail = document.getElementById("imgMail")
const imgInstagram = document.getElementById("imgInstagram")
const imgTiktok = document.getElementById("imgTiktok")
const imgYoutube = document.getElementById("imgYoutube")
const imgFacebook = document.getElementById("imgFacebook")

const musikPlay = []
for(let i = 0; i < 99; i++){
    musikPlay.push(document.getElementById(`musikPlay${i}`))
    if(musikPlay[i] == null){
        musikPlay.pop()
        break
    }
}

export var mode;

export function setLight(){
    setStorage("mode", "light")
    mode = "Light"

    r.style.setProperty('--back', backLight)
    r.style.setProperty('--out', outLight)
    r.style.setProperty('--high', highLight)
    r.style.setProperty('--text', textLight)
    r.style.setProperty('--head', headLight)

    logoNav.src = '../media/LogoLight.svg'

    setMode.setAttribute('onclick', "setDark()")
    modeImg.src = '../media/darkmode.svg'
    
    //leistungen
    try{
        leistungEntwicklung.classList.add('leistungEntwicklung')
        leistungPlanung.classList.add('leistungPlanung')
        leistungErstellung.classList.add('leistungErstellung')
        leistungAnalyse.classList.add('leistungAnalyse')
        leistungSocialMedia.classList.add('leistungSocialMedia')
        leistungCommunity.classList.add('leistungCommunity')
        leistungKommunikation.classList.add('leistungKommunikation')
    }catch{}

    //index
    try{
        linkLeistungen.classList.add('linkLeistungen')
        linkKontakt.classList.add('linkKontakt')
    }catch{}

    handleMode()
}

export function setDark(){
    setStorage("mode", "dark")
    mode = "Dark"


    r.style.setProperty('--back', backDark)
    r.style.setProperty('--out', outDark)
    r.style.setProperty('--high', highDark)
    r.style.setProperty('--text', textDark)
    r.style.setProperty('--head', headDark)

    logoNav.src = '../media/LogoDark.svg'

    setMode.setAttribute('onclick', "setLight()")
    modeImg.src = '../media/lightmode.svg'

    //leistungen
    try{
        leistungEntwicklung.classList.remove('leistungEntwicklung')
        leistungPlanung.classList.remove('leistungPlanung')
        leistungErstellung.classList.remove('leistungErstellung')
        leistungAnalyse.classList.remove('leistungAnalyse')
        leistungSocialMedia.classList.remove('leistungSocialMedia')
        leistungCommunity.classList.remove('leistungCommunity')
        leistungKommunikation.classList.remove('leistungKommunikation')
    }catch{}

    //index
    try{
        linkLeistungen.classList.remove('linkLeistungen')
        linkKontakt.classList.remove('linkKontakt')
    }catch{}

    handleMode()
}

function handleMode(){
    //index
    try{
        logoPage.src = `../media/Logo${mode}.svg`
        arrowLeistungen.src = `../media/arrow${mode}.svg`
        arrowKontakt.src = `../media/arrow${mode}.svg`
    }catch{}

    //ueber uns
    try{
        exampleUeberUns.src = `./media/ueberUns/Fanpage${mode}.jpg`
    }catch{}

    //kontakt || kuenstler/...
    try{
        imgMail.src = `../media/mail${mode}.svg`
    }catch{}
    try{
        imgInstagram.src = `../media/instagram${mode}.svg`
    }catch{}
    try{
        imgTiktok.src = `../media/tiktok${mode}.svg`
    }catch{}
    try{
        imgYoutube.src = `../media/youtube${mode}.svg`
    }catch{}
    try{
        imgFacebook.src = `../media/facebook${mode}.svg`
    }catch{}

    //kuenstler Songs
    try{
        for(let i = 0; i < musikPlay.length; i++){
            musikPlay[i].src = `../media/kuentler/play${mode}.svg`
        }
    }catch{}

    //kuenstler imgBox
    try{
        setKlappenImg(99)
        setKlappenImg(100)
    }catch{}

    //kuenstler werdegang
    try{
        for(let i = 0; i < 99; i++){
            setKlappenImg(i)
        }
    }catch{}
}