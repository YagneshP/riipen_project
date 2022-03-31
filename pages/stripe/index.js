import { Payment } from "@mui/icons-material";
import PaymentValue from "./PaymentValue";
const Stripe = () => {
  
    return (
      // <div id="content">
      //   {/* <!--======= PAGES INNER =========--> */}
      //   <section class="chart-page padding-top-100 padding-bottom-100">
      //     <div class="container">
      //       {/* <!-- Payments Steps --> */}
      //       <div class="shopping-cart">
      //         {/* <!-- SHOPPING INFORMATION --> */}
      //         <div class="cart-ship-info">
      //           <div class="row">
      //             {/* <!-- ESTIMATE SHIPPING & TAX --> */}
      //             <div class="col-sm-7">
      //               <h6>BILLING DETAILS</h6>
      //               <form>
      //                 <ul class="row">
      //                   {/* <!-- Name --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *FIRST NAME
      //                       <input
      //                         type="text"
      //                         name="first-name"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- LAST NAME --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *LAST NAME
      //                       <input
      //                         type="text"
      //                         name="last-name"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   <li class="col-md-6">
      //                     {/* <!-- COMPANY NAME --> */}
      //                     <label>
      //                       COMPANY NAME
      //                       <input
      //                         type="text"
      //                         name="company"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   <li class="col-md-6">
      //                     {/* <!-- ADDRESS --> */}
      //                     <label>
      //                       *ADDRESS
      //                       <input
      //                         type="text"
      //                         name="address"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- TOWN/CITY --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       *TOWN/CITY
      //                       <input
      //                         type="text"
      //                         name="town"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- COUNTRY --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       COUNTRY
      //                       <input
      //                         type="text"
      //                         name="contry-state"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- EMAIL ADDRESS --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *EMAIL ADDRESS
      //                       <input
      //                         type="text"
      //                         name="contry-state"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- PHONE --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *PHONE
      //                       <input
      //                         type="text"
      //                         name="postal-code"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- PHONE --> */}
      //                   <li class="col-md-6">
      //                     <button type="submit" class="button-chk">
      //                       Continue
      //                     </button>
      //                   </li>
  
      //                   {/* <!-- CREATE AN ACCOUNT --> */}
      //                   <li class="col-md-6">
      //                     <div class="checkbox margin-0 margin-top-20">
      //                       <input
      //                         id="checkbox1"
      //                         class="styled"
      //                         type="checkbox"
      //                       />
      //                       <label for="checkbox1">
      //                         Ship to a different address
      //                       </label>
      //                     </div>
      //                   </li>
      //                 </ul>
      //               </form>
  
      //               {/* <!-- SHIPPING info --> */}
      //               <h6 class="margin-top-50">SHIPPING info</h6>
      //               <form>
      //                 <ul class="row">
      //                   {/* <!-- Name --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *FIRST NAME
      //                       <input
      //                         type="text"
      //                         name="first-name"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- LAST NAME --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *LAST NAME
      //                       <input
      //                         type="text"
      //                         name="last-name"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   <li class="col-md-6">
      //                     {/* <!-- COMPANY NAME --> */}
      //                     <label>
      //                       COMPANY NAME
      //                       <input
      //                         type="text"
      //                         name="company"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   <li class="col-md-6">
      //                     {/* <!-- ADDRESS --> */}
      //                     <label>
      //                       *ADDRESS
      //                       <input
      //                         type="text"
      //                         name="address"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- TOWN/CITY --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       *TOWN/CITY
      //                       <input
      //                         type="text"
      //                         name="town"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- COUNTRY --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       COUNTRY
      //                       <input
      //                         type="text"
      //                         name="contry-state"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- EMAIL ADDRESS --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *EMAIL ADDRESS
      //                       <input
      //                         type="text"
      //                         name="contry-state"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
      //                   {/* <!-- PHONE --> */}
      //                   <li class="col-md-6">
      //                     <label>
      //                       {" "}
      //                       *PHONE
      //                       <input
      //                         type="text"
      //                         name="postal-code"
      //                         value=""
      //                         placeholder=""
      //                       />
      //                     </label>
      //                   </li>
  
      //                   {/* <!-- PHONE --> */}
      //                   <li class="col-md-6">
      //                     <button type="submit" class="button-chk">
      //                       SUBMIT
      //                     </button>
      //                   </li>
      //                 </ul>
      //               </form>
      //             </div>
  <div>
                 <PaymentValue />
                </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </div>
    );
  };
  export default Stripe;
  