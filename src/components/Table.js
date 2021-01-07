import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import TableRow from "./TableRow.js";
import TableNotes from "./TableNotes";
import "./components.css";
import PRICES from "../constants/PRICES";

const Table = () => {
  const [staticPage, setStaticPage] = useState({
    quantity: 0,
    included: false,
  });
  const [dynamicPage, setDynamicPage] = useState({
    quantity: 0,
    included: false,
  });

  const staticPrice =
    staticPage.quantity + dynamicPage.quantity > 15 &&
    staticPage.included &&
    dynamicPage.included
      ? PRICES.staticPrice2
      : PRICES.staticPrice;
  const dynamicPrice =
    staticPage.quantity + dynamicPage.quantity > 15 &&
    staticPage.included &&
    dynamicPage.included
      ? PRICES.dynamicPrice2
      : PRICES.dynamicPrice;
  const loginPrice = PRICES.loginPrice;
  const databasePrice = PRICES.databasePrice;
  const supportPrice = PRICES.supportPrice;

  const [login, setLogin] = useState({
    included: false,
    total: 0,
  });
  const [database, setDatabase] = useState({
    included: false,
    total: 0,
  });

  const [support, setSupport] = useState({
    included: false,
    total: 0,
  });

  const handleSupportPriceInclude = () => {
    setSupport({
      included: !support.included,
      total: !support.included ? supportPrice : 0,
    });
  };

  const handleDatabasePriceInclude = () => {
    setDatabase({
      included: !database.included,
      total: !database.included ? databasePrice : 0,
    });
  };
  const handleLoginPriceInclude = () => {
    setLogin({
      included: !login.included,
      total: !login.included ? loginPrice : 0,
    });
  };

  const handleStaticPriceInclude = () => {
    setStaticPage({
      quantity: staticPage.quantity,
      included: !staticPage.included,
    });
  };

  const handleStaticPriceQuantity = (e) => {
    setStaticPage({
      quantity: !isNaN(e.target.value) ? parseInt(e.target.value) : 0,
      included: staticPage.included,
    });
  };
  const staticTotal =
    staticPage.included && !isNaN(staticPage.quantity)
      ? staticPrice * staticPage.quantity
      : 0;

  const dynamicTotal =
    dynamicPage.included && !isNaN(dynamicPage.quantity)
      ? dynamicPrice * dynamicPage.quantity
      : 0;

  const handleDynamicPriceInclude = () => {
    setDynamicPage({
      quantity: dynamicPage.quantity,
      included: !dynamicPage.included,
    });
  };

  const handleDynamicPriceQuantity = (e) => {
    setDynamicPage({
      quantity: !isNaN(e.target.value) ? parseInt(e.target.value) : 0,
      included: dynamicPage.included,
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
            total={staticTotal}
            quantityField={true}
          />
          <TableRow
            title="Dynamic Page"
            quantity={dynamicPage.quantity}
            handleQuantity={handleDynamicPriceQuantity}
            price={dynamicPrice}
            included={dynamicPage.included}
            handleIncluded={handleDynamicPriceInclude}
            total={dynamicTotal}
            quantityField={true}
          />
          <TableRow
            title="Login Feature"
            included={login.included}
            price={loginPrice}
            handleIncluded={handleLoginPriceInclude}
            total={login.total}
            quantityField={false}
          />
          <TableRow
            title="Database"
            included={database.included}
            price={databasePrice}
            handleIncluded={handleDatabasePriceInclude}
            total={database.total}
            quantityField={false}
          />
          <TableRow
            title="Support Service"
            included={support.included}
            price={supportPrice}
            handleIncluded={handleSupportPriceInclude}
            total={support.total}
            quantityField={false}
          />
        </MDBTableBody>
      </MDBTable>
      <div className="tableTotal">
        <h5>
          <strong>
            TOTAL PRICE:{" $"}
            {staticTotal +
              dynamicTotal +
              login.total +
              database.total +
              support.total}
          </strong>
        </h5>
      </div>
      <hr />
      <TableNotes />
      <hr />
    </div>
  );
};

export default Table;
