var menuicon = document.getElementById("menu");
var open = document.getElementById("list");
var menustatus;
menustatus = "closed";

menuicon.onclick = function() {
    if(menustatus == "closed") {
       menuicon.src = "images/close.png";
    open.style.display = "block";
        menustatus = "open";
       }else {
           menuicon.src = "images/menu.png";
    open.style.display = "none";
           menustatus = "closed";
       }
}