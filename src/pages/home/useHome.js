import { useState } from 'react';

export const useHome = () => {
  const [showWomenFashion, setShowWomenFashion] = useState(false);
  const [showMenFashion, setShowMenFashion] = useState(false);

  const handleWomenFashionClick = () => {
    setShowWomenFashion(!showWomenFashion);
  }

  const handleMenFashionClick = () => {
    setShowMenFashion(!showMenFashion);
  }

  return { showWomenFashion, showMenFashion, handleWomenFashionClick, handleMenFashionClick };
}
