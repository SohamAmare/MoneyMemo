import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddExp from "./pages/AddExp";
import Analytics from "./pages/Analytics";
import Loading from "./pages/Loading";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the root path ("/") for the home page */}
        <Route path="/" element={<AddExp />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Loading page path, used initially for redirect */}
        <Route path="/loading" element={<Loading />} />

        {/* Other routes */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Analytics from "./pages/Analytics";
// import Loading from "./pages/Loading";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Loading />
//               </>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//               </>
//             }
//           />
//           <Route
//             path="/analytics"
//             element={
//               <>
//                 <Analytics />
//               </>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <>
//                 <Login />
//               </>
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <>
//                 <Register />
//               </>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
