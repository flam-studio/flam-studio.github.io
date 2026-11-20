const date = new Date()

var bDay
var bDayDate

try {
    const response = await fetch('/scripts/bDay.json')
    if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`)
    }
    bDay = await response.json()
} catch (error) {
    console.error("Fehler beim Laden der JSON-Daten:", error.message)
}

bDayDate = new Date(bDay[0].bDay)

export function setAge(){
    console.log(getAge())
}

function getAge(){
    var age = date.getFullYear() - bDayDate.getFullYear()
    if((date.getMonth() - bDayDate.getMonth()) <= 0){
        if((date.getMonth() - bDayDate.getMonth()) == 0){
            if((date.getDate() - bDayDate.getDate()) >= 0){
                return age
            }
            else{
                return age - 1
            }
        }
        else{
            return age - 1
        }
    }
    else{
        return age
    }
}