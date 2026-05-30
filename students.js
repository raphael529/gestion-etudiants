document.getElementById("formEtudiant").addEventListener("submit", function(e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const li = document.createElement("li");
  li.textContent = nom;
  document.getElementById("listeEtudiants").appendChild(li);
});