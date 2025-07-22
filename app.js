
let string = "";
let historyArray = []; 

let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;

        historyArray.push(string);
      } catch {
        string = "Error";
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

document.getElementById("historyBtn").addEventListener("click", function () {
  if (historyArray.length === 0) {
    document.querySelector('input').value = "No history";
  } else {
    document.querySelector('input').value = historyArray[historyArray.length - 1];
  }
});

let cont = document.querySelector(".container");
let change = document.querySelector("#change");

change.addEventListener("click", function () {
  cont.style.backgroundColor = "lightblue";
});
change.addEventListener("dblclick", function () {
  cont.style.backgroundColor = "black";
});

