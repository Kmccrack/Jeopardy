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
        text: " This movie stars......",
        buttons: {
            a: "Kirsten Dunst, Eliza Dushku",
            b: "Hayden Paniterre, Hilary Duff",
            c: "Kirsten Dunst, Drew Barrymore",
            d: "Gabrielle Union, Lindsay Lohan",
        }
    }
    )
    console.log("working")
    $('.swal-button--c').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
}

document.getElementById("three").addEventListener("click", questionThree)

function questionThree() {
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
    console.log("working")
    $('.swal-button--c').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
}

document.getElementById("four").addEventListener("click", questionFour)

function questionFour() {
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
    console.log("working")
    $('.swal-button--c').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
}

document.getElementById("five").addEventListener("click", questionFivw)

function questionFive() {
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
    console.log("working")
    $('.swal-button--c').on('click', () => {
        score += 100;
        $('#scoreBoard').html("Score:" + score)

    })
}


