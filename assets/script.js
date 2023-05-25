// Tableau des slides
const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];

  

    // Etape 2 /

  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');

  arrowLeft.addEventListener('click', function() {
	console.log('On clique sur la fleche gauche');
  });
  
  arrowRight.addEventListener('click', function() {
	console.log('On clique sur la fleche droite');
  });




	// Etape 3 //

  const dotsContainer = document.querySelector('.dots');

  slides.forEach((slide, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
  
	if (index === 0) {
	  dot.classList.add('dot_selected');
	}
  
	dotsContainer.appendChild(dot);
  });

	// Etape 4 et 5 //

const bannerImg = document.querySelector ('.banner-img');
const tagLine = document.querySelector ('#banner p');
let currentSlideIndex = 0;

function updateSlide() {
  const slide = slides[currentSlideIndex];
  bannerImg.src = "./assets/images/slideshow/" + slide.image ;
  tagLine.innerHTML = slide.tagLine;

  const dots = document.querySelectorAll('.dot');
  for (let index = 0; index < dots.length; index++) {
    const dot = dots[index];
  
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  };
}
updateSlide(); // Afficher la première diapo

arrowRight.addEventListener ('click' , function() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
updateSlide();
})

arrowLeft.addEventListener ('click' , function() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
updateSlide();
})




  
  

  
  
 
  