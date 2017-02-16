function contains() {
    var what = [1, 7, 3, 4, 5, 6];
    var where = [8, 7, 6, 5, 4, 3];
    var newArray = [];

what.forEach(function(item, i, what){
where.forEach(function(item, j, where){
    if (what[i] === where[j]) {
        return newArray.push(what[i]);
    }else {
        return false;
    }
     
});
    
});
return newArray;
}

function containsDifferent() {
    var what = [1, 7, 3, 4, 5, 6];
    var where = [8, 7, 6, 5, 4, 3];
    var newArray = [];
    var whatElem;
    var whereElem;

what.forEach(function(item, i, what){
where.forEach(function(item, j, where){
         if (what[i] === where[j]) {
        return alert(true);
    }else {
        return alert(false);;
    }
});
   
});
  
}

function toQueryString(obj){

 return JSON.stringify(obj);
}

function toQueryString(obj){
    var newString = "";
    var count;
for (var key in obj){
    count++;
 }
 if (count ===0) {
    return newString = " ";
 }else { 
    for (var key in obj){
    newString += ("&" + key +"="+ obj[key])
 }}

 return newString;

}
 function  extractOddItems(arr){
    
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 ) {
            newArr.push(arr[i]);
        };
    };
    return newArr;
 }

 function createObject(keys, values){
   obj = {};

   for (var i = 0; i < keys.length; i++) {
          
     obj[keys[i]] = values[i];
      
   };
return obj;
 }

 function toMatrix(data, rowSize) {
   
   var newArr  = [];
   var matrix = [];
   var count =1;
    var first = 0;
    var end = 0;
  count  = data.length;
   for (var i = 0; i < count; i++) {           
    while(count > 0){ 
      end = first+3;
      newArr = data.slice(first, end);
      matrix.push(newArr);
      count -=  rowSize;
      first +=  rowSize;}
   
   };
 
   return matrix;
}
/Podgornyi/
 function toMatrix(data, rowSize) {
   
   var newArr  = [];
   var matrix = [];
  
   for (var i = 0; i < count; i++) {           
   
   
   };
 
   return matrix;
}


