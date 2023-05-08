var headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Hello';
headerTitle.style.borderBottom = 'solid 3px black';
//getElementsByClassName
/*var item = document.getElementsByClassName('list-group-item');
item[1].style.fontWeight = "bold";
item[1].style.color = "green";
item[2].style.background = "green";

for(let i = 0; i<item.length; i++){
    item[i].style.fontWeight = "bold";
}*/
//GetElementByTagName
/*var li = document.getElementsByTagName('li');
li[1].style.fontWeight = "bold";
li[1].style.color = "green";
li[2].style.background = "green";

for(let i = 0; i<li.length; i++){
    li[i].style.fontWeight = "bold";
}*/

var li = document.getElementsByTagName('li');
li[1].style.background = "lightgreen";
li[2].remove();

let list = document.querySelectorAll('li');
list[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i<odd.length; i++){
    odd[i].style.background = 'green';
}