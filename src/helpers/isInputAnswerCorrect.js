import { initialCoordinatesEasyLevel } from "../levels/easy-level";
import { initialCoordinatesMediumLevel } from "../levels/medium-level";

export function isInputAnswerCorrect(inputAnswer,level) {
  const inputAnswerLowerCase = inputAnswer.toLowerCase();

  const checkTranslations = (translations) => {
    for (const lang in translations) {
      if (translations[lang].toLowerCase() === inputAnswerLowerCase) {
        return true;
      }
    }
    return false;
  };

  const allCoordinates = {
    easy: initialCoordinatesEasyLevel,
    medium: initialCoordinatesMediumLevel,
  }

   for (const coordinate of allCoordinates[level]) {
     console.log(coordinate.country.toLowerCase());
    
      if (
        coordinate.country.toLowerCase() === inputAnswerLowerCase ||
        checkTranslations(coordinate.translations.country)
      ) {
        return true;
      }
    
  }

  return false;
}
