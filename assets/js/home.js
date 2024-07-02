/* VARIABLES */
const allFading = document.querySelectorAll(".fading")
const startBtn = document.querySelector("#start")
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

function scrollPage() {
    recsBtn.scrollIntoView({ behavior: 'smooth' });
}

/* Make second page background images appear on hover */
function display(newImg) {
    const curImg = localStorage.getItem("secondPgImg") || ""

    if (curImg === newImg) {  // Do nothing if same selection
        return;
    }

    if (curImg === "rate") {
        rateImg.classList.remove("fade-in-img")
        rateImg.classList.add("fade-out-img")
    } else if (curImg === "explore") {
        exploreImg.classList.remove("fade-in-img")
        exploreImg.classList.add("fade-out-img")
    } else if (curImg === "recs") {
        recsImg.classList.remove("fade-in-img")
        recsImg.classList.add("fade-out-img")
    }

    localStorage.setItem("secondPgImg", newImg)
    if (newImg === "rate") {
        rateImg.classList.remove("fade-out-img")
        rateImg.classList.add("fade-in-img")
    } else if (newImg === "explore") {
        exploreImg.classList.remove("fade-out-img")
        exploreImg.classList.add("fade-in-img")
    } else if (newImg === "recs") {
        recsImg.classList.remove("fade-out-img")
        recsImg.classList.add("fade-in-img")
    }
}

/* INITIALIZERS */
window.addEventListener("scroll", appearOnScroll);
startBtn.addEventListener('click', scrollPage);
rateBtn.addEventListener("mouseover",function() { display("rate"); });
rateBtn.addEventListener('click', scrollPage);
exploreBtn.addEventListener("mouseover", function() { display("explore"); });
recsBtn.addEventListener("mouseover", function() { display("recs"); });