navbarEdit();

$(window).resize(function () {
    navbarEdit();
});

$(window).scroll(function () {
    navbarEdit();
});

function navbarEdit() {
    if (window.innerWidth >= 768) {

        if (window.scrollY > window.innerHeight / 3) {
            $(".navbar").addClass('navbar-small');
            $(".logo-full").addClass('logo-full-smaller');

            $(".logo-full-smaller").attr("src","photos/logo/logo.png");
            
            $(".nav-link").removeClass('nav-link-main');

        } else {
            $(".navbar").removeClass('navbar-small');
            $(".logo-full-smaller").attr("src","photos/logo/logo.png");
            $(".logo-full").removeClass('logo-full-smaller');
            
            $(".nav-link").addClass('nav-link-main');

        }
    } else {
        $(".navbar").addClass('navbar-small');
        $(".logo-full").addClass('logo-full-smaller');        

    }
}
