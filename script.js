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