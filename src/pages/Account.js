import React, { useState } from "react";
import "./account.css";

function Account() {
  const [accountNumber, setAccountNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{11}$/.test(accountNumber)) {
      alert("Account number must be exactly 11 digits");
      return;
    }
    try {
      const response = await fetch("http://your-backend-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accountNumber, pin }),
      });

      if (response.ok) {
        alert("Successful");
      } else {
        alert("Something is wrong");
      }
    } catch (err) {
      console.log("this is error:--", err);
    }
  };

  return (
    <div className="account">
      <h1>Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="accountNumber"
          placeholder="Account Number"
          required
          className="accountinput"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="password"
          name="pin"
          placeholder="PIN"
          required
          className="accountinput"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="submit" className="accountbutton">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Account;
