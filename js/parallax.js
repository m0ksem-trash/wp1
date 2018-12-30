var parallaxAreaArray = Array.from(document.getElementsByClassName("parallax"));

parallaxAreaArray.forEach(function(parallaxArea, index, array) {
	var layoutsArray = Array.from(parallaxArea.children);
	var overLayout = document.createElement('div');
	layoutsArray.forEach(function(parallaxLayout, index, array) {
		overLayout.style.position = 'relative';
		parallaxLayout.style.position = 'absolute';
		parallaxLayout.style.height = parallaxArea.offsetHeight + "px";
		parallaxLayout.style.width = parallaxArea.offsetWidth + "px";
		overLayout.appendChild(parallaxLayout);
		parallaxArea.appendChild(overLayout);
	});
	parallaxArea.style.overflow = 'hidden';
	console.log(overLayout);
});

var windowCenterX = window.innerWidth / 2;
var windowCenterY = window.innerHeight / 2;

window.onmousemove = function(event) {
  var mousePositionX = -event.clientX;
  var mousePositionY = -event.clientY;
	parallaxAreaArray.forEach(function(parallaxArea, index, array) {
		var overLayout = parallaxArea.children[0];
		var layoutsArray = Array.from(overLayout.children);
		layoutsArray.forEach(function(parallaxLayout, index, array) {
      var range = parallaxLayout.attributes.range.value * 10;
      if (range != 0) {
        parallaxLayout.style.transform = "translate(" +  ( mousePositionX / range ) + "px," + ( mousePositionY / range) + "px)";
      }
		});
	});
};
