import React from "react";
import { memo } from "react";
import FullLogo from "web/components/molecules/FullLogo/FullLogo";
import Navigator from "web/components/organisms/Navigator";

const Footer = ({ nav }) => {
  return (
    <footer className="main-footer">
      <div>
        <FullLogo />
        <p className="main-footer__copyright">Copyright</p>
        <Navigator items={nav} />
      </div>
    </footer>
  );
};

export default memo(Footer);
