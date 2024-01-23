const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const filmsUrl = `https://swapi.azurewebsites.net/api/films/${id}`;
const charactersUrl = `https://swapi.azurewebsites.net/api/films/${id}/characters`;
const planetsUrl = `https://swapi.azurewebsites.net/api/films/${id}/planets`;

document.addEventListener('DOMContentLoaded', getFilmDetails)

async function getFilmDetails() {
    // let film = Object;
    // let characters = [];
    // let planets = [];
    const film = await fetch(filmsUrl).then(res => res.json())
    const characters = await fetch(charactersUrl).then(res => res.json())
    const planets = await fetch(planetsUrl).then(res => res.json())
    console.log(film)
    console.log(characters)
    console.log(planets)
}
/*
planets 
    filmsUrl
    charactersUrl
*/


