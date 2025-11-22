export default function Hero() {
  return (
    <section className="position-relative overflow-hidden">
      <img
        src="https://t4.ftcdn.net/jpg/03/11/94/23/240_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg"
        className="w-100 hero-img"
        style={{
          maxHeight: "80vh",
          objectFit: "cover",
          filter: "brightness(60%)",
        //   animation: "zoomIn 10s ease-in-out infinite alternate",
        }}
      />

     <div
  className="position-absolute top-0 start-0 w-100 h-100 
         d-flex flex-column justify-content-center align-items-center text-center p-4"
  style={{
    background: "rgba(0, 0, 0, 0.25)",   // soft transparent overlay
  }}
>
  <h1 className="display-2 fw-bold text-info mb-3">
    Welcome to Bangalore
  </h1>

  <p className="lead text-light" style={{ maxWidth: "750px" }}>
    Discover the Silicon Valley of India — where innovation meets tradition.
  </p>
</div>


      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeInUp 1.5s ease;
        }
      `}</style>
    </section>
  );
}
