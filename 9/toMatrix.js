/**
 * Created by Frolova on 20.02.2017.
 * Преобразовать одномерный массив в двумерный
 * Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом
 * массив и число, возвращает новый массив. Число показывает количество элементов
 * в подмассивах, элементы подмассивов беруться из массива data. Оригинальный
 * массив не должен быть изменен.
  toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
 toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
 toMatrix([1,2,3], 5); // [[1,2,3]]
 toMatrix([], 3); // []
 http://jscourse.com/task/to-matrix*/
function toMatrix(data, rowSize) {
    
    var newArr  = [];
    var matrix = [];
    var count =1;
    var first = 0;
    var end = 0;
    count  = data.length;
    for (var i = 0; i < count; i++) {
        while(count > 0){
            end = first+rowSize;
            newArr = data.slice(first, end);
            matrix.push(newArr);
            count -=  rowSize;
            first +=  rowSize;}
        
    };
    
    return matrix;
}