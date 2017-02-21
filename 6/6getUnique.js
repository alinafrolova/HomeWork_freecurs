/**
 * Created by Frolova on 16.02.2017.
 * Сформировать список без повторений
 Реализовать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив таких элементов,
 которые входят в массив аргумента, и встречаются только раз в массиве результата. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком, в котором они встречаются в оригинальной структуре.
 var a = {};
 var b = {};
 var u = getUnique([a,b,b,a]);
 console.log(u[0] === a); // true
 console.log(u[1] === b); // true
 console.log(u.length === 2);
 */
/*
function isUnique(list, index) {
    var count = 0;
    for (var i = 0; i < list.length; i++){
        if (list[i] === elem){
            count++;
        }
    }
    return count === 1;
    
}
function getUnique(list) {
     if (list.length < 0 ) {return []; }
     return Array.prototype.filter.call(list, function (elem,i ,list) {
        return isUnique(list, elem);
     })
} */
function toArray(array) {
   return [].slice.call(array);
}
/////////////////////
function getUnique(list) {
    list = toArray(list);
    if (list.length < 0 ) {return []; }
    return Array.prototype.filter.call(list, function (elem,i ,list) {
        return list.indexOf(elem) === i;
    })
}