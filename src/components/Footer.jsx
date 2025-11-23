export default function Footer() {
  return (
    <footer
      className="text-center text-light py-3 mt-2"
      style={{
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="mb-1 small text-light-50">
        © {new Date().getFullYear()} Bangalore Tourism
      </p>

      <p className="mb-0 small text-info" style={{ letterSpacing: "0.5px" }}>
        Made with{" "}
        <i
          className="bi bi-heart-fill"
          style={{ color: "red", margin: "0 4px" }}
        ></i>
        by <span className="fw-bold text-info">Supriya</span>
      </p>
    </footer>
  );
}
