import React from "react";
import Boundle from "../components/Boundle";
import BoundleData from "../data/BoundleData";
import { MDBContainer, MDBBtn } from "mdbreact";
import "./pages.css";
import { Link } from "react-router-dom";
const Boundles = () => {
  const allOffers = BoundleData.data.map((data) => <Boundle data={data} />);
  return (
    <div>
      <MDBContainer className=" centerElementsColumn wideContainer shadow">
        <div>
          <h1 className="my-5">Bundles For You!</h1>
        </div>
        <div className="centerElementsRow"> {allOffers}</div>
        <div className=" centerElementsColumn my-5">
          <h4>Don't Like Our Bundles?</h4>
          <h5>Build Your Own Custom Bundle</h5>
          <Link to="/calculator">
            <MDBBtn outline color="success">
              CALCULATE NOW!
            </MDBBtn>
          </Link>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Boundles;
