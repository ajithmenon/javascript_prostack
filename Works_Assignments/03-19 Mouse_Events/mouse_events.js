
function hoverMe() {
    let btnhover = document.getElementById("mouseover")
    btnhover.style.backgroundColor = "blue"

    btnhover.onmouseout = ()=> { btnhover.style.backgroundColor = "red" }
}

function hoverOut() {
    let btnMouseOut = document.getElementById("mouseout")
    btnMouseOut.style.backgroundColor = "orange"    
    
    btnMouseOut.onmouseover = ()=> { btnMouseOut.style.backgroundColor = "red" }
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
    InputFocus.style.background = "rgba(255, 255, 0, 0.882)"

    InputFocus.onblur =()=>{ InputFocus.style.background = "white" }
}

function outOfFocus() {
    let InputBlur = document.getElementById("uppercase")
    InputBlur.value = InputBlur.value.toUpperCase();
}
