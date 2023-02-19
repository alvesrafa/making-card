import { useCard } from "@/contexts/Card";
import InputColor from "react-input-color";
import { ConfigMenuWrapper } from "./style";
import "./style.ts";

export function ConfigMenu() {
  const {
    width,
    setWidth,
    height,
    bRadius,
    border,
    setBRadius,
    setBorder,
    setBorderColor,
    setHeight,
    setShadowBlur,
    setShadowColor,
    setShadowPosition,
    setShadowSpread,
    shadowBlur,
    shadowPosition,
    shadowSpread,
  } = useCard();

  return (
    <ConfigMenuWrapper>
      <div className="title">
        <h1>
          Make your CSS card <i data-feather="circle"></i>
        </h1>
      </div>
      <div className="props">
        <div className="prop">
          <div className="input-block">
            <label>Width</label>
            <input
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Heigth</label>
            <input
              type="text"
              id="heigth"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="prop">
          <div className="input-block">
            <label>Border radius {bRadius}px</label>
            <input
              type="range"
              min="0"
              max="100"
              value={bRadius}
              onChange={(e) => setBRadius(e.target.value)}
            />
          </div>
        </div>
        <div className="prop">
          <div className="input-block">
            <label>Shadow position {shadowPosition}px</label>
            <input
              type="range"
              min="0"
              max="45"
              value={shadowPosition}
              onChange={(e) => setShadowPosition(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Color</label>
            <InputColor initialValue="#aaa" onChange={setShadowColor} />
          </div>
        </div>
        <div className="prop">
          <div className="input-block">
            <label>Shadow blur {shadowBlur}px</label>
            <input
              type="range"
              min="0"
              max="75"
              value={shadowBlur}
              onChange={(e) => setShadowBlur(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Shadow spread {shadowSpread}px</label>
            <input
              type="range"
              min="0"
              max="60"
              value={shadowSpread}
              onChange={(e) => setShadowSpread(e.target.value)}
            />
          </div>
        </div>
        <div className="prop">
          <div className="input-block">
            <label>Border {border}px</label>
            <input
              type="range"
              min="0"
              max="10"
              value={border}
              onChange={(e) => setBorder(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label>Color</label>
            <InputColor initialValue="#000" onChange={setBorderColor} />
          </div>
        </div>
      </div>
    </ConfigMenuWrapper>
  );
}
