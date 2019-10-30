const processTemplates = () => {
    const templates = document.querySelectorAll("template[data-x]")
    templates.forEach(t => {
        const html = t.innerHTML
        const parent = t.parentElement
        const x = parseInt(t.dataset.x)

        for (let i = 0; i < x; i++) {
            t.insertAdjacentHTML('afterend', t.innerHTML)
        }
    })
}
processTemplates()

