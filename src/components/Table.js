import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from "mdbreact";

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
  const [login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);
  const [hosting, setHosting] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const handleStaticPriceInclude = () => {
    setStaticPage({
      included: !staticPage.included,
      staticTotal: parseInt(parseInt(staticPage.quantity) * staticPrice),
    });
    if (staticPage.included || typeof staticPage.quantity === "number")
      setStaticPage({
        staticTotal: staticPage.quantity * staticPrice,
      });
    else return setStaticPage({ staticTotal: 0 });
  };
  const handleDynamicPriceInclude = () => {
    setDynamicPage({
      included: !dynamicPage.included,
    });
    console.log("Dynamic Page " + dynamicPage.included);
  };

  const handleStaticPriceQuantity = (e) => {
    setStaticPage({
      quantity: e.target.value,
      staticTotal: parseInt(parseInt(staticPage.quantity) * staticPrice),
    });
  };

  return (
    <MDBTable hover className="shadow">
      <h1>TOTALS: {staticPage.staticTotal}</h1>
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
        <tr>
          <td>Static Pages</td>

          <td>
            <input
              style={{ width: 25 }}
              type="text"
              value={staticPage.quantity}
              onChange={handleStaticPriceQuantity}
            />
          </td>

          <td>${staticPrice}/Page</td>
          <td>
            <input
              style={{ width: 25 }}
              type="checkbox"
              checked={staticPage.included}
              onChange={handleStaticPriceInclude}
            />
          </td>
          <td>${staticPage.staticTotal}</td>
        </tr>
        <tr>
          <td>DynamicPages</td>

          <td>
            <input style={{ width: 25 }} type="text" />
          </td>

          <td>${dynamicPrice}/Page</td>
          <td>
            <input
              style={{ width: 25 }}
              type="checkbox"
              checked={dynamicPage.included}
              onChange={handleDynamicPriceInclude}
            />
          </td>
          <td>$VAR</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default Table;
