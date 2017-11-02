const viewDetailsDependancies = [
    './templates/header-details-intern-info.js',
    './templates/aside-details-questions.js',
    // './templates/section-details-question-info.js'
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate) => {
    return (dataObj) => {
        return `
            <div class="details-container">
                ${internInfoTemplate(dataObj.internInfo)}
                <section class="position-details">
                    <section class="question-details">
                        <div class="player-wrapper">
                            <div class="img-thump-wrapper">
                                <img id="thump-telenor-img" 
                                     src="./assets/images/telenor_thump.jpg" 
                                     alt="Теленор image" />
                            </div>
                            <div id="ytplayer"></div>
                        </div>
                    </section>
                    ${asidebarTemplate(dataObj.allInternQuestions)}
                </section>
            </div>`
    }
})