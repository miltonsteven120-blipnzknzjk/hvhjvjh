window.onload = function () {
  var tulip = document.getElementById("tulip");
  var textBox = document.getElementById("textBox");

  if (tulip) {
    tulip.onclick = function () {
      textBox.classList.add("show");
    };
  }
};
