import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LayoutContext } from "layout/GenericLayout";

const Btn = ({
  to,
  appearance = "primary",
  children,
  onClick,
  type,
  target,
  classes = "",
  hash,
}) => {
  const { headerHeight } = useContext(LayoutContext);
  const hashScrollHandler = (elem) => {
    const top = elem.offsetTop;

    window.scrollTo({
      top: top - headerHeight - 40,
      behavior: "smooth",
    });
  };
  return (
    <>
      {type && type === "web" ? (
        <a
          href={to}
          target={target}
          className={`btn${
            appearance ? ` btn-${appearance}` : "default"
          } ${classes}`}
        >
          {children}
        </a>
      ) : hash ? (
        <HashLink
          to={`${to}#${hash}`}
          className={`${
            appearance ? `btn btn-${appearance}` : "default"
          } ${classes}`}
          onClick={onClick}
          scroll={(elem) => hashScrollHandler(elem)}
        >
          {children}
        </HashLink>
      ) : (
        <div>
          <Link
            className={`btn btn-${appearance} ${classes}`}
            to={to || null}
            onClick={onClick}
          >
            {children}
          </Link>
        </div>
      )}
    </>
  );
};

export default Btn;
