import React from "react";
import "./styles.css";
function Pay() {
  return (
    <div class="form">
      <form action="">
        <h1 class="head">Payment Form</h1>
        <hr></hr>
        <p>
          Name:* <input type="text" name="name" required></input>
        </p>
        <h3>Gender</h3>
        <p>
          Male<input type="radio" name="gender"></input>Female
          <input type="radio" name="gender"></input>
        </p>
        <p>
          Address:*{" "}
          <textarea name="address" cols="100" rows="10" required></textarea>
        </p>
        <p>
          Email:* <input type="email" name="email" required></input>
        </p>
        <p>
          Pincode: <input type="number" name="pincode"></input>
        </p>
        <h2>Payment Details</h2>
        <p>
          Card Type:*
          <select name="card" required>
            <option value="">Select a Card</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
          </select>
        </p>
        <p>
          Card Number* <input type="number" name="card_no" required></input>
        </p>
        <p>
          Expiry Date:* <input type="date" name="card_exp" required></input>
        </p>
        <p>
          CVV* <input type="password" name="cvv" required></input>
        </p>
        <input type="submit" value="Proceed to Pay"></input>
      </form>
    </div>
  );
}
export default Pay;
