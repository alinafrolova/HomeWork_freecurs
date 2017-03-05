/**
 * Created by иарвар on 05.03.2017.
 */
function createList(listData, listContainer, itemContainer) {
    var newOl = document.createElement(listContainer || 'ul'); //создаем строку ol
    document.body.appendChild(newOl);
    for (var i = 0; i < listData.length; i++){
        var newArray = listData[i];
        createNode(newArray,newOl, listContainer, itemContainer);}
}
function createNode(newArray,newOl, listContainer, itemContainer) {
        itemContainer = itemContainer || 'li',
        newLi = document.createElement(itemContainer);
        newOl.appendChild(newLi);
        if (isArray(newArray)){
           var arrayOl = document.createElement(listContainer || 'ul');
              for (var j = 0; j < newArray.length; j++){
                var arrayLi = [];
                arrayLi[j] = document.createElement(itemContainer);
                arrayLi[j].appendChild(document.createTextNode(newArray[j]));
                arrayOl.appendChild(arrayLi[j]);
                newLi.appendChild(arrayOl);
            }
        }
             else {
            newLi.appendChild(document.createTextNode(newArray));
        }

    return newOl;
}
function isArray(array) {
    if (array instanceof Array) {
        return true;
    }
    return false;
}
