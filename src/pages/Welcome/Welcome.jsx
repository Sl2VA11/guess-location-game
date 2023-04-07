import { Link } from "react-router-dom";
import style from "./Welcome.module.scss";
import { motion } from "framer-motion";
import { StartedAnimation } from "../../components/StartedAnimation/StartedAnimation";
import { useStartedAnimation } from "../../hooks/useStartedAnimation";

export function Welcome() {
  const { isAnimation, isVisibleTitle } = useStartedAnimation();

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
