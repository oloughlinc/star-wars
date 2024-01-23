const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const filmsUrl = `https://swapi.azurewebsites.net/api/films/${id}`;
const charactersUrl = `https://swapi.azurewebsites.net/api/films/${id}/characters`;
const planetsUrl = `https://swapi.azurewebsites.net/api/films/${id}/planets`;

document.addEventListener('DOMContentLoaded', getFilmDetails)

async function getFilmDetails() {
    console.log('id is', id);
    // let film = Object;
    // let characters = [];
    // let planets = [];
    const film = await fetch(filmsUrl, { mode: 'no-cors'}).then()
    const characters = await fetch(charactersUrl, { mode: 'no-cors'}).then()
    const planets = await fetch(planetsUrl, { mode: 'no-cors'}).then()
    console.log(film)
    console.log(characters)
    console.log(planets)
}
/*
planets 
    filmsUrl
    charactersUrl
*/


