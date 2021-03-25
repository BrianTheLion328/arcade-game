let result = 0;
let timeLeft = 30;
let hardGameStart;
let easyGameStart;
let gameInPlay = false;
// making moles appear on gameboard

function buildMoles() {
  if (timeLeft >= 1) {
    $(".moles").removeClass("active-mole");
    // $(".moles").attr('id', '');
    let moles = [];
    for (i = 0; i < 3; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      moles.push(randomNumber);
    }

    moles.forEach(function (mole) {
      $(`.mole${mole}`).addClass("active-mole");
    //   $(`.mole${mole}`).attr('id', 'moleinplay')
    });

    buildRabbit();
  } else {
    $(".moles").removeClass("active-mole");
    $(".moles").removeClass("active-rabbit");
    gameInPlay = false;
  }
}
// making rabbit appear on gameboard

function buildRabbit() {
  $(".moles").removeClass("active-rabbit");
  let moles = [];
  for (i = 0; i < 1; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    moles.push(randomNumber);
  }
  moles.forEach(function (mole) {
    $(`.mole${mole}`).addClass("active-rabbit");
  });
}

// start buttons section
function easyGame() {
    // gameInPlay = true;
  setInterval(buildMoles, 1000);

}
function hardGame() {
    // gameInPlay = true;
  setInterval(buildMoles, 300);
}

const startButtonEasy = $(".starteasy");
const startButtonHard = $(".starthard");

startButtonEasy.click(function () {
    timeLeft = 30;
  $(this).attr("disabled", true);
  easyGame();
  countDown();
//   if (!gameInPlay){
//       clearInterval(easyGameStart)
//       gameInPlay = false;
//   }
});

startButtonHard.click(function () {
    timeLeft = 30;
  $(this).attr("disabled", true);
  hardGame();
  countDown();
//   if (!gameInPlay){
//     clearInterval(hardGameStart)
//     gameInPlay = false;
// }
});

// Countdown timer function

const timeLeftDisplay = $("#timer-display");

function countDown() {
  setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval((timeLeft = 0));
      startButtonEasy.attr("disabled", false);
      startButtonHard.attr("disabled", false);
    }
    timeLeftDisplay.html(timeLeft);
    timeLeft -= 1;
  }, 1000);
}
// startButtonEasy.click(countDown);
// startButtonHard.click(countDown);

$('#mole-grid').on('click', '.active-mole', function () {
    result++
    $('.score').text(result)
})

$('#mole-grid').on('click', '.active-rabbit', function () {
    result--
    $('.score').text(result)
})
