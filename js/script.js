var tablink = document.getElementsByClassName("tab-link")
var tabcontent = document.getElementsByClassName("info-content")

function opentab(tabname) {
    for (link of tablink) {
        link.classList.remove("active-link");
    }
    for (content of tabcontent) {
        content.classList.remove("active-info");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-info");
}