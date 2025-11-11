import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { About, Contact, Graduation, Home, Portfolio } from "Pages";

const RoutesComponent: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/formacao" element={<Graduation />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default RoutesComponent;
