window.onload = () => {

const loading = document.getElementById("loading-screen");
const experience = document.getElementById("experience");

setTimeout(() => {
    loading.classList.add("hidden");
    experience.classList.remove("hidden");
}, 3000);


const intro = document.getElementById("intro");
const travel = document.getElementById("travel");
const regulus = document.getElementById("regulus");

setTimeout(() => {
    intro.style.display = "none";
    travel.style.display = "block";
}, 9000);


setTimeout(() => {
    travel.style.display = "none";
    regulus.style.display = "block";
}, 14000);


// estrelas viajando

const starfield = document.getElementById("starfield");

for(let i = 0; i < 120; i++){

    let star = document.createElement("span");

    star.innerHTML = "✦";
    star.style.position = "absolute";
    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";
    star.style.fontSize = Math.random()*10 + 5 + "px";
    star.style.opacity = Math.random();

    starfield.appendChild(star);

}


// carta

const button = document.getElementById("open-letter");
const letter = document.getElementById("letter");

<p class="coordinates">
Ascensão reta: 10h 08m 22s<br>
Declinação: +11° 58′ 02″<br>
Distância: aproximadamente 79 anos-luz
</p>

};
document.getElementById("stellarium").onclick = () => {
    window.open(
      "https://stellarium-web.org/?search=Regulus",
      "_blank"
    );
};
};
