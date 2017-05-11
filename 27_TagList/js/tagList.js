/**
 * Created by иарвар on 05.05.2017.
 */

'use strict';
(function () {


        function TagList() {
            var EDIT = $('a')[0],
                FINISH = $('a')[1],
                div_edit = $('.edit-tags a'),
                div_finish = $('.finish-editing a'),
                div_editing = $('.tag-additing');
            
            EDIT.addEventListener("click", this._EditNode.bind(this, div_edit, div_finish, div_editing), false);
            FINISH.addEventListener("click", this._FinishNode.bind(this, div_edit, div_finish, div_editing ), false);
           
        }
        window.TagList = TagList;
        
      TagList.prototype._EditNode = function (div_edit,div_finish,div_editing,event ) {
          
           var first = "none",
               second = "block",
               div_remove = $('.tag-remove');
            changeCSS(div_edit,div_finish,div_editing,div_remove,first,second );
         
                  $('.tag-container').on('click', function () {
                      var target = event.target;
                      deleteNode(target); });
                  
                  $('button').on('click', function () { addNode(); });
            
            document.onkeyup = function (e) {
                e = e || window.event;
                if (e.keyCode === 13) {
                    addNode();
                }
                return false;
            }
    
        }
        
       TagList.prototype._FinishNode = function (div_edit, div_finish, div_editing, event) {
           var first = "block",
               second = "none",
               div_remove = $('.tag-remove');
           changeCSS(div_edit,div_finish,div_editing,div_remove,first,second );

    }
       function changeCSS(div_edit,div_finish,div_editing,div_remove,first,second ) {
           div_finish.css("display",second);
           div_editing.css("display",second);
           div_remove.css("display",second);
           div_edit.fadeIn(400);
           div_edit.css("display",first);
       }
       function deleteNode(target) {
           if (target.tagName != 'A') return; // не на TD? тогда не интересует
           event.target.parentNode.remove();
       }
       function addNode() {
           var input = $('input[name = "TagName"]'),
               text = input.val().toUpperCase() || DEFAULT,
               tagContainer = $('.tag-container'),
               NODE;
           checkTextNode(text);
           NODE = '<div class = "tag-list"><div class="tag-description">Default</div><span class="tag-remove"></span></div>';
           tagContainer.append(NODE);
           tagContainer.find('.tag-remove').css("display","block");
           tagContainer.find('.tag-description:last').text(text);
           input.val('');
       }
       function checkTextNode() {
           
       }

})();