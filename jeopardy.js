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
       
        if (swal.a.data("clicked") == true){ 
        score += $("#one").val();
        $('#scoreBoard').html(score)}
        else if(swal.b.data("clicked") == false|| swal.c.data("clicked") == false || swal.d.data("clicked") == false){
        score -=$("#one").val();
        }
        var elementClicked;
$("element").click(function(){
   elementClicked = true;
});
if( elementClicked != true ) {
    alert("element not clicked");
}else{
    alert("element clicked");
}
        
    })

