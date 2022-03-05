import React from "react";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Hello $userName</h1>
      <h1>Login</h1>

      <label>UserId</label>
      <input type="text" />
      <br />
      <br />
      <labal>Password</labal>
      <input type="password" name="" id="" />
      <br />
      <Link to="all">Login</Link>
    </div>
  );
};
