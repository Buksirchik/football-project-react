import { FC } from "react";
import "./style.css";

type PropTypes = {
  children: React.ReactElement ;
}

export const Content: FC<PropTypes> = ({ children }) => {
  return <div className="main-content">{children}</div>;
};
