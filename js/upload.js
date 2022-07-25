const fileInput = document.getElementById('fileInput');
const movieForm = document.getElementById('movieForm');
const uploadImg = document.getElementById('uploadImg');
const title = document.getElementById('title');
const description = document.getElementById('description');

let movie = [];
if(localStorage.getItem('movie')){
    movie = JSON.parse(localStorage.getItem('movie'));
}

let img;

const setPath = (img)=>{
    return `./img/${img}`
}

fileInput.addEventListener('change',()=>{
    let pathUrl = fileInput.value.split("\\");
     img = pathUrl[pathUrl.length -1];
    uploadImg.setAttribute('src',setPath(img));
})