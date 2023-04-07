import { useEffect, useState } from "react";

export const useStartedAnimation = () => {
  const animationPlayed = sessionStorage.getItem("animationPlayed");
  const [isAnimation, setIsAnimation] = useState(null);
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);

  useEffect(() => {
    if (animationPlayed) {
      setIsVisibleTitle(true);
      setIsAnimation(false);

      return;
    }


    setIsAnimation(true);

    const visibleTitleTimeout = setTimeout(() => setIsVisibleTitle(true), 2500);
    const animationTimeout = setTimeout(() => {
      setIsAnimation(false);
      sessionStorage.setItem("animationPlayed", true);
    }, 3000);

    
    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("animationPlayed");
    });

    return () => {
      clearTimeout(visibleTitleTimeout);
      clearTimeout(animationTimeout);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAnimation, isVisibleTitle };
};
