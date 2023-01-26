
let divAnimate = document.getElementById("animate");

function myMove() {
  let pos = 0;
  let moove = setInterval(function () {
    if (pos == 350) {
        clearInterval(moove);
      }else{
        pos += 1;
        divAnimate.style.left = pos + "px";
      }
  },1);
}
