const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    else{
      body.style.backgroundColor = e.target.id;
    }
  })
})