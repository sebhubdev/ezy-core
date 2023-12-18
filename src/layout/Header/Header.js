import React from "react";
import FullLogo from "components/molecules/FullLogo/FullLogo";
import Icon from "components/atoms/Icon";
import Modal from "components/organisms/Modal";
import { Link } from "react-router-dom";
import Navigator from "components/organisms/Navigator";

const Header = ({ nav }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false);

  const toogleMobileNav = () => {
    setisNavOpen(!isNavOpen);
  };
  const closeMobileNav = () => {
    setisNavOpen(false);
  };

  const mainNavItems =
    nav &&
    nav.map((item) => {
      return {
        ...item,
        onclick: closeMobileNav,
      };
    });

  return (
    <>
      <div className="main-header__mobile-separator"></div>
      <div className="main-header__desktop-separator"></div>
      <header id="mainHeader" className="main-header">
        <div className="main-header__inner">
          <div className="main-header__top">
            <Link
              className="main-header__top__logo"
              to={`/`}
              onClick={closeMobileNav}
            >
              <FullLogo />
            </Link>
            <div className="main-header__top__desktop-nav">
              <Navigator items={mainNavItems} />
            </div>
            <div className="main-header__top__mobile-nav">
              <div className={`mobile-nav${isNavOpen ? " open" : ""}`}>
                <div className="mobile-nav__open" onClick={toogleMobileNav}>
                  <Icon icon="burgerMenu" />
                </div>
                <div className="mobile-nav__close" onClick={toogleMobileNav}>
                  <Icon icon="close" />
                </div>

                <Modal
                  isOpen={isNavOpen}
                  setIsOpen={toogleMobileNav}
                  appearance="right"
                >
                  <Navigator items={mainNavItems} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
