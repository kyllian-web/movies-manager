let catalog = []

function add() {
    let movie_name = document.getElementById('movie_name').value
    console.log(movie_name)
    let movie = { name: movie_name }
    console.log(movie)
    catalog.push(movie)
    console.log(catalog)
    recordData()
}

function recordData(){
    localStorage.setItem("kgd_movies_data", JSON.stringify(catalog));
}


console.log(catalogue)

