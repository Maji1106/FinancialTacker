import api from "./api";
const FINANCIAL_API_URL =import.meta.env.VITE_FINANCIAL_API_URL;

//get all financial record by userId
const getAllFinancialRecordsByUserId = async (userId) => {
    return await api.post(`${FINANCIAL_API_URL}`),record;
};

//update  a record 
const update 