const root = document.getElementById("root");
let movie = [];

if (localStorage.getItem("movie")) {
    movie = JSON.parse(localStorage.getItem("movie"));
}

const setPath = (img)=>{
    return `./img/${img}`
}

for (const file in movie) {
    `
    ${ root.innerHTML+= `
   <div class="card" key="${movie[file].id}">
   <h1>${movie[file].title}</h1>
       <img src="${setPath(movie[file].img)}">
       <p>${movie[file].description}</p></div>`}` 

       console.log(movie[file].description);

}