import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const show = !menu ? "header__left__nav" : "header__left__nav show";

  return (
    <div className="header">
      {/* header left*/}

      <div className="header__left">
        <Link to="/">
          <div className="header__logo">logo</div>
        </Link>

        <ul className={show}>
          <li className="header__left__nav__list">
            <div class="dropdown">
              <button class="dropbtn">Services</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li className="header__left__nav__list">
            <div class="dropdown">
              <button class="dropbtn">About</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>

          <li className="header__left__nav__list">Community</li>

          <li className="header__left__nav__list">
            <div class="dropdown">
              <button class="dropbtn">Docs</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* header right*/}

      <div className="header__right">
        <ul className="header__right__nav">
          <li className="header__right__nav__list">Contact</li>
          <li className="header__right__nav__list">Sign In</li>
          <li className="">
            <Link className="header__right__nav__list" to="/signup">
              Register
            </Link>
          </li>
          <li className="menuBar">
            {!menu ? (
              <MenuIcon onClick={() => setMenu(!menu)} className="menuBar" />
            ) : (
              <CloseIcon onClick={() => setMenu(!menu)} className="menuBar" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
