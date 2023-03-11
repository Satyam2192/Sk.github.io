import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function FPassword() {
  return (
    <Wrapper>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form
            // action="/myaction.php"
            // name="myForm"
            // onsubmit="return validateForm()"
            // method="post"
            >
              <h2>Change Password</h2>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label for="">Enter Your Email Address</label>
              </div>
              <div class="inputbox">
                <ion-icon name="code"></ion-icon>
                <input type="mail" required />
                <label for="">verifacation code</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="mail" required />
                <label for="">New Password</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">Conform Password</label>
              </div>
              <button>Change Password</button>
              <div class="register">
                <p>
                <Link to="/LogIn"> Log In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    background: url("https://source.unsplash.com/1920x1080/?nature") no-repeat;

    background-position: center;
    background-size: cover;
  }

  // @keyframes backgroundColorPalette {
  //   0% {
  //     background: #ee6055;
  //   }
  //   25% {
  //     background: #60d394;
  //   }
  //   50% {
  //     background: #aaf683;
  //   }
  //   75% {
  //     background: #ffc746;
  //   }
  //   100% {
  //     background: #ff9b85;
  //   }
  // }

  // body {
  //   animation-name: backgroundColorPalette;
  //   animation-duration: 60s;
  //   animation-iteration-count: infinite;
  //   animation-direction: alternate;
  // }

  .form-box {
    position: relative;
    width: 400px;
    height:590px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 4em;
    color: #fff;
    text-align: center;
  }
  .inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1.3em;
    pointer-events: none;
    transition: 0.4s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }
  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #fff;
  }
  .inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
  }
  .forget {
    margin: -15px 0 15px 5px;
    font-size: 1.1em;
    color: #fff;
    display: flex;
    /
    justify-content: space-between;
  }

  .forget label input {
    margin-right: 3px;
  }
  .forget label a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    margin-left: 95px;
  }
  .forget label a:hover {
    text-decoration: underline;
  }
  button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.9em;
    font-weight: 600;
  }
  .register {
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;
  }
  .register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    margin-left: 10px;
  }
  .register p a:hover {
    text-decoration: underline;
  }
`;

export default FPassword;
