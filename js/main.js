// let articles = [
//   "my article1",
//   "articles text",
//   "Lorem ipsum dolor",
//   "articles author",
//   "bla bla",
//   "bla text",
//   "Lorem ipsum",
// ];

let articles = JSON.parse(localStorage.articles || '["item1", "item2"]');

let html = "";
for (let article of articles) {
  html += `<li>${article}<span class="close">&times;</span></li>`;
}

let ul = document.querySelector(".list");
ul.innerHTML = html;

let closebtns = document.getElementsByClassName("close");

for (let i = 0; i < closebtns.length; ++i) {
  closebtns[i].addEventListener("click", handleDel);
}

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", function () {
  while (ul.children.length > 0) ul.children[0].remove();
  articles.length = 0;
  localStorage.articles = JSON.stringify(articles);
});

function addListItem(str) {
  // create li
  const li = document.createElement("li");
  // isert str into li
  li.innerText = str;
  // append li to ul
  ul.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "&times;";
  li.append(span);
  span.classList.add("close");
  span.addEventListener("click", handleDel);
}

const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", handleAdd);
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") handleAdd();
});

function handleAdd() {
  addListItem(input.value);
  articles.push(input.value);
  localStorage.articles = JSON.stringify(articles);
  input.value = "";
}

function handleDel() {
  const li = this.parentElement;
  for (let i = 0; i < ul.children.length; ++i) {
    if (ul.children[i] == li) {
      articles.splice(i, 1);
      localStorage.articles = JSON.stringify(articles);
      break;
    }
  }
  li.remove();
}
