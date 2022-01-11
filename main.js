alert(window.innerHeight, window.innerWidth);

let height = document.getElementById("height"),
  width = document.getElementById("width");

width.innerText = `screen width: ${window.innerWidth}`;
height.innerText = `screen height: ${window.innerHeight}`;
