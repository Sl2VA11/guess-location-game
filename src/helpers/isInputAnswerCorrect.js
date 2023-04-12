import { initialCoordinatesEasyLevel } from "../levels/easy-level";
import { initialCoordinatesMediumLevel } from "../levels/medium-level";

export function isAnswerCorrect(inputAnswer) {
  const inputAnswerLowerCase = inputAnswer.toLowerCase();

  const checkTranslations = (translations) => {
    for (const lang in translations) {
      if (translations[lang].toLowerCase() === inputAnswerLowerCase) {
        return true;
      }
    }
    return false;
  };

  const allCoordinates = [
    ...initialCoordinatesEasyLevel,
    ...initialCoordinatesMediumLevel,
  ];

  for (const coordinate of allCoordinates) {
    if (
      coordinate.country.toLowerCase() === inputAnswerLowerCase ||
      checkTranslations(coordinate.translations.country)
    ) {
      return true;
    }
  }

  return false;
}
