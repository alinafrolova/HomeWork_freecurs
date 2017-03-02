/**
 * Created by Frolova on 02.03.2017.
 * Выполнить
 Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка.
 Использовать innerHTML нельзя. Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив.
 listData Может содержать как элементы (текст), так и массивы элементов. Глубина вложенности массивов любая.
 */
function createList(listData, listContainer, itemContainer) {
    var newOl = document.createElement(listContainer || 'ol'), //создаем строку ol
        newLi = [];
    itemContainer = itemContainer || 'li';
        for (var i = 0; i < listData.length; i++){
            newLi[i] = document.createElement(itemContainer);
            newLi[i].appendChild(document.createTextNode(listData[i]));
            document.body.appendChild(newOl);
            var newArray = listData[i];
              if (isArray(newArray)){ createList(newArray, listContainer, itemContainer); return newOl;}
            newOl.appendChild(newLi[i]);
        }
      return newOl;
    }
  

function isArray(array) {
    if (array instanceof Array) {
        return true;
    }
    return false;
}



