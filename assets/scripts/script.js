let mobileMenu = document.querySelector(".mobile_menu");
let nav = document.querySelector("nav");
let menuIsOpen = false;

mobileMenu.addEventListener("click", () => {
    if(!menuIsOpen) {
        mobileMenu.querySelector("img").setAttribute("src", "assets/images/icon-close.svg");

        nav.style.display = "block";
        setTimeout(() => {
            nav.style.opacity = "1";
            nav.querySelector("ul").style.marginTop = "0";
        }, 50);
        menuIsOpen = true;
    } else {
        mobileMenu.querySelector("img").setAttribute("src", "assets/images/icon-hamburger.svg");
        
        nav.querySelector("ul").style.marginTop = "-354px";
        nav.style.opacity = "0";
        setTimeout(() => {
            nav.style.display = "none";
        }, 300);
        menuIsOpen = false;
    }
});