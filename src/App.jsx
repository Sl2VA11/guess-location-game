//components
import { GameRoutes } from "./components/GameRoutes/GameRoutes";
//hooks
import { useImagesLoad } from "./hooks/useImagesLoad";
// images
import barcelona from "./images/barcelona.png";
import berlin from "./images/berlin-wall.png";
import lennon from "./images/lennon-wall.png";
import nyc from "./images/nyc.png";
import peace from "./images/peace.png";
import zabou from "./images/zabou.png";

function App() {
  const images = [barcelona, berlin, lennon, nyc, peace, zabou];

  const { loadingProgress } = useImagesLoad(images);


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
