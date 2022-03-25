import Image from "next/image";
import { useState } from "react";
import Form from "../../components/account/Form";
import OrderHistory from "../../components/account/OrderHistory";

const Account = () => {
  const [display, setDisplay] = useState("personalInfo");

  const mockUserData = {
    firstName: "John",
    lastName: "Doe",
    phoneNum: 4165555555,
    email: "johndoe@gmail.com",
    streetAddress: "1 River St.",
    unitNum: "43B",
    city: "Toronto",
    provinceState: "ON",
    zip: "A1A 1A1",
    country: "Canada",
  };

  const selectInfo = display === "personalInfo" ? "active" : "";
  const selectHistory = display === "orderHistory" ? "active" : "";

  return (
    <div className="account-page">
      <div className="account-details">
        <h1>Account Details</h1>
        <ul className="account-page-links">
          <li className={selectInfo} onClick={() => setDisplay("personalInfo")}>
            Personal Information
          </li>
          <li
            className={selectHistory}
            onClick={() => setDisplay("orderHistory")}
          >
            Order History
          </li>
        </ul>
        <div className="personal-info"></div>
      </div>
      <div className="account-page-form">
        {display === "personalInfo" ? (
          <Form user={mockUserData} />
        ) : (
          <OrderHistory />
        )}
      </div>
    </div>
  );
};

export default Account;
