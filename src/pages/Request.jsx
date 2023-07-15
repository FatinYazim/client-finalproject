import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useCookie from "../hook/useCookie";

const Request = () => {
  const [jwt, setJwt] = useCookie("token", "");
  const [typeofleave, setTypeofLeave] = useState("");
  const [fullday, setFullday] = useState("");
  const [datestart, setDateStart] = useState("");
  const [dateend, setDateEnd] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleNavigateToMyView = () => {
    navigate("/my-view");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const typeofleave = event.target.elements.typeofleave.value;
    const fullday = event.target.elements.fullday.value;
    const datestart = event.target.elements.datestart.value;
    const dateend = event.target.elements.dateend.value;
    const reason = event.target.elements.reason.value;

    

    const token = Cookies.get("token");

    axios
      .put(
        "https://application-name-api-61gm.onrender.com/api/leave",
        {
          typeofleave,
          fullday,
          datestart,
          dateend,
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        // Reset form fields if needed
        setTypeofLeave("");
        setFullday("");
        setDateStart("");
        setDateEnd("");
        setReason("");
        setIsSubmitted(true); 
  

        setTimeout(() => {
          setIsSubmitte(false);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
      {/* leave form  */}
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
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "700px",
            alignItems: "center",
            padding: "3rem",
            backgroundColor: "whitesmoke",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginTop: "0.5rem",
            }}
          >
            LEAVE REQUEST
          </h1>
          <form onSubmit={handleSubmit}>
            {/* component */}
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  gap: "1rem",
                  marginTop: "1.5rem",
                  width: "400px",
                }}
              >
                <label htmlFor="typeofleave">Leave Type</label>
                <input
                  style={{ textAlign: "left" }}
                  placeholder="Annual Leave / Emergency"
                  id="typeofleave"
                  name="typeofleave"
                  type="text"
                  value={typeofleave}
                  onChange={(e) => setTypeofLeave(e.target.value)}
                  required
                />

                <label htmlFor="fullday">Full / Half Day</label>
                <input
                  style={{ textAlign: "left" }}
                  placeholder="Full / Half Day"
                  id="fullday"
                  name="fullday"
                  type="text"
                  value={fullday}
                  onChange={(e) => setFullday(e.target.value)}
                  required
                />

                <label htmlFor="datestart"> Date Start</label>
                <input
                  style={{ textAlign: "left" }}
                  placeholder="dd/mm/yy"
                  id="datestart"
                  name="datestart"
                  type="date"
                  value={datestart}
                  onChange={(e) => setDateStart(e.target.value)}
                  required
                />

                <label htmlFor="dateend"> Date End</label>
                <input
                  style={{ textAlign: "left" }}
                  placeholder="dd/mm/yy"
                  id="dateend"
                  name="dateend"
                  type="date"
                  value={dateend}
                  onChange={(e) => setDateEnd(e.target.value)}
                  required
                />

                <label htmlFor="reason"> Reason</label>
                <input
                  style={{ textAlign: "left" }}
                  placeholder="...."
                  id="reason"
                  name="reason"
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </div>

              {/* submit button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    width: "50%",
                    borderRadius: "10px",
                    backgroundColor: "#171A21",
                    textAlign: "center",
                    color: "white",
                    marginTop: "2rem",
                    
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "purple";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#171A21";
                  }}
                >
                  Submit
                </button>
               
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    width: "50%",
                    borderRadius: "10px",
                    backgroundColor: "#171A21",
                    textAlign: "center",
                    color: "white",
                    marginTop: "0.5rem",
                    
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "purple";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#171A21";
                  }}

                  onClick={handleNavigateToMyView}
                >
                  View Request
                </button>
               
              </div>
               {/* Success message */}
               {isSubmitted && (
                <div
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "green",
                    color: "white",
                    padding: "1rem",
                    fontWeight: "bold",
                    borderRadius: "0.5rem",
                    width: "100%",
                    textAlign: "center",
                  }}
                  
                >
                  Leave request submitted successfully
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Request;
