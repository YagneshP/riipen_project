import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
// import { useAuth } from "../hooks/useProvideAuth";

import styles from "../styles/register.module.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const { signUp } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (password === rePassword) {
      createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    } else {
      setError("Password do not match");
    }
  };

  return (
    <div className={styles.Container}>
      <h6>REGISTER</h6>
      <form>
        <ul style={{ padding: 0 }}>
          <li className={styles.Form_list}>
            <label htmlFor='first-name'> *FIRST NAME </label>
            <input
              type='text'
              name='first-name'
              value={firstName}
              placeholder='John'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </li>

          <li className={styles.Form_list}>
            <label htmlFor='last-name'> *LAST NAME </label>
            <input
              type='text'
              name='last-name'
              value={lastName}
              placeholder='Doe'
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>

          <li className={styles.Form_list}>
            <label htmlFor='contry-state'> *EMAIL ADDRESS</label>
            <input
              type='email'
              name='contry-state'
              value={email}
              placeholder='john@email.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>

          {/* <li className={styles.Form_list}>
            <label htmlFor='phone'> *PHONE </label>
            <input type='text' name='phone' value='' placeholder='' />
          </li> */}
          <li className={styles.Form_list}>
            <label htmlFor='password'>*PASSWORD</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=''
            />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='re-password'> *REPEAT PASSWORD</label>
            <input
              type='password'
              name='re-password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder=''
            />
          </li>
          {/* <li className={styles.Form_list}>
            <label htmlFor='address-1'>*ADDRESS </label>

            <input type='text' name='address-1' value='' placeholder='' />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='address-2'> *ADDRESS</label>

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
            <button type='submit' className='btn'>
              REGISTER NOW
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
