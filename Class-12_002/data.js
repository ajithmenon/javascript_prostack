function changeBtnName() {
    let btnRef = document.getElementById("changename")      // getting the button by id and assigned into btnRef

    btnRef.innerHTML = "Clicked"
}

function findDate() {
    let para1 = document.getElementsByTagName('p')[0]       // there will be many similar tag, so we should give the reference to its position - [0]
    
    para1.innerHTML = new Date().toLocaleDateString()
}

function selectbyClass() {
    let para1 = document.getElementsByClassName('justone')[0]       // there will be many similar tag, so we should give the reference to its position - [0]
    
    para1.innerHTML = "Selected by class"
}

