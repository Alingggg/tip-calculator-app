import style from "./style.module.scss";
import Amount from "./Amount/Amount";
import Total from "./Total/Total";
import ResetButton from "./ResetButton/ResetButton";
import { getBillValue } from "../../../context/BillContextProvider";
import { getTipValue } from "../../../context/TipContextProvider";
import { getNumPeople } from "../../../context/NumPeopleContextProvider";

function TipDisplay() {
  const bill = getBillValue();
  const tip = getTipValue();
  const numPeople = getNumPeople();

  const totalTip = numPeople > 0 ? (tip > 0 ? tip : bill * -tip) : 0;
  const totalBill = numPeople > 0 ? (bill + totalTip) : 0;

  const tipPerPerson = Math.round((totalTip / numPeople) * 100) / 100;
  const billPerPerson = Math.round((totalBill / numPeople) * 100) / 100;

  return (
    <div className={style.displayContainer}>
      <div className={style.innerContainer}>
        <Amount tipPerPerson={tipPerPerson}></Amount>
        <Total billPerPerson={billPerPerson}></Total>
        <ResetButton></ResetButton>
      </div>
    </div>
  );
}

export default TipDisplay;
