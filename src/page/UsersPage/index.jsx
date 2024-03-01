import React, { useEffect, useState } from "react";

function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/admin/users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <>
            <h1>Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user}</li>
                    ))}
                </ul>
            ) : (
                <h2>No Users Found!</h2>
            )}
        </>
    )
}
export default UsersPage;