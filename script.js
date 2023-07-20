// create Window onload method to load event when whole page is loaded/reloaded
window.onload = function () {
// Get timer element for display timer
var countdown = document.getElementById("timer");
var style = document.createElement('style');
var initialValue = 10;//initilize starting value as 10 
var timer;

//create setTimeout function to start countdown from 10 to 1 with 1 sec interval
setTimeout(function () {
    timer = initialValue;
    countdown.innerText = timer;
    
    setTimeout(function() {
        timer = timer-1;
        countdown.innerText =timer;

        setTimeout(function(){
            timer = timer-1;
            countdown.innerText = timer;

            setTimeout(function(){
                timer = timer-1;
                countdown.innerText = timer;

                setTimeout(function(){
                    timer = timer-1;
                    countdown.innerText = timer;

                    setTimeout(function(){
                        timer = timer-1;
                        countdown.innerText = timer;

                        setTimeout(function(){
                            timer = timer-1;
                            countdown.innerText = timer;
                            
                            setTimeout(function(){
                                timer = timer-1;
                                countdown.innerText = timer;

                                setTimeout(function(){
                                    timer = timer-1;
                                    countdown.innerText = timer;

                                    setTimeout(function(){
                                        timer = timer-1;
                                        countdown.innerText = timer;
                                       //create setTimeout to display text after completing the count 10 to 1 and set background style
                                        setTimeout(function(){
                                            style.innerHTML = '.background { background-image: linear-gradient(180deg, #ff9a2f, #ffffff, #0a8901); }';
                                            document.head.appendChild(style);
                                            countdown.innerText = "Happy Independence Day";
                                          
                                        },1000);

                                    },1000);

                                },1000);

                            },1000);

                        },1000);

                    },1000);

                },1000);

            },1000);

        },1000);

    },1000);

},1000);

}
