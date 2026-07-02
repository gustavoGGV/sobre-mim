const viewModeBtn = document.getElementById("view-mode");
const body = document.querySelector("body");

setViewModeBasedOnLocalStorage();

function changeViewMode() {
    viewModeBtn.classList.toggle("btn-dark");
    viewModeBtn.classList.toggle("btn-light");
    
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-black");

    setViewModeOnLocalStorage();
}

function setViewModeOnLocalStorage() {
    if (viewModeBtn.classList.contains("btn-dark")) {
        localStorage.setItem("view-mode", "light")

        return;
    }
        
    localStorage.setItem("view-mode", "dark")
}

function setViewModeBasedOnLocalStorage() {
    const viewMode = localStorage.getItem("view-mode");

    if (viewMode === "dark" && !viewModeBtn.classList.contains("btn-light")) {
        changeViewMode();

        return;
    }

    if (viewMode === "light" && !viewModeBtn.classList.contains("btn-dark")) {
        changeViewMode();

        return;
    }
}
