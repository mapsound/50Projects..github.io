/*querySelector : select evertthing, a paragraph, H1, class, ID ..*/
/*There are many panel, use querySelectorALL : select all panels*/
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
