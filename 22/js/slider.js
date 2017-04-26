/**
 * Created by Frolova on 12.04.2017.
 */
'use strict';
  //.chisel:active
    (function () {
        var slides = ['images/image1.jpg', 'images/image2.jpg',  'images/image3.jpg', 'images/image4.jpg'];
           
         function AnimateSlider() {
             
             document.addEventListener("DOMContentLoaded", this.autoplay.bind(this), false);
             document.addEventListener("click", this.changeSlider.bind(this), false);
        }
        AnimateSlider.prototype.autoplay = function () {
           var index = 0;
            animateSlide();
            jQuery('.chisel').eq(index).removeClass("chisel-active");
        }
        AnimateSlider.prototype.changeSlider = function (event) {
            slideSlider(event);
        }
        window.AnimateSlider = AnimateSlider;
         
        function animateSlide() {
            var image  = jQuery('div').find('img');
            jQuery.each(slides,function(index) {
                jQuery('div').find('.chisel-active').removeClass("chisel-active");
                image.animate({opacity: "1"}, function () {jQuery('.chisel').eq(index).addClass("chisel-active") })
                    .animate({opacity: "0.8"}, 1500)
                    .animate({opacity: "0.2"}, function () {jQuery('.chisel').eq(index).removeClass("chisel-active"); })
                    .animate( {left:'+=100'},function(){if (index === 3 ) { index = -1;}  image.attr("src", slides[index + 1]); })
                    .animate({opacity: "0.4"}, "slow");
            });
        }
        function slideSlider(event) {
            var image  = jQuery('div').find('img'),
                target = event.target,
                index = target.textContent - 1;
    
            if (target.tagName !== "DIV") return;
            jQuery('div').find('.chisel-active').removeClass("chisel-active");
            image.animate({opacity: "0.1"}, function () {jQuery('.chisel').eq(index,index).addClass("chisel-active") })
                .animate( {left:'+=100'},function(){image.attr("src", slides[index]);})
                .animate({opacity: "0.8"}, 1500)
                .animate({opacity: "1"}, 1500);
       }
        
    }());
    



