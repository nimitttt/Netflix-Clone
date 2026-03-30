window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY <= 5) {
        nav.classList.remove("scrolled");
    } 
    else {
        nav.classList.add("scrolled");
    }

});