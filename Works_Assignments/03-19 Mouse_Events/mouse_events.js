
function hoverMe() {
    let btnhover = document.getElementById("mouseover")
    btnhover.style.backgroundColor = "blue"
}

function hoverOut() {
    let btnMouseOut = document.getElementById("mouseout")
    btnMouseOut.style.backgroundColor = "orange"    
}

function clickMe() {
    let btnclick = document.getElementById("clickme")
    btnclick.style.backgroundColor = "green"
}

function doubleClickMe() {
    let btnclick = document.getElementById("doubleclick")
    btnclick.style.backgroundColor = "yellow"
}

function textFocus() {
    let InputFocus = document.getElementById("focusedtext")
    InputFocus.style.background = "yellow"
}

function outOfFocus() {
    let InputFocus = document.getElementById("uppercase")
    InputFocus.value = InputFocus.value.toUpperCase();
}
