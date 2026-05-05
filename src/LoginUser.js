import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginUser() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [isRegistering, setIsRegistering] = useState(false);

    //get the current date
    const getToday = () => {
        return new Date().toISOString().split("T")[0]; // the year month and day currently
    };

    //new user 
    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        DOB: "",
        Country: "",
        Join: getToday(), // current date
        About: "",
    });

    //function to get username and go to user.js page
    const handleSubmit = async () => {
        setError("");

        try {
            const res = await fetch("http://localhost:5000/check-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            const data = await res.json();

            if (data.exists) {
                // pass user data to next page
                navigate("/userpage", { state: { user: data.user } });
            } else {
                setError("Username not found.");
            }
        } catch (err) {
            setError("Server error.");
        }
    };

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };

    //add a new user function
    const handleRegister = async () => {
        try {
            const res = await fetch("http://localhost:5000/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            const data = await res.json();

            if (data.success) {
                alert("User created!");
                setIsRegistering(false);
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Server error");
        }
    };

    return (
        <div>
            <div className="title">
                <h1>Blog Website UserPage</h1>
                <h6>discover latest news and more about people+</h6>
            </div>

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

            <div style={{ textAlign: "center", marginTop: "100px" }}>
                {!isRegistering ? (
                    <>
                        <h2>Enter Username</h2>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                        <br /><br />
                        <button onClick={handleSubmit}>Load Profile</button>

                        <p
                            style={{ color: "blue", cursor: "pointer", marginTop: "20px" }}
                            onClick={() => setIsRegistering(true)}
                        >
                            Create new user
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Create User</h2>

                        <input name="username" value={newUser.username} onChange={handleChange} placeholder="Username" /><br /><br />
                        <input name="name" value={newUser.name} onChange={handleChange} placeholder="Full Name" /><br /><br />
                        <input name="DOB" value={newUser.DOB} onChange={handleChange} placeholder="Date of Birth" /><br /><br />
                        <input name="Country" value={newUser.Country} onChange={handleChange} placeholder="Country" /><br /><br />
                        <input name="Join" value={newUser.Join} readOnly /><br /><br />
                        <textarea name="About" value={newUser.About} onChange={handleChange} placeholder="About" /><br /><br />

                        <button onClick={handleRegister}>Submit</button>

                        <p
                            style={{ color: "blue", cursor: "pointer", marginTop: "20px" }}
                            onClick={() => setIsRegistering(false)}
                        >
                            Back to login
                        </p>
                    </>
                )}

                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}

export default LoginUser;