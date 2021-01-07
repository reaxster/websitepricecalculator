import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import "./pages.css";

export default () => {
  return (
    <MDBContainer className="wideContainer centerElementsColumn">
      <div className="pageNotFound centerElementsColumn shadow">
        <h1 className="pageNotFound401">401</h1>
        <h1 className="pageNotFound401Msj">PAGE NOT FOUND</h1>
        <h1 className="pageNotFoundMsj">
          We're sorry, the page you requested could not be found.
        </h1>
        <h1 className="pageNotFoundMsj">
          Please, click the button below to go to the home page
        </h1>
      </div>
      <Link to="/">
        <MDBBtn outline color="success" className="mt-5">
          TAKE ME HOME!
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
};
