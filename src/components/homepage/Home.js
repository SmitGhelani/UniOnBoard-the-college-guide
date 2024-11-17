import React from "react";
import "./Home.css";
import Categories from "./components/categories/Categories";
import Feature from "./components/features/Feature";
import Motive from "./components/motive/Motive";
import Quickview from "./components/quickview/Quickview";
import Search from "./components/Search/Search";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Snackbar, Button } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home() {
  const location = useLocation();
  const [successLogin, setSuccessLogin] = React.useState(
    location?.state?.type === "logIn"
  );

  const [successlogOut, setSuccessLogOut] = React.useState(
    location?.state?.type === "logOut"
  );
  console.log(successLogin);

  const navigate = useNavigate();
  const params = useParams();

  const successSnackbar = (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={successLogin}
      autoHideDuration={3000}
      onClose={() => setSuccessLogin(false)}
    >
      <Alert
        onClose={() => setSuccessLogin(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        Successfully Logged In!
      </Alert>
    </Snackbar>
  );

  const LogOutSnackbar = (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={successlogOut}
      autoHideDuration={3000}
      onClose={() => setSuccessLogOut(false)}
    >
      <Alert
        onClose={() => setSuccessLogOut(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        Log Out Successfully!
      </Alert>
    </Snackbar>
  );

  return (
    <div className="App">
      <Search />
      <Motive />
      <Quickview />

      <Categories />
      <Feature />

      {successSnackbar}
      {LogOutSnackbar}
    </div>
  );
}

export default Home;
