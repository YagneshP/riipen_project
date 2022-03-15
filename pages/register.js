import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { useRouter } from "next/router";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const { signUp } = useContext(AuthContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      //check if passwords match. If they do, create user in Firebase
      // and redirect to home page.
      if (password === rePassword) {
        const user = await signUp(email, password);
        router.push("/logged_in"); // redirect user to home page [could be change depend on history location]
      } else {
        setError("Password do not match");
      }
    } catch (e) {
      console.log("erorr:", e);
    }
  };

  return (
    <section>
      <div className='container'>
        <div className='row form_container'>
          <div className='col-sm-12'>
            <h6>REGISTER</h6>
            <form onSubmit={handleSubmit}>
              <ul className='row ul_row'>
                <li className='col-md-6 mb-3'>
                  <label className='form-label' htmlFor='first-name'>
                    {" "}
                    *FIRST NAME{" "}
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    className='form-control'
                    value={firstName}
                    placeholder='John'
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    style={{ borderColor: "#2D3A4b" }}
                  />
                </li>

                <li className='col-md-6 mb-3'>
                  <label className='form-label' htmlFor='last-name'>
                    {" "}
                    *LAST NAME{" "}
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    value={lastName}
                    placeholder='Doe'
                    className='form-control'
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </li>

                <li className='col-md-6 mb-3'>
                  <label className='form-label' htmlFor='contry-state'>
                    {" "}
                    *EMAIL ADDRESS
                  </label>
                  <input
                    type='email'
                    name='contry-state'
                    value={email}
                    className='form-control'
                    placeholder='john@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </li>

                {/* <li className="col-md-6">
            <label className="form-label" htmlFor='phone'> *PHONE </label>
            <input type='text' name='phone' value='' placeholder='' />
          </li> */}
                <li className='col-md-6 mb-3'>
                  <label className='form-label' htmlFor='password'>
                    *PASSWORD
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
                <li className='col-md-6 mb-3'>
                  <label className='form-label' htmlFor='re-password'>
                    {" "}
                    *REPEAT PASSWORD
                  </label>
                  <input
                    type='password'
                    name='re-password'
                    value={rePassword}
                    className='form-control'
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder=''
                  />
                </li>
                {/* <li className="col-md-6">
            <label className="form-label" htmlFor='address-1'>*ADDRESS </label>

            <input type='text' name='address-1' value='' placeholder='' />
          </li>
          <li className="col-md-6">
            <label className="form-label" htmlFor='address-2'> *ADDRESS</label>

            <input type='text' name='address-2' value='' placeholder='' />
          </li> */}

                {/* <li>
            <label>
              {" "}
              COUNTRY
              <select class='selectpicker' name='contry-state' tabindex='-98'>
                <option>COUNTRY</option>
                <option>Country 2</option>
                <option>Country 3</option>
              </select>
            </label>
          </li>

          <li>
            <label>
              *TOWN/CITY
              <input type='text' name='town' value='' placeholder='' />
            </label>
          </li> */}

                <li>
                  <button type='submit' className='btn mb-3'>
                    REGISTER NOW
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
