import React from "react";
import { Link } from "react-router-dom";
import { useLinkResolver } from "web/hooks";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const NavItem = ({ item }) => {
  const url = useLinkResolver(item.link);

  const { pathname } = useLocation();

  const classes = classNames({
    "nav-item": true,
    active: pathname === url,
  });

  return (
    <li className={classes}>
      <Link className="nav-item__link" to={url} onClick={item.onclick}>
        <span className="nav-item__link__label">{item.label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
