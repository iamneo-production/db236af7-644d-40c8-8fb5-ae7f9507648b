import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "../../../assets/account-circle.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = (props) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const myOrdersViewHandler = () => {
    navigate("/admin/orders");
  };

  const handleGift = () => {
    navigate("/admin/gifts");
    setAnchorEl(null);
  };
  const handleTheme = () => {
    navigate("/admin/themes");
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    setAuth(false);
    localStorage.clear();
    navigate("/");
    
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#03001C", color: "white", marginLeft: "0%" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
              Gift Shop_Admin
            </Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "-7%" }}
          >
            {props.activeSection}
          </Typography>

          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img src={AccountCircle} alt="account-circle"></img>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleGift}>Gifts</MenuItem>
                <MenuItem onClick={handleTheme}>Themes</MenuItem>
                <MenuItem onClick={myOrdersViewHandler}>Orders</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              href="/login"
              sx={{
                color: "inherit",
                fontSize: "0.9rem",
                fontFamily: "'Roboto', sans-serif",
                mr: 2,
              }}
              underline="none"
            >
              LOGIN
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminHeader;
