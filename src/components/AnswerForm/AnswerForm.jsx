import { MapComponent } from "../MapComponent/MapComponent";
import style from "./AnswerForm.module.scss";

export function AnswerForm({
  handleInputSubmit,
  handleInputChange,
  toggleMap,
  setIsOpenModal,
  clickedPosition,
  setClickedPosition,
}) {
  return (
    <div className={style.answerWrapper}>
      <p style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}>
        Enter the country or find it on the map
      </p>
      <form onSubmit={(e) => handleInputSubmit(e)}>
        <input
          type="text"
          placeholder="Enter country"
          style={{ width: "400px", height: "40px" }}
          onChange={handleInputChange}
        />
        <button>Confirm</button>
      </form>

      <MapComponent
        setIsOpenMap={toggleMap}
        setIsOpenModal={setIsOpenModal}
        clickedPosition={clickedPosition}
        setClickedPosition={setClickedPosition}
      />
    </div>
  );
}
