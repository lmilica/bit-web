// var changeBackground = function () {
//     var body = document.querySelector("body");
//     body.classList.toggle("btn");

// }
// var turnOff = function () {
//     var button = document.querySelector(".bt1");
//     button.removeAttribute("onclick");
// }

// var button = document.querySelector(".btn");

// button.onclick = function () {
//     var input = document.querySelector("#inp");
//     var cont = document.querySelector(".container");
//     var txt = document.createTextNode(input.value);
//     var mymsg = document.createElement('p');

//     mymsg.appendChild(txt);
//     cont.appendChild(mymsg);
//     input.value = '';

// }


function addPicture(obj) {
    var player = document.querySelector('#player');
    player.style.left = obj.clientX - 15 + 'px';
    player.style.top = obj.clientY - 15 + 'px';
}
var body = document.querySelector('body');
body.addEventListener("click", addPicture);