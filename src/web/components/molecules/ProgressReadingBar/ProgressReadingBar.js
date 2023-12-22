import React from "react";
import classNames from "classnames";
import { t } from "i18n";

const ProgressReadingBar = ({ progress, isActive, readingTime }) => {
  const classes = classNames({
    "progress-reading-bar": true,
    active: isActive,
  });
  return (
    <div className={classes}>
      <div className="progress-reading-bar__inner">
        <div className="progress-reading-bar__info">
          {t("Reading time", { minutes: readingTime })}
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar__inner"
            style={{ width: `${progress || 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReadingBar;
