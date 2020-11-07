
// show menu
const ShowMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId);

            if(toggle && nav){
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show');
                })
            }
}

ShowMenu('nav_toggle', 'nav_menu');

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction (){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
// home

// buttons

// collection

// featured products

// offer

//new arrivals