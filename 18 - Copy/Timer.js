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
            RESET = $('button')[2];
            
       
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
        init = 0;
        }
       
    },
        
/////////_Stop////////
    Timer.prototype._Stop = function (timer) {
        console.log("_Stop");
        displayStop();
    },
        
 /////////_Lap////////
    Timer.prototype._Lap = function () {
        console.log("Lap");
        insertTimer();
       /* var str = trim(document.getElementById('timer').innerText);
        document.getElementById('timer').innerHTML = (str==''?'':str+': ') +
        document.getElementById('timer').innerText + '<br>' + document.getElementById('timer').innerHTML;*/
        clearFields();
       // function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
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
            
         /*   fragment = document.createDocumentFragment();
            fragment.appendChild("<div  class = 'lap_timer'><span class='close-block'></span></div>");
           container.appendChild(fragment);*/
     
            timer = document.getElementById('timer');
        timer.insertAdjacentHTML("afterEnd", "<div  class = 'lap_timer'><span class='close-block'></span></div>");
        document.getElementsByClassName('lap_timer').innerText = (str==''?'':str+': ')+
            document.getElementsByClassName('lap_timer').innerText + '<br>' + document.getElementsByClassName('lap_timer').innerHTML;
        
        function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
    }
    function clearFields() {
        init = 0;
        clearTimeout(clocktimer);
        $('#timer').innerText='00:00:00.00';
      
    }
    
    function clearALL() {
        clearFields();
        document.getElementById('timer').innerHTML = '';
    }
   
    function displayStop() {
        
        $('#start').text("START");
    
    }
    function displayStart() {
        
        $('#start').text("STOP");
        
    }
}());
