"use strict";

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('form-meteo');

form.addEventListener('submit', lancer);

async function afficherMeteo(ville) {
    const API_KEY = "b1888ae6896fb9a8f988c02ddbb48479";
    const villeEncodee = encodeURIComponent(ville);
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${villeEncodee}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('affichage-ville').textContent = data.location.name;
        document.getElementById('temperature').textContent = data.current.temperature;
        document.getElementById('vent').textContent = data.current.wind_speed;

        const iconeUrl = data.current.weather_icons[0];
        const description = data.current.weather_descriptions[0];
        const imgElement = document.getElementById('icone-temps');

        imgElement.src = iconeUrl;
        imgElement.alt = description;
        imgElement.title = description;
        imgElement.style.display = 'block';

    } catch (error) {
        console.error("Erreur réseau :", error);
    }
}
async function lancer(event) {
    event.preventDefault(); 

    const villeSaisie = document.getElementById('input-ville').value;

    if(villeSaisie) {
        await afficherMeteo(villeSaisie);
}}
});