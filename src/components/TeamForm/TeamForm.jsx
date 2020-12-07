import "./style.css";

export const TeamForm = ({ form }) => {
  const formArr = form.split(",");
  return (
    <ul className="team-form-list">
      {formArr.map((item, i) => {
        return (
          <li key={i} className={`team-form-list__item ${item}`}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
