import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaBloggerB } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../assets/CSS/header.scss";

export default function Header({ userExist }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  const openMenu = () => {
    setMenuIsOpen(true);
  };
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <header className="header">
      <nav className="header_container">
        <div className="header_logo_container">
          <Link to="/">
            <img src="" alt="logo" className="header_logo" />
          </Link>
        </div>
        <div className="header_menu_desktop">
          <ul className="header_links">
            <li className="header_link">
              <NavLink to="/">HOME</NavLink>
            </li>
            {userExist.logged ? (
              <div>
                <li className="header_link">
                  <NavLink
                    to={`/user/${userExist.userId}/backoffice`}
                    onClick={closeMenu}
                  >
                    {userExist.email}
                  </NavLink>
                </li>
                <li className="header_link">
                  <NavLink to="/signup" onClick={closeMenu}>
                    MON BLOG
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li className="header_link">
                  <NavLink to="/signup" onClick={closeMenu}>
                    SIGNUP
                  </NavLink>
                </li>
                <li className="header_link">
                  <NavLink to="/signin" onClick={closeMenu}>
                    SIGNIN
                  </NavLink>
                </li>
              </div>
            )}
            <li className="header_link">
              <NavLink to="/blog">BLOG</NavLink>
            </li>
          </ul>
        </div>
        <div
          className={
            menuIsOpen ? "header_menu_mobile open" : "header_menu_mobile close"
          }
        >
          <ul className="header_links_mobile">
            <li className="header_link_mobile home">
              <NavLink to="/" onClick={closeMenu}>
                HOME
              </NavLink>
            </li>
            {userExist.logged ? (
              <li className="header_link_mobile">
                <NavLink
                  to={`/user/${userExist.userId}/backoffice`}
                  onClick={closeMenu}
                >
                  {userExist.email}
                </NavLink>
              </li>
            ) : (
              <div>
                <li className="header_link_mobile">
                  <NavLink to="/signup" onClick={closeMenu}>
                    SIGNUP
                  </NavLink>
                </li>
                <li className="header_link_mobile">
                  <NavLink to="/signin" onClick={closeMenu}>
                    SIGNIN
                  </NavLink>
                </li>
              </div>
            )}

            <li className="header_link_mobile">
              <NavLink to="/blog" onClick={closeMenu}>
                BLOG
              </NavLink>
            </li>
            <li className="header_link_mobile burger_close">
              <RxCross1 onClick={closeMenu} />
            </li>
          </ul>
        </div>
        <div className="header_burgermenu_button">
          {menuIsOpen ? (
            <RxCross1 onClick={closeMenu} />
          ) : (
            <RxHamburgerMenu
              onClick={openMenu}
              className="header_burgermenu_button_close"
            />
          )}
        </div>
      </nav>
    </header>
  );
}
