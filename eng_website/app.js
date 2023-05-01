var images = [];
var id = "";
let clicked = false;
var nav = 
`<ul>
    <li><a href="./index.html">Home</a></li>
    <div class="dropdown">
        <li id="dropdown_header">Projects</li>
        <div class="dropdown-links">
            <a href="./compound_machines.html">Compound Machines</a>
            <a href="./electricity.html">Electricity</a>
            <a href="./projectile_launcher.html">Projectile Launcher</a>
        </div>
    </div>
</ul>`;

function setNav() {
    document.getElementById("navigation").innerHTML = nav;
}

function switchImage(imgList, d, name) {
    images = Array.from(imgList);
    id = name;
    var img = document.getElementById(id);
    var imgName = img.src.split("/").pop();
    var len = images.length;
    img.src = "./images/" + images[(((images.indexOf(imgName) + d) % len) + len) % len];
    clicked = true;
}

document.addEventListener("keydown", function(e) {
    if (clicked) {
        if (e.key === "ArrowLeft") {
            switchImage(images, -1, id);
        } else if (e.key === "ArrowRight") {
            switchImage(images, 1, id);
        }
    }
})