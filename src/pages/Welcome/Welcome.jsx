//components
import { StartedAnimation } from "../../components/StartedAnimation/StartedAnimation";
import { LangMenu } from "../../components/LangMenu/LangMenu";
//hooks
import { useStartedAnimation } from "../../hooks/useStartedAnimation";
import { useImagesLoad } from "../../hooks/useImagesLoad";
// images
import muralsSecond from "../../images/murals-second.png";
import murals from "../../images/murals.png";
import firstMan from "../../images/first-man.png";
import secondMan from "../../images/second-man.png";
import arrowDown from "../../icons/arrow-down.svg";
// libraries
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
//style
import style from "./Welcome.module.scss";

export function Welcome() {
  const { isAnimation, isVisibleTitle } = useStartedAnimation();
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const images = [murals, muralsSecond, firstMan, secondMan];
  useImagesLoad(images);

  const changeLanguage = (lng) => {
    if (!lng) {
      return;
    }

    setIsOpenLangMenu(false);
    i18next.changeLanguage(lng);
  };

  useEffect(() => {
    if (i18n.language === "ukr") {
      document.body.classList.add("ukrainian");
    } else {
      document.body.classList.remove("ukrainian");
    }
  }, [i18n.language]);

  return (
    <div className={style.welcome}>
      {isAnimation && <StartedAnimation />}

      {isVisibleTitle && (
        <motion.div
          className={style.welcomeWrapper}
          initial={{ opacity: 0, transition: { duration: 1 } }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <div className={style.openLangMenuWrapper}>
            <div
              className={style.openLangWrapper}
              onClick={() => setIsOpenLangMenu((prev) => !prev)}
            >
              <p className={style.currentLang}>{t("welcome-page.lang")}</p>
              <ReactSVG
                src={arrowDown}
                className={` ${isOpenLangMenu ? style.arrowLangMenuUp : ""}`}
              />
            </div>

            {isOpenLangMenu && (
              <LangMenu
                changeLanguage={changeLanguage}
                currentLang={t("welcome-page.lang")}
              />
            )}
          </div>
          <h1 className={style.welcomeTitle}>{t("welcome-page.title")}</h1>

          <motion.div
            className={style.welcomeBtnWrapper}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -40 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
          >
            <Link to={"/home"} style={{ marginRight: "100px" }}>
              <button className={`${style.welcomeBtn} ${style.welcomeYesBtn}`}>
                {t("welcome-page.yes-btn")}
              </button>
            </Link>

            <Link to={"/wrong-answer"}>
              <button className={`${style.welcomeBtn} ${style.welcomeNoBtn}`}>
                {t("welcome-page.no-btn")}
              </button>
            </Link>
          </motion.div>

          <div className={style.createdByWrapper}>
            <Link to={"/created-by"}>
              <p className={style.createdByText}>
                {t("welcome-page.created-by")}
              </p>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
