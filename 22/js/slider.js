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
        AnimateSlider.prototype.set = function () {
          
        }
        AnimateSlider.prototype.autoplay = function () {
           var numEleme,
               index = 0;
            console.log("init slider");
            numEleme = animateSlide(index);
            jQuery('.chisel').eq(numEleme).removeClass("chisel-active");
        }
        AnimateSlider.prototype.changeSlider = function (event) {
            var numEleme;
            setTimeout(numEleme = slideSlider(event), 2000);
            animateSlide(numEleme);
        }
        window.AnimateSlider = AnimateSlider;
         
        function animateSlide(index) {
            index = index || 0
            var image  = jQuery('div').find('img');
            jQuery.each(slides,index,function(index) {
                
                image.animate({opacity: "1"}, function () {jQuery('.chisel').eq(index).addClass("chisel-active") })
                    .animate({opacity: "0.8"}, 1500)
                    .animate({opacity: "0.2"}, function () {jQuery('.chisel').eq(index).removeClass("chisel-active"); })
                    .animate( {left:'+=100'},function(){if (index === 3 ) { index = -1;}  image.attr("src", slides[index + 1]); })
                    .animate({opacity: "0.4"}, "slow");
        
            });
            return index;
        }
        function slideSlider(event) {
            var image  = jQuery('div').find('img'),
                target = event.target,
                index = target.textContent - 1;
    
            if (target.tagName !== "DIV") return;
            jQuery('div').find('.chisel-active').removeClass("chisel-active");
            image.animate({opacity: "0.1"}, function () {jQuery('.chisel').eq(index,index).addClass("chisel-active") })
                .animate({opacity: "0.4"}, 1500)
                .animate( {left:'+=100'},function(){image.attr("src", slides[index]);})
                .animate({opacity: "0.6"}, function () {jQuery('.chisel').eq(index,index).removeClass("chisel-active"); })
                .animate({opacity: "1"}, "slow");
            return index;
        }
        
    }());
    



