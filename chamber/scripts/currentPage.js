const navLinks = document.querySelectorAll('.navigation a');

const setActiveClass = (link) => { 
    navLinks.forEach(nav => nav.classList.remove('active')); 
    link.classList.add('active');};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
