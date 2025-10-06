function ajouter() {
  let titre, p, oui;
  titre = prompt("titre");
  p = prompt("paragraphe");
  oui = document.querySelector("#oui");
  let texte = "<h1>" + titre + "</h1>" + "<p>" + p + "</p>";
  if(titre !== null && p !== null) {
  oui.innerHTML += texte;
  }else{
    oui.innerHTML = "";
  }
  
}
