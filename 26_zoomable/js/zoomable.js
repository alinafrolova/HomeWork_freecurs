/**
 * Created by иарвар on 03.05.2017.
 */
'use strict';

   function makeZoomable(set) {
       var content  = $( ".content" );

       $(document).ready(function () {
           $('img').on('click', function () {
               content.after('<div class = "image"><img src="img/small/pigeon.jpg" alt=""><span class="close-block"></span></div>');
               var src = $(this).attr("src"),
                   blockImg = $(".image"),
                   bigImg = blockImg.find("img");

               bigImg.animate({opacity:1},function(){
                  content.addClass( "dark" );
                  bigImg.attr("src", src);
                   var   newSrc = bigImg.attr("src").replace(/small/g,"large");
                  bigImg.attr("src", newSrc);
                  blockImg.addClass( "active_img" ).center();
                  });

            });

           $(this).click(function(event){
               if (event.target.tagName  === 'SPAN')
                   closeImg();
           });
           $(this).keydown(function(eventObject){
               if (eventObject.which == 27)
                   closeImg();
           });
       });

       function closeImg() {
           var blockImg = $(".image"),
               bigImg = blockImg.find("img");

           bigImg.animate({opacity:1},function(){
               blockImg.remove();
               content.removeClass( "dark" );
           });
       }
       jQuery.fn.center = function () {
           this.css("position","absolute");
           var resTop = (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop(),
               resLeft = (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft();
           if( resTop < 0) {resTop = 10}
           if( resLeft < 0) {resLeft = 10}
           this.css("top", resTop + "px");
           this.css("left", resLeft + "px");
           return this;
       }
       }

