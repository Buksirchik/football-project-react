import { FC } from "react";
import "./style.css";

type PropTypes = {
  onClick: () => void;
};

export const FollowBtn: FC<PropTypes> = ({ onClick }) => {
  return (
    <button className="follow" onClick={onClick}>
      FOLLOW
    </button>
  );
};
