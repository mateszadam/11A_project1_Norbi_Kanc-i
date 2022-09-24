let progress = document.getElementById('prograssbar');
let TotalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / TotalHeight) * 100;
    progress.style.height = progressHeight + '%';
}