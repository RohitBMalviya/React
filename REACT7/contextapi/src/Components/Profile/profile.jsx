import React, { useContext } from "react";
import userContext from "../../Context/userContext";

export default function Profile() {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>please Login</div>;
  }

  return <div>Welcome {user.email}</div>;
}
