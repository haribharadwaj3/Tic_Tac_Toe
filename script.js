let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;
let arr=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

const resetgame= () =>{
  turnO=true;
  count=0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    if(turnO){
      box.innerText="O";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count===9 && !isWinner){
      gameDraw();
    }
  });
});

const gameDraw= () =>{
  msg.innerText="Game was a Draw.";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes= () =>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enableBoxes= () =>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner=(winner) =>{
  msg.innerText=`Congratulations the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner= ()=>{
  for(let pattern of arr){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val===pos2val && pos2val===pos3val && pos3val===pos1val){  
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);