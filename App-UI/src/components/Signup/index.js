import React, { useState } from "react";
import userpool from "../../AWS Auth/userpool";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = event => {
    event.preventDefault();
    userpool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}></form>
      <label htmlFor='email'>Email</label>
      <input
        value={email}
        onChange={event => setEmail(event.target.value)}
      ></input>
      <label htmlFor='password'>Password</label>
      <input
        value={password}
        onChange={event => setPassword(event.target.value)}
      ></input>
      <button type='submit'>Signup</button>
    </div>
  );
}
