import React, { useState } from "react";

function Validation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!email || !password) {
        setErr(true);
      }
    } catch (error) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email : </label>
          <input
            type="email"
            placeholder="Enter Your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {err && <p style={{ color: "red" }}>Email Filed Is Required</p>}
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err && <p style={{ color: "red" }}>Password Is Required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Validation;
