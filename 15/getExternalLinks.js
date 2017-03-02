/**
 * Created by Frolova on 02.03.2017.
 * Реализовать функцию getExternalLinks, которая возвращает массив ссылок, ведущих на внешние ресурсы (то есть не на тот домен, где запускается скрипт)
 */
function getExternalLinks() {
    var arrayLinks = document.links,
        newArray = [],
        ourLink = "/forum.jscourse\.com";
    for ( var i=0; i < arrayLinks.length; i++ ){
        var result = arrayLinks[i].href.match(ourLink);
        if (!result){newArray.push(arrayLinks[i].href)}
    }
    return newArray;
}