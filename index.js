
function toggleMobileMenu () {
    console.log(this);
    this.dataset.status === "open" ?  this.setAttribute("data-status", "closed")  : this.setAttribute("data-status", "open")  
}

const hamburgerIcon = document.querySelector(".navigation__mobile-icon");
hamburgerIcon.addEventListener("click", toggleMobileMenu)
