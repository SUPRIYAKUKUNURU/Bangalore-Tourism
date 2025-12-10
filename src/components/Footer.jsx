export default function Footer() {
  return (
    <footer className="text-center py-3 mt-4">
      <p className="mb-1 small">© {new Date().getFullYear()} Bangalore Tourism</p>

      <p className="mb-0 small">
        Made with{" "}
        <i className="bi bi-heart-fill" style={{ color: "red" }}></i> by{" "}
        <span className="fw-bold text-primary">Supriya Kukunuru</span>
      </p>
    </footer>
  );
}
