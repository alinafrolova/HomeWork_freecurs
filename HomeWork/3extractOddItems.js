/**
 * Created by иарвар on 15.02.2017.
 */
/*Отфильтровать элементы массива с нечетным индексом
 Реализовать функцию extractOddItems(arr), которая возвращает новый массив,
 в котором содержатся только те элементы, которые обладали нечетным индексом в массиве,
 переданном в качестве аргумента. Пример работы:
 extractOddItems([0,1,0,1,0,1]); // [1,1,1]
 extractOddItems([1,2,3,4,5]); [2, 4]
 http://jscourse.com/task/extract-odd-items */
function extractOddItems(arr) {
var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (i % 2) { newArray.push(arr[i]);}
    }
    return newArray;
}
