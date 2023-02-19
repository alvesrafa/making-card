import { useCard } from "@/contexts/Card";
import { CardStyle } from "./style";

export default function Card() {
  const {
    width,
    height,
    borderColor,
    shadowPosition,
    bRadius,
    border,
    shadowBlur,
    shadowSpread,
    shadowColor,
  } = useCard();

  return (
    <CardStyle
      width={width}
      height={height}
      bRadius={bRadius}
      shadow={`${shadowPosition}px ${shadowPosition}px ${shadowBlur}px ${shadowSpread}px ${
        shadowColor?.rgba ? shadowColor?.rgba : "#DDD"
      }`}
      border={`${border}px solid ${
        borderColor?.rgba ? borderColor?.rgba : "#DDD"
      }`}
    >
      <div className="card-header">CARD TITLE</div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit!
      </div>
      <div className="card-footer">CARD FOOTER</div>
    </CardStyle>
  );
}
