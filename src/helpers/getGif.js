export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=imW4uMCv4cUnbMNedj0SSJqY4PpJtM6h&q=${category}&limit=5`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
