const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const planetsUrl = `https://swapi2.azurewebsites.net/api/planets/${id}`;
const charactersUrl = `https://swapi2.azurewebsites.net/api/planets/${id}/characters`;
const filmsUrl = `https://swapi2.azurewebsites.net/api/planets/${id}/films`;

document.addEventListener('DOMContentLoaded', getPlanets)

async function getPlanets() {
    // let film = Object;
    // let characters = [];
    // let planets = [];
    const planets = await fetch(planetsUrl).then(res => res.json())
    const characters = await fetch(charactersUrl).then(res => res.json())
    const film = await fetch(filmsUrl).then(res => res.json())
    console.log(film)
    console.log(characters)
    console.log(planets)
}