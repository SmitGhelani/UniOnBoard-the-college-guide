import { Card, Container,Grid, TextField , Button} from '@mui/material';
import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login(){

    const navigate = useNavigate();

    const [state,setState] = React.useState({
        formType:'login',
        align:'right',
        data:{},
        isLoggedIn: false,
        token:'',
        email: '',
        password: ''
    })

    const [openModal,setOpenModal] = React.useState(false)

    const { email, password ,formType} = state

    const handleChange = (event) => {
        const { name,value } = event.target;
        setState((prevState) => ({...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        const { formType } = state

        event.preventDefault()

       if(formType === 'login'){
        const formData = new FormData();
        //domain ---------------  balajihouse
        formData.append("email", email);
        formData.append("password", password);
  
        axios.post('https://unionboard-backend.smitghelani.xyz/login', formData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then( response => {
            console.log(response);
            setOpenModal(true)
            const { token } = response && response.data
            // localStorage.setItem('token',token)
            // setState({
            //     'token': token
            // })
            navigate("/",{state:{type: "logIn"}});
            // window.location.reload()
        })
        .catch(error => {
          console.log(error);
          if (error.response.status === 400){
            alert('Please Enter Correct UserName or Password');
          } else if (error.response.status === 404) {
            alert('The Requested URL/badpage was not found on this server.')
          } else if (error.response.status === 500) {
            alert('Something Went Wrong!')
          }
        });
      }
    }

    const successSnackbar = (
        <Snackbar open={openModal} autoHideDuration={6000} onClose={() => setOpenModal(false)}>
            <Alert onClose={() => setOpenModal(false)} severity="success" sx={{ width: '100%' }}>
                Successfully Logged In!
            </Alert>
        </Snackbar>
    )

    return(
        <>
        <div className='main-div'>
            <Container maxWidth="sm">
                <div  style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100%'}}>
                    <Card elevation={5} style={{width:'100%'}}>
                        <Grid item container xs={12} >
                            {/* <Grid item xs={6}>
                                <div className='login-background'>
                                </div>
                            </Grid> */}
                            <Grid item xs={12} style={{padding: '20px'}}>
                                <Grid item xs={12} style={{textAlign:'center'}}>
                                    <h2>Sign In</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <form onSubmit={handleSubmit}>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <TextField 
                                            type="email"
                                            className='text-input' 
                                            variant='filled' 
                                            label="Email" 
                                            placeholder='Enter Email' 
                                            name="email" 
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                        <TextField 
                                            type="password"
                                            className='text-input' 
                                            variant='filled' 
                                            label="Password" 
                                            placeholder='Enter Password' 
                                            name="password" 
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                        <Button type='submit' variant='contained' className='login-btn'>Login</Button>
                                    </div>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </Container>
       </div>
       {successSnackbar}
       </>
    )
}

export default Login;