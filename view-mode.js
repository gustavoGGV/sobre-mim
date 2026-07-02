const viewModeBtn = document.getElementById("view-mode");
const backToTopBtn = document.getElementById("back-to-top");
const body = document.querySelector("body");

window.onscroll = () => {toggleDisplayBackToTopBtn()};

setViewModeBasedOnLocalStorage();

function changeViewMode() {
    viewModeBtn.classList.toggle("btn-dark");
    viewModeBtn.classList.toggle("btn-light");
    backToTopBtn.classList.toggle("btn-light");
    backToTopBtn.classList.toggle("btn-dark");

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

function toggleDisplayBackToTopBtn() {
    if (body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.replace("d-none", "d-block");

        return;
    }

    backToTopBtn.classList.replace("d-block", "d-none");
}

function scrollBackToTop() {
    body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
