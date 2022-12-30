var bar = document.getElementsByClassName('loading-bar');
var loadBar = new ldBar(bar[0]);
loadBar.set(1);

function showPage() {
    loadBar.set(100);
    setTimeout(slideDelay, 300);
}

function slideDelay() {
    $('.load-screen').addClass("slideOutDown");
    setTimeout(closeIfAnimationUnsupported, 500);
}

function closeIfAnimationUnsupported() {
    $('#loader').fadeOut("slow");
    setTimeout(closeIfAnimationUnsupportedForce, 500);

}

function closeIfAnimationUnsupportedForce() {
    $('#loader').css("z-index", -1);
}


window.onload = function () {
    loadBar.set(85);
    setTimeout(showPage, 300);
}
