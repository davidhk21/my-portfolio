import { useContext, useState, useEffect, createContext } from 'react';

export const ScreenWidthContext = createContext(null);

const useScreenWidthContext = () => {
  const screenWidth = useContext(ScreenWidthContext);

  return screenWidth;
};

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return screenWidth;
};

export default useScreenWidthContext;
