console.log(movie_id)

$.getJSON(API_BASE_URL + `/movie/${movie_id}`, apiOptions)
.then((movie) => {
  console.log(movie)

  $("#title").text(movie.title)
  $("#poster").attr({
    src: IMAGE_BASE_URL + movie.poster_path,
    alt: "Poster for " + movie.title
  })

  movie.genres.forEach((genre, index) => {
    $("#genres").append(`<span>${genre.name}</span>`)
  })

  $("#summary").text(movie.overview)
})
.catch((error) => {
  console.log(error)
  $("main").append("There was an error")
})