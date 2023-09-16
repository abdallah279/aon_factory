// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Header Fixed
let header = document.querySelector(".page-navbar");
if (window.scrollY > 150) {
  header.classList.add("scroll", "px-0", "container", "position-fixed");
} else {
  header.classList.remove("scroll", "px-0", "container", "position-fixed");
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    header.classList.add("scroll", "px-0", "container", "position-fixed");
  } else {
    header.classList.remove("scroll", "px-0", "container", "position-fixed");
  }
});

// Active Link
$(".page-navbar .links .link").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

// Show And Hide Search Navbar
$(".nav-search-ic").on("click", function () {
  $(".nav-search").toggleClass("open");
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".side-user-open").on("click", function () {
  $(".sidebar").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".close").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".sidebar").removeClass("active");
  $(this).fadeOut(500);
});

// dropDown stopPropagation
$(".dropdown-menu").click(function (e) {
  e.stopPropagation();
});

// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll(".pass-icon");

if (iconsPassSet) {
  iconsPassSet.forEach((ic) => {
    ic.addEventListener("click", function () {
      let input = ic.parentElement.querySelector("input");
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon) {
  if (input.type == "password") {
    input.setAttribute("type", "text");
    // icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else {
    input.setAttribute("type", "password");
    // icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }

  icon.classList.toggle("show");
}

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

$(".num").countUp();

/******************* All Sliders *******************/

$(document).ready(function () {
  /************ home Slider ***********/
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    animateOut: "fadeOut",
    rtl: isRtl,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
  });

  /************ services Slider ***********/
  const owl = $(".services-slider");

  owl.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owl.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });

  owl.owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    responsive: {
      991: {
        items: 3,
      },
      560: {
        items: 2,
      },
    },
  });

  /************ Clients Carousel ***********/
  const owlclients = $(".clients-slider");

  owlclients.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owlclients.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });
  owlclients.owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
        margin: 20,
      },
    },
  });
});
