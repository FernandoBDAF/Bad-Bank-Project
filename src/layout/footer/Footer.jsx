import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">BadBank</h5>
            <p>
              Providing reliable banking transactions for over a decade. Learn more about how we work and our commitment to customer service.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/about" className="text-dark">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark">Services</Link>
              </li>
              <li>
                <Link to="/support" className="text-dark">Support</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq" className="text-dark">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-dark">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-dark">Terms of Use</Link>
              </li>
              <li>
                <Link to="/careers" className="text-dark">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} BadBank, Inc.
      </div>
    </footer>
  );
}