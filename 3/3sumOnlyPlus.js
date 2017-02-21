/**
 * Created by иарвар on 15.02.2017.
 */
/*http://jscourse.com/task/summ-numbers-by-condition
* Просуммировать числа из массива, которые больше 100
 Реализовать функцию sumOnly100Plus, которая принимает аргументом массив,
  и возвращает сумму всех чисел массива, которые больше 100.
   В массиве могут быть не только числовые данные, их никак не учитывать. Пример работы:

 sumOnlyPlus([150, "200", " ", 30, 300]); // 450*/
function sumOnlyPlus(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if ( !isNaN(arr[i]) &&(typeof arr[i] ==="number") && arr[i] > 100 ){
            sum = sum + arr[i];}
    }
    return sum;
}
