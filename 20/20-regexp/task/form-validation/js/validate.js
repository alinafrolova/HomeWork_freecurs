'use strict';
(function () {
    var regexp,
        arrayEmails;
    function CustomValidation() {
        var FORM = document.getElementById("form"),
            SUBMIT = document.getElementById("submit");
    
        //взаимодействие с формой
        FORM.addEventListener('input', this._checkErrors.bind(this));
        SUBMIT.addEventListener('click', this._checkSubmit.bind(this));
    }
    
   
    CustomValidation.prototype._checkErrors = function(event) {
        console.log("checkErrors");
         var target = event.target,
             value = target.value,
             result;
        checkEmpty(event) ;
       switch (target.id){
            case 'email' : setInterval(function() { checkEmail(value);}, 1000);  break;
            case 'password' : checkPass(value); break;
            case 'city' : checkCity(value); break;
            case 'phone' : checkPhone(value); break;
        }
        
        
    }
    CustomValidation.prototype._checkSubmit = function(event) {
        console.log("_checkSubmit");
        checkValidity(event);
        }
    
        
   function checkEmail(value) {
       console.log("checkEmail");
       regexp = /[\D||\d][@][a-z]{1,}[(?=(\.)][a-z]/;
       if (!regexp.test(value)){addClasses('.email'); return false;} //Ошибка в email-е
       else {return true;}
   }
    function checkPass(value) {
        /*Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)*/
        console.log("checkPass");
        var regexpSymbols = /^[a-zA-Z0-9]{5,}/, //more than 5 symbols
            regexpChaNum = /[\D+)][\d+]/,
            regexpNum = /[\d+]/,
            regexpIncorData= /[(а-я)||_||-]/;
        if (!regexpSymbols.test(value)){addClasses('.password-shot');} //Пароль слишком короток (до 5 символов)
        if (!regexpChaNum.test(value)){ //Простой пароль
            if (!regexpNum.test(value)){ addClasses('.password-characters');} //только числа
            else { addClasses('.password-numbers');} //только буквы
        }
        if (!regexpIncorData.test(value)){ addClasses('.password-prohibited');}//Пароль содержит запрещенные символы (разрешенные - латинские буквы, подчеркивание, минус)
        
    }
    function checkCity(value) {
        console.log("checkCity");
         regexp = /^[a-zA-Z]/;
        if (!regexp.test(value)){ addClasses('.city');}
    }
    function checkPhone(value) {
        console.log("checkPhone");
        regexp = /\+38\s(\d){2,3}\s(\d){3}\s(\d){2}\s(\d){2}/;
        if (!regexp.test(value)){ addClasses('.phone');}//Международный формат записи телефона не выдержан
    }
    function addClasses(where) {
        
        document.querySelector(where).classList.add("show-error");
        document.querySelector(where).classList.add("has-error");
        
    }
    function checkEmpty(event) {
        var value = event.target.value;
        if (!value){console.log("The field is empty");}
    }
    function checkValidity(event) {
        var inputs,input, attrs;
         inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
             input = inputs[i];
             attrs = input.attributes; // (4) можно получить коллекцию атрибутов
            for (var j = 0; j < attrs.length; j++) {
                if (attrs[j].name === 'required' ) {
                    if (!input.value){
                        console.log("The field is empty");
                        input.nextElementSibling.style.display = 'block';
                    }
                }
            }
                        
        }
     }
   
   window.CustomValidation = CustomValidation;
}());

