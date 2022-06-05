
$("#hamburguer").click( function() {
	$(".icon").toggleClass("close");
});


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle','nav-menu')



gsap.to(".primeiro", 2.3, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".segundo", 2.3, {delay: 1.3, top: "-100%", ease: Expo.easeInOut});
gsap.to(".terceiro", 2.3, {delay: 1.8, top: "-100%", ease: Expo.easeInOut});



gsap.from('.home__img', {opacity: 0, duration: 5, delay: 3, x: 60})
gsap.from('.home__info', {opacity: 0, duration: 9, delay: 4.5, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 9, delay: 5, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.anime-text-1', {opacity: 0, duration: 9, delay: 3, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 6, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 6.9, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 7.3, y: 25, ease:'expo.out', stagger: .2})