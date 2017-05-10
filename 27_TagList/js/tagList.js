/**
 * Created by иарвар on 05.05.2017.
 */

'use strict';
(function () {
    function TagList(Node){
        var EDIT = $('div .edit-tags').eq(0);
        EDIT.addEventListener("click", this._EditNode.bind(this), false);
    }
    window.TagList = TagList;
    TagList.prototype._createFrame = function () {

    }
    TagList.prototype._AddNode = function () {

    }
    TagList.prototype._ShowNode = function () {

    }
    TagList.prototype._EditNode = function () {
      console.log("Edit");

    }
    TagList.prototype._DeleteNode = function () {

    }
})();