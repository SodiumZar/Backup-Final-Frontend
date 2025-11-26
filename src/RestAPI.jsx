import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/api";
import reportService from './services/reportService';

const RestAPI = () => {
    useEffect(() => {
    // Test get all reports
    reportService.getAllReports()
        .then(reports => console.log('All reports:', reports))
        .catch(error => console.error(error));

    // Test get by status
    reportService.getReportsByStatus('pending')
        .then(reports => console.log('Pending reports:', reports))
        .catch(error => console.error(error));
    }, []);

    return (
        <>
        <div> Check console for user data</div>
        </>
    );
};

export default RestAPI;
