import Link from "next/link";

const ShippingMethod = () => {
  return (
    <div id="privacy-shipping">
      <div id="wrap">
        <div id="content">
          <section className="history-block padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-xs-10 center-block">
                  <div className="vision-text">
                    <div className="col-lg-5">
                      <h2>Shipping And Returns</h2>
                    </div>
                    <br />

                    <div className="col-lg-7">
                      <p>
                        {" "}
                        <div className="title"> Shipping </div>
                        <br />
                        All Orders are processed within 2-3 business days.
                        Orders are not shipped or delivered on weekends or
                        holidays. If We are experiencing a high volume of
                        orders, shipments may be delayed by a few days. Please
                        allow additional days in transit for delivery. If there
                        will be a significant delay in shipment of Your Order,
                        We will contact You via email or telephone.
                        <br />
                        <br />
                        <div className="title">
                          Shipping rates & delivery estimates
                        </div>
                        <br />
                        Shipping charges for Your Orders will be calculated and
                        displayed at checkout.
                        <br />
                        <br />
                        <ul className="column">
                          <li>
                            <div className="bold">
                              Shipping method: FedEx Standard Shipment
                            </div>
                            Cost: Free
                            <br />
                            Estimated delivery time: 3-5 business days
                          </li>
                          <br />
                          <li>
                            <div className="bold">
                              Shipping method: FedEx Expedited Shipment
                            </div>
                            Cost: $9.99
                            <br />
                            Estimated delivery time: 2-3 business days
                          </li>
                          <br />
                          <li>
                            <div className="bold">
                              Shipping method: FedEx Priority Shipment
                            </div>
                            Cost: $12.95
                            <br />
                            Estimated delivery time: 1-2 business days
                          </li>
                        </ul>
                        <br />
                        <div className="bold ">
                          {" "}
                          Note: Overnight delivery is only available for Orders
                          with delivery addresses within the continental United
                          States. Delivery delays can occasionally occur.
                        </div>
                        <br />
                        <br />
                        <div className="title">
                          Shipment to P.O. boxes or APO/FPO addresses
                        </div>
                        
                        Ecoshop delivers to addresses in the Canada, and
                        APO/FPO/DPO addresses.
                        <br />
                        <br />
                        <div className="title">
                          Shipment confirmation & Order tracking
                        </div>
                        
                        Once your order has shipped, you will receive a Shipment
                        Confirmation Email with your tracking number (s). Within
                        24 hours, the tracking number will be active.
                        <br />
                        <br />
                        <div className="title">Customs, Duties and Taxes</div>
                        Ecoshop is not liable for any customs or taxes that may
                        be imposed on Your order. All fees imposed during or
                        after shipping are the customer&apos;s responsibility
                        (tariffs, taxes)
                        <br />
                        <br />
                        <div className="title">Damages</div>
                        Ecoshop is not responsible for any products that are
                        damaged or lost in transit. Please contact the shipment
                        carrier to file a claim if your order arrived damaged.
                        <br />
                        <br />
                        <div className="title">Returns </div>
                        
                        We want you to be happy. If for any reason you are not
                        satisfied with your purchase from ecoshop and wish to
                        return it for a refund, we accept returns up to 14 days
                        after delivery. <br />
                        <br />
                        <br />
                        <div className="title">Contat us</div>
                        
                        If you have any questions about this Shipping Policy,
                        You can contact Us by submitting your question using out
                        form <Link href="/contact">here</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
