const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
const url = `https://swapi2.azurewebsites.net/api/planets/${id}`;

document.addEventListener('DOMContentLoaded', getPlanets)

async function getPlanets() {
    const planets = await fetch(url).then(res => res.json())
    const characters = await fetch(`${url}/characters`).then(res => res.json())
    const film = await fetch(`${url}/films`).then(res => res.json())
    displayPlanets(planets);
    displayCharacters(characters);
    displayFilm(film);
    console.log(film)
}

function displayPlanets(planets) {
    document.getElementById('name').innerHTML = planets.name;
    document.querySelector('span#climate').textContent = planets.climate;
    document.querySelector('span#diameter').textContent = planets.diameter;
    document.querySelector('span#gravity').textContent = planets.gravity;
    document.querySelector('span#population').textContent = planets.population;
}

function displayCharacters(characters) {
    const characterHtml = characters.map(item => `<li><a href="/character.html?id=${item.id}">${item.name}</li>`).join("");
    document.querySelector('#characters>ul').innerHTML = characterHtml;
}

function displayFilm(film) {
    const filmHtml = film.map(item => `<li><a href="/film.html?id=${item.id}">${item.title}</li>`).join("");
    document.querySelector('#films>ul').innerHTML = filmHtml;
}