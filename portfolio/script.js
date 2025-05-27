/*-------------toggle style switcher------------------*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
/*-------------hide style - switcher on scroll------------------*/
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*-------------Theme colors------------------*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
/*-------------sidebar------------------*/
function showSideBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="flex";
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="none";
}
window.addEventListener("scroll", () => {
    if(document.querySelector(".sidebar").style.display="flex"){
        document.querySelector(".sidebar").style.display="none";
    }
})
