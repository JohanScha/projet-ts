console.log("gallery.ts chargé");

import { loadResource } from "./photoloader";

const uri = "/www/canals5/phox/api/photos";
let currentGallery: any = null;

export function load(url : string = uri): Promise<any> {
  return loadResource(url).then((gallery: any) => {
    currentGallery = gallery;
    return gallery;
  });
}

// next
export function nextPhoto(): Promise<any> {
  return load(currentGallery.links.next.href); // On utilise le json chargé avec initGallery
}
// prev
export function prevPhoto(): Promise<any> {
  return load(currentGallery.links.prev.href); // On utilise le json chargé avec initGallery
}

// first
export function firstPhoto(): Promise<any> {
  return load(currentGallery.links.first.href); // On utilise le json chargé avec initGallery
}
// last
export function lastPhoto(): Promise<any> {
  return load(currentGallery.links.last.href); // On utilise le json chargé avec initGallery
}
