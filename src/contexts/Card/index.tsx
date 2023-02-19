import { createContext, ReactNode, useContext, useState } from "react";
import { CardContextData, ColorValue } from "./type";

const CardContext = createContext({} as CardContextData);

const useCard = () => useContext(CardContext);

interface Props {
  children: ReactNode;
}

function CardProvider({ children }: Props) {
  const [width, setWidth] = useState<string | number>(250);
  const [height, setHeight] = useState<string | number>("auto");
  const [bRadius, setBRadius] = useState<string | number>(4);
  const [shadowPosition, setShadowPosition] = useState<string | number>(3);
  const [shadowColor, setShadowColor] = useState<ColorValue>({
    rgba: "#DDD",
  });
  const [shadowBlur, setShadowBlur] = useState<string | number>(4);
  const [shadowSpread, setShadowSpread] = useState<string | number>(1);
  const [border, setBorder] = useState<string | number>(0);
  const [borderColor, setBorderColor] = useState<ColorValue>({
    rgba: "#DDD",
  });

  return (
    <CardContext.Provider
      value={{
        width,
        setWidth,
        height,
        setHeight,
        bRadius,
        setBRadius,
        shadowPosition,
        setShadowPosition,
        shadowColor,
        setShadowColor,
        shadowBlur,
        setShadowBlur,
        shadowSpread,
        setShadowSpread,
        border,
        setBorder,
        borderColor,
        setBorderColor,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardProvider, useCard };
