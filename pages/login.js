import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import styles from "../styles/register.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      console.log("Error in signIn component");
    }
  };
  return (
    <div className={styles.Container}>
      <div className='shopping-cart'>
        <div className='cart-ship-info'>
          <div className='row'>
            <div className='col-sm-7'>
              <h6>LOGIN YOUR ACCOUNT</h6>
              <form onSubmit={handleSubmit}>
                <ul className='row'>
                  <li className={styles.Form_list}>
                    <label htmlFor='email'>EMAIL</label>
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=''
                    />
                  </li>

                  <li className={styles.Form_list}>
                    <label htmlFor='password'>PASSWORD </label>
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=''
                    />
                  </li>

                  <li className={styles.Form_list}>
                    <button type='submit' className='btn'>
                      LOGIN
                    </button>
                  </li>
                  {/* 
                  <li className ='col-md-4'>
                    <div className ='checkbox margin-0 margin-top-20'>
                      <input id='checkbox1' className ='styled' type='checkbox' />
                      <label htmlFor='checkbox1'> Stay me Login</label>
                    </div>
                  </li>

                  <li className ='col-md-4'>
                    <div className ='checkbox margin-0 margin-top-20 text-right'>
                      <a href='#.'>Forget Password</a>
                    </div>
                  </li> */}
                </ul>
              </form>
            </div>

            <div className='col-sm-5'>
              <h6>LOGIN WITH</h6>

              <ul className='login-with'>
                <li className={styles.SocialLink}>
                  <a href='#.'>
                    <i className='fa fa-facebook'></i>FACEBOOK
                  </a>
                </li>

                <li className={styles.SocialLink}>
                  <a href='#.'>
                    <i className='fa fa-google'></i>GOOGLE
                  </a>
                </li>

                <li className={styles.SocialLink}>
                  <a href='#.'>
                    <i className='fa fa-twitter'></i>TWITTER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
