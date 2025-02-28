import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./MenuBar.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

// eslint-disable-next-line react/prop-types
function MenuBar({ toggleTheme, isDarkMode }) {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin.</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">10</span>
                    </div>
                    <div className="topBarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <SettingsIcon />
                    </div>
                    {/* دکمه تغییر تم */}
                    <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <Link className="link signup" to="/SignIn">

                    sign up
                        {/* <img
                            src="/images/profile.jfif"
                            alt="avatar"
                            className="topAvatar"
                        /> */}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
