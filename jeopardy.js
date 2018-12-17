$('.card').on('click', "#numTag", function($event) {
	var response = prompt("This portugese soccer player won his fourth Ballon D'Or trophy in 2016...\n\n A. who is Cristiano Ronaldo\n B. who is Lionel Messi\n C. who is Neymar da Silva Santos Júnior\n D. who is Luka Modric");

  // capitalizing any letter entered in prompt
  response = response.toUpperCase();
  var answer = 'A';

  // taking the answer and determining whether correct or incorrect
	if (answer === response) {
		score += parseInt(100);
		alert('CORRECT!');
	} else {
		score -= parseInt(100);
		alert("Sorry, that's incorrect");
	}