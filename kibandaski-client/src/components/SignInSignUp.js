import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [redirectToWelcome, setRedirectToWelcome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset the redirect flag when the component mounts
    setRedirectToWelcome(false);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRedirectToWelcome(true); // Set the flag to redirect to WelcomePage
  };

  useEffect(() => {
    // Redirect to WelcomePage when the redirect flag is set
    if (redirectToWelcome) {
      navigate("/welcome");
    }
  }, [redirectToWelcome, navigate]);

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="signin-signup">
        <form action="" className="sign-in-form" onSubmit={handleFormSubmit}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="https://www.youtube.com/account" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/login/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/login" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <p className="account-text">
            Don't have an account?{" "}
            <button id="sign-up-btn2" onClick={() => setIsSignUp(true)}>Sign up</button>
          </p>
        </form>
        <form action="" className="sign-up-form" onSubmit={handleFormSubmit}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign up" className="btn" />
          <p className="social-text">Or Sign up with social platform</p>
          <div className="social-media">
            <a href="https://www.youtube.com/account" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/login/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/login" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <p className="account-text">
            Already have an account?{" "}
            <button id="sign-in-btn2" onClick={() => setIsSignUp(false)}>Sign in</button>
          </p>
        </form>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome Back!</h3>
            <p>
              To keep connected with us please login with your personal details.
            </p>
            <button className="btn" id="sign-in-btn" onClick={() => setIsSignUp(false)}>Sign in</button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>New to Kibandaski?</h3>
            <p>
              Enter your personal details and start your food adventure with us.
            </p>
            <button className="btn" id="sign-up-btn" onClick={() => setIsSignUp(true)}>Sign up</button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
