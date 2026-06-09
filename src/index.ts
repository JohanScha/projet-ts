console.log("fichier index chargé");

import { loadPicture, loadResource } from "./photoloader";
import { displayPicture, displayCategory, displayComments } from "./ui";
import { load, nextPhoto, prevPhoto, firstPhoto, lastPhoto } from "./gallery";
import { displayGalerie } from "./galleryui";

function getPicture(id: number): void {
    loadPicture(id).then((photo: any) => {
        displayPicture(photo);

        loadResource(photo.links.categorie.href).then((category: any) => {
            displayCategory(category);
        });

        loadResource(photo.links.comments.href).then((comments: any) => {
            displayComments(comments);
        });
    });
}

getPicture(105);

// Exercice 2 avec le bouton qui affiche la galerie
document.querySelector("#load_gallery")?.addEventListener("click", () => {
    load().then(displayGalerie);
});

document.querySelector("#next")?.addEventListener("click", () => {
    nextPhoto().then(displayGalerie);
});

document.querySelector("#prev")?.addEventListener("click", () => {
    prevPhoto().then(displayGalerie);
});

document.querySelector("#first")?.addEventListener("click", () => {
    firstPhoto().then(displayGalerie);
});

document.querySelector("#last")?.addEventListener("click", () => {
    lastPhoto().then(displayGalerie);
});
