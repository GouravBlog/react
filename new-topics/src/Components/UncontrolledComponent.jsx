import React, { useRef } from "react";

function UncontrolledComponent() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //   console.log("email", emailRef);

  function handleSubmit(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({
      username,
      email,
      password,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username :</label>
          <input type="text" name="" id="" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="">Email :</label>
          <input type="email" name="" id="" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input type="text" name="" id="" ref={passwordRef} />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
