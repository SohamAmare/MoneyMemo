import "../App.css";
import Navbar from "../components/Navbar";
import BasicInfo from "../components/BasicInfo";
import ImageSection from "../components/ImageSection"; // Image component

function Loading() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        {/* Main content: Flexbox layout for side-by-side */}
        <div className="flex flex-row min-h-screen mt-4">
          {" "}
          {/* Left side: Image Section */}
          <div className="flex justify-center items-center w-1/2 p-4 ml-4">
            <ImageSection />
          </div>
          {/* Right side: Basic Info on extreme right */}
          <div className="flex justify-end items-start w-1/2 p-4">
            <div className="flex justify-end w-full">
              {" "}
              {/* Removed margin-top */}
              <BasicInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;

// import React, { useEffect } from "react";
// import "../App.css";
// import Navbar from "../components/Navbar";
// import BasicInfo from "../components/BasicInfo";
// import ImageSection from "../components/ImageSection";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function Loading() {
//   const navigate = useNavigate(); // Use the navigate hook

//   useEffect(() => {
//     // Check if the user is logged in by checking the token
//     const authToken = localStorage.getItem("authToken");

//     if (authToken) {
//       // If logged in, redirect to Home page
//       navigate("/loading");
//     } else {
//       // If not logged in, redirect to Login page
//       navigate("/login");
//     }
//   }, [navigate]); // Dependency array ensures this runs on component mount

//   return (
//     <>
//       <div className="main-container w-[700px]">
//         {/* <Navbar /> */}
//         <div className="min-h-screen">
//           {/* Main content: Flexbox layout for side-by-side */}
//           <div className="flex flex-row min-h-screen mt-4">
//             {" "}
//             {/* Left side: Image Section */}
//             <div className="flex justify-center items-center w-1/2 p-4 ml-4">
//               <ImageSection />
//             </div>
//             {/* Right side: Basic Info on extreme right */}
//             <div className="flex justify-end items-start w-1/2 p-4">
//               <div className="flex justify-end w-full">
//                 {" "}
//                 {/* Removed margin-top */}
//                 <BasicInfo />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Loading;

// //main code below

// // import "../App.css";
// // import Navbar from "../components/Navbar";
// // import BasicInfo from "../components/BasicInfo";
// // import ImageSection from "../components/ImageSection"; // Image component

// // function Loading() {
// //   return (
// //     <>
// //       <div className="min-h-screen">
// //         <Navbar />
// //         {/* Main content: Flexbox layout for side-by-side */}
// //         <div className="flex flex-row min-h-screen mt-4">
// //           {" "}
// //           {/* Left side: Image Section */}
// //           <div className="flex justify-center items-center w-1/2 p-4 ml-4">
// //             <ImageSection />
// //           </div>
// //           {/* Right side: Basic Info on extreme right */}
// //           <div className="flex justify-end items-start w-1/2 p-4">
// //             <div className="flex justify-end w-full">
// //               {" "}
// //               {/* Removed margin-top */}
// //               <BasicInfo />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Loading;
