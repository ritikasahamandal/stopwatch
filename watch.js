let timerdisplay = document.querySelector('.timerdisplay');
let spbtn = document.getElementById('spbtn');
let stbtn = document.getElementById('stbtn');
let pabtn = document.getElementById('pabtn');

let msec= 0o0;
let secs= 0o0;
let mins= 0o0;

let timerId = null;

stbtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

spbtn.addEventListener('click', function(){
  
    clearInterval(timerId);
});

pabtn.addEventListener('click', function(){
  
    clearInterval(timerId);
    timerdisplay.innerHTML = '00 :00 :00';
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs == 60){
            secs =0;
            mins++;
        }
    }

    let msecString = msec <10 ? `0${msec}`: msec;
    let secsString = secs <10 ? `0${secs}` : secs;
    let minsString = mins <10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}` ;
}