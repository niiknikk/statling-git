const nav = document.getElementById('app-navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}

// footer year
let year = document.getElementById('year');
        let date = new Date().getFullYear();
        year.innerText = date;