import React, { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EditUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;

    if (!user) {
        return <Navigate to="/" />;
    }

    const [formData, setFormData] = useState({
        username: user.username,
        name: user.name,
        DOB: user.DOB,
        Country: user.Country,
        Join: user.Join,
        About: user.About,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            const res = await fetch(
                `http://localhost:5000/update-user/${user.username}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (data.success) {
                alert("User updated!");
                navigate("/userpage", { state: { user: data.user } });
            } else {
                alert("Update failed");
            }
        } catch (err) {
            alert("Server error");
        }
    };

    return (
        <>
            <div className="links">
                        <div className="info">
                            <p style={{ position: "relative", left: "-80px" }}>
                                <Link to="/">Home</Link>
                            </p>
                            <p style={{ position: "relative", left: "-40px" }}>
                                <Link to="/LoginPage">User Pages</Link>
                            </p>
                            <p style={{ position: "relative", left: "-20px" }}>
                                <Link to="/fourmpage">Info + Q&amp;A</Link>
                            </p>
                        </div>
                    </div>
        <div style={{ textAlign: "center" }}>
            <h2>Edit Profile</h2>
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" /><br /><br />
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" /><br /><br />
            <input name="DOB" value={formData.DOB} onChange={handleChange} placeholder="DOB" /><br /><br />
            <input name="Country" value={formData.Country} onChange={handleChange} placeholder="Country" /><br /><br />
            <textarea name="About" value={formData.About} onChange={handleChange} placeholder="About" /><br /><br />

            <button onClick={handleUpdate}>Save Changes</button>
        </div>
        </>
    );
}

export default EditUser;