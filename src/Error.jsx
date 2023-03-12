import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img className="error-image"
        src="https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8NDA0fHx8fHx8MTY3ODU1OTcyMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
        alt="error"
      />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  .error-image {
    height: 75vh;
    width: 100%; 
    border-radius: 15px;   
  }
`;

export default Error;
