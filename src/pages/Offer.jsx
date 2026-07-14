import "../css/Offer.css";

function Offer() {

  const offers = [
    {
      title: "50% OFF",
      description: "Get 50% discount on your first order.",
      code: "WELCOME50",
      valid: "Valid Till: 31 July",
    },
    {
      title: "Free Delivery",
      description: "Free delivery on orders above ₹499.",
      code: "FREEDEL",
      valid: "Every Weekend",
    },
    {
      title: "Buy 1 Get 1",
      description: "Buy one pizza and get another absolutely free.",
      code: "BOGO",
      valid: "Friday Special",
    },
    {
      title: "20% Cashback",
      description: "Pay using UPI and get instant cashback.",
      code: "UPI20",
      valid: "Limited Time",
    },
    {
      title: "Family Combo",
      description: "Save up to ₹300 on family meals.",
      code: "FAMILY300",
      valid: "Daily Offer",
    },
    {
      title: "Student Discount",
      description: "Extra 15% OFF for students.",
      code: "STUDENT15",
      valid: "Student ID Required",
    }
  ];

  return (
    <section className="offers">

      <div className="offer-heading">
        <h1>Special Offers</h1>
        <p>Enjoy amazing discounts and exclusive deals every day.</p>
      </div>

      <div className="offer-grid">

        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>

            <span className="badge">HOT DEAL</span>

            <h2>{offer.title}</h2>

            <p>{offer.description}</p>

            <h4>Coupon</h4>

            <div className="coupon">
              {offer.code}
            </div>

            <small>{offer.valid}</small>

            <button>Claim Offer</button>

          </div>
        ))}

      </div>

      <div className="offer-banner">

        <h2>🎉 Weekend Mega Sale</h2>

        <p>
          Get Flat 40% OFF + Free Delivery on orders above ₹699.
        </p>

        <button>Shop Now</button>

      </div>

    </section>
  );
}

export default Offer;

