console.log("Fichier photoloader chargé");
import { API_URL } from "./config";

export function loadPicture(idPicture: number): Promise<any> {
  return fetch(`${API_URL}/photos/${idPicture}`, {
    credentials: "include"
  })
    .then((response: Response) => response.json())
    .catch((error: unknown) => {
      console.log(error);
      throw error;
    });
}

// LoadRessource(uri)
export function loadResource(uri: string): Promise<any> {
  return fetch("https://webetu.iutnc.univ-lorraine.fr" + uri, {
    credentials: "include"
  }).then((response) => response.json())
  .catch((error: unknown) => {
    console.log(error);
    throw error;
  });
}
