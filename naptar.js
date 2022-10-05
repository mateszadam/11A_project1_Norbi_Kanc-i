window.onscroll = function () {
  var progress = document.getElementById("prograssbar");
  var TotalHeight = document.body.scrollHeight - window.innerHeight;
  var progressHeight = (window.pageYOffset / TotalHeight) * 100;
  progress.style.height = progressHeight + "%";
  fixheight();
};

function fixheight() {
  width = document.getElementById("body_id").offsetWidth - 1;
  if(width > 800){
  height = document.getElementById("def_height").offsetHeight + 1;
  document.getElementById("height").style.height = height - 20 + "px";
  document.getElementById("height2").style.height = height - 20 + "px";
  document.getElementById("height3").style.height = height - 20 + "px";
  document.getElementById("height4").style.height = height - 20 + "px";
  document.getElementById("height5").style.height = height - 20 + "px";
  } 
  else{
  height = document.getElementById("mobile_height").offsetHeight;
  document.getElementById("height").style.height = height + "px";
  document.getElementById("height2").style.height = height + "px";
  document.getElementById("height3").style.height = height + "px";
  document.getElementById("height4").style.height = height + "px";
  document.getElementById("height5").style.height = height + "px";
  }
}
function delayki() {
  setTimeout(navki, 300);
}

function navki() {
  document.getElementById("title1").style.display = "block";
  document.getElementById("title2").style.display = "block";
  document.getElementById("title3").style.display = "block";
}
function navbe() {
  document.getElementById("title1").style.display = "none";
  document.getElementById("title2").style.display = "none";
  document.getElementById("title3").style.display = "none";
  setTimeout(delaybe, 300);
}
function delaybe() {
  document.getElementById("title1").style.display = "none";
  document.getElementById("title2").style.display = "none";
  document.getElementById("title3").style.display = "none";
}
