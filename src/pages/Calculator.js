import React from "react";
import Table from "../components/Table";
import "./pages.css";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const Cakculator = () => {
  return (
    <div className="wideContainer">
      <MDBContainer className="shadow p-5 centerElementsColumn">
        <h1>Website Calculator</h1>
        <h5>
          Below, select the features you would like to add to your website.
          After finishing, you can save your custom bundle to compare with other
          offers from other developers
        </h5>

        <div className="wide">
          <hr />
          <Table className="m-5 p-5 wideContainer" />
        </div>

        <div className=" centerElementsColumn my-5">
          <h4>Nor Satisfied With The Prices?</h4>
          <h5>
            See the Bundles Created <strong> JUST</strong> for You
          </h5>
          <Link to="/bundles">
            <MDBBtn outline color="success">
              SEE BUNDLES!
            </MDBBtn>
          </Link>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Cakculator;
