import style from "./style.module.scss";
import { getSetTip, getTipValue } from "../../../../context/TipContextProvider";
import { useState } from "react";

const tip_options = [-0.05, -0.1, -0.15, -0.25, -0.5];

export default function SelectTip() {
  const [highlightedValidity, setHighlightedValidity] = useState(true);
  const [customValue, setCustomValue] = useState("");

  return (
    <div>
      <label htmlFor="tipOption">Select Tip %</label>
      <div className={style.tipOptionContainer}>
        {tip_options.map((item, index) => {
          return (
            <TipOptionContainer
              key={index}
              item={item}
              highlightedValidity={highlightedValidity}
              setHighlightedValidity={setHighlightedValidity}
              setCustomValue={setCustomValue}
            >
              {`${item * -100}%`}
            </TipOptionContainer>
          );
        })}
        <TipCustomContainer
          setHighlightedValidity={(False) => setHighlightedValidity(False)}
          customValue={customValue}
          setCustomValue={(value) => setCustomValue(value)}
        ></TipCustomContainer>
      </div>
    </div>
  );
}

function TipOptionContainer({
  children,
  item,
  highlightedValidity,
  setHighlightedValidity,
  setCustomValue,
}) {
  const tipValue = getTipValue();
  const setTip = getSetTip();
  let highlighted = item === tipValue && highlightedValidity;

  return (
    <input
      className={`${style.option} ${
        highlighted ? style.highlightedButton : ""
      }`}
      type="button"
      id="tipOption"
      name="tipOption"
      value={children}
      onClick={() => {
        setTip(item);
        setHighlightedValidity(true);
        setCustomValue("");
      }}
    ></input>
  );
}

function TipCustomContainer({ setHighlightedValidity, setCustomValue }) {
  const tip = getTipValue();
  const setTip = getSetTip();

  return (
    <div>
      <input
        className={style.custom}
        type="number"
        min={1}
        id="tipOption"
        name="tipOption"
        placeholder="Custom"
        value={tip >= 0 ? tip : ""}
        onFocus={(e) => {
          const currentValue = parseFloat(e.target.value);
          if (isNaN(currentValue) || currentValue < 0) {
            setCustomValue("");
            setTip("");
          } else {
            setCustomValue(currentValue);
            setTip(currentValue);
          }
          setHighlightedValidity(false);
        }}
        onChange={(e) => {
          const currentValue = parseFloat(e.target.value);
          if (isNaN(currentValue) || currentValue < 0) {
            setCustomValue("");
            setTip("");
          } else {
            setCustomValue(currentValue);
            setTip(currentValue);
          }
        }}
      />
    </div>
  );
}
