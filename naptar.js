
window.onscroll = function () {
    let progress = document.getElementById('prograssbar');
    let TotalHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / TotalHeight) * 100;
    progress.style.height = progressHeight + '%';
    fixheight();
}
function delayki(){
    setTimeout(navki, 300);
}

function fixheight(){}
    height = document.getElementById('def_height').offsetHeight;
    console.log(height);
    document.getElementById('height').style.height = height - 20 + "px";



function navki(){
    document.getElementById("title1").style.display = "block";
    document.getElementById("title2").style.display = "block";
    document.getElementById("title3").style.display = "block";
}
function navbe(){
    document.getElementById("title1").style.display = "none";
    document.getElementById("title2").style.display = "none";
    document.getElementById("title3").style.display = "none";
    setTimeout(delaybe, 300);
}
function delaybe(){
    document.getElementById("title1").style.display = "none";
    document.getElementById("title2").style.display = "none";
    document.getElementById("title3").style.display = "none";
}