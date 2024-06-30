/* VARIABLES */
const add = document.querySelector("#add-rating");
let movies;

/* FUNCTIONS */
/* Add new movie and review to local storage */
function addMovie(event) {
    const ratings = JSON.parse(localStorage.getItem('reviews'));

    const newRating = {
        title,
        rating,
        notes,
    }

    ratings.append(newRating);
    localStorage.setItem('reviews', ratings);
}

/* Populate dropdown movies with matching movies */
function dropdownMovies() {
    for (let movie in movies) {

    }
}

/* TODO in another file, sorts movie reviews */
function sortmovies() {

}

/* EVENT LISTENERS */
add.addEventListener('click', addMovie)

/* INITIALIZERS */
window.onload = loadMovies ();
function loadMovies () {
    const reader = new FileReader();
    reader.onload = function () {
        const content = reader.result;
        console.log(content);
    }

    reader.onerror = function () {
        console.log('Error');
    }

    const file = 'movies.txt';
    reader.readAsText(file, 'utf-8')
}

// window.onload = fs.readFile('movies.txt', (err, data) => {

//     if (err) throw err;
//     console.log(data);
// })