let button = document.getElementById("btn");
let container = document.getElementById("container");

function bgcolors() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return [r, g, b];
}

let backgroundcolors = () => {
  container.style.backgroundColor = `rgb(${bgcolors()})`;
};

bgcolors();
button.addEventListener("click", backgroundcolors);
