import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../signUp/notification/Notification'
import "./auth.css"

const initialState = {
    password: '',
    conf_password: '',
    err: '',
    success: ''
}


function ResetPassword() {

    const navigate = useNavigate()


    const [data, setData] = useState(initialState)
    const { token } = useParams()

    const { password, conf_password, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const handleResetPass = async () => {
        try {
            const res = await axios.post(`https://unionboard-backend.smitghelani.xyz/resetPassword/${token}`, { password, conf_password }, {
                headers: { Authorization: token }
            })

            setData({ ...data, err: "", success: res.data.message })

            setTimeout(() => { navigate("/login") }, 2000);

        } catch (err) {
            err.response.data.message && setData({ ...data, err: err.response.data.message, success: '' })
        }

    }

    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                    onChange={handleChangeInput} />

                <label htmlFor="conf_password">Confirm Password</label>
                <input type="password" name="conf_password" id="conf_password" value={conf_password}
                    onChange={handleChangeInput} />

                <button onClick={handleResetPass}>Reset Password</button>
            </div>
        </div>
    )
}


export default ResetPassword