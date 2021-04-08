window.onscroll = function() {scroll()};

var navigation = document.getElementById("topnav");
var sticky = navigation.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky")
  }
  else {
    navigation.classList.remove("sticky");
  }
}

function classChange(currentVal) {
  let test = document.querySelectorAll('[id = nav]')
  for (i = 0; i < test.length; i++) {
    if (test[i].getAttribute("value") === currentVal) {
      test[i].className = "active"
    }
    else {
      test[i].className = "passive"
    }
  }
}