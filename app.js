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

function getData(){
    let moviesList = localStorage.getItem("kgd_movies_data");
    console.log(moviesList)
    return JSON.parse(moviesList)
}


console.log(catalog)


function showElement() {
    const newDiv = document.createElement("div");
    
    let moviesFromLocalStorage = getData()
        for (const movie of moviesFromLocalStorage) {
              console.log(movie);
              // add the text node to the newly created div
              const HTMLname = document.createTextNode("Nom du film : " + movie.name);
              const HTMLnote = document.createElement('p');
              HTMLnote.innerHTML = "Note du film : " + movie.note;
              HTMLnote.classList.add("note");
              newDiv.appendChild(HTMLname);
              newDiv.appendChild(HTMLnote);
    }
  
    const container = document.getElementById("container");
    container.innerHTML = newDiv.innerHTML ;
  }
  
