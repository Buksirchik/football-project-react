import "./style.css";

export const MenuListItem = ({item}) => {
  return (
    <li className="football-list__row">
      <button className="football-item">
        <div className="football-item__wrap-img">
          <img
            src={`./images/${item.code}.png`}
            alt={item.name}
            className="football-item__img"
          />
        </div>
        <p className="football-item__name">{item.name}</p>
      </button>
    </li>
  );
};
