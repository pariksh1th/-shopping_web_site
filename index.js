const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const closer = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active")
    })
}

if (closer) {
    closer.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}