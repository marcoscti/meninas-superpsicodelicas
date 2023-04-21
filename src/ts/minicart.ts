let minicart = document.querySelector('.cart')
let closeMinicart = document.querySelector('.btn-close-minicart')
let minicartContainer = document.querySelector('.minicart-container')

minicart?.addEventListener('click', (e) => {
    if (minicartContainer?.classList[1] === undefined) {
        minicartContainer?.classList.add('active')
    } else {
        minicartContainer?.classList.remove('active')
    }
})

closeMinicart?.addEventListener('click', (e) => {
    if (minicartContainer?.classList[1] === 'active') {
        minicartContainer?.classList.remove('active')
    }
})