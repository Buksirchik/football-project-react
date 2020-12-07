import { useContext, useEffect } from "react";
import { API } from "../../api";
import { AppContext } from "../../store";
import { MenuListItem } from "../MenuListItem";
import "./style.css";

export const MenuList = () => {
  const { state: { listCompetitions }, dispatch } = useContext(AppContext);

  useEffect(() => {
    API.getCompetitions().then(({ data }) => {
      const { competitions } = data;
      dispatch({ type: "setListCompetitions", payload: competitions });
    });
  }, []);

  return (
    <ul className="football-list">
      {listCompetitions.map((item) => (
        <MenuListItem item={item} key={item.id} competitionID={item.id} />
      ))}
    </ul>
  );
};
