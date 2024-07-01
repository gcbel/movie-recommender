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
            elem.classList.remove("fade-in");
        }
    });
}

/* Make second page background images appear on hover */
function display(newImg) {
    const curImg = localStorage.getItem("secondPgImg") || ""

    if (curImg === newImg) {  // Do nothing if same selection
        return;
    }

    if (curImg === "rate") {
        rateImg.classList.remove("fade-quick")
        rateImg.classList.add("fade-out")
    } else if (curImg === "explore") {
        exploreImg.classList.remove("fade-quick")
        exploreImg.classList.add("fade-out")
    } else if (curImg === "recs") {
        recsImg.classList.remove("fade-quick")
        recsImg.classList.add("fade-out")
    }

    localStorage.setItem("secondPgImg", newImg)
    if (newImg === "rate") {
        rateImg.classList.remove("fade-out")
        rateImg.classList.add("fade-quick")
    } else if (newImg === "explore") {
        exploreImg.classList.remove("fade-out")
        exploreImg.classList.add("fade-quick")
    } else if (newImg === "recs") {
        recsImg.classList.remove("fade-out")
        recsImg.classList.add("fade-quick")
    }
}

/* INITIALIZERS */
window.addEventListener("scroll", appearOnScroll);
rateBtn.addEventListener("mouseover",function() { display("rate"); });
exploreBtn.addEventListener("mouseover", function() { display("explore"); });
recsBtn.addEventListener("mouseover", function() { display("recs"); });