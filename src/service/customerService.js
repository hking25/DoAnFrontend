import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCustomers = createAsyncThunk(
    "customer/getAllCustomers",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getCustomer = createAsyncThunk(
    "customer/getCustomer",
    async (id) => {
        const res = await axios.get("http://localhost:8080/customer/customerDetail/"+id);
        return res.data;
    }
)