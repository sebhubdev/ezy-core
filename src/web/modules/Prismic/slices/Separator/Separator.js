import React from "react";
import classNames from "classnames";

const Separator = ({ content }) => {
  const {
    desktop_height,
    mobile_height,
    with_line,
    line_position,
    line_width,
  } = content.primary;

  const classes = classNames({
    "separator-slice": true,
    "with-line": with_line,
  });
  return (
    <div
      className={`${classes} ${line_position} ${line_width} desktop-${desktop_height} mobile-${mobile_height}`}
    >
      <div className="middle-line"></div>
    </div>
  );
};

export default Separator;
