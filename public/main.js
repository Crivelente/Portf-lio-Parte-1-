function displayNumber(item){
    let display = document.getElementById("display-data")
    display.value+=item
}

function clean(){
    let display = document.getElementById("display-data")
    display.value = ""
}

function cleanOneDigit(){
    let display = document.getElementById("display-data")
    let value = display.value
    let finalString = value.substring(0, value.length - 1)
    display.value = finalString
}

function result(){
    let display = document.getElementById("display-data")
    let result = eval(display.value)
    display.value = result
}

export {displayNumber, clean, cleanOneDigit, result}