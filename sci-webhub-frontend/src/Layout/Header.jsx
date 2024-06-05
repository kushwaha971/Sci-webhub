import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { primary } from "@/SDK/theme";
import { Avatar, Link, Menu, MenuItem, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const drawerWidth = 240;
const navItems = [
  { name: "Become a Mentor", path: "/mentor/login" },
  { name: "Get Your Dream Job", path: "/your-mentor" },
  { name: "Student", path: "/student/login" },
  // { name: "Why leafyprofit", path: "/#whyLeafyprofit" },

  // { name: "Our plantation", path: "/#ourplantation" },
  // { name: "Join today", path: "/#jointoday" },
];

function Header(props) {
  const token = Cookies.get("token");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useRouter();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = [
    {
      name: "Dashboard",
      handleClick: () => {
        navigate.push("/projects");
      },
    },
    {
      name: "Logout",
      handleClick: () => {
        Cookies.remove("token");
        Cookies.remove("userId");

        // Redirect to the login page
        navigate.push("/login");
      },
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        onClick={() => {
          navigate.push("/");
        }}
      >
        <img src={"/images/logo.png"} style={{ width: "100px" }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate.push(item?.path);
              }}
            >
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", margin: { md: "36px", xs: "30px", sm: "30px" } }}
    >
      <AppBar
        component="nav"
        sx={{
          background: "#fff",
          boxShadow: "none",
          marginTop: "20px",
          paddingLeft: "70px",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: { sm: "flex", xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box style={{ width: "120px" }}>
              <img
                src={"/images/logo.png"}
                alt="collegestojob logo"
                className={"image-section"}
                style={{ width: "100px" }}
                onClick={() => {
                  navigate.push("/");
                }}
              />
            </Box>
            <Box className="icons-mobile">
              <Link
                href="tel:08047482233"
                hrefLang={"en"}
                target="_blank"
                rel="noreferrer"
                underline="none"
                onClick={() => {}}
              ></Link>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              ></IconButton>
            </Box>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,

              display: { xs: "none", sm: "none", md: "block" },
            }}
            onClick={() => {
              navigate.push("/");
            }}
          >
            <img src={"/images/logo.png"} style={{ width: "150px" }} />
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "none", md: "block" }, mr: "5%" }}
          >
            {!token ? (
              <>
                <Button
                  sx={{
                    color: primary?.main,
                    margin: "0em 1.5em 0em 1.5em",
                    boxShadow: "none",
                    border: "none",
                    background: primary?.white,
                  }}
                  onClick={() => {
                    navigate.push("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: primary?.white,
                    margin: "0em 1.5em 0em 1.5em",
                    boxShadow: "none",
                    border: "none",
                    background: primary?.main,
                  }}
                  onClick={() => {
                    navigate.push("/signup");
                  }}
                >
                  SignUp
                </Button>{" "}
              </>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="AK"
                      src="/static/images/avatar/2.jpg"
                      sx={{ color: primary?.main, bgcolor: primary?.lightBlue }}
                    />
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={setting?.handleClick}>
                      <Typography textAlign="center">
                        {setting?.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0px 16px 0px 0px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export const MemoizedHeader = React.memo(Header);
