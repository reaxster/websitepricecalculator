import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="centerElementsRow">
        <h6 className="mr-2">{"Want The Code? "}</h6>
        <h6>
          Get it On Git Hub{" "}
          <a
            href="https://github.com/reaxster/websitepricecalculator"
            target="_blank"
          >
            <strong>HERE!</strong>
          </a>
        </h6>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Reaxster SoftDev{" "}
          <a
            href="https://github.com/reaxster/websitepricecalculator"
            target="_blank"
          >
            {" "}
            GitHub Code{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
