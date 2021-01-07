import React from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "./pages.css";

const Home = () => {
  return (
    <div className="wideContainer centerElementsColumn">
      <MDBContainer className="centerElementsColumn">
        <div className="centerElementsColumn">
          <h1>Welcome To Website Builder</h1>
          <h1>Price Calculator</h1>
        </div>

        <p className="centerText">
          This was developed by Reaxster SoftDev to Offer a better insight of
          the estimate costs, prices, and budged that the user should be aware
          of before building a website
        </p>
        <Link to="/calculator">
          <MDBBtn outline color="success">
            CALCULATE NOW!
          </MDBBtn>
        </Link>
      </MDBContainer>
    </div>
  );
};

export default Home;
