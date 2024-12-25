import { contactsArr } from './contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', function() {
    const input = patternSearchInput.value
    const contactCards = getMatchedContacts(input)
                            .map(
                                function(contact) {
                                    return renderContact(contact)
                                }
                            )

    contactDisplay.innerHTML =''
    contactCards.forEach(function(card) {
        contactDisplay.appendChild(card)
    })
})

function getMatchedContacts(phrase) {
    const regex = new RegExp(phrase, 'gi')
    return contactsArr.filter(function(contact) {
        return regex.test(contact.name)
    })
}

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    contactCard.innerHTML = `
        <p> Name: ${contactObj.name} </p>
        <p> Email: ${contactObj.email} </p>
        <p> Phone: ${contactObj.phone} </p>
    `

    return contactCard
}
