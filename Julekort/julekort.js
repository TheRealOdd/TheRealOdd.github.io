function setup(){
    let divSky = document.getElementById("sky");
    let divNisse = document.getElementById("nisse");
    let star = divSky = divSky.querySelectorAll(".star");
    stars.forEach(stjerne => {
        stjerne.style.left = -120 + Math.floor(Math.random()*40) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random()*80) + "px";
    }); 
divNisse.addEventListener("click", dropGifts);
function dropGits(e) {
    let oakke = document.createElement("div");
    pakke.className = "pakke";

}
    }