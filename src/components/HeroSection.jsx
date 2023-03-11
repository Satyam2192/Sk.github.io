import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-colum">
        <div className="section-hero-data">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            doloribus hic rerum nihil eum nisi quibusdam fuga assumenda omnis
            blanditiis deleniti, asperiores repellat et unde. Impedit
            consequatur voluptatibus explicabo non!
          </p>
          <p className="hero-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            possimus sit quis quod non quae exercitationem, aut perspiciatis
            esse deleniti deserunt eos! Inventore sunt, quidem illum cupiditate
            impedit quasi asperiores.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HeroSection;
