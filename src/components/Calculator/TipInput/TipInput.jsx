import style from "./style.module.scss";
import BillAmount from "./BillAmount/BillAmount";
import SelectTip from "./SelectTip/SelectTip";
import NumOfPeople from "./NumOfPeople/NumOfPeople";

function TipInput() {
  return (
    <div className={style.inputContainer}>
      <BillAmount></BillAmount>
      <SelectTip></SelectTip>
      <NumOfPeople></NumOfPeople>
    </div>
  );
}

export default TipInput;
