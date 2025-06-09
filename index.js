//Etape 1 : créer le forme et récupérer les données :
// 1. Créer un formulaire en html pour taper les To do : OK
// 2.Ajouter sur le DOM ce qui est tapé dans l'input à la
//validation du form : input.value recup et inject dans le DOM OK
// 3. Supprimer un todo lorsque l'on clique dessus .remove() :
//event au click tu supprimes : OK

//1.
let form = document.querySelector("form");
let input = document.querySelector("input");
let list = document.getElementById("list-container");
getTodos();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = input.value;
  const newList = document.createElement("li");
  newList.textContent = data;
  newList.classList.add("list");

  newList.addEventListener("click", () => {
    newList.remove();
    saveTodos();
  });
  list.appendChild(newList);
  input.value = "";
  saveTodos();
});

//Etape 2 : le stockage des données :
// 4. Stocker dans le localStorage la liste :
// 5. Consulter le localStorage au lancement de l'app pour
//rajouter les todos :
function saveTodos() {
  localStorage.setItem("todos", list.innerHTML);
}

function getTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    list.innerHTML = savedTodos;
    const items = list.getElementsByClassName("list");
    for (let item of items) {
      item.onclick = function () {
        this.remove();
        saveTodos();
      };
    }
  }
}

//correction :
// function storeList() {
//   window.localStorage.todolist = list.innerHTML;
// }
// function getTodos() {
//   list.innerHTML = window.localStorage.todolist;
// }
// getTodos();
// form.addEventListener("click", (e) => {
//   e.preventDefault();

//   list.innerHTML += `<li>${item.value}`;
//   item.value;
//   storeList();
// });

// list.addEventListener("click", (e) => {
//   e.target.remove();
//   storeList();
// });
