//On Load
window.addEventListener('DOMContentLoaded', () => {

    //----------------SCROLL BUTTON BEHAVIOUR-----------------
    var scrollButton = document.getElementById("connectButton");
    var scrollStop = document.getElementById("scrollstop");

    scrollButton.onclick = function () {
        window.scrollTo({ top: scrollStop.offsetTop - 30, left: 0, behavior: 'smooth' });
    }
    //----------------SCROLL BUTTON BEHAVIOUR END-----------------
});