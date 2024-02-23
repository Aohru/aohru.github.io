

export async function fetchData(url = "") {
  // Default options are marked with *
  const response = await fetch(url,
  )
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const decoder = new TextDecoder("iso-8859-1");
      const text = decoder.decode(buffer);
      return JSON.parse(text);
    });
  return response; // parses JSON response into native JavaScript objects
}
