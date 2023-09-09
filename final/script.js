const navLinks = document.querySelectorAll('.nav-link');
const planetName = document.querySelector('#planet-name');
const planetIMG = document.querySelector('#planet-img');
const overviewBtn = document.querySelector('#overview-btn');
const internalBtn = document.querySelector('#internal-btn');
const geologyBtn = document.querySelector('#geology-btn');
const planetDesc = document.querySelector('#planet-description');
const geologyIMG = document.querySelector('#geology-img');

const PLANET_API_URI = 'https://planets-api.vercel.app/api/v1/planets';

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        getPlanet(navLinks[i].textContent);
    });
}

const getPlanet = async (planet = 'Mercury') => {
    const response = await fetch(`${PLANET_API_URI}/${planet}`);
    const data = await response.json();
    planetName.textContent = data['name'];
    planetIMG.src = data['images']['planet'];
    planetDesc.textContent = data.overview.content;

    overviewBtn.addEventListener('click', () => {
        planetDesc.textContent = data.overview.content;
        planetIMG.src = data.images.planet;
        geologyIMG.src = '';
    });
    internalBtn.addEventListener('click', () => {
        planetDesc.textContent = data.structure.content;
        planetIMG.src = data.images.internal;
    });
    geologyBtn.addEventListener('click', () => {
        planetDesc.textContent = data.geology.content;
        planetIMG.src = data.images.planet;
        geologyIMG.src = data.images.geology;
    });
};

getPlanet();

const hamburger = document.querySelector(".hamburger");
const navplanets = document.querySelector(".nav-planets")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navplanets.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navplanets.classList.remove("active");
}))
