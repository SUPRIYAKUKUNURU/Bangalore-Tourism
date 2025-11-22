import { useState } from "react";

export default function TripPlanner() {
  const [form, setForm] = useState({
    days: "1 Day",
    interests: [],
  });

  const [plan, setPlan] = useState("");

  const toggleInterest = (value) => {
    setForm((prev) => {
      const exists = prev.interests.includes(value);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== value)
          : [...prev.interests, value],
      };
    });
  };

  const generatePlan = () => {
    if (form.interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    let text = `Suggested ${form.days} itinerary for Bangalore:\n\n`;

    if (form.days === "1 Day") {
      text += "- Morning: Lalbagh Botanical Garden & Breakfast near MTR.\n";
      if (form.interests.includes("Heritage")) {
        text += "- Midday: Bangalore Palace & Vidhana Soudha photo stop.\n";
      }
      if (form.interests.includes("Nature")) {
        text += "- Afternoon: Cubbon Park & MG Road walk.\n";
      }
      if (form.interests.includes("Food")) {
        text += "- Evening: VV Puram Food Street / Indiranagar cafés.\n";
      }
      if (form.interests.includes("Nightlife")) {
        text += "- Night: Church Street pubs / UB City.\n";
      }
    } else {
      text += "- Day 1: City sights (Lalbagh, Palace, MG Road, Cubbon Park).\n";
      text += "- Day 2: Nandi Hills sunrise & nearby cafés.\n";
      if (form.interests.includes("Heritage")) {
        text += "- Add: Tipu Sultan’s Summer Palace, temples.\n";
      }
      if (form.interests.includes("Nature")) {
        text += "- Add: Bannerghatta Biological Park or lakes.\n";
      }
      if (form.interests.includes("Food")) {
        text += "- Add: Local darshinis, breweries, and street food.\n";
      }
      if (form.interests.includes("Nightlife")) {
        text += "- Add: Church Street / Indiranagar evening plan.\n";
      }
    }

    setPlan(text);
  };

  const toggleClass = (value) =>
    form.interests.includes(value)
      ? "btn btn-info btn-sm me-2 mb-2"
      : "btn btn-outline-info btn-sm me-2 mb-2";

  return (
    <section className="container py-4">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="bg-dark border border-secondary rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold text-info mb-3">
              Build Your Bangalore Trip
            </h3>

            <div className="mb-3">
              <label className="form-label text-light-50">
                Trip Duration
              </label>
              <select
                className="form-control bg-black text-light"
                value={form.days}
                onChange={(e) =>
                  setForm({ ...form, days: e.target.value })
                }
              >
                <option>1 Day</option>
                <option>2 Days</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label text-light-50">
                Interests
              </label>
              <div>
                <button
                  type="button"
                  className={toggleClass("Heritage")}
                  onClick={() => toggleInterest("Heritage")}
                >
                  Heritage
                </button>
                <button
                  type="button"
                  className={toggleClass("Nature")}
                  onClick={() => toggleInterest("Nature")}
                >
                  Nature
                </button>
                <button
                  type="button"
                  className={toggleClass("Food")}
                  onClick={() => toggleInterest("Food")}
                >
                  Food
                </button>
                <button
                  type="button"
                  className={toggleClass("Nightlife")}
                  onClick={() => toggleInterest("Nightlife")}
                >
                  Nightlife
                </button>
              </div>
            </div>

            <button
              className="btn btn-info w-100 mt-2"
              onClick={generatePlan}
            >
              Generate Itinerary
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="bg-dark border border-secondary rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold text-info mb-3">
              Suggested Plan
            </h3>
            {plan ? (
              <pre
                className="text-light-50"
                style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}
              >
                {plan}
              </pre>
            ) : (
              <p className="text-light-50">
                Choose your duration and interests, then click
                <span className="text-info"> "Generate Itinerary"</span>.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
