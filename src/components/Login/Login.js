import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../signUp/signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

// toast-configuration method,
// it is compulsory method.
toast.configure();
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const [capVal, setCapVal] = useState(null);
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://unionboard-backend.smitghelani.xyz/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/", { state: { type: "logIn" } });
      setUser({ ...user, err: "", success: res.data.message });
      toast(res.data.message);
    } catch (err) {
      err.response.data.message &&
        setUser({ ...user, err: err.response.data.message, success: "" });
      toast(err.response.data.message);
    }
  };

  return (
    <>
      <div className="container titlelogo">Login</div>
      <div className="body1">
        <div class="main" style={{ height: "auto" }}>
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form onSubmit={handleSubmit}>
              <label className="label1" for="chk" aria-hidden="true">
                Login
              </label>

              <input
                className="input1"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeInput}
              />
              <input
                className="input1"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChangeInput}
              />

              <Link
                to="/forgot_password"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Forgot your password?
              </Link>
              <ReCAPTCHA
                className="recaptcha"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(val) => setCapVal(val)}
              />
              <button className="button1" type="submit" disabled={!capVal}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
