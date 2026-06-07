const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button){
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    switch (event.target.id ){
      case 'one':
          body.style.backgroundColor = 'grey';
          break;

      case 'two':
          body.style.backgroundColor = 'blue';
          break;  

      case 'three':
          body.style.backgroundColor = 'yellow';
          break; 
      
      case 'four':
          body.style.backgroundColor = 'green';
          break; 

      case 'five':
          body.style.backgroundColor = 'red';
          break; 

          break; 

      case 'six':
          body.style.backgroundColor = 'purple';
          break; 
      
      default:
          body.style.backgroundColor = 'white';
          break;
      

        
    }

  })
});


