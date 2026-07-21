const date = new Date()
const fabianZiemsDatum1 = new Date("2026-07-25")

const fabianZiemsTextDatum1 = document.getElementById("fabianZiemsTextDatum1")

export function setDatum(){
    try{
        fabianZiemsTextDatum1.appendChild(calcDatum(fabianZiemsDatum1))
    }catch{}
}
function calcDatum(datum){
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
        return span
    }
}