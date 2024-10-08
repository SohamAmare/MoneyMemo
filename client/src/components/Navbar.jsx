import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/loading");
  };

  return (
    <nav
      className="navbar fixed-top bg-transparent"
      style={{ zIndex: 1000 }} // Ensure navbar stays above other elements but not obstructing
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-end w-100">
          {!token ? (
            <>
              <button
                className="btn me-2"
                style={{
                  background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                  color: "white",
                }}
                type="button"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>

              <button
                className="btn"
                style={{
                  backgroundColor: "#4e73df",
                  color: "white",
                }}
                type="button"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                style={{
                  backgroundColor: "#e74a3b",
                  color: "white",
                }}
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// ------------------------------------------------------------------------
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   // Logout function to remove token and redirect to loading page
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/loading");
//   };

//   return (
//     <nav className="navbar fixed-top bg-transparent">
//       <div className="container-fluid">
//         <div className="d-flex justify-content-end w-100">
//           {/* Conditionally render buttons based on authentication status */}
//           {!token ? (
//             <>
//               {/* Sign Up Button */}
//               <button
//                 className="btn me-2"
//                 style={{
//                   background: "linear-gradient(to right, #ff7e5f, #feb47b)",
//                   color: "white",
//                 }}
//                 type="button"
//                 onClick={() => navigate("/register")} // Redirect to register page
//               >
//                 Sign Up
//               </button>

//               {/* Sign In Button */}
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#4e73df",
//                   color: "white",
//                 }}
//                 type="button"
//                 onClick={() => navigate("/login")} // Redirect to login page
//               >
//                 Sign In
//               </button>
//             </>
//           ) : (
//             <>
//               {/* Logout Button */}
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#e74a3b", // Red for logout button
//                   color: "white",
//                 }}
//                 type="button"
//                 onClick={handleLogout} // Trigger logout
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// -----------------------------------------------------------------------------
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   // Handle Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Remove token from localStorage
//     navigate("/loading"); // Redirect to loading page after logout
//   };

//   return (
//     <nav className="navbar fixed-top bg-transparent">
//       <div className="container-fluid">
//         <div className="d-flex justify-content-end w-100">
//           {/* Sign Up Button */}
//           <button
//             className="btn me-2"
//             style={{
//               background: "linear-gradient(to right, #ff7e5f, #feb47b)",
//               color: "white",
//             }}
//             type="button"
//             onClick={() => navigate("/register")} // Navigate to Register page
//           >
//             Sign Up
//           </button>

//           {/* Sign In Button */}
//           <button
//             className="btn"
//             style={{
//               backgroundColor: "#4e73df",
//               color: "white",
//             }}
//             type="button"
//             onClick={() => navigate("/login")} // Navigate to Login page
//           >
//             Sign In
//           </button>

//           {/* Logout Button */}
//           {localStorage.getItem("authToken") && ( // Only show Logout if logged in
//             <button
//               className="btn ms-2"
//               style={{
//                 backgroundColor: "#d9534f",
//                 color: "white",
//               }}
//               type="button"
//               onClick={handleLogout} // Call the logout function
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
