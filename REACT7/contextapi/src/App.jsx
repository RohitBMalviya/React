import React from "react";
import UserContextProvider from "./Context/userContextProvider";
import Hearder from "./Components/Header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Hearder />
      <UserContextProvider>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Outlet />
      </UserContextProvider>
    </>
  );
}

export default App;
