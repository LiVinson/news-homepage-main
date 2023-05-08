
function toggleMobileMenu () {
    const icon = this.querySelector("img");
    const body = document.querySelector("body");

    if (body.dataset.status === "open") {
        body.setAttribute("data-status", "closed");
        icon.setAttribute("src", "./assets/images/icon-menu.svg" )

    } else {
        body.setAttribute("data-status", "open");
        icon.setAttribute("src", "./assets/images/icon-menu-close.svg" )

    }
     
}

const hamburgerIcon = document.querySelector(".navigation__mobile-icon");
hamburgerIcon.addEventListener("click", toggleMobileMenu)
