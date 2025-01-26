let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let check = false;
function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    
}
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level: " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$("body").keypress(function(){
    if(!check){
        $("h1").text("Level: " + level);
        nextSequence();
        check = true;
    }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }else{
        var audio = new Audio("./sounds/wrong.mp3")
        audio.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        console.log("wrong");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    check = false;
}
