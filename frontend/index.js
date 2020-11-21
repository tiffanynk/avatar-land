const baseURL = 'http://localhost:3000/'
const bendersURL = `${baseURL}` + 'benders'

fetch(bendersURL)
    .then(response => response.json())
    .then(benders => {createBenderCards(benders)})

function createBenderCards(benders) {
    benders.forEach(bender => {
        createBenderCard(bender)
    })
}

function createBenderCard(bender) {
    const section = document.querySelector('.benders-container')
    const div = document.createElement('div')
    const benderName = document.createElement('h2')

    div.className = 'card'
    benderName.innerHTML = `<a href='bender.html?id=${bender.id}'>${bender.name}</a>`

    section.appendChild(div)
    div.append(benderName)

}
