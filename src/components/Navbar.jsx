import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};
        overflow: hidden;
        .mobile-nav-icon {
          font-size: 4.2rem;
          overflow: hidden;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      /* hide the original nav menu  */
      .navbar-list {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3.6%;
        right: 5.1%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
    @media (min-width: ${({ theme }) => theme.media.tablet}) {
      .navbar-list {
        gap: 6.4rem;
      }
      .mobile-navbar-btn {
        display: none;
      }
      .navbar-list {
        display: flex !important;
        justify-content: flex-end;
        li {
          .navbar-link {
            font-size: 1.6rem;
          }
        }
      }
    }
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      .navbar-list {
        gap: 8rem;
      }
      .navbar-list {
        li {
          .navbar-link {
            font-size: 1.8rem;
          }
        }
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
      <ul className="navbar-list">
      <li>
        <NavLink
          className="navbar-link"
          onClick={() => setOpenMenu(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar-link"
          onClick={() => setOpenMenu(false)}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar-link"
          onClick={() => setOpenMenu(false)}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar-link"
          onClick={() => setOpenMenu(false)}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar-link"
          to={"/login "}
          onClick={() => setOpenMenu(false)}
        >
          LogIn/SignUp
        </NavLink>
      </li>
    </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgMenu
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
