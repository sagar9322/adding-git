var headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Hello';
headerTitle.style.borderBottom = 'solid 3px black';

var item = document.getElementsByClassName('list-group-item');
item[1].style.fontWeight = "bold";
item[1].style.color = "green";
item[2].style.background = "green";

for(let i = 0; i<item.length; i++){
    item[i].style.fontWeight = "bold";
}