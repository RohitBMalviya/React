import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Features/authSlice";
import authService from "../../appwrite/auth";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch(() => console.error(error));
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
