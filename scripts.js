    

window.addEventListener("scroll", function () {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "#16403d";
    } else {
        nav.style.background = "#6c4284";
    }

});


  