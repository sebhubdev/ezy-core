import React from "react";
import { memo } from "react";
import FullLogo from "web/components/molecules/FullLogo/FullLogo";
import Navigator from "web/components/organisms/Navigator";

const Footer = ({ nav }) => {
  return (
    <footer className="main-footer">
      <div>
        <FullLogo />
        <p>Copyright © 2023 chiro-bressuire.fr</p>
        <Navigator items={nav} />
      </div>
    </footer>
  );
};

export default memo(Footer);