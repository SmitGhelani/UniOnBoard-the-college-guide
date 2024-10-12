import React from 'react';
import './UpdateProfile.css';
const UpdateProfile = () => {
  return (
    <>
    <h1>Update Profile</h1>
    {/* <div className="body1">
                <form>
				<div className="form__group">
					<input
						type="password"
						className="form__input"
                        name="oldPassword"
						id="name"
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
						id="name"
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
                           handleSubmit()
                        }}
					>
						Update
					</button>
				</div>
                </form>
			</div> */}
    </>
  );
}

export default UpdateProfile;
