//selection de la div à deplacer
let boxe = document.getElementById("box"); 
// attribut à activer afin que l'objet soit deplaçable
boxe.setAttribute("draggable", true); 

 //selection de la zone de depot
let zone = document.getElementById("target");

// les differents evenements pour le deplacement et le depot de l'objet

// cet evenement permet de definr l'instant où le deplacement à debuter
boxe.addEventListener("dragstart", dragStart); 

// cet evenement indique l'instant où l'objet sur vol la zone de depot
zone.addEventListener("dragover", allowDrop);

// cet evenement indique l'instant où l'objet est deposé
zone.addEventListener("drop", dragDrop); 

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let box = document.getElementById(data);
  event.target.appendChild(box);
}
