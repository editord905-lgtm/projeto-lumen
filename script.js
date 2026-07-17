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

button.onclick = () => {

    regulus.style.display = "none";
    letter.classList.remove("hidden");

};
document.getElementById("stellarium").onclick = () => {
    window.open(
      "https://stellarium-web.org/?search=Regulus",
      "_blank"
    );
};
};
