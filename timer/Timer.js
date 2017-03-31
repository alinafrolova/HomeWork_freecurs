/**
 * Created by Frolova on 30.03.2017.
 */
'use strict';
(function () {
   
    function Timer(node){
        var   button = document.querySelector("button");
        
        this.node = node;
        this._CreateTimer(this.node,"00:00:00:000");
        
        button.addEventListener("click", this._ChooseButton.bind(this));
      }
           
     
    Timer.prototype._CreateTimer = function (node, timer) {
       
        var counter = node.append(timer);
        return counter;
    };
    Timer.prototype._ChooseButton = function (event) {
        switch (event.which) {
            case 1:
                start();
                break;
            case 2:
                lap();
                break;
            case 3:
                reset();
                break;
        }
    }
    
    
    function start() {
        return console.log("Start");
    }
    
    function lap() {
        return console.log("Lap");
    }
    
    function reset() {
        return console.log("reset");
    }
       /*
    Timer.prototype._Start = function () {
        return console.log("Start");
    },
        
    Timer.prototype._Lap = function () {
        return console.log("Lap");
        },
        
    Timer.prototype._Reset = function () {
        return console.log("Reset");
        }*/
    window.Timer = Timer;
    
}());
