import { useEffect, useState } from "react";

export const useImagesLoad = (images) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      setLoadingProgress((loadedImages / images.length) * 100);
    };

    const handleImageError = () => {
      console.error("Error loading image");
    };

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
    });

    // Cleanup
    return () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
        img.onload = null;
        img.onerror = null;
      });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(images)]);

  return { loadingProgress };
};