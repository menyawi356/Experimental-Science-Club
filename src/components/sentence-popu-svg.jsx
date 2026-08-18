import useLanguage from "../hooks/useLanguage.js";
import { useState } from "react";
export default function SVG({ children, page }) {
  const [index, setIndex] = useState(0);
  const [isVisable, setIsVisable] = useState(false);
  const { t } = useLanguage();
  const symbolTextArr = t.symbolKnowledge[page];
  const handleInceaseIndex = () => {
    setIndex((prev) => {
      if (prev === -1 || prev === 7) {
        return 0;
      } else {
        return prev + 1;
      }
    });
    setIsVisable(true);
  };
  return (
    <div className="bg-symbol-stage">
      <div
        className="symbol-3d-container"
        onMouseEnter={handleInceaseIndex}
        onClick={handleInceaseIndex}
        onMouseLeave={() => {
          console.log();
          setIsVisable(false);
        }}
      >
        {children}
      </div>
      <div
        className={`sentence-popup  ${isVisable && "visible"}`}
        data-couter="1/8"
      >
        {symbolTextArr[index]}

        <div
          style={{
            color: "gray",
          }}
        >{`${index + 1}/8`}</div>
      </div>
    </div>
  );
}
