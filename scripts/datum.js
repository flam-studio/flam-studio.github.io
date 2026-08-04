const date = new Date()

const textDatum = []
for(let i = 0; i < 99; i++){
    textDatum.push(document.getElementById(`textDatum${i}`))
    if(textDatum[i] == null){
        textDatum.pop()
        break
    }
}

var box
var termin = []
var sprache
var kuenstlerDatum
var node
var nodeLeft
var nodeCenter
var nodeRight
var p

try {
    const response = await fetch('/scripts/datum.json')
    if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`)
    }
    kuenstlerDatum = await response.json()
} catch (error) {
    console.error("Fehler beim Laden der JSON-Daten:", error.message)
}

for(let i = 0; i < kuenstlerDatum.length; i++){
    if(document.getElementById(kuenstlerDatum[i].box[0]) != null){
        box = document.getElementById(kuenstlerDatum[i].box[0])
        for(let j = 0; j < kuenstlerDatum[i].termin.length; j++){
            termin.push(kuenstlerDatum[i].termin[j])
        }
        sprache = 0
        break
    }
    if(document.getElementById(kuenstlerDatum[i].box[1] != null)){
        box = document.getElementById(kuenstlerDatum[i].box[1])
        for(let j = 0; j < kuenstlerDatum[i].termin.length; j++){
            termin.push(kuenstlerDatum[i].termin[j])
        }
        sprache = 1
        break
    }
}

export function setDatum(){
    if(box != null){
        if(sprache == 0){
            for(let i = 0; i < termin.length; i++){
                node = document.createElement("a")
                node.setAttribute("href", termin[i].link)
                    
                node.appendChild(getLeftDe(termin[i].datum))
                
                node.appendChild(getCenter(termin[i].name, termin[i].zusatz))

                var datum = calcDatumDe(new Date(termin[i].datum))
                if(datum == null){
                    continue
                }
                node.appendChild(datum)

                box.appendChild(node)
                }
            if(box.childElementCount == 0){
                node = document.createElement("p")
                node.textContent = "Zurzeit sind keine Auftritte angekündigt"
                box.appendChild(node)
            }
        }
        else{
            for(let i = 0; i < termin.length; i++){
                node = document.createElement("a")
                node.setAttribute("href", termin[i].link)
                    
                node.appendChild(getLeftEn(termin[i].datum))
                
                node.appendChild(getCenter(termin[i].name, termin[i].zusatz))

                var datum = calcDatumEn(new Date(termin[i].datum))
                if(datum == null){
                    continue
                }
                node.appendChild(datum)

                box.appendChild(node)
                }
            if(box.childElementCount == 0){
                node = document.createElement("p")
                node.textContent = "No performances have been announced at this time"
                box.appendChild(node)
            } 
        }
    }

}
function calcDatumDe(datum){
    var d = datum.getTime() - date.getTime()
    var span = document.createElement("span")
    var t = document.createElement("p")
    var m = document.createElement("p")
    var u = document.createElement("p")
    if(d >= 0){
        if(datum.getFullYear() != date.getFullYear()){
            if(datum.getMonth() >= date.getMonth()){
                if(datum.getMonth() != date.getMonth()){
                    t.textContent = "über"
                    span.appendChild(t)
                    m.textContent = "1"
                    m.setAttribute("class", "terminTag")
                    span.appendChild(m)
                    u.textContent = "Jahr"
                    span.appendChild(u)
                    return span
                }
                else{
                    if(datum.getDate() >= date.getDate()){
                        if(datum.getDate() == date.getDate()){
                            t.textContent = "in"
                            span.appendChild(t)
                            m.textContent = "1"
                            m.setAttribute("class", "terminTag")
                            span.appendChild(m)
                            u.textContent = "Jahr"
                            span.appendChild(u)
                            return span
                        }
                        t.textContent = "über"
                        span.appendChild(t)
                        m.textContent = "1"
                        m.setAttribute("class", "terminTag")
                        span.appendChild(m)
                        u.textContent = "Jahr"
                        span.appendChild(u)
                        return span
                    }
                }
            }
        }
        d = Math.ceil(d / 1000 / 60 / 60 / 24)
        if(d == 1){
            m.textContent = "morgen"
            m.setAttribute("class", "terminTag")
            span.appendChild(m)
            return span
        }
        t.textContent = "in"
        span.appendChild(t)
        m.textContent = d
        m.setAttribute("class", "terminTag")
        span.appendChild(m)
        u.textContent = "Tagen"
        span.appendChild(u)
        return span
    }
    else{
        if(datum.getFullYear() == date.getFullYear()){
            if(datum.getMonth() == date.getMonth()){
                if(datum.getDate() == date.getDate()){
                    m.textContent = "heute"
                    m.setAttribute("class", "terminTag")
                    span.appendChild(m)
                    return span
                }
            }
        }
        return null
    }
}
function calcDatumEn(datum){
    var d = datum.getTime() - date.getTime()
    var span = document.createElement("span")
    var t = document.createElement("p")
    var m = document.createElement("p")
    var u = document.createElement("p")
    if(d >= 0){
        if(datum.getFullYear() != date.getFullYear()){
            if(datum.getMonth() >= date.getMonth()){
                if(datum.getMonth() != date.getMonth()){
                    t.textContent = "over"
                    span.appendChild(t)
                    m.textContent = "1"
                    m.setAttribute("class", "terminTag")
                    span.appendChild(m)
                    u.textContent = "year"
                    span.appendChild(u)
                    return span
                }
                else{
                    if(datum.getDate() >= date.getDate()){
                        if(datum.getDate() == date.getDate()){
                            t.textContent = "in"
                            span.appendChild(t)
                            m.textContent = "1"
                            m.setAttribute("class", "terminTag")
                            span.appendChild(m)
                            u.textContent = "year"
                            span.appendChild(u)
                            return span
                        }
                        t.textContent = "over"
                        span.appendChild(t)
                        m.textContent = "1"
                        m.setAttribute("class", "terminTag")
                        span.appendChild(m)
                        u.textContent = "year"
                        span.appendChild(u)
                        return span
                    }
                }
            }
        }
        d = Math.ceil(d / 1000 / 60 / 60 / 24)
        if(d == 1){
            m.textContent = "tomorrow"
            m.setAttribute("class", "terminTag")
            span.appendChild(m)
            return span
        }
        t.textContent = "in"
        span.appendChild(t)
        m.textContent = d
        m.setAttribute("class", "terminTag")
        span.appendChild(m)
        u.textContent = "days"
        span.appendChild(u)
        return span
    }
    else{
        if(datum.getFullYear() == date.getFullYear()){
            if(datum.getMonth() == date.getMonth()){
                if(datum.getDate() == date.getDate()){
                    m.textContent = "today"
                    m.setAttribute("class", "terminTag")
                    span.appendChild(m)
                    return span
                }
            }
        }
        return null
    }
}

function getLeftDe(text){
    var span = document.createElement("span")
    var textTeile = text.split("-")
    var monat = document.createElement("p")
    var tag = document.createElement("p")
    var jahr = document.createElement("p")
    const monate = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ]

    monat.textContent = monate[Number(textTeile[1]) - 1]
    span.appendChild(monat)

    tag.textContent = textTeile[2]
    tag.setAttribute("class", "terminTag")
    span.appendChild(tag)

    jahr.textContent = textTeile[0]
    span.appendChild(jahr)

    return span
}
function getLeftEn(text){
    var span = document.createElement("span")
    var textTeile = text.split("-")
    var monat = document.createElement("p")
    var tag = document.createElement("p")
    var jahr = document.createElement("p")
    const monate = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    monat.textContent = monate[Number(textTeile[1]) - 1]
    span.appendChild(monat)

    tag.textContent = textTeile[2]
    tag.setAttribute("class", "terminTag")
    span.appendChild(tag)

    jahr.textContent = textTeile[0]
    span.appendChild(jahr)

    return span
}

function getCenter(name, zusatz){
    var span = document.createElement("span")
    span.setAttribute("class", "terminName")
    var pName = document.createElement("p")
    var pZusatz = document.createElement("p")

    pName.textContent  = name
    span.appendChild(pName)

    if(zusatz != null){
        pZusatz.textContent = zusatz
        span.appendChild(pZusatz)
    }

    return span
}