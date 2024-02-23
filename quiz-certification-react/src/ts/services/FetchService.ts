

export async function fetchData(url = "") {
  // Default options are marked with *
 
  /*
  const texteEncodé = await response.text();
  console.log("response ", response);
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(texteEncodé, 'text/html');
  const texteDecode2 = doc.body.textContent;
  
  console.log("texteencodé ", texteDecode2);
  
  // Décoder les caractères encodés dans le texte brut
  const texteDecode = decodeURIComponent(texteEncodé);
  
  console.log(texteDecode);
  */

return await fetch(url).then(response => response.json());


  }


