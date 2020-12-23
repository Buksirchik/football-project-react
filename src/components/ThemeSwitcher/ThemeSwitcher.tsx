import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { getThemeSelector } from "../../redux/selectors";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import "./style.css";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector<RootState, string>(getThemeSelector);
  const newTheme = theme === "light" ? "dark" : "light";
  const onClickHandler = () => dispatch(toggleTheme(newTheme));
  return (
    <div
      className="theme-swithcer theme-swithcer__outer"
      onClick={onClickHandler}
    >
      <div className="theme-swithcer__ball"></div>
      <object
        className="theme-swithcer__sun"
        type="image/svg+xml"
        data={sun}
        aria-label="sun-icon"
      ></object>
      <object
        className="theme-swithcer__moon"
        type="image/svg+xml"
        data={moon}
        aria-label="sun-moon"
      ></object>
    </div>
  );
};
