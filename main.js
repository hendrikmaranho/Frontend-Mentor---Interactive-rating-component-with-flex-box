let selected;

function setValue(value) {
    document.querySelector(`#btn-1`).classList.remove('active')
    document.querySelector(`#btn-2`).classList.remove('active')
    document.querySelector(`#btn-3`).classList.remove('active')
    document.querySelector(`#btn-4`).classList.remove('active')
    document.querySelector(`#btn-5`).classList.remove('active')

    document.querySelector(`#btn-${value}`).classList.add('active')
    selected = value



}

function rating() {
    let info = document.querySelector('#info')
    info.innerHTML = ('You selected ' + selected + ' out of 5')
    let card2 = document.querySelector('#card2')
    card2.classList.remove('hidden')
    let card1 = document.querySelector('#card1')
    card1.classList.add('hidden')

}