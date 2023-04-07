//style
import style from "./StartedAnimation.module.scss"
//images
import barcelona from "../../images/barcelona.png";
import berlin from "../../images/berlin-wall.png";
import lennon from "../../images/lennon-wall.png";
import nyc from "../../images/nyc.png";
import peace from "../../images/peace.png";
import zabou from "../../images/zabou.png";

export function StartedAnimation() {
  return (
    <div className={style.animationWrapper}>
      <div className={style.animationWrapperTop}>
        <img src={nyc} alt="nyc" width={590} className={style.photoFirst} />
        <img
          src={lennon}
          alt="lennon"
          width={540}
          className={style.photoSecond}
        />
        <img src={peace} alt="peace" width={650} className={style.photoThird} />
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
  );
}
