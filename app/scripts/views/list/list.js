const listViewDependencies = [
    // './templates/hub-img-and-info-box.js',
    './templates/section-cards.js'
]

define(listViewDependencies, sectionInternsCardsTemplate => {
    return (interns) => `
        <div class="list-container">
            ${sectionInternsCardsTemplate(interns)}
        </div>`
})