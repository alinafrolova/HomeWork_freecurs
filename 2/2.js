/**
 * Created by иарвар on 15.02.2017.
 */
/*Напиши программу, которая загадывает целое число до 50,
и просит пользователя число отгадать. Каждый раз,
когда пользовател вводит число, которое ближе к ответу,
чем предыдущее предположение пользователя, программа выдает prompt
для следующего числа с сообщением "теплее", если новое предположение
отдаляется от задуманного числа, программа выводит prompt с сообщением "холоднее".
После отгадывания числа программа с помощью alert показывает количество попыток,
за сколько было угадано число. Максимальное число попыток: 10 (должно быть настраиваемым).
После этого игра считается проиграной, о чем сообщается в alert окошке.

 Пример работы (мои комментарии идут за //):
 загаданное число: 34  программа: Я загадала число. Угадывай, пользователь
 пользователь: 20  программа: теплее
 пользователь: 10  программа: холоднее
 пользователь: 15  программа: теплее
 пользователь: 35  программа: теплее // (потому что 35 ближе к 34, чем 15)
 пользователь: 45  программа: холоднее
 пользователь: 34  программа: угадал, хитрец, за 6 попыток.
 https://forum.jscourse.com/t/02-zadanie-igra-ugadajka-pochitat-pro-massivy-obekty-czikly/482/7*/

function quizNumber(value) {
    var count = 0;
       while (count < 10){
        var number = prompt("Enter numbet less 50 please");
        count++;
        if (number > 50 || number < 0 || number == null || number == ""){
            alert("Enter NUMBER less 50 please");
        }else
        if (number == value ){alert( "угадал, хитрец, за " +count+" попыток." ); return;
        }else
        if (number < value - 20 || number > value + 10){alert( "холоднее" );
        }else
        if (number > value - 15 || number < value + 10){alert( "теплее" );}

    }
}