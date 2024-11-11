import style from "./style.module.scss";

function Total({ billPerPerson }) {

  let fontSize = {};
  if (billPerPerson.toString().length >= 6) {
    fontSize = { fontSize: "1rem" };
  }

  return (
    <div className={style.totalContainer}>
      <div>
        <p className={`${style.title1} ${style.p}`}>Total</p>
        <p className={`${style.title2} ${style.p}`}>/ person</p>
      </div>
      <div style={fontSize} className={style.total}>${billPerPerson || "0.00"}</div>
    </div>
  );
}

export default Total;
