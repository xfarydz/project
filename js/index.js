document.addEventListener('DOMContentLoaded', () => {
  clock();
  modal();
  carousel();
});

let myIndex = 0;

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");

  if (x.length == 0) {
    return;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1; }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// JavaScript
function hamburger() {
  var x = document.querySelector(".sticky-nav ul");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}