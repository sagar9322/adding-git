// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';
// headerTitle.style.borderBottom = 'solid 3px black';
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

// var li = document.getElementsByTagName('li');
// li[1].style.background = "lightgreen";
// li[2].remove();

// let list = document.querySelectorAll('li');
// list[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i = 0; i<odd.length; i++){
//     odd[i].style.background = 'green';
// }
// var itemList = document.querySelector('#items');
// //parentElement
// itemList.parentElement.style.background = '#f4f4f4';
// //lastelementchild
// itemList.lastElementChild.style.background = 'gray'
// //lastchild
// itemList.lastChild.textContent = 'Hello';
// //createChild
// const node = document.createElement("li");
// const textnode = document.createTextNode("item 5");
// node.appendChild(textnode);
// document.getElementById("items").appendChild(node);
// node.className = 'list-group-item';
// //firstElementChild
// itemList.firstElementChild.textContent = 'Hello World';
// //firstChild
// itemList.firstChild.textContent = 'Hello World 2';
// //nextSibling
// itemList.nextSibling.textContent = 'sibling';
// //nextelementsibling
// itemList.nextElementSibling.textContent = 'sibling 2';
// //previoussibling
// itemList.previousSibling.textContent = 'Previous Sibling';
// //previouselementsibling
// itemList.previousElementSibling.textContent = 'New Items';
// //createelement

// //create div
// var newDiv = document.createElement('div');

// newDiv.className = 'hello';
// //setAttribute
// newDiv.setAttribute('title','Hello Div');
// //createtesxtnode
// var newDivText = document.createTextNode('Hello World 3');
// //appendchild
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);