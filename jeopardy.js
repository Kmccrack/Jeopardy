var score = 0;

document.getElementById("one").addEventListener("click", clickMeOne)

function clickMeOne() {
    swal({
        text: "Finish the cheer: Awesome! Oh wow! 'Like totally freak me out........'",
        buttons: {
            a: "I mean right on!",
            b: "I said right on!",
            c: "I totally mean right on!",
            d: "I totally said right on!",
        }}
        )
         $('.swal-button--a').on('click', () => {
            score += 100;
            $('#scoreBoard').html("Score:" + score)

        })

}
document.getElementById("two").addEventListener("click", clickMeTwo)
   
function clickMeTwo() {
        swal({
        text: "What is the name of the 2004 sequal ?",
        buttons: {
            a: "Index",
            b: "Thumb",
            c: "Middle",
            d: "Pointer",
        }}
        )
        console.log("working")
        // $('.swal-button--c').on('click', () => {
        //     score += 100;
        //     $('#scoreBoard').html("Score:" + score)

        // })
    }

