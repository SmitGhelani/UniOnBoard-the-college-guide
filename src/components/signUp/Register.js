import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

// toast-configuration method,
// it is compulsory method.
toast.configure();

const initialState = {
  name: "",
  email: "",
  password: "",
  conf_password: "",
  role: "",
  err: "",
  success: "",
};

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const { name, email, password, conf_password, role, err, success } = user;
  const [capValStudent, setCapValStudent] = useState(null);
  const [capValFac, setCapValFac] = useState(null);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmitStudent = async (e) => {
    e.preventDefault();
    let role = "student";
    try {
      const res = await axios.post(
        "https://unionboard-backend.smitghelani.xyz/signup",
        {
          name,
          email,
          password,
          conf_password,
          role,
        }
      );
      setUser({ ...user, err: "", success: res.data.message });
      toast(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      err.response.data.message &&
        setUser({
          name: "",
          email: "",
          password: "",
          conf_password: "",
          role: "",
          err: err.response.data.message,
          success: "",
        });
      toast(err.response.data.message);
    }
  };
  const handleSubmitFaculty = async (e) => {
    e.preventDefault();
    let role = "faculty";
    try {
      let formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("conf_password", conf_password);
      formData.append("role", role);
      formData.append("idProff", photo);

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      };

      axios
        .post(
          "https://unionboard-backend.smitghelani.xyz/signupFaculty",
          formData,
          config
        )
        .then(async (res) => {
          console.log(res);
          toast(res.data.message);
        })
        .catch((error) => {
          console.log(error);
          toast(error.response.data.message);
        });
    } catch (err) {
      err.response.data.message &&
        setUser({
          name: "",
          email: "",
          password: "",
          conf_password: "",
          role: "",
          err: err.response.data.message,
          success: "",
        });
      toast(err.response.data.message);
    }
  };
  return (
    <>
      <div className="container titlelogo">SignUp</div>
      <div className="body1">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmitFaculty}
            >
              <label className="label1" for="chk" aria-hidden="true">
                Faculty
              </label>
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChangeInput}
              />
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
              <input
                className="input1"
                type="password"
                name="conf_password"
                placeholder="Confirm Password"
                value={conf_password}
                onChange={handleChangeInput}
              />
              <label
                style={{
                  justifyContent: "center",
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Upload Legal Proof Of College :
              </label>

              <input
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginInline: "53px",
                }}
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <input type="hidden" id="role" name="role" value="student" />
              <ReCAPTCHA
                className="recaptcha"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(val) => setCapValFac(val)}
              />
              <button className="button1" type="submit" disabled={!capValFac}>
                Sign up
              </button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={handleSubmitStudent}>
              <label className="label1" for="chk" aria-hidden="true">
                Student
              </label>
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChangeInput}
              />
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
              <input
                className="input1"
                type="password"
                name="conf_password"
                placeholder="Confirm Password"
                value={conf_password}
                onChange={handleChangeInput}
              />
              <ReCAPTCHA
                className="recaptcha"
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(val) => setCapValStudent(val)}
              />
              <button className="button1" type="submit" disabled={!capValStudent}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
