/* VARIABLES */
const allFading = document.querySelectorAll(".fading")
const rateBtn = document.querySelector("#rate")
const exploreBtn = document.querySelector("#explore")
const recsBtn = document.querySelector("#recs")
const rateImg = document.querySelector("#rate-img")
const exploreImg = document.querySelector("#explore-img")
const recsImg = document.querySelector("#recs-img")

/* FUNCTIONS */
/* Make buttons appear on scroll */
function appearOnScroll() {
    var pageTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var pageBottom = pageTop + window.innerHeight;

    allFading.forEach(function(elem) {
        var elemTop = elem.getBoundingClientRect().top + window.scrollY;
        if (elemTop < pageBottom) {
            elem.classList.add("fade-in");
        } else {
            elem.classList.remove("fade-in"); // Remove fade-in class if scrolling away
        }
    });
}

/* Make second page background images appear on hover */
function display(picture) {
    if (picture === "rate") {
        exploreImg.classList.add("hidden")
        rateImg.classList.remove("hidden")
        recsImg.classList.add("hidden")
    } else if (picture === "explore") {
        exploreImg.classList.remove("hidden")
        rateImg.classList.add("hidden")
        recsImg.classList.add("hidden")
    } else if (picture === "recs") {
        exploreImg.classList.add("hidden")
        rateImg.classList.add("hidden")
        recsImg.classList.remove("hidden")
    }
}

/* INITIALIZERS */
window.addEventListener("scroll", appearOnScroll);
rateBtn.addEventListener("mouseover", display("rate"));
exploreBtn.addEventListener("mouseover", function() { display("explore"); });
recsBtn.addEventListener("mouseover", display("recs"));