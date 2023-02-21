import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { AuthContext } from "./context/authContext";
import ProtectedRoute from "./services/utils/protectedRoutes";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
