/**
 * Created by Frolova on 16.02.2017.
 */
/*http://jscourse.com/task/query-string-to-object
Преобразовать строку запроса (query string) в объект
 Реализуй функцию queryStringToObject(queryString), которая возвращает объект.
 Распознавать следующие типы данных: числа, строки, булевы. Помни, что некоторые символы query string могут быть закодированы.
 
 Пример работы:
 queryStringToObject("user=true"); // {user: true}
 queryStringToObject("user=true&age=29"); // {user: true, age: 29}
 queryStringToObject("user=true&age=29&name=Evgen"); // {user: true, age: 29, name: "Evgen"}*/
function queryStringToObject(queryString) {
    var splitedQueryString = decodeURIComponent(queryString).split(/[=&]/);
    var myObj = {};
    var keys = [];
    var data = [];
    
    for (var i = 0; i < splitedQueryString.length; i++) {
        
        if (i % 2 != 0) {
            data.push(splitedQueryString[i]);
        } else {
            keys.push(splitedQueryString[i])
        }
        for (var j = 0; j < data.length; j++) {
            myObj[keys[j]] = data[j];
        }
        
    }
    
    return myObj;
}


