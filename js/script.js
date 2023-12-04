// let number = document.querySelector(".number")
// let button = document.querySelector(".button")
// let heading = document.querySelector("h1")
// let list = document.querySelector("ul")

// button.addEventListener("click",function(){
//     console.log (Boolean(number.value - 10))

//     if(Boolean(number.value - 10)){
//         heading.innerHTML = ""
//         list.innerHTML = ""
//         for(i=1;i<=10;i++){
//             list.innerHTML += `<li> ${number.value} x ${i} = ${number.value*i} </li>`
//         }
//     }else{
//         heading.innerHTML = 'paknami korben na'
//     }

// })

// ============================================================================================

// let number = document.querySelector(".number")
// let button = document.querySelector(".button")
// let heading = document.querySelector("h1")
// let list = document.querySelector("ul")

// button.addEventListener("click",function(){
//     console.log (Boolean(number.value - 10))

//     if(Boolean(number.value - 10)){
//         heading.innerHTML = ""
//         list.innerHTML = ""
//         let i = 0
//         while(i<10){
//             i++
//             list.innerHTML += `<li> ${number.value} x ${i} = ${number.value*i} </li>`
//         }
//     }else{
//         heading.innerHTML = 'paknami korben na'
//     }

// })

// ======================================================================================

let player = document.querySelector("h3");
let player1input = document.querySelector(".player1input");
let player1button = document.querySelector(".player1button");
let player1error = document.querySelector(".player1error");
let player2input = document.querySelector(".player2input");
let player2button = document.querySelector(".player2button");
let player2error = document.querySelector(".player2error");
let rule = document.querySelector(".rule");
let reload = document.querySelector(".reload");

let countp2attemp = "0";
player1button.addEventListener("click", function () {
  if (Boolean(player1input.value - 10) && player1input.value != "") {
    if (player1input.value > 10) {
      player1error.innerHTML = "please give a number less than 10";
    } else {
      player1input.style.display = "none";
      player1button.style.display = "none";
      player1error.style.display = "none";
      player.innerHTML = "Player 2";
      player2input.style.display = "inline-block";
      player2button.style.display = "inline-block";
      player2error.style.display = "block";
      rule.innerHTML = "You have 5 Chance to win";
    }
  } else {
    player1error.innerHTML = "please give a number";
  }
});

player2button.addEventListener("click", function () {
  countp2attemp++;
  let playeronenumber = player1input.value;
  let playertwonumber = player2input.value;
  if (countp2attemp <= 5) {
    if (playeronenumber == playertwonumber) {
      player.innerHTML = "Player 2 Winner";
      reload.style.display = "inline-block";
      player2input.style.display = "none";
      player2button.style.display = "none";
      player2error.style.display = "none";
      rule.style.display = "none";
    } else if (countp2attemp == 5 && playeronenumber != playertwonumber) {
      player.innerHTML = "Player 1 Winner";
      player2input.style.display = "none";
      player2button.style.display = "none";
      player2error.style.display = "none";
      rule.style.display = "none";
      reload.style.display = "inline-block";
    }
  }
});

function reloadPage() {
  location.href = location.href;
}

// =====================================================================================
