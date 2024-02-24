
/**
 * Fonction générique pour récupérer des données hors de l'application
 * @param url l'url de la requête
 */
export async function fetchData(url = "") {
  return await fetch(url)
    .then(response => response.json())
    .catch(() => console.log("L'url suivante n'a pas répondu: ", url));
}