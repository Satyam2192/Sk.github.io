import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Don't wait for change to happen</h3>
            <h3>Make it happen</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get started today</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>SK Earth Savers</h3>
            <p>Earth Savers for a better tomorrow</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Stay up to date on the fight against climate change</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us On</h3>
            <div className="footer-social--icons">
              <div>
                <FaTwitter className="icons" />
              </div>
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=Lq0iua0r0KQ"
                  target="_blank"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
            <h3>info@skearthsavers.org </h3>
            <h3>Our office is located at 123 Main St, Anytown, USA</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />

          <div className="container grid grid-four-column">
            <div>
              <p>
                Read our privacy policy to learn how we protect your personal
                information
              </p>
            </div>
            <div>
              <p>
                The views expressed on this website are those of SK Earth Savers
                and do not necessarily reflect those of any other organization
                or institution
              </p>
            </div>

            <div>
              <p>
                @{new Date().getFullYear()} ©Copyright SK Earth Savers. All
                rights reserved
              </p>
            </div>

            <div>
              <p>By using our website, you agree to our terms and conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.1rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 1rem;

      hr {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
        margin-top: 2rem;
      }
    }

    .footer {
      padding: 8rem 0 3rem 0;

      .container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .footer-about,
      .footer-subscribe,
      .footer-contact {
        text-align: center;
      }

      .footer-social {
        .footer-social--icons {
          justify-content: center;
        }
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;

      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
`;

export default Footer;
