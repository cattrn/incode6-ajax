$.getJSON(API_BASE_URL + '/discover/movie', apiOptions)
.then((data) => {
  const { results } = data

  results.forEach((movie) => {
    const html = `
    <a href="/movies/${movie.id}">
    <div>
      <h3>${movie.title}</h3>
      <img src="${IMAGE_BASE_URL + movie.poster_path}"
    </div>
    </a>
    `
    $("#movies").append(html)
  })
})
.catch((error) => {
  console.log(error)
})