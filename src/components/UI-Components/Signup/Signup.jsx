import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../../../Contexts/Context";
import "../Login/login.css";
const Signup = () => {
  const { user, setUser } = useContext(userContext);
  const emailRef = useRef(null);
  const fullnameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [buttonDisable, setButtonDisable] = useState(true);
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
          emailRef.current !== null &&
          fullnameRef.current !== null &&
          usernameRef.current !== null &&
          passwordRef.current !== null
        ) {
          if (
            emailRef.current.value.trim().length > 6 &&
            fullnameRef.current.value.trim().length > 6 &&
            usernameRef.current.value.trim().length > 6 &&
            passwordRef.current.value.trim().length > 6
          ) {
            setButtonDisable(false);
          } else {
            setButtonDisable(true);
          }
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

  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    if (
      emailRef.current !== null &&
      fullnameRef.current !== null &&
      usernameRef.current !== null &&
      passwordRef.current !== null
    ) {
      const data = {
        email: emailRef.current.value,
        fullname: fullnameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      setUser({ email: data.email, password: data.password });
      navigate("/");
      toast.success("Sign up successfully.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="main-content">
            <div className="form-container">
              <div className="form-content box">
                <div className="logo">
                  <img
                    src="/login-images/logo-light.png"
                    alt="Instagram logo"
                    className="logo-light"
                  />
                  <img
                    src="/login-images/logo-dark.png"
                    alt="Instagram logo"
                    className="logo-dark"
                  />
                </div>

                <div className="signin-form" id="signin-form">
                  <div className="signup-text">
                    Sign up to see photos and videos from your friends.
                  </div>
                  <div className="btn-group">
                    <button className="btn-fb">
                      <img src="/login-images/facebook-icon.png" alt="" />
                      <span>Log in with Facebook</span>
                    </button>
                  </div>
                  <div className="divine">
                    <div></div>
                    <div>OR</div>
                    <div></div>
                  </div>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Mobile number or email</span>
                      <input type="text" ref={emailRef} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Fullname</span>
                      <input type="text" ref={fullnameRef} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Username</span>
                      <input type="text" ref={usernameRef} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="animate-input">
                      <span>Password</span>
                      <input type="password" ref={passwordRef} />
                      <button>Show</button>
                    </div>
                  </div>
                  <div className="signup-details">
                    <span>
                      People who use our service may have uploaded your contact
                      information to Instagram. Learn More
                    </span>
                    <span>
                      By signing up, you agree to our Terms , Privacy Policy and
                      Cookies Policy
                    </span>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn-login"
                      id="signin-btn"
                      disabled={buttonDisable}
                      onClick={handleSignup}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
              <div className="box goto">
                <p>
                  Have an account?
                  <Link to="/">Log in</Link>
                </p>
              </div>

              <div className="app-download">
                <p>Get the app.</p>
                <div className="store-link">
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3D8371155B-94B0-446D-A8F1-B241EFEF48AC%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img src="/login-images/gg-play.png" alt="google play" />
                  </a>
                  <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=0%2C0%2C1868%2C676">
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                      alt="microsoft"
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
          </div>
          <div className="copyright">© 2022 Instagram from Meta</div>
        </div>
      </div>
    </>
  );
};

export default Signup;
