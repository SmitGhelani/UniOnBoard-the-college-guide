import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../signUp/notification/Notification'

function ActivationEmail() {
    const navigate = useNavigate()

    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (activation_token) {

            const activationEmail = async () => {
                try {
                    const res = await axios.post(`https://unionboard-backend.smitghelani.xyz/activateEmail/${activation_token}`);
                    setSuccess(res.data.message)
                    setTimeout(() => { navigate("/login") }, 2000);

                } catch (err) {
                    err.response.data.message && setErr(err.response.data.message)
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="active_page">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
        </div>
    )
}

export default ActivationEmail