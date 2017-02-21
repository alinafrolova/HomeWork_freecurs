/**
 * Created by Frolova on 17.02.2017.
 http://jscourse.com/task/keeper Done*/

function createKeeper() {
    var obj = [];
     function _getKeyPair (key) {
        for (var i = 0; i < obj.length; i++){
            if (obj[i].key === key){
                return obj[i];
            }
        }
        return null;
    }
    return {
        put : function(key, value) {
            var saveObj = _getKeyPair(key);
            for (var i = 0; i < obj.length; i++){
                if (obj[i].key === key){
                    saveObj = obj[i];
                    break;
                }
            }
            if (saveObj){
                saveObj.value = value;
            }else{
                obj.push({
                    key: key,
                    value: value
                })
            }
        
        },
        get : function(key) {
            var saveObj = _getKeyPair(key);
            if (saveObj){
                return saveObj.value;
            }else {return null;}
         
        }
    }
  
}