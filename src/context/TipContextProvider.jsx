import { createContext, useContext, useState } from "react";

const tipContext = createContext(null);
const setTipContext = createContext(null);

export function getTipValue() {
  return useContext(tipContext);
}

export function getSetTip() {
  return useContext(setTipContext);
}

function TipContextProvider({ children }) {
  const [tipValue, setTipValue] = useState("");

  return (
    <setTipContext.Provider value={(value) => setTipValue(value)}>
      <tipContext.Provider value={tipValue}>{children}</tipContext.Provider>
    </setTipContext.Provider>
  );
}

export default TipContextProvider;
