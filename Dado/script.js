
var dado
var quantidade = 1
var bonus = 0


function dadoBaixo(){
    if (dado < 10){
    dado = "0" + dado
}
}

function rolarD4() {
    dado = Math.floor(Math.random() * 4 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD6() {
    dado = Math.floor(Math.random() * 6 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD8() {
    dado = Math.floor(Math.random() * 8 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD10() {
    dado = Math.floor(Math.random() * 10 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD12() {
    dado = Math.floor(Math.random() * 12 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD20() {
    dado = Math.floor(Math.random() * 20 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD50() {
    dado = Math.floor(Math.random() * 50 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}
function rolarD100() {
    dado = Math.floor(Math.random() * 100 + 1) * quantidade + bonus
    dadoBaixo()
    document.getElementById("dado-rolado").textContent = dado
}

