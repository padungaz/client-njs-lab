import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleAddUser = async () => {
        try {
            const response = await fetch("http://localhost:5000/admin/add-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName })
            });

            if (response.ok) {
                navigate("/users");
            } else {
                console.error("Error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>
        </>
    );
}

export default HomePage;
