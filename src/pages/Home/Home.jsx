// images
import muralsSecond from "../../images/murals-second.png";
import arrowBack from "../../icons/arrow-left.svg";
import emblem from "../../icons/emblem.svg";
import murals from "../../images/murals.png";
import email from "../../icons/email.svg";
// libraries
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

// style
import style from "./Home.module.scss";
export function Home() {

  

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
          className={`${style.homeHeroSecondImg}`}
        />
      </div>

      <main className={style.main}>
        <div className={style.mainLinkWrapper}>
          <span className={style.mainLinkName}>Play</span>
          <span className={style.mainLinkName}>Rules</span>
        </div>
      </main>

      <footer className={style.homeFooter}>
        <div className={style.footerLinkWrapper}>
          <a href="/">
            <ReactSVG src={email} />
          </a>

          <a
            href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly"
            className={style.supportWrapper}
          >
            <ReactSVG src={emblem} />
            <p className={style.supportText}>support ukraine</p>
          </a>
        </div>
      </footer>
    </motion.div>
  );
}
