import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";
import { Report_Categories, Report_Statuses, getCategoryLabel } from './constants/reportCategories'


const RestAPI = () => {
    
console.log('Categories:', Report_Categories);
console.log('Statuses:', Report_Statuses);
console.log('Label for environment:', getCategoryLabel('environment'));

    return (
        <>
        <h1> Check console for user data</h1>
        </>
    );
};

export default RestAPI;
