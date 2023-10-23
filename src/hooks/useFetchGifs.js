import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImage(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
