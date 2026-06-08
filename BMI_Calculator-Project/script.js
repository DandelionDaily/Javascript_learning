const form = document.querySelector('form')

// this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)


//to stop the default submission of form
form.addEventListener('submit', function(event){
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
   
  if(height === ''|| height < 0 || isNaN(height)){
    results.innerHTML =`Please enter a valid height ${height} !!!`
  }
  else if(weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML =`Please enter a valid weight ${weight} !!!`
  }
  else{
    //formula for calculation
    const bmi = (weight / ((height *height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML =`<span style="font-size:25px; font-weight:bold;"> ${bmi} </span>`;
   
    // check the category of BMI 
        if(bmi < 18.5){
          results.innerHTML +=`<br> <span> Underweight </span>`;
        }
        else if(bmi >= 18.5 && bmi<=24.9){
          results.innerHTML +=`<br> <span> Normal weight </span>`;
        }
        else if(bmi >=25 && bmi<=29.9){
          results.innerHTML +=`<br> <span> Overweight </span>`;
        }
        else{
          results.innerHTML +=`<br> <span> Obese  </span>`;
        }


  }


})