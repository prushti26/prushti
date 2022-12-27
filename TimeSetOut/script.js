// var deadline = new Date("dec 31, 2017 15:37:25").getTime();
  
// var x = setInterval(function() {
  
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("day").innerHTML =days ;
// document.getElementById("hour").innerHTML =hours;
// document.getElementById("minute").innerHTML = minutes; 
// document.getElementById("second").innerHTML =seconds; 
// if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "TIME UP";
//         document.getElementById("day").innerHTML ='0';
//         document.getElementById("hour").innerHTML ='0';
//         document.getElementById("minute").innerHTML ='0' ; 
//         document.getElementById("second").innerHTML = '0'; }
// }, 1000);







// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
//   document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
    
  // If the count down is over, write some text 
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sell Close";
    document.getElementById("day").innerHTML ='0';
    document.getElementById("hour").innerHTML ='0';
    document.getElementById("minute").innerHTML ='0' ; 
    document.getElementById("second").innerHTML = '0'; }
}, 1000);