import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push("/logged_in");
    } catch (error) {
      console.log("Error in signIn component");
    }
  };
  return (
    <section>
      <div className='container'>
        <div className='row form_container'>
          <div className='col-sm-7'>
            <h6>LOGIN YOUR ACCOUNT</h6>
            <form onSubmit={handleSubmit}>
              <ul className='row ul_row'>
                <li className='col-md-12 mb-3'>
                  <label htmlFor='email' className='form-label'>
                    EMAIL
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    className='form-control'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=''
                  />
                </li>

                <li className='col-md-12 mb-3'>
                  <label htmlFor='password' className='form-label'>
                    PASSWORD{" "}
                  </label>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    className='form-control'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=''
                  />
                </li>

                <li className='col-md-4'>
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

          <div className='col-sm-5 social_links'>
            <h6>LOGIN WITH</h6>

            <ul className='login-with'>
              <li>
                <a href='#.'>
                  <i className='fa fa-facebook'></i>FACEBOOK
                </a>
              </li>

              <li>
                <a href='#.'>
                  <i className='fa fa-google'></i>GOOGLE
                </a>
              </li>

              <li>
                <a href='#.'>
                  <i className='fa fa-twitter'></i>TWITTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
