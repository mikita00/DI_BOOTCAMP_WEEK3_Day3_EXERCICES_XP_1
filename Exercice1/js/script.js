//Part I
function hello() {
  alert("Hello World!");
}

setTimeout(hello, 2000);

//Part II

let div = document.getElementById("container");

let compte = 0;
function pHello() {
  let newP = document.createElement("p");
  newP.innerText = "Hello World!";
  div.appendChild(newP);
  compte++;
  if (compte == 5) {
    clearInterval(pAdd);
  }
}

setTimeout(pHello, 2000);

//Part III
let btn = document.getElementById("clear");

btn.addEventListener("click", stop);

function stop() {
  clearInterval(pAdd);
}

let pAdd = setInterval(pHello, 2000);
