/**
 * Created by Frolova on 30.03.2017.
 */
'use strict';
(function () {
   
    function Timer(node){
        var START =  $('button[name]:first'),
            RESET =  $('button[name]:last'),
            self = this,
            button = START || RESET;
        
        this.node = node;
        this._CreateTimer(this.node,"Bla");
        
        button.addEventListener("click", function(event) {
            switch (event.which) {
                case 1:
                    self._Start();
                    break;
                case 2:
                    self._Lap(this.node);
                    break;
                case 3:
                    self._Reset(this.node);
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
