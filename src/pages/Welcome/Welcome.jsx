//components
import { StartedAnimation } from "../../components/StartedAnimation/StartedAnimation";
//hooks
import { useStartedAnimation } from "../../hooks/useStartedAnimation";
import { useImagesLoad } from "../../hooks/useImagesLoad";
// images
import muralsSecond from "../../images/murals-second.png";
import murals from "../../images/murals.png";
import firstMan from "../../images/first-man.png";
import secondMan from "../../images/second-man.png";

// libraries
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//style
import style from "./Welcome.module.scss";


export function Welcome() {
  const { isAnimation, isVisibleTitle } = useStartedAnimation();
  const images = [murals, muralsSecond, firstMan, secondMan];
useImagesLoad(images);


  return (
    <div className={style.welcome}>
      {isAnimation && <StartedAnimation />}

      {isVisibleTitle && (
        <div className={style.welcomeWrapper}>
          <motion.h1
            className={style.welcomeTitle}
            initial={{ opacity: 0, transition: { duration: 1 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            Can you guess?
          </motion.h1>
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
            <Link to={"/home"}>
              <button className={`${style.welcomeBtn} ${style.welcomeYesBtn}`}>
                Yes
              </button>
            </Link>

            <Link to={"/wrong-answer"}>
              <button className={`${style.welcomeBtn} ${style.welcomeNoBtn}`}>
                No
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
