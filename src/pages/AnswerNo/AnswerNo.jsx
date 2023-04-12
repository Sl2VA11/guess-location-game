// images
import firstMan from "../../images/first-man.png";
import secondMan from "../../images/second-man.png";
import arrowBack from "../../icons/arrow-left.svg";
// libraries
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
// style
import style from "./AnswerNo.module.scss";
import { useTranslation } from "react-i18next";

export function AnswerNo() {
   const { t, i18n } = useTranslation();
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
          <span
            dangerouslySetInnerHTML={{ __html: t("wrong-answer-page.title") }}
          ></span>
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
