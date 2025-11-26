import { useEffect, useState } from "react";


export default function Navbar() {
  const [active ,setActive] = useState("/");
  useEffect(()=>{
    setActive(window.location.pathname);
  },[]);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 py-3"
  
    >
      <a className="navbar-brand fs-3 fw-bold text-info" href="/">
        Bangalore Tourism
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto gap-3">

            {[
            "Home",
            "Places",
            "Food",
            "Culture",
            "Travel",
            "Reviews",
    
            "Contact",
          ].map((item) => {
            const link =
              item === "Home" ? "/" : `/${item.toLowerCase()}`;

            return (
              <li className="nav-item" key={item}>
                <a
                  href={link}
                  className="nav-link text-light"
                  style={{ transition: "0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0dcaf0")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}