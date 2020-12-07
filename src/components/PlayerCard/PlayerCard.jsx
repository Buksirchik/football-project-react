import "./style.css";

export const PlayerCard = (props) => {
  const { name, dateOfBirth, position, nationality, role } = props;
  return (
    <div className="card">
      <div className="card__front">
        <p>{name || "John"}</p>
      </div>
      <div className="card__back">
        <p>Nationality: {nationality || "Westeros"}</p>
        <p>
          Date of Birth:{" "}
          {new Date(dateOfBirth).toLocaleDateString() || "04/06/1990"}
        </p>
        <p>Position: {position || "Team Member"}</p>
        <p>Role: {role || "Team Member"}</p>
      </div>
    </div>
  );
};
