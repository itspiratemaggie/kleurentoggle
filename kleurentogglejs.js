const homecolor = document.getElementById("radiobutton1");
const darkbluecolor = document.getElementById("radiobutton2");
const redcolor = document.getElementById("radiobutton3");
const bluecolor = document.getElementById("radiobutton4");
const greencolor = document.getElementById("radiobutton5");
const purplecolor = document.getElementById("radiobutton6");
const nav = document.getElementById("navje");
const burger = document.getElementById("burgerMenuId");
let text = document.getElementById("body__text");

const closeNav = () => {
  nav.classList.toggle("active");
};

const removeactive = () => {
  nav.classList.remove("active");
};


nav.addEventListener("click", closeNav);
nav.addEventListener("mouseenter", closeNav);
nav.addEventListener("mouseleave", removeactive);


let texthtml = ["Home", "Darkblue", "Red", "Blue", "Green", "Purple"];

// eventlisteners click voor kleuren incl. functies
homecolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(194, 194, 194)";
  text.innerText = texthtml[0];
});

darkbluecolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#003d5b";
  text.innerText = texthtml[1];
});

redcolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#d1495b";
  text.innerText = texthtml[2];
});

bluecolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#30638e";
  text.innerText = texthtml[3];
});

greencolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#38b000";
  text.innerText = texthtml[4];
});

purplecolor.addEventListener("click", () => {
  document.body.style.backgroundColor = "purple";
  text.innerText = texthtml[5];
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 49) {
    document.body.style.backgroundColor = "rgb(194, 194, 194)";
    text.innerText = texthtml[0];
  } else if (e.keyCode === 50) {
    document.body.style.backgroundColor = "#003d5b";
    text.innerText = texthtml[1];
  } else if (e.keyCode === 51) {
    document.body.style.backgroundColor = "#d1495b";
    text.innerText = texthtml[2];
  } else if (e.keyCode === 52) {
    document.body.style.backgroundColor = "#30638e";
    text.innerText = texthtml[3];
  } else if (e.keyCode === 53) {
    document.body.style.backgroundColor = "#38b000";
    text.innerText = texthtml[4];
  } else if (e.keyCode === 54) {
    document.body.style.backgroundColor = "purple";
    text.innerText = texthtml[5];
  }
});