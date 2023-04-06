import { Link } from "react-router-dom";
import style from "./Welcome.module.scss";
import barcelona from "../../images/barcelona.png";
import berlin from "../../images/berlin-wall.png";
import lennon from "../../images/lennon-wall.png";
import nyc from "../../images/nyc.png";
import peace from "../../images/peace.png";
import zabou from "../../images/zabou.png";
import { useEffect, useState } from "react";

export function Welcome() {
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
     const animationTimeout= setTimeout(() => setIsAnimation(false), 3000);
     
     return () => clearTimeout(animationTimeout)
  }, []);

  console.log(isAnimation);
  return (
    <div className={style.welcome}>
      <div className={style.animationWrapper} style={{display: !isAnimation && 'none'}}>
        <div className={style.animationWrapperTop}>
          <img src={nyc} alt="nyc" width={590} className={style.photoFirst} />
          <img
            src={lennon}
            alt="lennon"
            width={540}
            className={style.photoSecond}
          />
          <img
            src={peace}
            alt="peace"
            width={650}
            className={style.photoThird}
          />
        </div>
        <div className={style.animationWrapperBottom}>
          <img
            src={zabou}
            alt="zabou"
            width={503}
            className={style.photoBottomFirst}
          />
          <img
            src={barcelona}
            alt="barcelona"
            width={500}
            className={style.photoBottomSecond}
          />
          <img
            src={berlin}
            alt="berlin"
            width={615}
            className={style.photoBottomThird}
          />
        </div>
      </div>

      {!isAnimation && (
        <div className={style.welcomeWrapper}>
          <h1 className={style.welcomeTitle}>Can you guess?</h1>
          <div className={style.welcomeBtnWrapper}>
            <Link to={"/home"}>
            <button className={style.welcomeBtn}>Yes</button>
            </Link>
            {/* <Link to={"/game/medium"}> */}
            <button className={style.welcomeBtn}>No</button>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}
