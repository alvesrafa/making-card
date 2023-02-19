import Card from "@/components/Card";
import { ConfigMenu } from "@/components/ConfigMenu";
import { useCard } from "@/contexts/Card";

export function Main() {
  const {
    width,
    height,
    bRadius,
    shadowPosition,
    shadowColor,
    shadowBlur,
    shadowSpread,
    border,
    borderColor,
  } = useCard();

  return (
    <div id="App">
      <ConfigMenu />
      <main>
        <Card />
        <code>
          <pre>
            background-color: #FFF; <br />
            width: {width}px;
            <br />
            height: {height}px;
            <br />
            padding: 10px 0;
            <br />
            border: {border}px solid{" "}
            {borderColor?.rgba ? borderColor?.rgba : "#DDD"};<br />
            border-radius: {bRadius}px;
            <br />
            box-shadow: {shadowPosition}px {shadowPosition}px {shadowBlur}px{" "}
            {shadowSpread}px {shadowColor?.rgba ? shadowColor?.rgba : "#DDD"};
            <br />
          </pre>
        </code>
      </main>
    </div>
  );
}
