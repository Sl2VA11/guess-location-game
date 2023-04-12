import { langMenu } from "../../helpers/langMenu";
import style from "./LangMenu.module.scss";

export function LangMenu({ changeLanguage, currentLang }) {
  return (
    <div className={style.langMenu}>
      {langMenu.map(({ name, value, secondName }) => {
        if (currentLang === secondName) {
          return null;
        }

        return (
          <p
            className={style.lang}
            key={value}
            onClick={() => {
              changeLanguage(value);
            }}
          >
            {name}
          </p>
        );
      })}
    </div>
  );
}
