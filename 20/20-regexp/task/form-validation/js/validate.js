'use strict';
(function () {
    function CustomValidation() {
        var FORM = document.getElementById("form"),
            SUBMIT = document.getElementById("submit")
    
        //взаимодействие с формой
        FORM.addEventListener('input', this._checkErrors.bind(this));
        SUBMIT.addEventListener('input', this._checkSubmit.bind(this));
    }
    
   
    CustomValidation.prototype._checkErrors = function(event) {
        console.log("checkErrors");
         var target = event.target;
         
       switch (target.id){
            case 'email' : checkEmail(); break;
            case 'password' : checkPass(); break;
            case 'city' : checkCity(); break;
            case 'phone' : checkPhone(); break;
        }
        
        
    }
    CustomValidation.prototype._checkSubmit = function(input) {
            console.log("_checkSubmit");
        }
    
   function checkEmail() {
       console.log("checkEmail");
   }
    function checkPass() {
        console.log("checkPass");
    }
    function checkCity() {
        console.log("checkCity");
    }
    function checkPhone() {
        console.log("checkPhone");
    }
        
    function checkValidity(e) {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
        
            var input = inputs[i];
        
            // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
            if (!checkValidity(input)) {
                console.log("checkSubmit");
              
            }
        
        }
     }
   
   window.CustomValidation = CustomValidation;
}());

