import React from "react";
import { Link } from "react-router-dom";

export default function Hearder() {
  return (
    <>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
      <div>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </>
  );
}
