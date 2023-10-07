const jbButton = document.getElementById('JB-button');
const aoButton = document.getElementById('AO-button');
const jbQuote = document.getElementById('JB-quote');
const aoQuote = document.getElementById('AO-quote');
const jbClose = document.getElementById('JB-close');
const aoClose = document.getElementById('AO-close');
const quoteOverlay = document.getElementById('overlay')

jbButton.addEventListener('click', () => {
    jbQuote.classList.toggle('active')
    quoteOverlay.classList.add('active')
})

jbClose.addEventListener('click', () => {
    jbQuote.classList.remove('active')
    quoteOverlay.classList.remove('active')
})

aoButton.addEventListener('click', () => {
    aoQuote.classList.toggle('active')
    quoteOverlay.classList.add('active')
})

aoClose.addEventListener('click', () => {
    aoQuote.classList.remove('active')
    quoteOverlay.classList.remove('active')
})