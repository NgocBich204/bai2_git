/// doi mau js
function changeColor() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");

    var color1 = box1.style.backgroundColor;
    var color2 = box2.style.backgroundColor;
    var color3 = box3.style.backgroundColor;

    box1.style.backgroundColor = color3;
    box2.style.backgroundColor = color1;
    box3.style.backgroundColor = color2;
  };