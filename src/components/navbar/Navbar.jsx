import React, { useEffect, useState } from "react";
import "./navbar.css";
export default function Navbar() {
  const [sCroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${sCroll && "dark"}`}>
      <span className="logo">Netflix</span>
      <span className="avatar">;)</span>
    </div>
  );
}
