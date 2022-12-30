var offset = window.innerHeight;

//waypoint1
$('.about-me-waypoints').addClass("hide-element")

//waypoint2
$('.portfolio-waypoints').addClass("hide-element")

//waypoint3
$('.offer-waypoints').addClass("hide-element")

//waypoint4
$('.contact-waypoints').addClass("hide-element")

initWaypoints();

$(window).resize(function () {
    Waypoint.destroyAll()

    offset = window.innerHeight;

    initWaypoints();
});

function initWaypoints() {

    var waypoint1 = new Waypoint({
        element: $('.about-me-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
            }
        },
        offset: offset
    })


    var waypoint2 = new Waypoint({
        element: $('.portfolio-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
            }
        },
        offset: offset
    })

    var waypoint3 = new Waypoint({
        element: $('.offer-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
            }
        },
        offset: offset
    })

    var waypoint4 = new Waypoint({
        element: $('.contact-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
            }
        },
        offset: offset
    })

}
