document.addEventListener("mousemove", function(event) {
    var animatedBg = document.querySelector(".animated-background");
    var xPos = (event.clientX / window.innerWidth) * 100;
    var yPos = (event.clientY / window.innerHeight) * 100;
  
    animatedBg.style.left = xPos + "%";
    animatedBg.style.top = yPos + "%";
  });
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
    