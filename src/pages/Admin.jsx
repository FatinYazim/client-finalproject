import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCookie from "../hook/useCookie";

const Admin = () => {
  const [isAdmin, setAdmin] = useCookie("isAdmin", false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      navigate("/myaccount");
    }
  }, [isAdmin]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1>Admin page</h1>
    </div>
  );
};

export default Admin;