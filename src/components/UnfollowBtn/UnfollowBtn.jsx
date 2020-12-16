import "./style.css";

export const UnfollowBtn = ({ onClick }) => {
  return (
    <button className="unfollow" onClick={onClick}>
      UNFOLLOW
    </button>
  );
};
