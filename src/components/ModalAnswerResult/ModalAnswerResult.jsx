// style
import style from "./ModalAnswerResult.module.scss";

export function ModalAnswerResult({
  setCurrentStepEasy,
  setAcceptAnswer,
  isAnswerCurrent,
  setIsAnswerCurrent,
}) {
  console.log(isAnswerCurrent);
  return (
    <div className={style.modalBackdrop}>
      <div className={style.modal}>
        <p className={style.modalText}>
          {isAnswerCurrent
            ? "Fuck your ass!!! You are right"
            : "You are so stupid!!! Try again"}
        </p>
        <div className={style.modalBtnWrapper}>
          {!isAnswerCurrent && (
            <button
              className={style.modalBtn}
              onClick={() => {
                setAcceptAnswer(null);
                setIsAnswerCurrent(null)
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
              setIsAnswerCurrent(null)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
