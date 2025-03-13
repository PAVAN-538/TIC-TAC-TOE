let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")
let winnerTag = document.querySelector(".winner")

let turn0 = true; //playerX / playerY

const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if (turn0) {
            box.innerHTML = 'X'
            turn0 = false;
            
        } else {
            box.innerHTML = "O"
            turn0 = true;

        }
        box.disabled = true;
        CheckWinner();
    })

    
})

let CheckWinner = () => {
    for (let pattern of WinPatterns) {
        let pos1value = boxes[pattern[0]].innerHTML;
        let pos2value = boxes[pattern[1]].innerHTML;
        let pos3value = boxes[pattern[2]].innerHTML;

        if(pos1value != "" && pos2value != "" && pos3value != "") {
          if(pos1value === pos2value && pos2value === pos3value){
            console.log("winner",pos1value);

            ShowWinner(pos1value);
          }
        }
    }
}

ShowWinner = (winner) => {
    winnerTag.innerHTML = `WINNER..! ${winner}`;
    winnerTag.classList.remove("winner");
    disableButtons();
}

let disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const ResetGame = () => {
     turn0 = true;
    EnableButtons();
    winnerTag.classList.add("winner")
  

}

let EnableButtons = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

resetBtn.addEventListener('click',ResetGame)