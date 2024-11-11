import { createContext, useContext, useState } from "react";

const numPeopleContext = createContext(null);
const setNumPeopleContext = createContext(null);

export function getNumPeople() {
  return useContext(numPeopleContext);
}

export function getSetNumPeople() {
  return useContext(setNumPeopleContext);
}

function NumPeopleContextProvider({ children }) {
  const [numPeople, setNumPeople] = useState("");

  return (
    <setNumPeopleContext.Provider value={(value) => setNumPeople(value)}>
      <numPeopleContext.Provider value={numPeople}>
        {children}
      </numPeopleContext.Provider>
    </setNumPeopleContext.Provider>
  );
}

export default NumPeopleContextProvider;
