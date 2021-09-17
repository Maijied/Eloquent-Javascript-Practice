// const grandparent = document.getElementById('grandParent-id');
// const grandParent = document.querySelector('.grandParent');

// const parents = Array.from(document.getElementsByClassName('parent'));
// const parents = document.querySelectorAll('.parent');

// parents.forEach(changeColor);
// changeColor(grandParent);

var gp = document.querySelector('.grandParent');
var pa = Array.from(gp.children);
var cp = pa[0];
var child = cp.children;
// child.forEach(changeColor);
changeColor(child[0]);
function changeColor(element){
    element.style.backgroundColor = "black";
}