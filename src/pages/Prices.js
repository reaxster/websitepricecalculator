import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import "./pages.css";

export default () => {
  return (
    <MDBContainer className="wideContainer centerElementsColumn">
      <div className="prices centerElementsColumn shadow">
        <h1 className="pricesHeader">COMING SOON</h1>

        <h1 className="pricesMsj1">
          We will have new better prices, features, and more, ready for you
          soon!
        </h1>
        <h1 className="pricesMsj2">
          In the meantime, please, click the button below to go to the
          Calculator
        </h1>
      </div>
      <Link to="/calculator">
        <MDBBtn outline color="success" className="mt-5">
          GET YOUR PRICE!
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
};
