import React, { useEffect, useState } from "react";
import axios from "axios";
import useCookie from "../hook/useCookie";
import { useNavigate } from "react-router-dom";



const View = () => {
  const [jwt, setJwt] = useCookie("token", "");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleNavigateToMyRequest = () => {
    navigate("/my-request");
  };
  const fetchUserAccount = () => {
    axios
      .get("https://application-name-api-61gm.onrender.com/private", {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        console.info(response);
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (!jwt) {
      // handleLogOut();
    } else {
      fetchUserAccount();
    }
  }, []);

  const handleLogOut = () => {
    setJwt("");
    navigate("/");
  };
  
  

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#5F264A",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem",
        fontWeight: "bold",
        color: "whitesmoke",
      }}
    >
      <h1 style={{ marginLeft: 100 }}>HTAR</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
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
        >
          Logout
        </button>
        </div>
      </div>
      
         {/* Background */}
         <div className="background">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: "0.5rem",
            padding: "1rem",
            marginTop: "5rem",
            width: "500px",
            backgroundColor: "whitesmoke"
          }}
        >
         <div
                 
                 style={{
                  position: "absolute",
                  right: "4rem",
        top: "5rem",
                   
                   backgroundColor: "#171A21",
                  
                   color: "white",
                   width: "30%",
                   padding: "1rem",
                   borderRadius: "5px",
                   textAlign: "center",
                 }}
                
               >
                 In Progress
               </div>
          <button
      // onClick={handleNavigateToMyRequest}
      style={{
        unset: "all",
        position: "absolute",
        right: "4rem",
        top: "9rem",
        backgroundColor: "red",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "15%",
                    textAlign: "center",
        cursor: "pointer",
      }}
     
    >
      Delete
    </button>

          <button
            style={{
              unset: "all",
              position: "absolute",
              right: "10rem",
              top: "9rem",
              backgroundColor: "green",
                          color: "white",
                          padding: "1rem",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          width: "15%",
                          textAlign: "center",
              cursor: "pointer",
              
            }}
            onClick={handleNavigateToMyRequest}
          >
       Edit
          </button>
          <div>
            <p>Leave Type:</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {user?.typeofleave}
            </p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>Leave Type:</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {user?.fullday}
            </p>
            </div>
            <div style={{ marginTop: "1rem" }}>
            <p>Date Start</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {user?.datestart}
            </p>
            </div>
            <div style={{ marginTop: "1rem" }}>
            <p>Date End</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {user?.dateend}
            </p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>Reason</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {user?.reason}
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default View;
