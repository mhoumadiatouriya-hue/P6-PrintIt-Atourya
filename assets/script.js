const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélection des éléments du DOM
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Variable pour suivre l'index de la slide actuelle
let currentIndex = 0;

// Ajout des fonctions pour créer les bullet points (dots)
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (i === 0) {
			dot.classList.add("dot_selected");
		}
		dotsContainer.appendChild(dot);
	}
}
// Fonction pour mettre à jour le carrousel
function updateCarousel() {
	// Mise à jour de l'image
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	
	// Mise à jour du texte
	bannerText.innerHTML = slides[currentIndex].tagLine;
	
	// Mise à jour des dots
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

// Event listener pour la flèche gauche
arrowLeft.addEventListener("click", function() {
	console.log("Clic sur la flèche gauche");
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	updateCarousel();
});

// Event listener pour la flèche droite
arrowRight.addEventListener("click", function() {
	console.log("Clic sur la flèche droite");
	currentIndex++;
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}
	updateCarousel();
});

// Initialisation : création des dots au chargement de la page
createDots();