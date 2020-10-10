let inp = document.getElementById("userinput");
let btn = document.getElementById("enter");
var ul = document.querySelector("ul");

let inputLength = ()=> inp.value.length; //after "=>" everything returns
let appch = ()=> {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inp.value));
    ul.appendChild(li);
    inp.value="";
}

function addListAfterClick() {
    if(inputLength()>0) {
    appch();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        appch();
}}
btn.addEventListener("click", addListAfterClick);

inp.addEventListener("keypress", addListAfterKeypress);
