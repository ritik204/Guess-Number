import { useEffect, useState } from 'react';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Fonts are loaded automatically through react-native-asset
    // Just need to verify they exist
    setFontsLoaded(true);
  }, []);

  return fontsLoaded;

};