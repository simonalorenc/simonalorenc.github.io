//var myVar;
//
//function myFunction() {
//
//    myVar = setTimeout(showPage, 3000);
//}
var bar = document.getElementsByClassName('loading-bar');
var loadBar = new ldBar(bar[0]);
loadBar.set(10);

function showPage() {
    loadBar.set(100);
    setTimeout(slideDelay, 100);
}

function slideDelay() {
    $('.load-screen').addClass("slideOutDown");
    setTimeout(closeIfAnimationUnsupported, 900);
}

function closeIfAnimationUnsupported() {
    $('#loader').fadeOut("slow");
    setTimeout(closeIfAnimationUnsupportedForce, 400);

}

function closeIfAnimationUnsupportedForce() {
    $('#loader').css("z-index", -1);
}



window.onload = function () {
    loadBar.set(60);
    setTimeout(showPage, 500);
}
