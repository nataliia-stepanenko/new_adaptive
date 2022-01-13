// Carousel

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    arrows: false,
    dots: false
  });
});

// Burger

    let burger = document.querySelector("#burger-icon");
    let header = document.querySelector("#header");
    burger.onclick = function() {
        header.classList.toggle("menu-open");
    }
