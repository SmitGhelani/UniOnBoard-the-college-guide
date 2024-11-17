import React, { useState } from "react";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../signUp/notification/Notification";
import "./auth.css";

const initialState = {
  email: "",
  err: "",
  success: "",
};

function ForgotPassword() {
  const [data, setData] = useState(initialState);

  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgotPassword = async () => {
    try {
      const res = await axios.post(
        "https://unionboard-backend.smitghelani.xyz/forgotPassword",
        { email }
      );

      return setData({ ...data, err: "", success: res.data.message });
    } catch (err) {
      err.response.data.message &&
        setData({ ...data, err: err.response.data.message, success: "" });
    }
  };

  return (
    <div className="fg_pass">
      <h2>Forgot Your Password?</h2>

      <div className="row">
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChangeInput}
        />
        <button onClick={forgotPassword}>Verify your email</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
