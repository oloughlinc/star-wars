const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const filmsUrl = `https://swapi2.azurewebsites.net/api/films/${id}`;
const charactersUrl = `https://swapi2.azurewebsites.net/api/films/${id}/characters`;
const planetsUrl = `https://swapi2.azurewebsites.net/api/films/${id}/planets`;

document.addEventListener('DOMContentLoaded', getFilmDetails)

async function getFilmDetails() {
    console.log('id is', id);
    // let film = Object;
    // let characters = [];
    // let planets = [];
    const film = await fetch(filmsUrl).then(res => res.json())
    const characters = await fetch(charactersUrl).then(res => res.json())
    const planets = await fetch(planetsUrl).then(res => res.json())
    console.log(film)
    console.log(characters)
    console.log(planets)

    document.getElementById('film-info').innerHTML += film.title;
    document.getElementById('characters').innerHTML += characters.map(item => `<div>${item.name}</div>`)
    document.getElementById('planets').innerHTML += planets.map(item => `<div>${item.name}</div>`)    
}
/*
planets 
    filmsUrl
    charactersUrl
*/


