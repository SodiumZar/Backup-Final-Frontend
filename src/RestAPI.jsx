import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";
import userService from "./services/userService";

const RestAPI = () => {
    useEffect(() => {
        // test get all users
        userService.getAllUsers()
        .then(users  => console.log("All Users:", users))
        .catch(e => console.error(e))
    }, [])

    return (
        <>
        <div> Check console for user data</div>
        </>
    );
};

export default RestAPI;
