import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rating: "5",
    comment: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("blr_reviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.comment) {
      alert("Please enter your name and comment.");
      return;
    }

    const newReview = {
      ...form,
      date: new Date().toLocaleDateString(),
    };

    const newList = [newReview, ...reviews];
    setReviews(newList);
    localStorage.setItem("blr_reviews", JSON.stringify(newList));

    setForm({ name: "", rating: "5", comment: "" });
  };

  return (
    <section className="container pb-5">
      <div className="row g-4">

        {/* LEFT SIDE - FORM */}
        <div className="col-lg-5">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              background: "white",
              border: "1px solid #ddd",
            }}
          >
            <h3 className="h5 fw-bold text-primary mb-3">
              Share Your Experience
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Name</label>
                <input
                  className="form-control"
                  style={{
                    background: "#f8f9fa",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                  }}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              {/* Rating */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                  Rating
                </label>
                <select
                  className="form-control"
                  style={{
                    background: "#f8f9fa",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                  }}
                  value={form.rating}
                  onChange={(e) =>
                    setForm({ ...form, rating: e.target.value })
                  }
                >
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>
              </div>

              {/* Comment */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                  Comment
                </label>
                <textarea
                  rows="3"
                  className="form-control"
                  style={{
                    background: "#f8f9fa",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                  }}
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                className="btn w-100"
                style={{
                  borderRadius: "10px",
                  background: "#0d6efd",
                  color: "white",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - REVIEWS */}
        <div className="col-lg-7">
          <div
            className="p-4 rounded-4 shadow-sm h-100"
            style={{
              background: "white",
              border: "1px solid #ddd",
            }}
          >
            <h3 className="h5 fw-bold text-primary mb-3">
              Visitor Reviews
            </h3>

            {reviews.length === 0 ? (
              <p className="text-muted">
                Be the first to share your Bangalore travel experience!
              </p>
            ) : (
              <div className="small">
                {reviews.map((rev, idx) => (
                  <div
                    className="mb-3 pb-3 border-bottom"
                    style={{ borderColor: "#ddd" }}
                    key={idx}
                  >
                    <div className="d-flex justify-content-between">
                      <strong className="text-dark">{rev.name}</strong>
                      <span style={{ color: "#f5c518" }}>
                        {"⭐".repeat(Number(rev.rating))}
                      </span>
                    </div>

                    <p className="mb-1 text-secondary">{rev.comment}</p>

                    <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                      {rev.date}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
