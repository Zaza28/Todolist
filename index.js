//Etape 1 : créer le forme et récupérer les données :
// 1. Créer un formulaire en html pour taper les To do : OK
// 2.Ajouter sur le DOM ce qui est tapé dans l'input à la
//validation du form : input.value recup et inject dans le DOM OK
// 3. Supprimer un todo lorsque l'on clique dessus .remove() :
//event au click tu supprimes : OK

//1.
let form = document.querySelector("form");
let input = document.querySelector("input");
let listContainer = document.getElementById("list-container");
let list = document.getElementById("list-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = input.value;
  const newList = document.createElement("li");
  newList.textContent = data;
  list.appendChild(newList);
  newList.classList.add("list");

  input.value = "";

  newList.addEventListener("click", () => {
    newList.remove();
  });
});

//Etape 2 : le stockage des données :
// 4. Stocker dans le localStorage la liste :
// 5. Consulter le localStorage au lancement de l'app pour
//rajouter les todos :
