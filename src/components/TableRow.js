import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableRow = (props) => {
  const quantity = props.quantityField ? (
    <input
      style={{ width: 25 }}
      type="text"
      value={props.quantity}
      onChange={props.handleQuantity}
    />
  ) : (
    <h6>-</h6>
  );
  return (
    <tr>
      <td>{props.title}</td>

      <td>{quantity}</td>

      <td>${props.price}/Page</td>
      <td>
        <input
          style={{ width: 25 }}
          type="checkbox"
          checked={props.included}
          onChange={props.handleIncluded}
        />
      </td>
      <td>${props.total}</td>
    </tr>
  );
};

export default TableRow;
