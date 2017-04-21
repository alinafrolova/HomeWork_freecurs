/**
 * Created by Frolova on 12.04.2017.
 */
'use strict';
  
    (function () {
        var slides = ['images/image1.jpg', 'images/image2.jpg',  'images/image3.jpg', 'images/image4.jpg'];
           
         function AnimateSlider() {
             
             document.addEventListener("DOMContentLoaded", this.autoplay.bind(this), false);
             document.addEventListener("click", this.changeSlider.bind(this), false);
        }
        AnimateSlider.prototype.set = function () {
          
        }
        AnimateSlider.prototype.autoplay = function () {
            var image  = jQuery('div').find('img');
            console.log("init slider");
            jQuery.each(slides, function(index) {
                
                image.animate( {left:'+=100'},function(){
                    if (index === 3) { index = -1;}
                    image.attr("src", slides[index + 1]);
                });
                
            });
           
        }
        AnimateSlider.prototype.changeSlider = function (event) {
            var image  = jQuery('div').find('img'),
                target = event.target,
                index = target.textContent;
            
            if (target.tagName !== "DIV") return;
            image.attr("src", slides[index - 1]);
            
        }
        window.AnimateSlider = AnimateSlider;
                 
    }());
    



