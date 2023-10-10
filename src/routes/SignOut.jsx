import React from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch(
        "https://doctalk-r977.onrender.com//users/sign_out",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      localStorage.removeItem("token");

      if (response.ok) {
        console.log("Sign-out successful.");

        navigate("/");
      } else {
        console.error("Sign-out failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* <h2>Sign Out</h2> */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
