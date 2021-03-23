let game;
let totalTime = 30;
let startTime;
let endTime;

function buildMoles() {
    $('.moles').removeClass('active-mole')
    let moles = []
    for (i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        moles.push(randomNumber)
    }

    moles.forEach(function (mole) {
        $(`.mole${mole}`).addClass('active-mole')
    })
    buildRabbit()

    // console.log(totalTime)
    let now = new Date()
    console.log('now: ' + now)
    console.log('endtime: ' + endTime)
    $('#timer-display').text(now - endTime)
    if( now <= endTime){
        clearInterval(game)
    }

}

function buildRabbit() {
    $('.moles').removeClass('active-rabbit')
    let moles = []
    for (i = 0; i < 1; i++) {
        let randomNumber = Math.floor(Math.random() * 10)

        moles.push(randomNumber)
    }

    moles.forEach(function (mole) {
        $(`.mole${mole}`).addClass('active-rabbit')
    })
}

// start buttons section
function easyGame() {
    startTime = new Date()
    endTime = new Date(startTime + 30000)
   game = setInterval(buildMoles, 1000)
}

function hardGame() {
    game = setInterval(buildMoles, 300)
}


$('button .starteasy').click(function (){

})

// easyGame()


// $('.starteasy, starthard').click(function (){
//     let timer = $('#timer-display').text()
//     for (let i = 30; i >= 0; i--){

//     }

// })
// const gameInterval = setInterval(startGame, 1000)
// clearInterval(gameInterval)

setInterval(function() {
    $('.Timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);
