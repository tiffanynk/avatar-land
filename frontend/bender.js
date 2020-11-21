const baseURL = 'http://localhost:3000/'
const bendersURL = `${baseURL}` + 'benders/'

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const benderContainer = document.querySelector('.bender')

fetch(bendersURL + `${id}`)
    .then(response => response.json())
    .then(bender => {displayBender(bender)})

function displayBender(bender) {
    const benderName = document.createElement('h2')
    const benderSnack = document.createElement('p')

    benderName.textContent = `${bender.name}`
    benderSnack.textContent = `${bender.favorite_snack}`

    benderContainer.append(benderName, benderSnack)
}