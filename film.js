const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const url = `https://swapi2.azurewebsites.net/api/films/${id}`;

document.addEventListener('DOMContentLoaded', getFilmDetails)

async function getFilmDetails() {
    const film = await fetch(url).then(res => res.json())
    const characters = await fetch(`${url}/characters`).then(res => res.json())
    const planets = await fetch(`${url}/planets`).then(res => res.json())
    displayFilm(film);
    displayCharacters(characters);
    displayPlanets(planets);
}

function displayFilm(film) {
    document.getElementById('name').innerHTML = film.title;
    document.querySelector('div#crawl').textContent = film.opening_crawl;
    document.querySelector('span#episode').textContent = film.episode_id;
    document.querySelector('span#director').textContent = film.director;
    document.querySelector('span#release').textContent = film.release_date;
    document.querySelector('span#producer').textContent = film.producer;
}

function displayCharacters(characters) {
    const characterHtml = characters.map(item => `<li><a href="/character.html?id=${item.id}">${item.name}</li>`).join("");
    document.querySelector('#characters>ul').innerHTML = characterHtml;
}

function displayPlanets(planets) {
    const planetHtml = planets.map(item => `<li><a href="/planet.html?id=${item.id}">${item.name}</li>`).join("");
    document.querySelector('#planets>ul').innerHTML = planetHtml;
}
/*
planets 
    filmsUrl
    charactersUrl
*/


