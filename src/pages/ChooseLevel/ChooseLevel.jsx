import style from "./ChooseLevel.module.scss";
import backIcon from "../../icons/arrow-left.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";

import { CustomSlider } from "../../components/CustomSlider/CustomSlider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { levels } from "../../levels/levels";
import { useTranslation } from "react-i18next";

export function ChooseLevel({ setCurrentCitiesQuantity }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const { t } = useTranslation();

  const handleSliderValueSubmit = (value) => {
    setCurrentCitiesQuantity(value);
  };
  return (
    <div className={style.chooseLevel}>
      <header className={style.chooseLevelHeader}>
        <Link to={"/home"}>
          <ReactSVG src={backIcon} className={style.chooseLevelBackIcon} />
        </Link>
      </header>
      <main className={style.chooseLevelMain}>
        <h1 className={style.chooseLevelTitle}>
          <span
            dangerouslySetInnerHTML={{ __html: t("choose-level-page.title") }}
          ></span>
        </h1>
        <ul className={style.chooseLevelList}>
          {levels.map(({ name, link, minValue, maxValue }, index) => {
            return (
              <motion.div
                className={style.chooseLevelItemWrapper}
                key={name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <li
                  className={style.chooseLevelItem}
                  onClick={() => {
                    setSelectedLevel((prev) => (prev === name ? null : name));
                    setSliderValue(0);
                  }}
                >
                  <p className={style.chooseLevelName}>
                    {t(`choose-level-page.${name.toLowerCase()}-level`)}
                  </p>
                </li>

                {selectedLevel === name && (
                  <>
                    <p className={style.chooseLevelText}>
                      {" "}
                      {t("choose-level-page.location-numbers-text")}
                    </p>
                    <motion.div
                      className={style.sliderWrapper}
                      initial={{ opacity: 0, transition: { duration: 1 } }}
                      animate={{ opacity: 1, transition: { duration: 1 } }}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <CustomSlider
                        minValue={minValue}
                        maxValue={maxValue}
                        sliderValue={sliderValue}
                        setSliderValue={setSliderValue}
                      />
                      <div className={style.sliderValue}>
                        <span style={{ color: "#C61600" }}>{sliderValue}</span>/
                        {maxValue}
                      </div>

                      <Link
                        to={sliderValue !== 0 ? link : ""}
                        className={style.btnWrapper}
                      >
                        <button
                          className={style.confirmBtn}
                          disabled={sliderValue === 0}
                          onClick={() => handleSliderValueSubmit(sliderValue)}
                        >
                          {t("choose-level-page.confirm-btn")}
                        </button>
                      </Link>
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
