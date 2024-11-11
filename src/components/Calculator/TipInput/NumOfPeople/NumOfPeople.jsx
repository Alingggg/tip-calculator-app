import style from "./style.module.scss";
import personIcon from "/src/assets/images/icon-person.svg";
import {
  getNumPeople,
  getSetNumPeople,
} from "../../../../context/NumPeopleContextProvider";

function NumOfPeople() {
  const numPeople = getNumPeople();
  const setNumPeople = getSetNumPeople();

  return (
    <div className={style.nopContainer}>
      <div className={style.labelContainer}>
        <label className={style.label} htmlFor="numOfPeople">
          Number of People
        </label>
        {numPeople === 0 && <span className={style.error}>Can't be zero</span>}
      </div>
      <input
        className={`${style.input} ${numPeople === 0 && style.errorBorder}`}
        type="number"
        id="numOfPeople"
        name="numOfPeople"
        value={numPeople ?? ""}
        placeholder="0"
        onChange={(e) => {
          const currentValue = parseInt(e.target.value);
          setNumPeople(
            isNaN(currentValue) || currentValue < 0 ? "" : currentValue
          );
        }}
      />
      <img className={style.svg} src={personIcon} alt="person" />
    </div>
  );
}

export default NumOfPeople;
