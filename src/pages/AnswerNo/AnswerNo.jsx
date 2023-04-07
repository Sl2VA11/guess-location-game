// images
import firstMan from "../../images/first-man.png";
import secondMan from "../../images/second-man.png";
import arrowBack from "../../icons/arrow-left.svg";
// libraries
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
// style
import style from "./AnswerNo.module.scss";

export function AnswerNo() {
  return (
    <div className={style.answerNo}>
      <div className={style.answerNoWrapper}>
        <img
          src={firstMan}
          alt="firstMan"
          className={style.firstMan}
          width={400}
        />

        <h1 className={style.answerNoTitle}>
          <span style={{ color: "#C61600" }}>why</span> are you here?
        </h1>

        <img
          src={secondMan}
          alt="secondMan"
          className={style.secondMan}
          width={386}
        />

        <Link to={"/"}>
          <ReactSVG src={arrowBack} className={style.arrowBack} />
        </Link>
      </div>
    </div>
  );
}
