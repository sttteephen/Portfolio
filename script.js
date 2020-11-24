var i = 0;
var txt = 'Thanks for checking out my page.';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome_message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

typeWriter();

let root = document.documentElement;

window.addEventListener('scroll', function() {

	var windowHeight = window.innerHeight
	var yOffset = window.pageYOffset

	if (yOffset < (windowHeight-80)) {
		root.style.setProperty('--navcolor', '#30475e');
	}

	if (yOffset > (windowHeight-80)) {
		root.style.setProperty('--navcolor', '#f1935c');
	} 

	if (yOffset > (2*windowHeight)-80) {
		root.style.setProperty('--navcolor', '#85a392');
	}
});