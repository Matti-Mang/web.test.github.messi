const knapp = document.querySelector("#styleBtn");
const sistaBild = document.querySelector(".messi-sista-img");

knapp.addEventListener("click", () => {
    sistaBild.style.display = sistaBild.style.display === "block" ? "none" : "block";
});