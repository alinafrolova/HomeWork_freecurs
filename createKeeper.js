/**
 * Created by Frolova on 17.02.2017.
 */

function createKeeper() {
    var obj = this;
    put = function(key, value) {
        this.key = key || "key";
        this.value = value || "0";
        obj.key = this.value;
    }
    
    get = function(key) {
        return this.key;
    }
    
    return obj;
}