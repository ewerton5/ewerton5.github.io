"use client";

import React from "react";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "theme/global";
import { Theme } from "theme/theme";

import "react-toastify/dist/ReactToastify.css";
import "styles/rc-image.css";

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Theme>
            <GlobalStyles />
            {children}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Theme>
    );
};

export default Providers;
