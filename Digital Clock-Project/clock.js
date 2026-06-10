const clock = document.getElementById('clock');


setInterval(function (){
  let time = new Date();
  //console.log(time.tolocaleTimeString());
  clock.innerHTML = time.toLocaleTimeString();
} , 1000);