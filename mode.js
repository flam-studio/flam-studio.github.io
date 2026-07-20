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

    try{
        leistungEntwicklung.classList.add('leistungEntwicklung')
        leistungPlanung.classList.add('leistungPlanung')
        leistungErstellung.classList.add('leistungErstellung')
        leistungAnalyse.classList.add('leistungAnalyse')
        leistungSocialMedia.classList.add('leistungSocialMedia')
        leistungCommunity.classList.add('leistungCommunity')
        leistungKommunikation.classList.add('leistungKommunikation')
    }catch{}
    try{
        logoPage.src = '../media/LogoLight.svg'
        linkLeistungen.classList.add('linkLeistungen')
        linkKontakt.classList.add('linkKontakt')
        arrowLeistungen.src = '../media/arrowLight.svg'
        arrowKontakt.src = '../media/arrowLight.svg'
    }catch{}
    try{
        exampleUeberUns.src = './media/ueberUns/FanpageLight.jpg'
    }catch{}
    try{
        imgMail.src = '../media/mailLight.svg'
        imgInstagram.src = '../media/instagramLight.svg'
        imgTiktok.src = '../media/tiktokLight.svg'
    }catch{}
    try{
        setKlappenImg(1)
        setKlappenImg(2)
        setKlappenImg(3)
        setKlappenImg(4)
        setKlappenImg(5)
        setKlappenImg(6)
    }catch{}
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

    try{
        leistungEntwicklung.classList.remove('leistungEntwicklung')
        leistungPlanung.classList.remove('leistungPlanung')
        leistungErstellung.classList.remove('leistungErstellung')
        leistungAnalyse.classList.remove('leistungAnalyse')
        leistungSocialMedia.classList.remove('leistungSocialMedia')
        leistungCommunity.classList.remove('leistungCommunity')
        leistungKommunikation.classList.remove('leistungKommunikation')
    }catch{}
        try{
        logoPage.src = '../media/LogoDark.svg'
        linkLeistungen.classList.remove('linkLeistungen')
        linkKontakt.classList.remove('linkKontakt')
        arrowLeistungen.src = '../media/arrowDark.svg'
        arrowKontakt.src = '../media/arrowDark.svg'
    }catch{}
        try{
        exampleUeberUns.src = './media/ueberUns/FanpageDark.jpg'
    }catch{}
    try{
        imgMail.src = '../media/mailDark.svg'
        imgInstagram.src = '../media/instagramDark.svg'
        imgTiktok.src = '../media/tiktokDark.svg'
    }catch{}
    try{
        setKlappenImg(1)
        setKlappenImg(2)
        setKlappenImg(3)
        setKlappenImg(4)
        setKlappenImg(5)
        setKlappenImg(6)
    }catch{}
}