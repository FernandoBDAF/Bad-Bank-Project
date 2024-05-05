import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center mt-3">
      <div className="container p-2">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="text-uppercase">BadBank</h5>
            <p>
              Providing reliable banking transactions for over a decade. Learn more about how we work and our commitment to customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} BadBank, Inc.
      </div>
    </footer>
  );
}