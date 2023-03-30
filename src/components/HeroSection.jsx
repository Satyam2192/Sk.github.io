import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Act now for a better tomorrow</p>
          <h1 className="hero-heading">
            Join the fight against global warming today
          </h1>
          {/* <h1 className="hero-heading">@SK</h1> */}
          <p className="hero-para">
            Our planet is facing an urgent crisis. Global warming, caused by
            human activities such as burning fossil fuels and deforestation, is
            causing rising temperatures, sea levels, and more frequent natural
            disasters. The time to act is now.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="http://befa-14-139-241-211.in.ngrok.io/templates/camera_temp/index.html"> Be the Change </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img
              src="https://source.unsplash.com/1920x1920/?Volcano"
              alt="hero image"
              className="hero-img "
            />
          </picture>
        </div>
      </div>
      <div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 20rem;
    background-color: #008000;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
