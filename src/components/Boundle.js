import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

import "./components.css";

const Boundle = (props) => {
  return (
    <MDBCol className="cardContainer">
      <MDBCard className="centerElements">
        <div className="cardHeader">
          <h3>
            <strong>SAVE {props.data.saving}</strong>
          </h3>
        </div>
        <MDBCardImage
          className="img-fluid cardImg"
          src={props.data.imgURL}
          waves
        />
        <MDBCardBody className="centerElementsColumn">
          <MDBCardTitle>{props.data.title}</MDBCardTitle>
          <MDBCardText>
            <ul>
              <li>Includes {props.data.features}</li>
              <li> {props.data.pageN}</li>
              <li>{props.data.linkN}</li>
              <li>{props.data.features} of Your Preference</li>
            </ul>
          </MDBCardText>
        </MDBCardBody>
        <div className="cardHeader">
          <h4>
            <strong>Price {props.data.cost}</strong>
          </h4>
        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default Boundle;
