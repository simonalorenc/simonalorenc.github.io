var offset = window.innerHeight / 2;

//waypoint1
$('.skills-waypoints').addClass("hide-element")

//waypoint2
$('.portfolio-waypoints').addClass("hide-element")

//waypoint3
$('.gallery-waypoints').addClass("hide-element")

//waypoint4
$('.contact-waypoints').addClass("hide-element")

initWaypoints();

$(window).resize(function () {
    Waypoint.destroyAll()

    offset = window.innerHeight / 2;

    initWaypoints();
});

function initWaypoints() {

    var waypoint1 = new Waypoint({
        element: $('.skills-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            var barArr = document.getElementsByClassName('ldBar');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
                this.element.removeClass('fadeOutDown');

                var animateDone = false;

                for (var i = 0; i < barArr.length; ++i) {
                    var bar = new ldBar(barArr[i]);
                    bar.set(0);
                    bar.set(barArr[i].getAttribute("data-value"));
                }
            } else {
//                for (var i = 0; i < barArr.length; ++i) {
//                    var bar = new ldBar(barArr[i]);
//                    bar.set(0);
//                }
                this.element.removeClass('fadeInUp');
                this.element.addClass('fadeOutDown');
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
                this.element.removeClass('fadeOutDown');
            }else{
                this.element.removeClass('fadeInUp');
                this.element.addClass('fadeOutDown');
            }

        },
        offset: offset
    })

    var waypoint3 = new Waypoint({
        element: $('.gallery-waypoints'),
        handler: function (direction) {
            this.element.removeClass('hide-element');

            if (direction == 'down') {
                this.element.addClass('fadeInUp');
                this.element.removeClass('fadeOutDown');
            }else{
                this.element.removeClass('fadeInUp');
                this.element.addClass('fadeOutDown');
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
                this.element.removeClass('fadeOutDown');
            }else{
                this.element.removeClass('fadeInUp');
                this.element.addClass('fadeOutDown');
            }
        },
        offset: offset
    })

}
