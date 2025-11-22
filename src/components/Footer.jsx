export default function Footer() {
  return (
    <footer
      className="text-center text-light py-4 mt-5"
      style={{
        background: "rgba(0,0,0,0.7)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <p className="mb-0 small text-light-50">
        © {new Date().getFullYear()} Bangalore Tourism • Built by Supriya
      </p>
    </footer>
  );
}
