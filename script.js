let buttons = document.querySelectorAll(".button");
let array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnX = true;
function nowinner()
{ let flag=true;
  for(let button of buttons)
  {
    if(button.innerText==="")
    {
      flag=false;
    }
  }
  if(flag==true)
  {
    alert("Out of Moves \n No player won this Match \n Please click on reset button to play new game");
  }
}
reset.addEventListener("click", () =>
{
for( let button of buttons)
{
  button.disabled=false;
  button.innerText="";
}
document.querySelector("#disp").classList.add("display");
document.querySelector("#disp").innerText="";
document.querySelector("h1").classList.remove("heading");
document.querySelector("#winner").classList.remove("deco");
})
let displaywinner=(val)=>
{
  document.querySelector("#disp").innerHTML=`winner of the this game is player ${val}`;
  document.querySelector("#disp").classList.remove("display");
  document.querySelector("h1").classList.add("heading");
  document.querySelector("#winner").classList.add("deco");
 
  
};

let checkwinner = () => {
  for (let x of array) {
    let val1 = buttons[x[0]].innerText;
    let val2 = buttons[x[1]].innerText;
    let val3 = buttons[x[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        for(let button of buttons)
        {
          button.disabled=true;
        }
        displaywinner(val1);
      }
    }
  }
};

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (turnX) {
      button.innerText = "X";
      turnX = false;
    } else {
      button.innerText = "O";
      turnX = true;
    }
    button.disabled=true;
    checkwinner();
    nowinner();
   
  });
  
}



