/**
 * Created by Frolova on 30.03.2017.
 */
'use strict';
(function () {
    var init=0,
        startDate,
        clocktimer;
    function Timer(node) {
        var START = $('button')[0],
            LAP = $('button')[2],
            RESET = $('button')[3];
            
       
        this.node = node;
        this._CreateTimer(this.node);
        START.addEventListener("click", this._Start.bind(this));
        LAP.addEventListener("click", this._Lap.bind(this));
        RESET.addEventListener("click", this._Reset.bind(this));
    }
                  
     
    Timer.prototype._CreateTimer = function (node) {
        
        var counter = node.append("00:00:00.00");
        return counter;
    },
 /////////_Start////////
    Timer.prototype._Start = function () {
        console.log("_Start");
        displayStart();
        if (init == 0) {
            startDate = new Date();
            startTIME();
            init = 1;
        }
        else {
        console.log("_Stop");
        displayStop();
            var str = trim(document.clockform.label.value);
            document.getElementById('marker').innerHTML = (str==''?'':str+': ') +
            $('div')[3].value + '<br>' + document.getElementById('marker').innerHTML;
            clearFields();
        }
       
    },
        
/////////_Stop////////
    Timer.prototype._Stop = function (timer) {
        console.log("_Stop");
        displayStop();
    },
        
 /////////_Lap////////
    Timer.prototype._Lap = function () {
        return console.log("Lap");
        clearFields()
        },
        
/////////_Reset////////
    Timer.prototype._Reset = function () {
        return console.log("Reset");
        clearALL();
    }
    window.Timer = Timer;
    
    
 ////////
    function startTIME() {
        var thisDate = new Date();
        var time = thisDate.getTime() - startDate.getTime();
        var milliseconds  = time%1000; time-=milliseconds ; milliseconds =Math.floor(milliseconds/10);
        time = Math.floor (time/1000);
        var seconds  = time%60; time-=seconds ;
        time = Math.floor (time/60);
        var minutes  = time%60; time-=minutes ;
        time = Math.floor (time/60);
        var hours  = time%60;
        if (hours <10) hours ='0'+hours ;
        if (minutes <10) minutes ='0'+minutes ;
        if (seconds <10) seconds ='0'+seconds ;
        if (milliseconds <10) milliseconds ='0'+milliseconds ;
        if (init==1) console.log(hours  + ':' + minutes  + ':' + seconds  + '.' + milliseconds ); //$('div')[3].innerHTML = hours  + ':' + minutes  + ':' + seconds  + '.' + milliseconds ;
        clocktimer = setTimeout(startTIME,10);
    }
    function clearFields() {
        init = 0;
        clearTimeout(clocktimer);
        $('div')[3].value='00:00:00.00';
        $('div')[3].label.value='';
    }
    
    function clearALL() {
        clearFields();
        document.getElementById('marker').innerHTML = '';
    }
    
    
    function displayStop() {
        var START = document.querySelector('.start'),
            STOP = document.querySelector('.stop');
        STOP.style.display = 'none';
        START.style.display = 'block';
    
    }
    function displayStart() {
        var START = document.querySelector('.start'),
            STOP = document.querySelector('.stop');
        STOP.style.display = 'block';
        START.style.display = 'none';
        
    }
}());
