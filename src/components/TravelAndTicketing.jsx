import { useState } from "react";

export default function TravelAndTicketing() {
  const [selected, setSelected] = useState(null);

  // Travel Card Data with functionality included
  const cards = [
    {
      title: "City Bus Pass",
      icon: "bi-bus-front",
      details: `
        • Daily Pass: ₹70  
        • Weekly Pass: ₹300  
        • Monthly Pass: ₹1100  
        • Valid on all BMTC buses except airport routes  
        • Great for budget-friendly city travel  
      `,
    },
    {
      title: "Metro Smart Card",
      icon: "bi-train-front",
      details: `
        • Card Fee: ₹50  
        • Recharge: ₹10 – ₹3000  
        • 15% discount on metro travel  
        • Fast entry, no queue  
        • Accepted on Purple & Green Lines  
      `,
    },
    {
      title: "Airport Travel",
      icon: "bi-airplane-engines",
      details: `
        • Vayu Vajra AC Bus: ₹100 – ₹350  
        • Taxi Fare: ₹700 – ₹1100  
        • Shuttle services every 15 minutes  
        • 24/7 availability  
      `,
    },
    {
      title: "Online Tickets",
      icon: "bi-ticket-perforated",
      details: `
        • Lalbagh Flower Show – ₹80  
        • Bannerghatta Safari – ₹300  
        • Wonderla – ₹850  
        • Museums – ₹20 – ₹50  
        • Book online to skip queues  
      `,
    },
    {
      title: "Guided Tours",
      icon: "bi-map",
      details: `
        • Nandi Hills Sunrise Tour – ₹999  
        • Bangalore City Tour – ₹1499  
        • Mysore Day Tour – ₹1799  
        • Includes transport + guide  
      `,
    },
    {
      title: "Car & Bike Rentals",
      icon: "bi-car-front",
      details: `
        • Bike Rentals: From ₹399/day  
        • Car Rentals: From ₹999/day  
        • Valid license required  
        • Fuel charges extra  
        • Deposit refundable  
      `,
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="h3 fw-bold text-center text-info mb-5">
        Travel & Ticketing Services
      </h2>

      {/* Card Grid */}
      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-md-4 col-sm-6" key={card.title}>
            <div
              className="card bg-dark text-light shadow-lg p-4 border border-secondary rounded-4 h-100"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => setSelected(card)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <div className="text-center mb-3">
                <i
                  className={`bi ${card.icon} text-info`}
                  style={{ fontSize: "48px" }}
                ></i>
              </div>

              <h5 className="text-center fw-bold text-info">
                {card.title}
              </h5>

              <p className="text-center small text-light-50 mt-2">
                Click to view more details
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light p-4 rounded-4 border border-secondary">

              <h4 className="text-info fw-bold">{selected.title}</h4>

              <pre
                className="mt-3 text-light-50"
                style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}
              >
                {selected.details}
              </pre>

              <div className="text-end mt-3">
                <button
                  className="btn btn-info px-4"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
