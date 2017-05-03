/**
 * Created by иарвар on 03.05.2017.
 */
'use strict';

   function makeZoomable(set) {
       $(document).ready(function () {
           $('img').click(function () {
               var srcImg = $(this).attr("src"),
                   newSrc = srcImg.replace(/small/g,"large");
              $(this).animate({opacity:0},function(){
                  $( ".content" ).addClass( "dark" );
                  $(".image").addClass( "active_img" );
                  $(".image").find("img").attr("src", newSrc);
                  });


           })
       });
       }

