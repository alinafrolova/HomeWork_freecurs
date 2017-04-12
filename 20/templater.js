/**
 * Created by Frolova on 04.04.2017.
 */
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