import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div>©{(new Date().getFullYear())} Company, Inc. All rights reserved.</div>
        </div>
    );
};

export default Footer; 