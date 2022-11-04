import React, { createRef, useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { themeContext, userContext } from "../../../Contexts/Context";
import "./login.css";

const Login = () => {
  const { mode, setMode } = useContext(themeContext);
  const { user, setUser } = useContext(userContext);
  const [buttonDisable, setButtonDisable] = useState(true);
  let slide_content_ref = useRef();
  let signin_form = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();


  let slide_index = 0;

  const slide = () => {
    if (slide_content_ref.current !== undefined && slide_content_ref.current !==null) {
      let slide_items = slide_content_ref.current.children;
      slide_items = [...slide_items];
      slide_items.forEach((e) => e.classList.remove("active"));
      slide_index =
        slide_index + 1 === slide_items.length ? 0 : slide_index + 1;
      slide_items[slide_index].classList.add("active");
    }
  };

  setInterval(slide, 4000);

  useEffect(() => {
    inputFunctions();
  }, []);

  const inputFunctions = () => {
    document.querySelectorAll(".animate-input").forEach((e) => {
      let input = e.querySelector("input");
      let button = e.querySelector("button");

      input.onkeyup = () => {
        if (input.value.trim().length > 0) {
          e.classList.add("active");
        } else {
          e.classList.remove("active");
        }
        if (
          emailRef.current.value.trim().length > 6 &&
          passwordRef.current.value.trim().length > 6
        ) {
          setButtonDisable(false);
        } else {
          setButtonDisable(true);
        }
      };

      // show password button
      if (button) {
        button.onclick = () => {
          if (input.getAttribute("type") === "text") {
            input.setAttribute("type", "password");
            button.innerHTML = "Show";
          } else {
            input.setAttribute("type", "text");
            button.innerHTML = "Hide";
          }
        };
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value || undefined,
      password: passwordRef.current.value || undefined,
    };
    console.log(data);
    if(user === null && data.email !== undefined && data.password !== undefined){
      setUser(data)
    }
  };
  const handleModes = (e) => {
    e.preventDefault()
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="main-content">
            <div className="slide-container">
              <div
                className="slide-content"
                id="slide-content"
                ref={slide_content_ref}
              >
                <img
                  src="/src/components/UI-Components/Login/images/slide (1).jpg"
                  alt="slide image"
                  className="active"
                />
                <img
                  src="/src/components/UI-Components/Login/images/slide (2).jpg"
                  alt="slide image"
                />
                <img
                  src="/src/components/UI-Components/Login/images/slide (3).jpg"
                  alt="slide image"
                />
                <img
                  src="/src/components/UI-Components/Login/images/slide (4).jpg"
                  alt="slide image"
                />
                <img
                  src="/src/components/UI-Components/Login/images/slide (5).jpg"
                  alt="slide image"
                />
              </div>
            </div>
            <div className="form-container">
              <div className="form-content box">
                <div className="logo">
                  <img
                    src="/src/components/UI-Components/Login/images/logo-light.png"
                    alt="Instagram logo"
                    className="logo-light"
                  />
                  <img
                    src="/src/components/UI-Components/Login/images/logo-dark.png"
                    alt="Instagram logo"
                    className="logo-dark"
                  />
                </div>
                <div className="signin-form" id="signin-form" ref={signin_form}>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Phone number, username or email</span>
                      <input
                        type="text"
                        ref={emailRef}
                        // onChange={handleInputChange}
                        // placeholder="Phone number, username or email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Password</span>
                      <input
                        type="password"
                        ref={passwordRef}
                        // onChange={handleInputChange}
                        // placeholder="Password"
                      />
                      <button>Show</button>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn-login"
                      id="signin-btn"
                      disabled={buttonDisable}
                      onClick={handleLogin}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="divine">
                    <div></div>
                    <div>OR</div>
                    <div></div>
                  </div>
                  <div className="btn-group">
                    <button className="btn-fb">
                      <img
                        src="/src/components/UI-Components/Login/images/facebook-icon.png"
                        alt=""
                      />
                      <span>Log in with Facebook</span>
                    </button>
                  </div>
                  <a href="#" className="forgot-pw">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="box goto">
                <p>
                  Don't have an account?
                  <a href="#">Sign up</a>
                </p>
              </div>

              <div className="app-download">
                <p>Get the app.</p>
                <div className="store-link">
                  <a href="#">
                    <img
                      src="/src/components/UI-Components/Login/images/app-store.png"
                      alt="app store"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/src/components/UI-Components/Login/images/gg-play.png"
                      alt="google play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="links">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Top Accounts</a>
            <a href="#">Hashtags</a>
            <a href="#">Locations</a>
            <a href="#" onClick={handleModes}>
              Darkmode
            </a>
          </div>
          <div className="copyright">© 2021 Instagram from Facebook</div>
        </div>
      </div>
    </>
  );
};

export default Login;
