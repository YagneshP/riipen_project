import styles from "../styles/register.module.css";

export default function Register() {
  return (
    <div className={styles.Container}>
      <h6>REGISTER</h6>
      <form>
        <ul style={{ padding: 0 }}>
          <li className={styles.Form_list}>
            <label htmlFor='first-name'> *FIRST NAME </label>
            <input type='text' name='first-name' value='' placeholder='' />
          </li>

          <li className={styles.Form_list}>
            <label htmlFor='last-name'> *LAST NAME </label>
            <input type='text' name='last-name' value='' placeholder='' />
          </li>

          <li className={styles.Form_list}>
            <label htmlFor='contry-state'> *EMAIL ADDRESS</label>
            <input type='text' name='contry-state' value='' placeholder='' />
          </li>

          <li className={styles.Form_list}>
            <label htmlFor='phone'> *PHONE </label>
            <input type='text' name='phone' value='' placeholder='' />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='password'>*PASSWORD</label>
            <input type='password' name='password' value='' placeholder='' />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='re-password'> *PASSWORD</label>
            <input type='password' name='re-password' value='' placeholder='' />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='address-1'>*ADDRESS </label>

            <input type='text' name='address-1' value='' placeholder='' />
          </li>
          <li className={styles.Form_list}>
            <label htmlFor='address-2'> *ADDRESS</label>

            <input type='text' name='address-2' value='' placeholder='' />
          </li>

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
            <button type='submit' class='btn'>
              REGISTER NOW
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
