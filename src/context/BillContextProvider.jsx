import { createContext, useContext, useState } from "react";

const billContext = createContext(null);
const setBillContext = createContext(null);

export function getBillValue() {
  return useContext(billContext);
}

export function getSetBill() {
  return useContext(setBillContext);
}

function BillContextProvider({ children }) {
  const [billValue, setBillValue] = useState("");

  return (
    <setBillContext.Provider value={(value) => setBillValue(value)}>
      <billContext.Provider value={billValue}>{children}</billContext.Provider>
    </setBillContext.Provider>
  );
}

export default BillContextProvider;
