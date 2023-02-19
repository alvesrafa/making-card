export type ColorValue = {
  rgba: string;
};
export interface CardContextData {
  width: string | number;
  setWidth: (value: string | number) => void;
  height: string | number;
  setHeight: (value: string | number) => void;
  bRadius: string | number;
  setBRadius: (value: string | number) => void;
  shadowPosition: string | number;
  setShadowPosition: (value: string | number) => void;
  shadowColor: ColorValue;
  setShadowColor: (value: ColorValue) => void;
  shadowBlur: string | number;
  setShadowBlur: (value: string | number) => void;
  shadowSpread: string | number;
  setShadowSpread: (value: string | number) => void;
  border: string | number;
  setBorder: (value: string | number) => void;
  borderColor: ColorValue;
  setBorderColor: (value: ColorValue) => void;
}
