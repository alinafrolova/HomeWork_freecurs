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
            LAP = $('button')[1],
            RESET = $('button')[2],
            CLOSE = $('div')[2];
        this.node = node;
        this._CreateTimer(this.node);
        START.addEventListener("click", this._Start.bind(this));
        LAP.addEventListener("click", this._Lap.bind(this));
        RESET.addEventListener("click", this._Reset.bind(this));
        CLOSE.addEventListener("click", this._CloseLap.bind(this));
    }
     
    Timer.prototype._CreateTimer = function (node) {
        var counter = node.append("00:00:00.00");
        return counter;
    },
    Timer.prototype._CloseLap = function (event) {
        var target = event.target; // где был клик?
        if (target.tagName != 'SPAN') return; // не на TD? тогда не интересует
        deleteLap(event);
        },
 /////////_Start////////
    Timer.prototype._Start = function () {
        
        if (init == 0) {
            console.log("_Start");
            displayStart();
            startDate = new Date();
            startTIME();
            init = 1;
        }
        else {
        console.log("_Stop");
        displayStop();
            clearFields();
        init = 0;
        }
    },

 /////////_Lap////////
    Timer.prototype._Lap = function () {
        console.log("Lap");
        insertTimer();
        clearFields();
        },
        
/////////_Reset////////
    Timer.prototype._Reset = function () {
        console.log("Reset");
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
        if (init==1) console.log(hours  + ':' + minutes  + ':' + seconds  + '.' + milliseconds );
        $('#timer').text(hours  + ':' + minutes  + ':' + seconds  + '.' + milliseconds) ;
        clocktimer = setTimeout(startTIME,10);
    }
    function insertTimer() {
        var str = trim(document.getElementById('timer').innerText),
        timer = document.getElementById('timer');
        timer.insertAdjacentHTML("afterEnd", "<div  class = 'lap_timer'><p>"+str+"</p><span class='close-block'></span></div>");
        function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
    }
    function clearFields() {
        init = 0;
        clearTimeout(clocktimer);
    }
    
    function clearALL() {
        clearFields();
        document.getElementById('timer').innerHTML = '00:00:00.00';
    }
   
    function displayStop() { $('#start').text("START"); }
    function displayStart() {$('#start').text("STOP");}
    function deleteLap(event) {
        var parentElem = document.getElementsByClassName('counter_timer');
        console.log("Delete");
       // parentElem.removeChild(event);
    }
}());
