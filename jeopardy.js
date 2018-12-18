var score = 0;
var start = 0;

document.getElementById("one").addEventListener("click", questionOne)

function questionOne() {
    swal({
        text: "Kirsten Dunst was a cheerleader before filming 'Bring It On!",
        buttons: {
            a: "True",
            b: "False",

        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#one").css("visibility", "hidden");
    $('#one').css("pointer-events", "none");
    endGame();
}





document.getElementById("two").addEventListener("click", questionTwo)

function questionTwo() {
    swal({
        text: "The Toros placed first in Nationals.",
        buttons: {
            a: "True",
            b: "False",

        }
    }
    )
    $('.swal-button--b').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#two").css("visibility", "hidden");
    $('#two').css("pointer-events", "none");
    endGame();
}




document.getElementById("three").addEventListener("click", questionThree)

function questionThree() {
    swal({
        text: "The clovers main colour of their uniform is...",
        buttons: {
            a: "Red",
            b: "Orange",
            c: "Yellow",
            d: "Green"

        }
    }
    )
    $('.swal-button--d').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#three").css("visibility", "hidden");
    $('#three').css("pointer-events", "none");
    endGame();
}


document.getElementById("four").addEventListener("click", questionFour)

function questionFour() {
    swal({
        text: "What is the name of the 2004 sequal ?",
        buttons: {
            a: "Bring it again",
            b: "Bring it more",
            c: "Bring it on again",
            d: "Bring it on more"

        }
    }
    )
    $('.swal-button--c').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#four").css("visibility", "hidden");
    $('#four').css("pointer-events", "none");
    endGame();
}


document.getElementById("five").addEventListener("click", questionFive)

function questionFive() {
    swal({
        text: "How many years has it been since Bring It On been released",
        buttons: {
            a: "10 years",
            b: "5 years",
            c: "20 years",
            d: "18 years"

        }
    }
    )
    $('.swal-button--d').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#five").css("visibility", "hidden");
    $('#five').css("pointer-events", "none");
    endGame();
}


document.getElementById("six").addEventListener("click", questionSix)

function questionSix() {
    swal({
        text: " This movie stars......",
        buttons: {
            a: "Kirsten Dunst, Eliza Dushku",
            b: "Hayden Paniterre, Hilary Duff",
            c: "Kirsten Dunst, Drew Barrymore",
            d: "Gabrielle Union, Lindsay Lohan",
        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 200;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#six").css("visibility", "hidden");
    $('#six').css("pointer-events", "none");
    endGame();
}


document.getElementById("seven").addEventListener("click", questionSeven)

function questionSeven() {
    swal({
        text: "When Missy proved the other Toro cheerleaders that the tattoo at the try out was fake, what finger did she smear it with?",
        buttons: {
            a: "Index",
            b: "Thumb",
            c: "Middle",
            d: "Pointer",
        }
    }
    )
    $('.swal-button--c').on('click', () => {
        score += 200;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#seven").css("visibility", "hidden");
    $('#seven').css("pointer-events", "none");
    endGame();
}


document.getElementById("eight").addEventListener("click", questionEight)

function questionEight() {
    swal({
        text: "Who was the captain of the Clover's cheerleading squad?",
        buttons: {
            a: "Lava",
            b: "Isis",
            c: "They didn't say",
            d: "Lava and Isis were both co-captains",
        }
    }
    )
    $('.swal-button--b').on('click', () => {
        score += 200;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#eight").css("visibility", "hidden");
    $('#eight').css("pointer-events", "none");
    endGame();
}


document.getElementById("nine").addEventListener("click", questionNine)

function questionNine() {
    swal({
        text: "What book was Cliff reading at the football game?",
        buttons: {
            a: "To Kill a Mockingbird",
            b: "Harry Potter",
            c: "The Naked Ape",
            d: "Tuck Everlasting",
        }
    }
    )
    $('.swal-button--c').on('click', () => {
        score += 200;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#nine").css("visibility", "hidden");
    $('#nine').css("pointer-events", "none");
    endGame();
}


document.getElementById("ten").addEventListener("click", questionTen)

function questionTen() {
    swal({
        text: "What show was Elize Dushku on",
        buttons: {
            a: "Reba",
            b: "Buffy the Vampire Slayer",
            c: "Gossip Girl",
            d: "90210",
        }
    }
    )
    start++;
    $('.swal-button--b').on('click', () => {
        score += 200;
        $('#scoreBoard').html("Score:" + score)

    })
    $("#ten").css("visibility", "hidden");
    $('#ten').css("pointer-events", "none");
    endGame();
}




document.getElementById("eleven").addEventListener("click", questionEleven)

function questionEleven() {
    swal({
        text: "Kirsten Dunst plays....",
        buttons: {
            a: "Big Red",
            b: "Torrance",
            c: "Missy",
            d: "Isis",
        }
    }
    )

    $('.swal-button--b').on('click', () => {
        score += 300;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#eleven").css("visibility", "hidden");
    $('#eleven').css("pointer-events", "none");
    endGame();
}


document.getElementById("twelve").addEventListener("click", questionTwelve)

function questionTwelve() {
    swal({
        text: "How many times have the toro's previously won the national championships?",
        buttons: {
            a: "4",
            b: "5",
            c: "6",
            d: "7",
        }
    }
    )

    $('.swal-button--b').on('click', () => {
        score += 300;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twelve").css("visibility", "hidden");
    $('#twelve').css("pointer-events", "none");
    endGame();
}


document.getElementById("thirteen").addEventListener("click", questionThirteen)

function questionThirteen() {
    swal({
        text: "Three of the Clovers have a hip hop group together.",
        buttons: {
            a: "True",
            b: "False",

        }
    }
    )

    $('.swal-button--a').on('click', () => {
        score += 300;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#thirteen").css("visibility", "hidden");
    $('#thirteen').css("pointer-events", "none");
    endGame();
}


document.getElementById("fourteen").addEventListener("click", questionFourteen)

function questionFourteen() {
    swal({
        text: "What is Whitney's sister's name?",
        buttons: {
            a: "Courtney",
            b: "Jamie",
            c: "Missy",
            d: "Isis"

        }
    }
    )

    $('.swal-button--b').on('click', () => {
        score += 300;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#fourteen").css("visibility", "hidden");
    $('#fourteen').css("pointer-events", "none");
    endGame();
}


document.getElementById("fifteen").addEventListener("click", questionFifteen)

function questionFifteen() {
    swal({
        text: "What superstar was Torrance Shipman character Based on",
        buttons: {
            a: "Gwen Stefani",
            b: "Fergie",
            c: "Shakira",
            d: "Britney Spears"

        }
    }
    )

    $('.swal-button--a').on('click', () => {
        score += 300;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#fifteen").css("visibility", "hidden");
    $('#fifteen').css("pointer-events", "none");
    endGame();
}


document.getElementById("sixteen").addEventListener("click", questionSixteen)

function questionSixteen() {
    swal({
        text: " Gabrielle Union plays....",
        buttons: {
            a: "LaFred",
            b: "Jenelope",
            c: "Pauletta",
            d: "Isis",
        }
    }
    )
    $('.swal-button--d').on('click', () => {
        score += 400;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#sixteen").css("visibility", "hidden");
    $('#sixteen').css("pointer-events", "none");
    endGame();
}



document.getElementById("seventeen").addEventListener("click", questionSeventeen)

function questionSeventeen() {
    swal({
        text: "The main High School is called",
        buttons: {
            a: "Ranch High School",
            b: "Rancho Carnel High School",
            c: "Ranchon Carne High School",
            d: "Rancho Carne High School",
        }
    }
    )
    $('.swal-button--d').on('click', () => {
        score += 400;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#seventeen").css("visibility", "hidden");
    $('#seventeen').css("pointer-events", "none");
    endGame();
}


document.getElementById("eighteen").addEventListener("click", questionEighteen)

function questionEighteen() {
    swal({
        text: "Did Big Red steal cheers from the East Compton Clovers?",
        buttons: {
            a: "Yes",
            b: "No",
        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 400;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#eighteen").css("visibility", "hidden");
    $('#eighteen').css("pointer-events", "none");
    endGame();
}


document.getElementById("nineteen").addEventListener("click", questionNineteen)

function questionNineteen() {
    swal({
        text: "What state in the national championships held in?",
        buttons: {
            a: "California",
            b: "Florida",
            c: "Texas",
            d: "Arizona"
        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 400;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#nineteen").css("visibility", "hidden");
    $('#nineteen').css("pointer-events", "none");
    endGame();
}


document.getElementById("twenty").addEventListener("click", questionTwenty)

function questionTwenty() {
    swal({
        text: "What does The Toro's high school name translate to?",
        buttons: {
            a: "Meat House",
            b: "Meat Farm",
            c: "Meat Ranch",
            d: "Ranch of Meat",
        }
    }
    )
    $('.swal-button--c').on('click', () => {
        score += 400;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twenty").css("visibility", "hidden");
    $('#twenty').css("pointer-events", "none");
    endGame();
}


document.getElementById("twentyone").addEventListener("click", questionTwentyOne)

function questionTwentyOne() {
    swal({
        text: " Three girls on the Clovers squad are in a singing group in real life. What is the name of the group?",
        buttons: {
            a: "3LW",
            b: "Destiny's Child",
            c: "Blaque",
            d: "702 ",
        }
    }
    )
    $('.swal-button--c').on('click', () => {
        score += 500;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twentyone").css("visibility", "hidden");
    $('#twentyone').css("pointer-events", "none");
    endGame();
}


document.getElementById("twentytwo").addEventListener("click", questionTwentyTwo)

function questionTwentyTwo() {
    swal({
        text: "Torrance's boyfriend at the start of the movie is called",
        buttons: {
            a: "Cliff",
            b: "Jason",
            c: "Justin",
            d: "Aaron",
        }
    }
    )
    $('.swal-button--d').on('click', () => {
        score += 500;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twentytwo").css("visibility", "hidden");
    $('#twentytwo').css("pointer-events", "none");
    endGame();
}


document.getElementById("twentythree").addEventListener("click", questionTwentyThree)

function questionTwentyThree() {
    swal({
        text: "Which show did the Clover's go on to get their sponsership money?",
        buttons: {
            a: "The Pauletta Show",
            b: "The Oprah Show",
            c: "Dr.Phil",
            d: "The Maury Show",
        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 500;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twentythree").css("visibility", "hidden");
    $('#twentythree').css("pointer-events", "none");
    endGame();
}


document.getElementById("twentyfour").addEventListener("click", questionTwentyFour)

function questionTwentyFour() {
    swal({
        text: "Who was the captain of the Toro cheerleading squad before Torrance was?",
        buttons: {
            a: "Big Red",
            b: "Isis",
            c: "Courtney",
            d: "Whitney",
        }
    }
    )
    $('.swal-button--a').on('click', () => {
        score += 500;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twentyfour").css("visibility", "hidden");
    $('#twentyfour').css("pointer-events", "none");
    endGame();
}


document.getElementById("twentyfive").addEventListener("click", questionTwentyFive)

function questionTwentyFive() {
    swal({
        text: "Was the Dancing on the Bed Scene Choreographed?",
        buttons: {
            a: "Yes",
            b: "No",

        }
    }
    )
    $('.swal-button--b').on('click', () => {
        score += 500;
        $('#scoreBoard').html("Score:" + score)

    })
    start++;
    $("#twentyfive").css("visibility", "hidden");
    $('#twentyfive').css("pointer-events", "none");
    endGame();
}


function endGame() {
    if (start >= 50 && score > 5000) {
        swal(
            "You have won! You have what it takes to Bring It On!"
        )
    }
    else if (start >= 50 && score < 5000) {
        swal(
            "You have completed the game but didnt Bring it :("
        )
    }
}
endGame()













