/**
 * Created by Frolova on 12.04.2017.
 */
'use strict';
  
    (function () {
        var slides = ['images/image1.jpg', 'images/image2.jpg',  'images/image3.jpg', 'images/image4.jpg'];
           
         function AnimateSlider() {
                          
            // document.addEventListener("DOMContentLoaded", this.init.bind(this), false);
             document.addEventListener("click", this.changeSlider.bind(this), false);
        }
        AnimateSlider.prototype.set = function () {
          
        }
        AnimateSlider.prototype.init = function () {
            console.log("init slider");
            jQuery.each(slides, function(index) {
                setTimeout(flippingImages(index), 500000);
        
            });
           
        }
        AnimateSlider.prototype.changeSlider = function (event) {
            var image  = jQuery('div').find('img');
            console.log("change slider");
            var target = event.target, // где был клик?
                index = target.textContent;
            console.log(index);
            if (target.tagName !== "DIV") return;
            image.attr("src", slides[index - 1]);
            
        }
        window.AnimateSlider = AnimateSlider;
         
         function flippingImages(index) {
             if (index === 3) { index = -1;}
             console.log("change slider" + index);
                 var result = jQuery('div').find('img').attr("src", slides[index + 1]);
         }
    }());
    



