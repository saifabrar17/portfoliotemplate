const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;



for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active") //remove active class from all button
        }
        this.classList.add("active"); //add active class to clicked button
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}

//header
/*
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
*/














//slider
/*
const sliderContainer = document.querySelector(".testi-slider");
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
let itemPreSlide = 0;

//responsive

const responsive = [
    {
        breakpoint: {
            width: 0,
            item: 1
        }
    },
    {
        breakpoint: {
            width: 991,
            item: 2
        }
    }
]

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth>responsive[i].width){
            itemPreSlide=responsive[i].breakpoint.item;
        }
    }
start
}

window.onload = load();

*/








/*ATTEMPT 2*/
/*


*/



/*ATTEMPT 1*/
/*
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function (element) {
    element.querySelector(".fa-plus").addEventListener("click", function () {
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
    })
})

*/

/*

console.log(filterButtons)
*/
