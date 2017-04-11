'use strict';
(function () {
    var regexp,
        arrayEmails = [];
      
    function CustomValidation() {
        var FORM = document.getElementById("form"),
            SUBMIT = document.getElementById("submit");
    
        //взаимодействие с формой
        FORM.addEventListener('keyup', this._checkErrors.bind(this));
        SUBMIT.addEventListener('click', this._checkSubmit.bind(this));
    }
    
   
    CustomValidation.prototype._checkErrors = function(event) {
        console.log("checkErrors");
         var target = event.target,
             value = target.value,
             result;
        checkEmpty(target) ;
       switch (target.id){
            case 'email' : checkEmail(value);  break;
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
       if (!regexp.test(value)){addClasses('.email'); } //Ошибка в email-е
       else {deleteClasses('.email');
           if (!checkExistingEmail(value)){addClasses('.existing');}
           else {deleteClasses('.existing');}
       }
      
   }
    function checkPass(value) {
        /*Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)*/
        console.log("checkPass");
        var regexpSymbols = /^[a-zA-Z0-9]{5,}/, //more than 5 symbols
            regexpChaNum = /[\D+)][\d+]/,
            regexpNum = /[\d+]/,
            regexpIncorData= /[(а-я)||_||-]/;
        if (!regexpSymbols.test(value)){
            addClasses('.password-shot');}
           else{ deleteClasses('.password-shot');} //Пароль слишком короток (до 5 символов)
        if (!regexpChaNum.test(value)||!regexpNum.test(value)){ //Простой пароль
            addClasses('.password-characters');//только числа
            addClasses('.password-numbers'); //только буквы
        }else{
            deleteClasses('.password-characters');//только числа
            deleteClasses('.password-numbers'); //только буквы
        }
        
        if (regexpIncorData.test(value)){
            addClasses('.password-prohibited');}//Пароль содержит запрещенные символы (разрешенные - латинские буквы, подчеркивание, минус)
        else {deleteClasses('.password-prohibited');}
    }
    function checkCity(value) {
        console.log("checkCity");
         regexp = /^[a-zA-Z]/;
        if (!regexp.test(value)){ addClasses('.city');}
        else {deleteClasses('.city');}
    }
    function checkPhone(value) {
        console.log("checkPhone");
        regexp = /\+38\s(\d){2,3}\s(\d){3}\s(\d){2}\s(\d){2}/;
        if (!regexp.test(value)){ addClasses('.phone');}//Международный формат записи телефона не выдержан
        else {deleteClasses('.phone');}
    }
    function addClasses(where) {
        
        document.querySelector(where).classList.add("show-error");
        document.querySelector(where).style.display = 'block';
        
    }
    function deleteClasses(where) {
        document.querySelector(where).style.display = 'none';
        
    }
    function checkEmpty(input) {
        
        if (!input.value|| input.value === ' '|| checkCheckbox(input)){
            input.nextElementSibling.style.display = 'block';
        }else {
            input.nextElementSibling.style.display = 'none';
        }
    }
    function checkCheckbox(input) {
        if (input.type === 'checkbox' && !input.checked ) {return true;}
    }
    function checkValidity(event) {
        var inputs,input, attrs;
         inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
             input = inputs[i];
             attrs = input.attributes; // (4) можно получить коллекцию атрибутов
            for (var j = 0; j < attrs.length; j++) {
                if (attrs[j].name === 'required' ) {
                    checkEmpty(input) ;
                }
            }
                        
        }
     }
     
    function checkExistingEmail(newEmail) {
        var index = find(arrayEmails, newEmail);
        if (index){arrayEmails.push(newEmail); return true;}
        else {return false;}
    }
    
    function find(array, value) {
        if (array.indexOf) { // если метод существует
            return array.indexOf(value);
        }
        
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }
        
        return -1;
    }
   window.CustomValidation = CustomValidation;
}());

