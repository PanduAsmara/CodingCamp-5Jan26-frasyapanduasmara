var form = document.getElementById("formTodo");
var todoText = document.getElementById("todoText");
var todoDate = document.getElementById("todoDate");
var listTodo = document.getElementById("listTodo");
var filter = document.getElementById("filter");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (todoText.value == "" || todoDate.value == "") {
    alert("Input tidak boleh kosong");
    return;
  }

  var li = document.createElement("li");

  var text = document.createElement("span");
  text.innerText = todoText.value + " (" + todoDate.value + ")";

  var btnDone = document.createElement("button");
  btnDone.innerText = "Selesai";

  var btnDelete = document.createElement("button");
  btnDelete.innerText = "Hapus";

  li.appendChild(text);
  li.appendChild(btnDone);
  li.appendChild(btnDelete);

  listTodo.appendChild(li);

  todoText.value = "";
  todoDate.value = "";

  btnDone.addEventListener("click", function() {
    li.classList.toggle("selesai");
  });

  btnDelete.addEventListener("click", function() {
    li.remove();
  });
});

filter.addEventListener("change", function() {
  var semuaTodo = listTodo.children;

  for (var i = 0; i < semuaTodo.length; i++) {
    var item = semuaTodo[i];

    if (filter.value == "all") {
      item.style.display = "block";
    } else if (filter.value == "done") {
      if (item.classList.contains("selesai")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      if (!item.classList.contains("selesai")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  }
});
