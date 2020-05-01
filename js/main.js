let articles = [
  "my article1",
  "articles text",
  "Lorem ipsum dolor",
  "articles author",
  "bla bla",
  "bla text",
  "Lorem ipsum",
];

let html = "";
for (let article of articles) {
  html += `<li>${article}<span class="close">&times;</span></li>`;
}

let ul = document.querySelector(".list");
ul.innerHTML = html;

let closebtns = document.getElementsByClassName("close");

for (let i = 0; i < closebtns.length; ++i) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.remove();
  });
}

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", function () {
  while (ul.children.length > 0) ul.children[0].remove();
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
  span.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
  addListItem(input.value);
  input.value = "";
});
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addListItem(input.value);
    input.value = "";
    // addBtn.click();
  }
});
