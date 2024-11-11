import style from "./style.module.scss";
import TipDisplay from "./TipDisplay/TipDisplay";
import TipInput from "./TipInput/TipInput";
import TipContextProvider from "../../context/TipContextProvider";
import BillContextProvider from "../../context/BillContextProvider";
import NumPeopleContextProvider from "../../context/NumPeopleContextProvider";

function Calculator() {
  return (
    <div className={style.calculatorContainer}>
      <BillContextProvider>
        <TipContextProvider>
          <NumPeopleContextProvider>
              <TipInput></TipInput>
              <TipDisplay></TipDisplay>
          </NumPeopleContextProvider>
        </TipContextProvider>
      </BillContextProvider>
    </div>
  );
}

export default Calculator;
