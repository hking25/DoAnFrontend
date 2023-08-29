import React from 'react';
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";

const Shop = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Shop;