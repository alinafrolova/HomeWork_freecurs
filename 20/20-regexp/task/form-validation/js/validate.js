'use strict';
(function () {
    var regexp,className,where,obj,
        arrayEmails = [],
     regObjects = {
        email: {
            regexp : /[\D||\d][@][a-z]{1,}[(?=(\.)][a-z]/,
            where: '.email' ,
            className:'.existing'
        },
        /*Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)*/
        passSymbol:{
            regexp : /^[a-zA-Z0-9]{5,}/, //more than 5 symbols
            where:'.password-shot',
        },
        passSymbolChar:{
            regexp : /[\d+]/,
            where:'.password-characters',
        },
        passNum:{
            regexp : /[\D+]/,
            where:'.password-numbers',
        },
        passIncorData:{
            regexp : /[(а-я)||_||-]/,
            where:'.password-prohibited'
        },
        city:{
            regexp : /^[a-zA-Z]/,
            where: '.city'
        },
        
        phone:{
            regexp : /\+38\s(\d){2,3}\s(\d){3}\s(\d){2}\s(\d){2}/,
            where: '.phone'
        }
    }
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
             value = target.value;
        checkEmpty(target) ;
       switch (target.id){
            case 'email' : checkerFields(value,regObjects.email );  break;
            case 'password' :
                checkerFields(value,regObjects.passSymbol);
                checkerFields(value,regObjects.passSymbolChar);
                checkerFields(value,regObjects.passNum);
                checkerFields(value,regObjects.passIncorData);
                break;
            case 'city' : checkerFields(value,regObjects.city); break;
            case 'phone' : checkerFields(value,regObjects.phone); break;
        }
        
    }
    CustomValidation.prototype._checkSubmit = function(event) {
        console.log("_checkSubmit");
        checkValidity(event);
        }
    
      
    function checkerFields(value,obj) {
        className = obj.className || 0,
        regexp = obj.regexp,
        where  = obj.where;
       
        if (!regexp.test(value)){
            addClasses(where);
        }
        else { deleteClasses(where);
            if (className){checkExistingEmail(value);}
        }
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
        if (index)
        {
            arrayEmails.push(newEmail);
            deleteClasses(className);
        }
         else {addClasses(className);}
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

