// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

var images=new Array('images/slidshow/pic1.jpg','images/slidshow/pic2.jpg','images/slidshow/pic3.jpg','images/slidshow/pic4.jpg','images/slidshow/pic5.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.bg-banner-two')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,2000);
    });
}