import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Footer() {
  return (
    <div className="container my-5">
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "#db6930" }}
      >
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <FacebookRoundedIcon/>
          </button>
          
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <InstagramIcon/>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <TwitterIcon/>
          </button>
        </div>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 MDBootstrap.com
        </div>
      </footer>
    </div>
  );
}
