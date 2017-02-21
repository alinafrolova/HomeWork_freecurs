function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}


/*https://learn.javascript.ru/task/closure-sum*/
function sum(a){
	var result = 0;
	  return function sum(b) { return result =  a + b; };
}

/*https://learn.javascript.ru/task/stringbuffer*/
function makeBuffer() { 
	var arr = [];

return function(value){
	if (!Boolean(value)) {
		var NewArr = arr.join(', ');
		return NewArr;
	
	} else{
			arr.push(value);
}}	

}
var buffer = makeBuffer();
/* like in the book
function makeBuffer() {
  var text = '';

  return function(piece) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += piece;
  };
};

var buffer = makeBuffer();
*/

/*https://learn.javascript.ru/task/stringbuffer-with-clear*/
function makeBuffer() { 
	var arr = [];

 function buffer(value){
	if (!Boolean(value)) {
		var NewArr = arr.join(', ');
		return NewArr;
	
	} else{
			arr.push(value);
}}	

buffer.clear = function(){
	arr.length=0;
	return arr;
};

return buffer;
}
var buffer = makeBuffer();


	var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

   function byField() {
   return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  }

  users.sort(byField('name'));
users.forEach(function(user) {
 alert( user.name );
});
/*
function filter(arr, func){
	//var arr = [1, 2, 3, 4, 5, 6, 7];
	var arrNew = [];
	function inBetween(a,b){
			return function(){
			for (var i = 0; i < arr.length; i++) {
			if (arr[i] >=a && arr[i] <=b ) {
				arrNew.push(arr.[i]);
			};
			return arrNew
		};
			}

	}

	function inArray(arrSome){
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; i < arrSome.length; j++) {
				if (arr[i] === arrSome[j] ) {
				arrNew.push(arr.[i]);
			};
			}
			
		};
		return arrNew;

	}
}

*/

function parse(queryString) {
var obj = {};	
var arr = queryString.split('&').forEach(keyValue)

}
}
