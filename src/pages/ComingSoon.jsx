import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="mb-4">Working On It</h1>
              <p className="mb-4">
                We are sorry, the page you have looked for we are working on it
                and will try to make it available for you as soon as possible.
              </p>
              <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
