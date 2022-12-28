navbarEdit();

$(window).resize(function () {
    navbarEdit();
});

$(window).scroll(function () {
    navbarEdit();
});

function navbarEdit() {
    if (window.innerWidth >= 768) {

        if (window.scrollY > window.innerHeight / 5) {
            $(".navbar").addClass('navbar-black');
            $(".logo-full").addClass('logo-full-smaller');

            $(".logo-full-smaller").attr("src","photos/logo/logo.png");
            
            $(".nav-link").removeClass('nav-link-main');

        } else {
            $(".navbar").removeClass('navbar-black');
            $(".logo-full-smaller").attr("src","photos/logo/logo.png");
            $(".logo-full").removeClass('logo-full-smaller');
            
            $(".nav-link").addClass('nav-link-main');

        }
    } else {
        $(".navbar").addClass('navbar-black');
        $(".logo-full").addClass('logo-full-smaller');        

    }
}
