const viewModeBtn = document.getElementById("view-mode");
const body = document.querySelector("body");

function changeViewMode() {
    viewModeBtn.classList.toggle("btn-dark");
    viewModeBtn.classList.toggle("btn-light");
    
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-black");
}
