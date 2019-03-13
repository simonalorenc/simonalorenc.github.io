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
    setTimeout(slideDelay, 1000);
    //    document.getElementById("loader").style.display = "none";
    
    //  document.getElementById("myDiv").style.display = "block";
}

function slideDelay() {
    $('.load-screen').addClass("slideOutDown");
}

window.onload = function () {
    loadBar.set(60);
    setTimeout(showPage, 1000);
}
