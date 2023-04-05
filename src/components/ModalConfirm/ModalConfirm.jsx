import style from "./ModalConfirm.module.scss";

export function ModalConfirm({ setIsOpenModal, setIsOpenMap, setAcceptAnswer }) {
  return (
    <div className={style.modalBackdrop}>
      <div className={style.modal}>
        <p className={style.modalText}>Are you sure?</p>
        <div className={style.modalBtnWrapper}>
          <button
            className={style.modalBtn}
            onClick={() => {
              setIsOpenModal(false);
              setIsOpenMap(false);
              setAcceptAnswer(true);
            }}
          >
            Yes
          </button>
          <button
            className={style.modalBtn}
            onClick={() => {
              setIsOpenModal(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
