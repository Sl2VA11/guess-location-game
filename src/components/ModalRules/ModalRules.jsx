import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ModalRules.module.scss";

export function ModalRules() {
  const [isClickBack, setIsClickBack] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isClickBack) {
      return;
    }

    navigate("/home");
  }, [isClickBack, navigate]);
  const handleBackdropClick = () => {
    console.log("parent click");
    setIsClickBack(true);
  };

  const handleModalClick = (e) => {
    console.log("child click");
    e.stopPropagation();
  };

  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal} onClick={handleModalClick}>
        <p className={style.rules}>
          Title: Can You Guess? Goal: The goal of the game is to accurately
          guess the country based on a provided location. Players will progress
          through three levels of difficulty: easy, medium, and professional.
          Input: Upon selecting a level, the player chooses the number of
          countries to guess. After confirming the selection by pressing the
          "Confirm" button, the player proceeds to the game, where it is no
          longer possible to change the number of countries. Gameplay: At the
          beginning of the game, the player is presented with a map view. The
          difficulty of identifying the location depends on the chosen
          difficulty level. The player has two options for guessing the country:
          a. Type the name of the country in the input box and confirm the
          choice by clicking the "Confirm" button. b. Locate the country on the
          map and click on it. After the player attempts to guess the country,
          the game will display whether the choice is correct or not: If guessed
          correctly, the player will be prompted to move to the next location.
          If incorrect, the player can choose to either proceed to the next
          location or try again with the current location. Upon completing each
          level, the player can review the guessed and unguessed locations,
          along with their correct names. The player can then decide whether to
          advance to the next level or replay the current level. Note: Players
          are not limited in the number of attempts they can make for each
          level. They can try as many times as they want until they feel
          confident enough to move on to the next level.
        </p>
      </div>
    </div>
  );
}
