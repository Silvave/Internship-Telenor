const viewDetailsDependancies = [
    '../templates/details-view/header-details-intern-info.js',
    '../templates/details-view/aside-details-questions.js',
    '../templates/details-view/section-details-question-info.js',
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (intern, internQuestions) => {
        const firstQuestionId = 0
        const loadFirstQuestion = internQuestions[firstQuestionId]

        return `
            <div class="details-container">
                ${internInfoTemplate(intern)}
                <section class="position-details">
                    <section class="question-details">
                        ${questionInfoTemplate(loadFirstQuestion.videoId, loadFirstQuestion.text)}
                    </section>
                    ${asidebarTemplate(internQuestions)}
                </section>
            </div>`
    }
})