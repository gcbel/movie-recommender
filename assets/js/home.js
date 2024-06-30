/* VARIABLES */
const allFading = document.querySelectorAll(".fading")

/* FUNCTIONS */
/* Make buttons appear on scroll */
function appearOnScroll() {
    var pageTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var pageBottom = pageTop + window.innerHeight;

    allFading.forEach(function(elem) {
        var elemTop = elem.getBoundingClientRect().top + window.scrollY;
        if (elemTop < pageBottom) {
            // elem.classList.remove("hidden");
            elem.classList.add("fade-in");
        } else {
            // elem.classList.add("hidden");
            elem.classList.remove("fade-in"); // Remove fade-in class if scrolling away
        }
    });
}

/* INITIALIZERS */
window.addEventListener("scroll", appearOnScroll);