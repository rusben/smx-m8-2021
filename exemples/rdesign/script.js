
let checker = document.getElementById("mobile-selector");
let menu = document.getElementById("menu");

window.addEventListener('resize', function(event) {
  console.log(window.innerWidth);
    if (window.innerWidth > "768") {
        menu.style.display = "block";
    }
}, true);

checker.addEventListener("click", function(){
  if (window.getComputedStyle(menu).display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}
