import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";

const DarkMode = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
        },
    });

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* ارسال تابع و وضعیت به همه اجزا */}
            {children({ toggleTheme, isDarkMode })}
        </ThemeProvider>
    );
};

DarkMode.propTypes = {
    children: PropTypes.func.isRequired, // تغییر نوع پراپ برای ارسال توابع
};

export default DarkMode;
