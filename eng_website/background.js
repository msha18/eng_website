document.addEventListener("mousemove", function(e) {
    var w = window.innerWidth;
    var background = "linear-gradient(" + e.clientX/w * 360 + "deg, #43dde5, #a84ce9)";
    document.body.style.backgroundImage = background;
})