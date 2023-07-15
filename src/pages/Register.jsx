import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();

  const [isRegistered, setRegistered] = useState(false);
  const [isEmptyError, setEmptyError] = useState(false);
  const [isError, setError] = useState(false);

  const handleNavigateToMyHome = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const passwordconfirmation = event.target[3].value;

    if (!username || !email || !password || !passwordconfirmation) {
      setEmptyError(true);
      setTimeout(() => {
        setEmptyError(false);
      }, 2000);
      return;
    }

    console.log({ username, email, password, passwordconfirmation });
    const formObject = { email, username, password, passwordconfirmation };

    try {
      const response = await axios.post(
        "https://application-name-api-61gm.onrender.com/api/register",
        formObject
      );

      console.log(response.data);

      if (response) {
        setRegistered(true);
        const { jwt } = response.data;
        Cookies.set("token", jwt);

        setTimeout(() => {
          setRegistered(false);
          handleNavigateToMyHome();
        }, 2000);
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        console.log(error.response.data);
        
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* Header */}
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
        <h1 style={{ marginRight: 100, fontSize: 20}}>LEAVE REQUEST</h1>
      </div>
      {/* Background */}
      <div className="background">
        {/* Register Form */}
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
              borderRadius: "70px",
              border: "20px solid #5F264A",
              width: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "500px",
              alignItems: "center",
              padding: "3rem",
              backgroundColor: "whitesmoke",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginTop: "1rem",
              }}
            >
              REGISTER
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
                <input placeholder="Username" id="username" type="text" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <input placeholder="E-mail" id="email" type="text" />
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
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <input
                  placeholder="Confirm Password"
                  id="Confirmpassword"
                  type="password"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <button
                  type="submit"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "#171A21",
                    textAlign: "center",
                    color: "white",
                    width: "70%",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#5F264A";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#171A21";
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
            {isRegistered && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "0.3rem",
                  textAlign: "center",
                }}
              >
                Successfully registered
              </div>
            )}
            {isEmptyError && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "0.3rem",
                  textAlign: "center",
                }}
              >
                Please fill in all fields
              </div>
            )}
             {isError && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "0.3rem",
                  textAlign: "center",
                }}
              >
               Invalid username/email/password
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
