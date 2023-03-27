import react, { useState } from "react";
import { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { LoginForgotPassword } from "./LoginForgotPassword";
import { LoginRegister } from "./LoginRegister";
import { RegistrationRegister } from "./RegistrationRegister";
import './Login_card.css';



const LoginCard= () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src ="script.js";
    script.src ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    script.src ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    };
  }, []);

  // -------LoginScreen--------

  const LOGIN_ACTIVE = 'Loginactive';
  const LOGIN_STANDBY = 'Loginstandby';
  const REGISTER_ACTIVE = 'RegisterActive' 

  const [login, setLogin] = useState(LOGIN_STANDBY)

  const switchTo = (switchlogin) => {
    setLogin(switchlogin)
  }

  const renderloginactive = () => (
      <>
        <div className='wrapper'>

          <span className="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>

            <div className='FormBox_login'>

              <h2>Login</h2>

              <form action="#">
                <div className="input-box">
                  <span className="icon"><ion-icon name="mail"></ion-icon></span>
                  <input type="email" name='myemail' required/>
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                  <input type="password" name='myemail' required/>
                  <label>Password</label>
                  
                </div>
                <div className="remember-forgot">
                  <lable><input type="checkbox"/>Remember me</lable>
                  <p className="LoginForgetpassword">Forgot Password?</p>

                </div>
                <button type="submit" className="btn">
                  Login
                  </button>
                  <div className="login-register-container">
                    <p>Don't have an account?</p>
                    <span className="Register">Register</span>
                  </div>

                  <p className="RegistrationLogin">Login</p>

              </form>

              
            </div>
          </div>
      </>
  );

  // -------LoginScreen--------

  const renderRegisteractive = () => (
    <>
      <div className='wrapper-Registration'>

        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>

            <div className='FormBox_Registration'>

              <h2>Registration</h2>

            <form action="#">
            <div className="input-box">
              <span className="icon"><ion-icon name="person"></ion-icon></span>
              <input type="text" name='myemail' required/>
              <label>Username</label>
            </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" name='myemail' required/>
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" name='myemail' required/>
                <label>Password</label>
                
              </div>
              <div className="remember-forgot">
                <lable><input type="checkbox"/>Remember me</lable>
                <p className="LoginForgetpassword">Forgot Password?</p>

              </div>
              <button type="submit" className="btn">
                Login
                </button>
                <div className="login-register-container">
                  <p>Already have an account?</p>
                  <span className="Register">Login</span>
                </div>

                <p className="RegistrationLogin">Login</p>

            </form>

            
          </div>
        </div>
    </>
);


      

  return(
    <>
  {login === LOGIN_ACTIVE && renderloginactive()}
  {login === REGISTER_ACTIVE && renderRegisteractive()}
   </>
  )
}

export default LoginCard;