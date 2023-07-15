import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const EditButton = ({ handleEdit }) => {
  const handleClick = async () => {
    const token = Cookies.get("token");
    const formData = new FormData();

    // Populate form data with the necessary fields
    formData.append("datestart", ""); // Provide the desired initial value
    formData.append("dateend", ""); // Provide the desired initial value
    formData.append("reason", ""); // Provide the desired initial value

    try {
      await axios.post(
        "http://localhost:8080/api/leave",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Reset form fields if needed
      // ...

      // Call the handleEdit function to trigger the edit functionality
      if (handleEdit) {
        handleEdit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        unset: "all",
        position: "absolute",
        right: "5rem",
        top: "5rem",
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: "0.3rem",
        padding: "0.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      Edit
    </button>
  );
};

export default EditButton;
