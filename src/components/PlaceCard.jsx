export default function PlaceCard({ title, image, description }) {
  return (
    <div
      className="card h-100 text-center"
      style={{
        background: "white",
        borderRadius: "14px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      {image && (
        <img
          src={image}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover", borderTopLeftRadius:"14px", borderTopRightRadius:"14px" }}
        />
      )}

      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{title}</h5>

        <p
          className="card-text"
          style={{
            color: "#444",     // 👈 DARK COLOR — Fully Visible
            fontSize: "0.92rem",
            lineHeight: "1.5",
            marginTop: "6px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
