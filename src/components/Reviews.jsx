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
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) {
      alert("Please fill your name and comment.");
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
        <div className="col-lg-5">
          <div className="bg-dark border border-secondary rounded-4 p-4">
            <h3 className="h5 fw-bold text-info mb-3">Share Your Experience</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-info">Name</label>
                <input
                  className="form-control bg-black text-info"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-info">Rating</label>
                <select
                  className="form-control bg-black text-light"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                >
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label text-info">Comment</label>
                <textarea
                  rows="3"
                  className="form-control bg-black text-light"
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                ></textarea>
              </div>

              <button className="btn btn-info w-100" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="bg-dark border border-secondary rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold text-info mb-3">Visitor Reviews</h3>
            {reviews.length === 0 ? (
              <p className="text-light-50">
                No reviews yet. Be the first to share your Bangalore experience!
              </p>
            ) : (
              <div className="small">
                {reviews.map((rev, idx) => (
                  <div
                    className="mb-3 pb-2 border-bottom border-secondary"
                    key={idx}
                  >
                    <div className="d-flex justify-content-between">
                      <strong className="text-secondary">{rev.name}</strong>
                      <span className="text-info">
                        {"⭐".repeat(Number(rev.rating))}
                      </span>
                    </div>
                    <p className="mb-1 text-secondary">{rev.comment}</p>
                    <span className="text-muted" style={{ fontSize: "0.75rem" ,color:"gray"}}>
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