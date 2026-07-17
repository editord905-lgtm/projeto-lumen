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

    iniciarContador();

};


// Stellarium

document.getElementById("stellarium").onclick = () => {

    window.open(
        "https://stellarium-web.org/?search=Regulus",
        "_blank"
    );

};


// contador

function iniciarContador(){

    const inicio = new Date("2026-07-17T00:00:00");
    const contador = document.getElementById("counter");


    setInterval(() => {

        const agora = new Date();
        const diferenca = agora - inicio;


        const dias = Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferenca / (1000 * 60 * 60)) % 24
        );

        const minutos = Math.floor(
            (diferenca / (1000 * 60)) % 60
        );

        const segundos = Math.floor(
            (diferenca / 1000) % 60
        );


        contador.innerHTML =
        `Esta estrela foi escolhida há:<br>
        ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;

    },1000);

}

};
