
setInterval(()=>{
    document.getElementsByTagName('p')[0].innerHTML = new Date().toLocaleTimeString()

    updateClock()
}, 1000)

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;          // designed clock
}
