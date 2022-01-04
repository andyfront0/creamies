//On Load
window.addEventListener('DOMContentLoaded', () => {

    //----------------SCROLL BUTTON BEHAVIOUR-----------------
    var scrollButton = document.getElementById("scroll-down");
    var scrollStop = document.getElementById("scrollstop");

    scrollButton.onclick = function () {
        window.scrollTo({ top: scrollStop.offsetTop - 30, left: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', function (e) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
        scrollButton.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + scrollStop.offsetTop / 250));
    });
    //----------------SCROLL BUTTON BEHAVIOUR END-----------------

});