/**
 * Created by Frolova on 30.03.2017.
 */
'use strict';
(function () {
   
    function Timer(node){
    
        this.node = node;
        var creator = this._CreateTimer(this.node,"Bla"),
            button = document.querySelector("button");
        button.addEventListener("click", function(event) {
            switch (event.which) {
                case 1:
                    this._Start();
                    break;
                case 2:
                    this._Lap(this.node);
                    break;
                case 3:
                    this._Reset(this.node);
                    break;
            }
        });
      }
      
      
     
    Timer.prototype._CreateTimer = function (node, timer) {
        this.timer = timer;
        var counter = node.append(this.timer);
        return counter;
    },
    Timer.prototype._Start = function () {
        return console.log("Start");
    },
        
    Timer.prototype._Lap = function () {
        return console.log("Lap");
        },
        
    Timer.prototype._Reset = function () {
        return console.log("Reset");
        }
    window.Timer = Timer;
    
}());
