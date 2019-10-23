window.onload=rem;
window.onresize=rem;
function rem(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+'px';
}