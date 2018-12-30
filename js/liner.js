var text = document.getElementById('liner');
console.dir(text)
tree.tree.onmousemove = function mouseMove(event){
  text.innerText = event.offsetY  + " : " + event.offsetX;
}
