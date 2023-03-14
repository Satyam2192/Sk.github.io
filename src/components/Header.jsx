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
          src="https://cdn.discordapp.com/attachments/1063523270600691853/1084340421565632613/b6191318-0636-4507-bfc7-ca6fa95bdfc8.jpg"
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
    height: 60px;
    width: 60px;
    border-radius:20px;
  }
`;

export default Header;
