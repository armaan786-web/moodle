define([
    "jquery",
], function($) {
    return slideshow = {

        slideIndex : 1,

        show       : function() {
            slideshow.showSlides(slideshow.slideIndex);

            setInterval(function() {
                slideshow.plusSlides(1);
            }, 7000);


            $(".slideshow-prev").click(function() {
                slideshow.plusSlides(-1);
            });
            $(".slideshow-next").click(function() {
                slideshow.plusSlides(1);
            });

            $(".slideshow-dot").click(function() {
                slideshow.slideIndex = $(this).attr("data-slidenun");
                slideshow.showSlides(slideshow.slideIndex);
            });
        },
        plusSlides : function(n) {
            slideshow.showSlides(slideshow.slideIndex += n);
        },
        showSlides : function(slideshow_num) {
            var slides_length = $(".slideshow-item").hide().length;
            if (slideshow_num > slides_length) {
                slideshow.slideIndex = 1
            }
            if (slideshow_num < 1) {
                slideshow.slideIndex = slides_length;
            }

            $(".slideshow-item-" + slideshow.slideIndex).show();

            $(".slideshow-dot").removeClass("active");
            $(".slideshow-dot-" + slideshow.slideIndex).addClass("active");
        }
    };
});



