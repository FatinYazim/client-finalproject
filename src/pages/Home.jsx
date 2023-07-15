import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  
  const [isError, setError] = useState(false); // New state for error handling
  const navigate = useNavigate();

  const handleNavigateToMyAccount = () => {
   
      navigate("/myaccount");
    }
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const identifier = event.target[0].value;
    const password = event.target[1].value;

    setLoading(true);

    try {
      const response = await axios.post("https://application-name-api-61gm.onrender.com/api/login", {
        identifier,
        password,
      });

      if (response && response.data) {
        console.log(response.data);
        const { jwt } = response.data;
        Cookies.set("token", jwt);
        handleNavigateToMyAccount();
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        console.log(error.response.data);
      }
      setError(true); // Set error state to true on login failure
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#5F264A",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3rem",
          fontWeight: "bold",
          fontSize: 15,
          color: "whitesmoke",
        }}
      >
        <h1 style={{ marginLeft: 100 }}>HTAR</h1>
        <h1 style={{ marginRight: 100, fontSize: 20 }}>LEAVE REQUEST</h1>
      </div>

      {/* Background */}
      <div className="background">
        {/* Login Form */}
        <div className="body">
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
                border: "20px solid #5F264A",
                width: "35%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "400px",
                alignItems: "center",
                padding: "3rem",
                backgroundColor: "whitesmoke",
                borderRadius: "50px",
             
              
              }}
            >
              <h1 style={{ fontWeight: "bold", fontSize: 30, marginTop: "1rem" }}>
                LOGIN PAGE
              </h1>
              <form
                style={{ width: "100%", maxWidth: "400px" }}
                onSubmit={handleSubmit}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "3rem",
                  }}
                >
                  <input
                    placeholder="Username or E-mail"
                    id="email"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <input placeholder="Password" id="password" type="password" />

                  <button
                    type="submit"
                    style={{
                      backgroundColor: isError ? "black" : "#171A21",
                      textAlign: "center",
                      color: "white",
                      marginTop: "1rem",
                      minWidth: "50%",
                      borderRadius: "50px",
                    }}
                    disabled={isLoading}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#5F264A";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = isError ? "#5F264A" : "#171A21";
                    }}
                  >
                    {isLoading ? "Sending request..." : "Sign In"}
                  </button>
                </div>
                <Link
                  to="/register"
                  style={{
                    marginTop: "1rem",
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Create an account
                </Link>
              </form>
              {isError && (
                <div
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "red",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Invalid username or password
                </div>
              )}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
