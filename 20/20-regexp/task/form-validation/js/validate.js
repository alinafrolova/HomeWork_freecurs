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
             value = target.value;
        checkEmpty(event) ;
       switch (target.id){
            case 'email' : checkEmail(value); break;
            case 'password' : checkPass(value); break;
            case 'city' : checkCity(value); break;
            case 'phone' : checkPhone(value); break;
        }
        
        
    }
    CustomValidation.prototype._checkSubmit = function(event) {
        console.log("_checkSubmit");
        checkValidity(event);
        }
    
   function checkEmail(value,event) {
       console.log("checkEmail");
       regexp = /[\D||\d][@][a-z][(?=(\.)][a-z]/;
       if (!regexp.test(value)){document.querySelector('.alert-incorrect').classList.add("show-error");
           document.querySelector('.alert-incorrect').classList.add("has-error");
           console.log("The email is incorrect");} //Ошибка в email-е
   }
    function checkPass(value) {
        /*Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)*/
        console.log("checkPass");
        var regexpSymbols = /^[a-zA-Z0-9]{5,}/, //more than 5 symbols
            regexpChaNum = /[\D+)][\d+]/,
            regexpNum = /[\d+]/,
            regexpIncorData= /[(а-я)||_||-]/;
        if (!regexpSymbols.test(value)){
            document.querySelector('.password-shot').classList.add("show-error");
            document.querySelector('.password-shot').classList.add("has-error");
            console.log("The password is shot, should be more than 5 symbols");} //Пароль слишком короток (до 5 символов)
        if (!regexpChaNum.test(value)){ //Простой пароль
            if (!regexpNum.test(value)){
                document.querySelector('.password-characters').classList.add("show-error");
                document.querySelector('.password-characters').classList.add("has-error");
                console.log("The password hasn't characters, only numbers");} //только числа
            else {
                document.querySelector('.password-numbers').classList.add("show-error");
                document.querySelector('.password-numbers').classList.add("has-error");
                console.log("The password hasn't numbers, only characters");} //только буквы
        }
        if (!regexpIncorData.test(value)){
            document.querySelector('.password-prohibited').classList.add("show-error");
            document.querySelector('.password-prohibited').classList.add("has-error");
            console.log("The password has prohibited symbols ");}//Пароль содержит запрещенные символы (разрешенные - латинские буквы, подчеркивание, минус)
        
    }
    function checkCity(value) {
        console.log("checkCity");
         regexp = /^[a-zA-Z]/;
        if (!regexp.test(value)){
            document.querySelector('.city').classList.add("show-error");
            document.querySelector('.city').classList.add("has-error");
            console.log("The city is incorrect");}
    }
    function checkPhone(value) {
        console.log("checkPhone");
        regexp = /\+38\s(\d){2,3}\s(\d){3}\s(\d){2}\s(\d){2}/;
        if (!regexp.test(value)){
            document.querySelector('.phone').classList.add("show-error");
            document.querySelector('.phone').classList.add("has-error");
            console.log("The number is incorrect ");}//Международный формат записи телефона не выдержан
    }
  /*  function addClasses(where, whichOne, whichTwo) {
        document.querySelector('.phone').classList.add("show-error");
        document.querySelector('.phone').classList.add("has-error");
        
    }*/
    function checkEmpty(event) {
        var value = event.target.value;
        if (!value){console.log("The field is empty");}
    }
    function checkValidity(event) {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (!input.value){
                console.log("The field is empty");
                input.nextElementSibling.style.display = 'block';
            }
        }
     }
   
   window.CustomValidation = CustomValidation;
}());
