const movies = [

{ title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, watched: false },

{ title: "Nana", year: 2006, genre: "Romance", rating: 9.7, watched: true },

{ title: "Parasite", year: 2019, genre: "Drama", rating: 8.6, watched: false },

{ title: "Knives Out", year: 2019, genre: "Comedy", rating: 7.9, watched: true },

{ title: "Get Out", year: 2017, genre: "Thriller", rating: 7.7, watched: false },

{ title: "La La Land", year: 2016, genre: "Drama", rating: 8.0, watched: true },

];

console.log("StreamBox catalog loaded:", movies.length, "movies");



movies.forEach(function(movie) {
    console.log(movie.title);
});


let dramaMovies = movies.filter(function(movie) {
    return movie.genre === "Drama";
});

console.log(dramaMovies);


const topRating = Math.max(...movies.map(movie => movie.rating));
const best = movies.find(movie => movie.rating === topRating);
console.log("Best ranked movie :", best.title);