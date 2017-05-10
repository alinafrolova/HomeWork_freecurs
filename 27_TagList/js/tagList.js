/**
 * Created by иарвар on 05.05.2017.
 */

'use strict';
(function () {


        function TagList(node) {
            var EDIT = $('a')[0],
                FINISH = $('a')[1],
                div_edit = $('.edit-tags a'),
                div_finish = $('.finish-editing a'),
                div_editing = $('.tag-additing'),
                div_remove = $('.tag-remove');
            this.node = node;
            EDIT.addEventListener("click", this._EditNode.bind(this, div_edit, div_finish, div_editing, div_remove), false);
            FINISH.addEventListener("click", this._FinishNode.bind(this, div_edit, div_finish, div_editing, div_remove), false);

        }
        window.TagList = TagList;
        TagList.prototype._createFrame = function () {

        }
        TagList.prototype._AddNode = function () {

        }

        TagList.prototype._EditNode = function (div_edit,div_finish,div_editing,div_remove,event ) {

            div_edit.css("display","none");
            div_finish.fadeIn(400);
            div_finish.css("display","block");
            div_editing.css("display","block");
            div_remove.css("display","block");
            $('span').on('click', function () {
                var target = event.target;
                deleteNode(target);
            });
          /*  jQuery.each(REMOVES, function (remove_count, val) {
                $('span')[val].addEventListener("click", this._DeleteNode.bind(this));
            });*/

        }
       TagList.prototype._FinishNode = function (div_edit,div_finish,div_editing,div_remove,event) {

           div_finish.css("display","none");
           div_editing.css("display","none");
           div_remove.css("display","none");
           div_edit.fadeIn(400);
           div_edit.css("display","block");
    }

       function deleteNode(target) {
           //work incorectly
           console.log("Delete");
           console.log(target);
           if (target.tagName != 'SPAN') return; // не на TD? тогда не интересует

       }

})();