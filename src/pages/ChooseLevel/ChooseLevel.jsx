import style from "./ChooseLevel.module.scss";
import backIcon from "../../icons/arrow-left.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";

import { CustomSlider } from "../../components/CustomSlider/CustomSlider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { levels } from "../../levels/levels";

export function ChooseLevel({ setCurrentCitiesQuantity }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);

   const handleSliderValueSubmit = (value) => {
      setCurrentCitiesQuantity(value);
   }
  return (
    <div className={style.chooseLevel}>
      <header className={style.chooseLevelHeader}>
        <Link to={"/home"}>
          <ReactSVG src={backIcon} className={style.chooseLevelBackIcon} />
        </Link>
      </header>
      <main className={style.chooseLevelMain}>
        <h1 className={style.chooseLevelTitle}>
          C<span style={{ color: "rgba(198, 22, 0, 1)" }}>h</span>oose a level
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
                  <div className={style.chooseLevelNameWrapper}>
                    <p className={style.chooseLevelName}>{name} level</p>
                  </div>
                </li>

                {selectedLevel === name && (
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

                    <Link to={link} className={style.btnWrapper}>
                      <button
                        className={style.confirmBtn}
                        disabled={sliderValue === 0}
                        onClick={() => handleSliderValueSubmit(sliderValue)}
                      >
                        confirm
                      </button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
