import style from "./style.module.scss";
import { getBillValue, getSetBill } from "../../../../context/BillContextProvider";
import { getTipValue, getSetTip } from "../../../../context/TipContextProvider";
import { getNumPeople, getSetNumPeople } from "../../../../context/NumPeopleContextProvider";

function ResetButton() {
  const bill = getBillValue();
  const tip = getTipValue();
  const numPeople = getNumPeople();
  const setBill = getSetBill();
  const setTip = getSetTip();
  const setNumPeople = getSetNumPeople();

  function handleButtonClick() {
    setBill("");
    setTip("");
    setNumPeople("");
  }

  return (
    <button className={style.button} onClick={handleButtonClick} disabled={bill === "" && tip === "" && numPeople === ""}>
      RESET
    </button>
  );
}

export default ResetButton;
