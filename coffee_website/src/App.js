import './coffee_website.css';
import logo from './Images/Icons/The_Bean_Logo.png';
import coffeeBeansStacked from "./Images/Coffee_Beans_Stacked.png";
import coffeeBeansStackedMenu from "./Images/Coffee_Beans_Stacked_Menu.png";
import SideCoffeeLeft from "./Images/Side_coffee_Left.png";
import SideCoffeeRight from "./Images/Side_coffee_Right.png";
import DailyBrew from "./Images/Icons/coffee-cup.png";
import FrenchCoffee from './Images/Icons/french-press.png';
import doubleshot from './Images/Icons/cold-coffee.png';
import expresso from './Images/Icons/expresso.png';
import { useState } from 'react';
import { useEffect } from 'react';
import CoffeeCard from './Coffee_card';
import LoginCard from './Components/Login_Card';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './Components/Cart.css';
import "./Components/Login_card.css";
import './Components/MediaQ.css'






function App() {

  const [card, setcard] = useState([
    { price:"$2.50" , image: DailyBrew , info: "Daily blend brewed fresh infront of you", key: 1 },
    { price:"$2.50" , image: FrenchCoffee , info: "French Press freshly brewed for you and your friends", key: 2 },
    { price:"$2.50" , image: doubleshot , info: "Double shot expresso", key: 3 },
    { price:"$2.50" , image: expresso , info: "Double shot expresso", key: 4 },
  ]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    script.src ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    };
  }, []);


  const PAGE_HOME = 'home';
  const PAGE_CART = 'cart';
  const LOGIN_ACTIVE = 'Loginactive';
  const LOGIN_STANDBY = 'Loginstandby';
  const REGISTER_ACTIVE = 'RegisterActive';

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_HOME)
  const [login, setLogin] = useState(LOGIN_STANDBY)

  const addtoCart= (card) => {
    setCart([...cart, {...card}]);
  };

  const removeFromCart= (cardToRemove) => {
    setCart(
    cart.filter((card) => card !== cardToRemove)
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
  
  <>
     {card.map((card) => (
        
        <div className="Daily_Blend_Container" key={card.key}>

          <p className="Price">{card.price}</p>

          <img className="Daily_Blend_Img" src={card.image} alt="coffee Image"/>

          <p className="CoffeeInfo">{card.info}</p>

          <button onClick={() => addtoCart(card)} className='AddToCart'>Add to Cart</button>

        </div>
      

      ))}
  </>)


const rendercart = () => (
  

    <>
      <div className="cart_wrapper">
        <button onClick={() => navigateTo(PAGE_HOME)} className="Cart-icon-close">
          <ion-icon name="close"></ion-icon>
        </button>
        <h1>Cart</h1>

        <span className='cartItems'>
        {cart.map((card) => (
        
        <div className="Daily_Blend_Container_cart" key={card.key}>

          <p className="Price">{card.price}</p>

          <img className="Daily_Blend_Img" src={card.image} alt="coffee Image"/>

          <p className="CoffeeInfo">{card.info}</p>

          <button onClick={() => removeFromCart(card)} className='AddToCart'>Remove from Cart</button>

        </div>
      

      ))}
      </span>

      </div>
    </>
)

// -------LoginScreen--------


const switchTo = (switchlogin) => (
  setLogin(switchlogin)
);

const renderloginactive = () => (
    <>
      <div className='wrapper'>

        <span onClick={() => switchTo(LOGIN_STANDBY)} className="icon-close">
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
                  <span onClick={() => switchTo(REGISTER_ACTIVE)} className="Register">Register</span>
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

      <span onClick={() => switchTo(LOGIN_STANDBY)} className="icon-close">
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
                <span onClick={() => switchTo(LOGIN_ACTIVE)} className="Register">Login</span>
              </div>

              <p className="RegistrationLogin">Login</p>

          </form>

          
        </div>
      </div>
  </>
);

    
// -------LoginScreen--------
    
  
  return (
  <div className="Body">

<a  className='ToTopBtn' href='#Home'><ion-icon name="arrow-up-circle"></ion-icon></a>

    <div id="Home" className="Home">
     
     <nav className="navigation">
      
      <a href="#">Home</a>
      <a href="#Types">Types</a>
      <a href="#Menu">Shopping</a>
      <a href="#ContactUsPage">Contact us</a>

      
      
    
      </nav>

      <button onClick={() => navigateTo(PAGE_CART)} className='CartBtn'><ion-icon name="cart"></ion-icon><span className='ItemAmount'>{cart.length}</span></button>
      <button onClick={() => switchTo(LOGIN_ACTIVE)} className="login">Login</button>

      {login === LOGIN_ACTIVE && renderloginactive()}
      {login === REGISTER_ACTIVE && renderRegisteractive()}
      {page === PAGE_CART && rendercart()}

      <img className="The_Bean_logo" src={logo}/>

      <p className="Taste_Power">TASTE<span className="Power">POWER</span></p>

      

    </div>

    <div  className="Types">

      <div id='Types' className="Our_Types_Coffee">
        
        Our Types Of Coffee
        
      </div>

      <div className="coffeePacks">

      <img className="SideCoffeeLeft" src={SideCoffeeLeft}/>
      <img className="SideCoffeeRight" src={SideCoffeeRight}/>
      <img className="coffee_beans_stacked" src={coffeeBeansStacked}/>

      </div>
    </div>

    <div  className="Menu">

      <p id='Menu' className='OurMenu'>Our Menu</p>
    
      {page === PAGE_CART && renderProducts()}
      {page === PAGE_HOME && renderProducts()}

    </div>

    <div  className='ContactUsPage'>
        
        <div className='ContactUsCard'>

        <img className="ContactBeanLogo" src={logo}/>


          </div>
          <div className='Address'>

            <p>Address</p>
            <p>Cloud Gate, 201 E Randolph St, Chicago, IL 60602, United States</p>

          </div>
          <label id='ContactUsPage' className='Emailer'>

            <input type='text' className='Email' name="myInput" placeholder='Email'/>
            <textarea className='Messsage' name="myMessage" placeholder='Message' rows="2" cols="40"/>
            <button className='SendEmail'>Send Email</button>
            
          </label>

        </div>

    
      </div>
      
  );
}


export default App;
