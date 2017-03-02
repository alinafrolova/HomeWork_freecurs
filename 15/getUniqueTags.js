/**
 * Created by Frolova on 02.03.2017.
 */
function getUniqueTags() {
    var elems = document.body.childNodes,
     array = [],
        newArray = [];
    array = getArray(elems);
    for (var i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i].nodeName)  === -1){
            newArray.push(array[i].nodeName);
        }
    }
    console.log(newArray);
}
var array = [];
function getArray(elems) {
    for (var i = 0; i < elems.length; i++) {
        var childs = childs = elems[i].childNodes;
        if (childs.length > 0) {
            getArray(childs) ;
        }
        array.push(elems[i]);
    }
 
    return array;
}

