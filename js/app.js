// menu button

(function menuButton (){
  var menuButton = document.getElementById('menuButton');
  var nav = document.getElementById("nav");

  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      nav.classList.toggle("nav-trigger");
      e.preventDefault();
  });
}());



// current year in footer

(function copyrightyear (){
  var today = new Date();
  var thisYear = today.getFullYear();

  var el = document.getElementById("currentYear");
  el.textContent = thisYear;
}());
