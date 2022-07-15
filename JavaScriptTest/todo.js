let title = document.getElementById("title");
let list = document.getElementById("list");
// let li = list.getElementById("li");
let addBtn = document.getElementById("addBtn");

console.log(title);
console.log(list);
console.log(addBtn);

list.addEventListener("click", activeItem);

function activeItem(event) {
  if (event.target.nodeName == "LI") {
    title.innerHTML = event.target.innerText;

    for (let i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].removeAttribute("class");
    }

    event.target.setAttribute("class", "active");
  }
}

addBtn.addEventListener("click", () => {
  let txt = prompt("제목입력");
  list.innerHTML += "<li>" + txt + "</li>";
});
