var my = document.querySelector('#my')
var btn = document.querySelector('#btn')
var close = document.querySelector('#close')

close.addEventListener('click', () => {
    btn.textContent = 'OPEN'
    my.style.animation = 'anim2 linear 0.35s'
    setTimeout(() => {
        my.style.opacity = '0'
    }, 300)
})

btn.addEventListener('click', () => {
    if (btn.textContent === 'OPEN') {
        btn.textContent = 'CLOSE'
        my.style.animation = 'anim1 linear 0.35s'
        my.style.opacity = '1'
    } else {
        btn.textContent = 'OPEN'
        my.style.animation = 'anim2 linear 0.35s'
        setTimeout(() => {
            my.style.opacity = '0'
        }, 300)
    }
})
