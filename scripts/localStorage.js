export function setStorage(key, value){
    if(value == null){
        localStorage.removeItem(key)
    }
    else{
        localStorage.setItem(key, value)
    }
}
export function getStorage(key){
    return localStorage.getItem(key)
}