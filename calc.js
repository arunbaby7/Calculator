var num1
var num2
var result
function dis(variable) {

    document.getElementById("screen").value += variable
}


function operators(symbols) {

    num1 = parseFloat(document.getElementById("screen").value)
    symbol = symbols
    document.getElementById("screen").value = ""
}
function calculate() {
    num2 = parseFloat(document.getElementById("screen").value)
    if (symbol == "+") {
        result = num1 + num2
        console.log(result)
    } else if (symbol == "-") {
        result = num1 - num2
    } else if (symbol == "*") {
        result = num1 * num2
    } else if (symbol == "/") {
        if (num2 == 0) {
            return false
        } else {
            result = num1 / num2
        }
    }

}
function clearDisplay() {
    document.getElementById("screen").value = "";
}

function equalto() {
    calculate()
     document.getElementById("screen").value=result
}