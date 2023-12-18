import React from "react";
import NavItem from "components/molecules/NavItem";

const Navigator = ({ items }) => {
  return (
    items && (
      <nav className="navigator">
        <ul className="navigator__inner">
          {items.map((item, key) => {
            return <NavItem key={key} item={item} />;
          })}
        </ul>
      </nav>
    )
  );
};

export default Navigator;
