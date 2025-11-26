import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";

const RestAPI = () => {
    console.log('API instance created:', api.defaults.baseURL)
    return (
        <>
            <h1> testing API</h1>
        </>
    );
};

export default RestAPI;
