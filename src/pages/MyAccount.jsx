import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCookie from "../hook/useCookie";

const MyAccount = () => {
  const [jwt, setJwt] = useCookie("token", "");
  const [isAdmin, setAdmin]= useCookie ("isAdmin", false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleNavigateToRequest = () => {
    navigate("/my-request");
  };
  const handleNavigateToView = () => {
    navigate("/my-view");
  };

  const handleLogOut = () => {
    setJwt("");
    navigate("/");
  };

  const fetchUserAccount = () => {
    axios
      .get("https://application-name-api-61gm.onrender.com/private", {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        console.info(response.data);
        setUser(response.data.user);
        setAdmin(response.data.user.isAdmin);
        setLoggedIn(true); 

        setTimeout(() => {
          setLoggedIn(false);
        }, 3000);
      })
      .catch(function (error) {
        console.error(error);
        handleLogOut();
      });
  };

  useEffect(() => {
    if (!jwt) {
      handleLogOut();
    } else {
      fetchUserAccount();
    }
  }, []);

  return (
    <div
    style={{ height: "100vh", width: "100vw" }}
    >
    <div
     style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#5F264A",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem",
        fontWeight: "bold",
      
        color: "whitesmoke",

      }}>
        
        <h1  style={{ marginLeft:100}} >HTAR</h1>
        <div style={{ display:"flex", alignItems:"center"}} >
          <div>
        <h1 style={{ width:"350px", fontsize: 7,marginRight: "0.1rem" }}>Hi,welcome back {user?.username || "no data"}</h1></div>
        <button
  style={{
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    borderRadius: "0px",
    borderColor: "black",
    transition: "background-color 0.3s",
  }}
  onClick={handleLogOut}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "grey";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black";
  }}

        > Logout</button>
        </div>
        </div>

         {/* Background */}
      <div className="background">



      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 100,
            border: "10px solid #5F264A",
            width: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "400px",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: "whitesmoke",
            borderRadius: "50px",
          }}
        >

{isLoggedIn && (
            <div
              style={{
                marginBottom: "0.5rem",
                backgroundColor: "green",
                color: "white",
                padding: "1rem",
                fontWeight: "bold",
                borderRadius: "50px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Successfully Logged In
            </div>
          )}

          <div className="profilepicture"></div>
          
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginRight: "1rem",
                }}
              >
                Username
              </p>
              <p style={{ fontSize: 15, textAlign: "right",marginLeft:72 }}>
                {user?.username || "No data"}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginRight: "1rem",
                }}
              >
                Email
              </p>
              <p style={{ fontSize: 15, textAlign: "right",marginLeft:98 }}>
                {user?.email || "No data"}
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
              <button
                style={{
                  backgroundColor: "#171A21",
                  textAlign: "center",
                  color: "white",
                  width: "50%",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "purple";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#171A21";
                }}


                onClick={handleNavigateToRequest}
              >
                Request Leave
              </button>
              <button
                style={{
                  backgroundColor: "#171A21",
                  textAlign: "center",
                  color: "white",
                  width: "50%",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                }}

                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "purple";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#171A21";
                }}

                onClick={handleNavigateToView}
              >
                View Leave
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyAccount;
