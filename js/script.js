console.log("javascript connected");

var form = document.querySelector("form");
var inputText = document.querySelector("input[type='text']");
var inputDate = document.querySelector("input[type='date']");
var list = document.querySelector("ul");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var li = document.createElement("li");
  li.innerText = inputText.value + " (" + inputDate.value + ")";

  list.appendChild(li);

  inputText.value = "";
  inputDate.value = "";
});

if (inputText.value == "" || inputDate.value == "") {
  alert("Input tidak boleh kosong");
  return;
}

var deleteBtn = document.createElement("button");
deleteBtn.innerText = "Hapus";

deleteBtn.addEventListener("click", function() {
  li.remove();
});

li.appendChild(deleteBtn);
