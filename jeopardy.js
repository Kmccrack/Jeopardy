var score = 0;

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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
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
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
}




