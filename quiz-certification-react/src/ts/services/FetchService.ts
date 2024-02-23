

export async function fetchData(url = "") {
  return await fetch(url)
    .then(response => response.json())
    .catch(() => console.log("L'url suivante n'a pas répondu: ", url));
}