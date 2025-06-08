import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./ChangePassword.css";
toast.configure();
const initialValues = {
  oldPassword: "",
  newPassword: "",
};
const ChangePassword = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = () => {
    try {
      axios
        .post(
          "https://unionboard-backend.smitghelani.site/updatePassword",
          formValues,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data);
          toast("success");
        })
        .catch((err) => {
          toast("Invalid Credentials");
          console.log(err);
        });
    } catch (err) {
      toast("Error");
    }
  };
  return (
    <>
      <h1 style={{ marginBottom: "5vh" }}>Change User Password</h1>
      <div className="body1">
        <form>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              name="oldPassword"
              placeholder="Old Password"
              required=""
              value={formValues.oldPassword}
              onChange={handleChange}
            />
            <label for="name" className="form__label">
              Old Password
            </label>
            <input
              type="password"
              className="form__input"
              name="newPassword"
              placeholder="New Password"
              required=""
              value={formValues.newPassword}
              onChange={handleChange}
            />
            <label for="name" className="form__label">
              New Password
            </label>
            <button
              type="button"
              className="fill"
              style={{ marginLeft: "40px" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
