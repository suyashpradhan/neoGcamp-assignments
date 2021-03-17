const movie = {
  name: "Man of Steel",
  rating: 7,
  release: 2013,
};

// ! Write a function updateRating() which would take a movie object, inc or dec and return a new object with rating updated.

const updateRating = (movieObj) => {
  return {
    ...movieObj,
    rating: movieObj.rating + 0.4,
  };
};
console.log(updateRating(movie));

// ! Write a function addSequel() which would take the movie object, and return a new object with sequel is true.

const addSequel = (movieObj) => {
  return {
    ...movieObj,
    sequel: true,
  };
};

console.log(addSequel(movie));

const movie2 = {
  name: "Man of Steel",
  rating: 7,
  release: 2013,
  lead: {
    name: "Henry Cavill",
    age: 36,
  },
  director: {
    name: "Zack Snyder",
    otherMovies: ["300", "Batman v Superman"],
  },
};

// ! Write a function `updateAge()` which would take the movie object, and increment lead's age and return a new object. Check that the original movie object still has the old age.

const updateAge = (movieObj) => {
  return {
    ...movieObj,
    lead: {
      ...movieObj.lead,
      age: movieObj.lead.age + 10,
    },
  };
};

console.log(updateAge(movie2));

const movie3 = {
  name: "Man of Steel",
  rating: 7,
  release: 2013,
  lead: {
    name: "Henry Cavill",
    age: 36,
  },
  director: {
    name: "Zack Snyder",
    otherMovies: ["300", "Batman v Superman"],
  },
};

// ! Write a function updateDirectorMovies() . It will take the movie object, and newMovieName. Add that newMovie to the otherMovies and return a new  movie object.

const updateDirectorMovies = (movieObj, newMovieName) => {
  return {
    ...movieObj,
    director: {
      ...movieObj.director,
      otherMovies: [...movieObj.director.otherMovies, newMovieName],
    },
  };
};

console.log(updateDirectorMovies(movie3, "Justice League"));
