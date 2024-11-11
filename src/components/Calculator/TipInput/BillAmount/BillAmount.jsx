import style from "./style.module.scss";
import dollarIcon from "/src/assets/images/icon-dollar.svg";
import {
  getBillValue,
  getSetBill,
} from "../../../../context/BillContextProvider";

function BillAmount() {
  const bill = getBillValue();
  const setBill = getSetBill();

  return (
    <div className={style.billContainer}>
      <label className={style.label} htmlFor="bill">
        Bill
      </label>
      <input
        className={style.input}
        type="number"
        id="bill"
        name="bill"
        value={bill ?? ""}
        placeholder="0"
        onChange={(e) => {
          const currentValue = parseFloat(e.target.value);
          setBill(isNaN(currentValue) || currentValue < 0 ? "" : currentValue);
        }}
      />
      <img className={style.svg} src={dollarIcon} alt="dollar" />
    </div>
  );
}

export default BillAmount;
