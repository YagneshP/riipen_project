import Image from "next/image";
import Form from "../../components/account/Form";

const Account = () => {
  return ( 
    <div className="account-page">
      <div className="account-details">
        <h1>Account Details</h1>
        <Image
          className="account-profile-img"
          src="https://via.placeholder.com/250x250.png"
          alt="Profile"
          width="250px"
          height="250px"
        />
        <div className="personal-info">

        </div>
      </div>
      <div className="account-page-form">
        <Form />
      </div>
    </div>
   );
}
 
export default Account;