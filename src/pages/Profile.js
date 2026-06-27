import React, { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

function Profile() {

    const { user } = useContext(AuthContext);

    return (

        <div style={{ padding: "40px" }}>

            <h1>My Profile</h1>

            <h3>Name : {user?.name || "Guest"}</h3>

            <h3>Email : {user?.email || "Not Available"}</h3>

        </div>

    );

}

export default Profile;