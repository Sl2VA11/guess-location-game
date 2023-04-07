// images
import muralsSecond from "../../images/murals-second.png";
import arrowBack from "../../icons/arrow-left.svg";
import murals from "../../images/murals.png";
// libraries
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useEffect } from "react";
// style
import style from "./Home.module.scss";
export function Home() {

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 1 },
    }));
  }, [controls]);

  return (
    <motion.div
      className={style.home}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <header className={style.homeHeader}>
        <nav className={style.homeHeaderNav}>
          <Link to={"/"}>
            <ReactSVG src={arrowBack} />
          </Link>
          <Link to={"/"} className={style.homeHeaderNameWrapper}>
            <span className={style.homeHeaderName}>
              Can <span style={{ color: "rgba(198, 22, 0, 1)" }}>you</span>{" "}
              guess?
            </span>
          </Link>
          <div className={style.homeHeaderLinkWrapper}>
            <span className={style.homeHeaderLink}>log in</span>
            <span className={style.homeHeaderLink}>sign up</span>
          </div>
        </nav>
      </header>

      <div className={style.homeHero}>
        <img src={murals} alt="murals" className={style.homeHeroImg} />

        <img
          src={muralsSecond}
          alt="muralsSecond"
          className={`${style.homeHeroImg} ${style.homeHeroSecondImg}`}
        />
      </div>

      <main>
        <nav className={style.homeMainNav}>
          <Link to={"/game/easy"} className={style.toLevel}>
            <motion.span
              className={style.levelName}
              initial={{ opacity: 0, y: -20 }}
              custom={0}
              animate={controls}
            >
              easy level
            </motion.span>
          </Link>

          <Link to={"/game/medium"} className={style.toLevel}>
            <motion.span
              className={style.levelName}
              initial={{ opacity: 0, y: -20 }}
              custom={1}
              animate={controls}
            >
              medium level
            </motion.span>
          </Link>

          <Link to={"/game/professional"} className={style.toLevel}>
            <motion.span
              className={style.levelName}
              initial={{ opacity: 0, y: -20 }}
              custom={2}
              animate={controls}
            >
              professional level
            </motion.span>
          </Link>
        </nav>
      </main>
    </motion.div>
  );
}
