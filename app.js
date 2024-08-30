
function add() {
    let catalog = getData()
    let movie_name = document.getElementById('movie_name').value
    console.log(movie_name)
    let movie = { name: movie_name }
    console.log(movie)
    catalog.push(movie)
    console.log(catalog)
    recordData(catalog)
    showElement()
}

function recordData(c){
    localStorage.setItem("kgd_movies_data", JSON.stringify(c));
}

function getData(){
    let moviesList = localStorage.getItem("kgd_movies_data");
    console.log(moviesList)
    return JSON.parse(moviesList)
}




function showElement() {
    const newDiv = document.createElement("div");
    
    let moviesFromLocalStorage = getData()
    console.log(moviesFromLocalStorage)
    moviesFromLocalStorage.forEach(function (movie, i) {
    // for (const movie of moviesFromLocalStorage) {
        console.log(movie);


        const movieElement = document.createElement('div')
        movieElement.setAttribute('id', 'movie-'+i);       
        movieElement.innerHTML = "Nom du film : " + movie.name 
        + '<i onclick="updateElement('+i+')" class="fa-solid fa-pen"></i>'
        + '<i onclick="deleteElement('+i+')" class="fa-solid fa-trash"></i>';
        newDiv.appendChild(movieElement);
    })
    
    
    const container = document.getElementById("container");
    container.innerHTML = newDiv.innerHTML ;
}



function updateElement(i) {

  
    let moviesFromLocalStorage = getData()

    moviesFromLocalStorage.splice(i , 1, {name : String(prompt('Choisi un nouveau nom'))})
    
    recordData(moviesFromLocalStorage)

    showElement()
}

if(getData() === null){
    recordData([])
}

function deleteElement(i) {
    let moviesFromLocalStorage = getData()
    moviesFromLocalStorage.splice(i, 1,)
    recordData(moviesFromLocalStorage)
    showElement()
    
} 

showElement()
