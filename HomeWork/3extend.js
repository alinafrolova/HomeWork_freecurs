/**
 * Created by иарвар on 15.02.2017.
 */
/*Объединить объекты
 http://jscourse.com/task/extend-object-simple
 Реализовать функцию extend(obj1, obj2), которая скопирует свойства из объекта obj2 в объект obj1.
 Функция должна возвращать obj1. Значения одинаковых ключей должны перетирать оригинальные. Пример:

 extend({foo: 'bar', baz: 1}, {foo: true, zoop: 0}); // {foo: true, baz: 1, zoop: 0}*/
function extend(obj1, obj2) {
    if (obj1)
    { for (var key1 in obj1) {
            for (var key2 in obj2) {
                if (key1 === key2) {
                    obj1[key1] = obj2[key2];
                }
                else {
                    obj1[key2] = obj2[key2];
                }
            }
        }} else{ obj1 =obj2;  }
    return obj1;
}
