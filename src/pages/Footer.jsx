import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 shadow-lg">
      <div className="container">
        <p className="mb-1 fw-semibold">
          © {new Date().getFullYear()} Registration Portal
        </p>
        <small className="text-light">
          Designed & Developed by{" "}
          <span className="fw-bold text-info">Abhishek</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
