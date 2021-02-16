export const getGifs = async (busqueda) => {
  const endPoint = "https://api.giphy.com/v1/gifs/search";
  const apiKey = "DET1T7j31AYCMsDjXqrlghFX400Ee2OA";
  const limit = "10";
  let url = `${endPoint}?api_key=${apiKey}&limit=${limit}&q=${busqueda}`;
  let respuesta = await fetch(url);
  let { data } = await respuesta.json();
  console.log(data);
  const gifs = data.map((gif) => {
    return {
      id: gif?.id,
      title: gif?.title,
      url: gif?.images.downsized_medium.url,
    };
  });
  return gifs;
};
