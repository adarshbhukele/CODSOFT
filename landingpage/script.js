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