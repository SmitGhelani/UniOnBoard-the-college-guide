import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { showErrMsg, showSuccessMsg } from '../signUp/notification/Notification'
import { useNavigate } from 'react-router-dom';
// import "./auth.css"
import "../signUp/signup.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();
const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(initialState)

    const { email, password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('https://unionboard-backend.smitghelani.xyz/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            navigate("/", { state: { type: "logIn" } });
            setUser({ ...user, err: '', success: res.data.message })
            toast(res.data.message);

        } catch (err) {
            err.response.data.message &&
                setUser({ ...user, err: err.response.data.message, success: '' })
                toast(err.response.data.message);
        }
    }

    return (
        <>
        {/* <div className="login_page"> */}
            {/* <h2>Login</h2> */}
            {/* {err && showErrMsg(err)}
            {success && showSuccessMsg(success)} */}


            {/* // <form onSubmit={handleSubmit}>
            //     <div>
            //         <label htmlFor="email">Email Address</label>
            //         <input type="text" placeholder="Enter email address" id="email"
            //             value={email} name="email" onChange={handleChangeInput} />
            //     </div>

            //     <div>
            //         <label htmlFor="password">Password</label>
            //         <input type="password" placeholder="Enter password" id="password"
            //             value={password} name="password" onChange={handleChangeInput} />
            //     </div>

            //     <div className="row" style={{ display: 'flex', justifyContent: 'start' }}>
            //         <button type="submit" variant='contained'>Login</button>
            //         <Link to="/forgot_password" style={{ display: 'flex', justifyContent: 'end' }}>Forgot your password?</Link>
            //     </div>
            // </form> */}
            <div className="container titlelogo">Login</div>
			<div className="body1">
            <div class="main" style={{height:"auto"}}>
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
						
						{/* <div className="container" style={{AlignSelf:"center", textAlign:"center"}}>
						<a href="/">Forgot password</a></div> */}
                        <Link to="/forgot_password" style={{ display: 'flex', justifyContent: 'center' }}>Forgot your password?</Link>
						<button className="button1" type="submit">
							Login
						</button>
					</form>
				</div>
			</div>

</div>
     {/* </div> */}
        </>
    )
}


export default Login;