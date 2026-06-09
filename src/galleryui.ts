import Handlebars from "handlebars";
import { loadResource } from "./photoloader";
import { displayPicture, displayCategory, displayComments } from "./ui";

export function displayGalerie(gallery: any): void {
  const templateElement = document.querySelector("#galleryTemplate");
  const container = document.querySelector("#gallery_container");

  const template = Handlebars.compile(templateElement.innerHTML);
  container.innerHTML = template(gallery);

  const images = container.querySelectorAll("img");
  images.forEach((img, index) => {
     img.addEventListener("click", () => {
       const photoData = gallery.photos[index];
       const href = photoData.links.self.href;

       loadResource(href).then((photo: any) => {
         displayPicture(photo);

         loadResource(photo.links.categorie.href).then((category: any) => {
           displayCategory(category);
         });

         loadResource(photo.links.comments.href).then((comments: any) => {
           displayComments(comments);
         });
       });
     });
   });
}
