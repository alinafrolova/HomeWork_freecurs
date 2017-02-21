/**http://jscourse.com/task/fix-object-in-sequence
 * Created by Frolova on 21.02.2017.
 * Найти и исправить объект в структуре
 Есть структура вида:
 
 [{
    delta: 5,
    value: 5
}, {
    delta: -3,
    value: 2
}, {
    delta: 5,
    value: 7
}, {
    delta: 0,
    value: 7
}]
 Она подчиняется следющему правилу: каждый последующий объект массива содержит объект со свойствами delta и value. delta - разница значений value с предыдущим объектом.
 
 У тебя есть экземпляр структуры, и достоверно известно, что один (и только один) из элементов имеет неверное значение delta и value, и что этот элемент не является ни первым, ни последним. Необходимо написать функцию fixStruct(struct), которая изменяет неверное значение таким образом, чтобы его delta и value снова подчинялись правилу, описанному выше.
 
 Пример работы:
 
 var struct = [{
    delta: 0,
    value: 1
}, {
    delta: 0,
    value: 0
}, {
    delta: 3,
    value: 5
}];
 console.log(fixStruct(struct));
  [{
    delta: 0,
    value: 1
}, {
    delta: 1,
    value: 2
}, {
    delta: 3,
    value: 5
}]
 */


function fixStruct(struct) {
  var brokenElementIndex;
    for (var i = 1; i < struct.length - 1; i++){
        if (struct[i].delta !==  struct[i].value - struct[i - 1].value) {
            brokenElementIndex = i;
            break;
        }
    }
    struct[brokenElementIndex].value =  struct[brokenElementIndex + 1].value - struct[brokenElementIndex + 1].delta;
    struct[brokenElementIndex].delta =  struct[brokenElementIndex].value - struct[brokenElementIndex - 1].value;
}
