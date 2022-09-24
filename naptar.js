let progress = document.getElementById('prograssbar');
let TotalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / TotalHeight) * 100;
    progress.style.height = progressHeight + '%';
}
function delayki(){
    setTimeout(navki, 300);
}

function navki(){
    t1 = document.getElementById("title1").style.display = "block";
    t2 = document.getElementById("title2").style.display = "block";
    t3 = document.getElementById("title3").style.display = "block";
}
function navbe(){
    t1 = document.getElementById("title1").style.display = "none";
    t2 = document.getElementById("title2").style.display = "none";
    t3 = document.getElementById("title3").style.display = "none";
    setTimeout(delaybe, 300);
}
function delaybe(){
    t1 = document.getElementById("title1").style.display = "none";
    t2 = document.getElementById("title2").style.display = "none";
    t3 = document.getElementById("title3").style.display = "none";
}