import img from "/src/assets/images/logo.svg";
import style from "./style.module.scss";

function Title() {
  return <img className={style.img} src={img} alt="splitter" />;
}

export default Title;
