import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./LoginUser.js";
import HomePage from "./intro";
import ContactPage from "./fourm.js";
import UserPage from "./user.js";
import EditUser from "./EditUser";

//routes
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/fourmpage" element={<ContactPage />} />
                    <Route path="/LoginPage" element={<LoginUser />} />
                    <Route path="/userpage" element={<UserPage />} />
                    <Route path="/edit-user" element={<EditUser />} />
                </Routes>
            </Router>
        </>
    )

}
export default App;