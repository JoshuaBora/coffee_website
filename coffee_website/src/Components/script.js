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
              <lable><input type="checkbox"/>I agree to the terms & conditions</lable>
              {/* <a href="£">Forgot password?</a> */}
            </div>
            <button type="submit" className="btn">
              Register
              </button>
              <div className="login-register">
                <p>Already have an account?</p>
              </div>
          </form>

          
        </div>