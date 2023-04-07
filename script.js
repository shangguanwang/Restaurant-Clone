// Get the elements from HTML
const imgs = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = imgs.length;
const leftArrow = document.getElementById("arrow_left");
const rightArrow = document.getElementById("arrow_right");

const dots = document.getElementsByClassName("dot");

// Add the event listener for the two arrows
leftArrow.addEventListener('click', moveBack)
rightArrow.addEventListener('click',moveToNext)

// Automatic Transition
setInterval(moveToNext,4000);

// Define the functions for the above event listeners
function hideAllSlides(){
    for (let img of imgs){
        img.classList.remove("carousel-item-visible");
        img.classList.add("carousel-item-hidden");
    }
    for (let dot of dots){
        dot.classList.remove("active");
        dot.classList.add("dot-hidden");
    }
}
function moveBack(){
    hideAllSlides();
    //if we are already on the first slide, we want to go back to the last slide
    if (slidePosition===0){
        slidePosition = totalSlides-1;
    }else{
        slidePosition--;
    }
    imgs[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("active");
}

function moveToNext(){
    //hide all the slides
    hideAllSlides();
    //if we are on our last slide, reset the slide Position back to 0, so taking users back to the first slide
    if (slidePosition===totalSlides-1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    imgs[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("active");
}
