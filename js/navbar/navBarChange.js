var paralaxaShadow = $('.parallax');
var paralaxaHeight = paralaxaShadow.outerHeight();

navbarEdit();

$(window).resize(function () {
    navbarEdit();
});

$(window).scroll(function () {
    navbarEdit();
});

function navbarEdit() {
    if (window.innerWidth >= 768) {

        if (window.scrollY > paralaxaHeight - (paralaxaHeight / 3)) {
            $(".navbar").addClass('navbar-black');
            $(".logo-full").addClass('logo-full-smaller');
            $(".nav-link").addClass('nav-link-black');
            
            $(".nav-link").removeClass('nav-link-main');

        } else {
            $(".navbar").removeClass('navbar-black');
            $(".logo-full").removeClass('logo-full-smaller');
            $(".nav-link").removeClass('nav-link-black');
            
            $(".nav-link").addClass('nav-link-main');

        }
    } else {
        $(".navbar").addClass('navbar-black');
        $(".logo-full").addClass('logo-full-smaller');
        $(".nav-link").addClass('nav-link-black');
        

    }
    //Paralaxa opacity
    //    var scrollPercent = (paralaxaHeight - window.scrollY) / paralaxaHeight;
    //    if (scrollPercent >= 0 && scrollPercent <= 0.9) {
    //        paralaxaShadow.css('opacity', scrollPercent);
    //    }
}
