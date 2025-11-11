import React from "react";
import { HashRouter } from "react-router-dom";

import RoutesComponent from "Routes";
import GlobalStyles from "theme/global";
import { Theme } from "theme/theme";
import "react-toastify/dist/ReactToastify.css";
import "styles/rc-image.css";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Theme>
                <GlobalStyles />
                <RoutesComponent />
            </Theme>
        </HashRouter>
    );
};

export default App;
