import style from "./style.module.scss";

function Amount({ tipPerPerson }) {
  let fontSize = {};
  if (tipPerPerson.toString().length >= 6) {
    fontSize = { fontSize: "1rem" };
  }

  return (
    <div className={style.amountContainer}>
      <div>
        <p className={`${style.title1}  ${style.p}`}>Tip Amount</p>
        <p className={`${style.title2}  ${style.p}`}>/ person</p>
      </div>
      <div style={fontSize} className={style.amount}>
        ${tipPerPerson || "0.00"}
      </div>
    </div>
  );
}

export default Amount;
