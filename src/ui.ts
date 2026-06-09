console.log("fichier ui chargé");
import Handlebars from "handlebars";

export function displayPicture(data: any): void {
  const templateElement = document.querySelector("#photoTemplate");
  const container = document.querySelector("#la_photo");

  const template = Handlebars.compile(templateElement.innerHTML);

  const html = template({
    titre: data.photo.titre,
    description: data.photo.descr,
    format: "image/"+data.photo.format.toLowerCase(),
    width: data.photo.width,
    height: data.photo.height,
    url: "https://webetu.iutnc.univ-lorraine.fr" + data.photo.url.href,
    id: data.photo.id
  });

  container.innerHTML = html;
}

export function displayCategory(category: any): void {
  const zone = document.querySelector("#la_categorie");
  if (zone) {
    zone.textContent = "categorie : " + category.categorie.nom; // category.categorie.nom car c'est dans categorie.categorie sur le JSON
  }
}

export function displayComments(comments: any): void {
  const zone = document.querySelector("#les_commentaires");
  if (!zone) return;

  zone.innerHTML = "";
  comments.comments.forEach((comment: any) => { // Car c'est dans comments.comments sur le JSON
    const li = document.createElement("li");
    li.textContent = `${comment.pseudo} : ${comment.content}`;
    zone.appendChild(li);
  });
}
