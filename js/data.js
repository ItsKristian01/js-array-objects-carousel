const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const itemsElem = document.querySelector(".items");
console.log(itemsElem);


let imagesString = "";
for (let i = 0; i < images.length; i++) {
  const curElem = images[i];
  imagesString += `
    <div class="item">
         <img src="./${curElem.image}" alt="">
    </div>`;
}

console.log(imagesString);

itemsElem.innerHTML = itemsElem.innerHTML + imagesString;


let currentIndex = 0; 
const slideElems = document.querySelectorAll(".item");
slideElems[currentIndex].classList.add("active");


document.querySelector(".next").addEventListener("click", function () {

  slideElems[currentIndex].classList.remove("active");

  if (currentIndex < slideElems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slideElems[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function() {
    slideElems[currentIndex].classList.remove("active");
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideElems.length - 1;
    }
    slideElems[currentIndex].classList.add("active");
})