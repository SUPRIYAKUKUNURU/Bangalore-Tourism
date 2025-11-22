export default function PlaceCard({ title, image, description }) {
  return (
    <div
      className="card h-100 bg-dark text-light shadow-lg border-0"
      style={{
        borderRadius: "16px",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
    >
      {image && (
        <img
          src={image}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      )}

      <div className="card-body p-4">
        <h5 className="card-title fw-bold text-info">{title}</h5>
        <p className="card-text small text-light-50 mt-2">{description}</p>
      </div>
    </div>
  );
}
