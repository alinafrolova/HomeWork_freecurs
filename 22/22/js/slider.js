/**
 * Created by Frolova on 12.04.2017.
 */
'use strict';
    var animateSlider = {
       slides:['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
       index: 0,
       set: function () {
           document.getElementById("images-panel").style.backgroundImage = "url("+image+")";
           console.log("set slider");
       },
        init: function(){
            console.log("start");

        },
        changeSlider: function () {
            console.log("change slider");
        }

    }

    



