function showText() {
    document.getElementById('text').style.visibility = "visible"
}

function showFirework() {
    document.getElementById('pyro').style.visibility = "visible"
}

function showPlate() {
    document.getElementById('plate').style.visibility = "visible"
}

function showMsg() {
    document.getElementById('msg').style.visibility = "visible"
}

function showLetter() {
    document.getElementById('letter').style.visibility = "visible"
}

setTimeout(showText, 7500)
setTimeout(showFirework, 8500)
setTimeout(showPlate, 1000)
setTimeout(showMsg, 10500)
setTimeout(showLetter, 11500)