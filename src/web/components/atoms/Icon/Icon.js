import React from "react";
import { ICONS } from "./icons";
import parse from "html-react-parser";

const Icon = ({ icon, size, onClick, classes }) => {
  const SvgIcon = ICONS[icon] ? ICONS[icon] : ICONS.dot;
  return (
    <div onClick={onClick} className={`icon${classes ? ` ${classes}` : ""}`}>
      {parse(SvgIcon)}
    </div>
  );
};

export default Icon;
