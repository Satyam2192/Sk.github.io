import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        {/* nav link hep us not to refreash page when clicked ini a link */}
        {/* <img src="https://source.unsplash.com/50x30/?flower" alt="" /> */}
        <img className="logo"
          src="https://images.unsplash.com/photo-1499117901949-e34ef1b2444a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=70&ixid=MnwxfDB8MXxyYW5kb218MHx8Zmxvd2VyfHx8fHx8MTY3ODUyNTg0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=70"
          alt="logo"
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 100%;
    border-radius:20px;
  }
`;

export default Header;
