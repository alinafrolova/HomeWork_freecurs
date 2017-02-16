function getHiddenNumber(hiddenNumber) {

	var result;
	var str;

	str = prompt("Choose some number 1 to 10");
	

	switch (true) {
		case (isNaN(str) ):
        console.log ("It's not number - " + str);
         break;
        case ((parseInt(str, 10)) > 10 || (parseInt(str, 10)) < 0):
        console.log ("It's incorrectly number less 0 or more 10" + str);
        break;
        case (str == null ):
        console.log ("It's null. User disn't want to enter datas" );
         break;
           case ( (parseInt(str, 10)) !== hiddenNumber):
         	console.log ("It's incorrect number - "+ str + ". Choose again please." );
         break;
         case ( (parseInt(str, 10)) === hiddenNumber):
         	console.log ("It's correct number - "+ str + ". You are won." );
         break;
	}
}
function getLogicValue() {

	var b1 = true;
	true && b1; 

	var b2 = false;
    !'Hey there' || b2;

    var b3 = 0;
    0 || !b3 && true; 

    var b4 = 10;
    !10 && !(b4 || false);

    var b5 = true;
    !( null && undefined ) && (![] || b5);

    var b6 = false;
    (!!!!(false) || !b6) && !!({} && []);
}