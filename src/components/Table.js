import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import TableRow from "./TableRow.js";
import "./components.css";

const Table = () => {
  const staticPrice = 50;
  const dynamicPrice = 200;
  const loginPrice = 200;
  const regSupport = 50;
  const hostingSupport = 50;
  const maintenanceSupport = 50;
  const [staticPage, setStaticPage] = useState({
    quantity: 0,
    included: false,
    staticTotal: 0,
  });
  const [dynamicPage, setDynamicPage] = useState({
    quantity: 0,
    included: false,
    dynamicTotal: 0,
  });

  const [login, setLogin] = useState({
    included: false,
    total: 0,
  });

  const [reg, setReg] = useState(false);
  const [hosting, setHosting] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const handleLoginPriceInclude = () => {
    setLogin({
      included: !login.included,
      total: !login.included && !isNaN(staticPage.quantity) ? loginPrice : 0,
    });
  };

  const handleStaticPriceInclude = () => {
    setStaticPage({
      quantity: staticPage.quantity,
      included: !staticPage.included,
      staticTotal:
        !staticPage.included && !isNaN(staticPage.quantity)
          ? staticPrice * staticPage.quantity
          : 0,
    });
  };

  const handleStaticPriceQuantity = (e) => {
    setStaticPage({
      quantity: !isNaN(e.target.value) ? parseInt(e.target.value) : 0,
      included: staticPage.included,
      staticTotal: staticPage.included ? staticPrice * e.target.value : 0,
    });
  };

  //TODO:--------------------------------------
  const handleDynamicPriceInclude = () => {
    setDynamicPage({
      quantity: dynamicPage.quantity,
      included: !dynamicPage.included,
      dynamicTotal:
        !dynamicPage.included && !isNaN(dynamicPage.quantity)
          ? dynamicPrice * dynamicPage.quantity
          : 0,
    });
  };

  const handleDynamicPriceQuantity = (e) => {
    setDynamicPage({
      quantity: !isNaN(e.target.value) ? parseInt(e.target.value) : 0,
      included: dynamicPage.included,
      dynamicTotal: dynamicPage.included ? dynamicPrice * e.target.value : 0,
    });
  };

  return (
    <div>
      <MDBTable hover className="shadow">
        <MDBTableHead>
          <tr>
            <th>Feature</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Include</th>
            <th>Total</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <TableRow
            title="Static Page"
            quantity={staticPage.quantity}
            handleQuantity={handleStaticPriceQuantity}
            price={staticPrice}
            included={staticPage.included}
            handleIncluded={handleStaticPriceInclude}
            total={staticPage.staticTotal}
            quantityField={true}
          />
          <TableRow
            title="Dynamic Page"
            quantity={dynamicPage.quantity}
            handleQuantity={handleDynamicPriceQuantity}
            price={dynamicPrice}
            included={dynamicPage.included}
            handleIncluded={handleDynamicPriceInclude}
            total={dynamicPage.dynamicTotal}
            quantityField={true}
          />
          <TableRow
            title="Login Feature"
            included={login.included}
            handleIncluded={handleLoginPriceInclude}
            total={login.total}
            quantityField={false}
          />
        </MDBTableBody>
      </MDBTable>
      <div className="tableTotal">
        <h5>
          <strong>
            TOTAL PRICE:{" $"}
            {staticPage.staticTotal + dynamicPage.dynamicTotal + login.total}
          </strong>
        </h5>
      </div>
    </div>
  );
};

export default Table;
