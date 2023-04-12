// style
import style from "./ModalAnswerResult.module.scss";

export function ModalAnswerResult({
  setCurrentStepEasy,
  setAcceptAnswer,
  isAnswerCurrent,
  setIsAnswerCurrent,
  isInputAnswerCorrect,
  setIsInputAnswerCorrect,
  setClickedPosition,
}) {
  return (
    <div className={style.modalBackdrop}>
      <div className={style.modal}>
        <p className={style.modalText}>
          {isAnswerCurrent || isInputAnswerCorrect
            ? "Fuck your ass!!! You are right"
            : "You are so stupid!!! Try again"}
        </p>
        <div className={style.modalBtnWrapper}>
          {!isAnswerCurrent && !isInputAnswerCorrect && (
            <button
              className={style.modalBtn}
              onClick={() => {
                setAcceptAnswer(null);
                setIsAnswerCurrent(null);
                setIsInputAnswerCorrect(null);
                setClickedPosition(null)
              }}
            >
              Try again
            </button>
          )}
          <button
            className={style.modalBtn}
            onClick={() => {
              setCurrentStepEasy((prev) => prev + 1);
              setAcceptAnswer(null);
              setIsAnswerCurrent(null);
              setIsInputAnswerCorrect(null);
              setClickedPosition(null)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
