import { useEffect, useState } from "react";
import { GameRoutes } from "./components/GameRoutes/GameRoutes";
import murals from "./images/murals.png";
import muralsSecond from "./images/murals-second.png";
import barcelona from "./images/barcelona.png";
import berlin from "./images/berlin-wall.png";
import lennon from "./images/lennon-wall.png";
import nyc from "./images/nyc.png";
import peace from "./images/peace.png";
import zabou from "./images/zabou.png";

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  
  useEffect(() => {
    const images = [murals, muralsSecond];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const images = [barcelona, berlin, lennon, nyc, peace, zabou];
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


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcelona, berlin, lennon, nyc, peace, zabou]);

  
  return (
    <div className="app">
      {loadingProgress < 100 ? (
        <div className="loading-container">
          <div
            className="progress-bar"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      ) : (
        <GameRoutes />
      )}
    </div>
  );
}

export default App;
