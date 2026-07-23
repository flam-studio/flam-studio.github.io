const date = new Date()

const textDatum = []
for(let i = 0; i < 99; i++){
    textDatum.push(document.getElementById(`textDatum${i}`))
    if(textDatum[i] == null){
        textDatum.pop()
        break
    }
}

var index
var sprache

const kuenstlerDatum = [
    {
        box: 
        [
            document.getElementById("fabianZiemsDatumBoxDe"),
            document.getElementById("fabianZiemsDatumBoxEn")
        ],
        datum:
        [
            new Date("2026-07-25"),
        ]
    },
    {
        box:
        [
            document.getElementById("bjarneDatumBoxDe"),
            document.getElementById("bjarneDatumBoxEn")
        ],
        datum:
        [
        ]
    },
]

for(let i = 0; i < kuenstlerDatum.length; i++){
    if(kuenstlerDatum[i].box[0] != null){
        index = i
        sprache = 0
        break
    }
    if(kuenstlerDatum[i].box[1] != null){
        index = i
        sprache = 1
        break
    }
}

export function setDatum(){
    if(index != null){
        if(sprache = 0){
            try{
                for(let i = 0; i < kuenstlerDatum[index].datum.length; i++){
                    var node = calcDatumDe(kuenstlerDatum[index].datum[i])
                    if(node == null){
                        textDatum[i].remove()
                    }
                    else{
                        textDatum[i].appendChild(node)
                    }
                }
            }catch{}
            if(kuenstlerDatum[index].box[sprache].childElementCount == 0){
                kuenstlerDatum[index].box[sprache].appendChild(document.createTextNode("Zurzeit sind keine Auftritte angekündigt"))
            }
        }
        else{
            try{
                for(let i = 0; i < kuenstlerDatum[index].datum.length; i++){
                    var node = calcDatumEn(kuenstlerDatum[index].datum[i])
                    if(node == null){
                        textDatum[i].remove()
                    }
                    else{
                        textDatum[i].appendChild(node)
                    }
                }
            }catch{}
            if(kuenstlerDatum[index].box[sprache].childElementCount == 0){
                kuenstlerDatum[index].box[sprache].appendChild(document.createTextNode("No performances have been announced at this time"))
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