var container = document.querySelector('#container')
var icon = document.querySelector('#icon')
var btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    if (container.classList.contains('off')) {
        container.classList.remove('off')
        container.classList.add('on')
        icon.classList.remove('ri-lightbulb-line')
        icon.classList.add('ri-lightbulb-flash-fill')
        btn.textContent = 'OFF'
    } 
    else{
        container.classList.remove('on')
        container.classList.add('off')
        icon.classList.remove('ri-lightbulb-flash-fill')
        icon.classList.add('ri-lightbulb-line')
        btn.textContent = 'ON'
    }
})
