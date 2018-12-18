let score = 0;

$("#one").on("click", function(){
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
            // console.log(score, $('#one').val())
            // score += parseInt($("#one").val());
            score += 100;
            $('#scoreBoard').html("Score:" + score)
            // console.log(score)
            // append score onto the page
        })
        // if (this.a("clicked")){ 
        // score = score + parseInt($("#one").val());
        // $('#scoreBoard').html(score)
        // console.log("rightanswer")}
        // else{
        // score += parseInt($("#one").val());
        // }

      
    })
    
    $("#tdtwo").on("click", function(){
        swal({
        text: "What is the name of the 2004 sequal ?",
        buttons: {
            a: "Index",
            b: "Thumb",
            c: "Middle",
            d: "Pointer",
        }}
        )
        // $('.swal-button--c').on('click', () => {
        //     score += 100;
        //     $('#scoreBoard').html("Score:" + score)

        // })
    })

