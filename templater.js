/**
 * Created by Frolova on 17.02.2017.
 */
/*http://jscourse.com/task/simple-templater
* Реализовать простейший templater
 Описать функцию templater(templateString, dataObj).
  Функция, принимает аргументом строку и объект. Заменяет все вхождения подстрок вида ${STRING} значениями из объекта с ключом STRING. Пример использования:
 
 templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
 }); // 'mama mila ramu'*/
function templater(templateString, dataObj) {
    var result = "";
    RegEx=/\s/;
    var n=templateString.replace(new RegExp("[${}]",'g'),"");
    var splits = n.split(' ');
    for (var i = 0; i < splits.length; i++){
        for (var key in dataObj) {
            if (key == splits[i] )
                 result = result +  " "+dataObj[key];
                }
    }
    result = result.replace(RegEx,"");
    return result ;
}