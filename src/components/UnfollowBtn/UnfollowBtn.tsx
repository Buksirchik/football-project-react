import { FC } from "react";
import "./style.css";

type PropTypes = {
  onClick: () => void;
};

export const UnfollowBtn: FC<PropTypes> = ({ onClick }) => {
  return (
    <button className="unfollow" onClick={onClick}>
      UNFOLLOW
    </button>
  );
};
