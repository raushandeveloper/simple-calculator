let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      document.querySelector('input').value = string;
    }
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})


let cont = document.querySelector(".container");
let change = document.querySelector("#change");

change.addEventListener("click", function() {
  cont.style.backgroundColor = "lightblue"; // Change this to any color you like
});
change.addEventListener("dblclick", function() {
  cont.style.backgroundColor = "black"; // Change this to any color you like
});
