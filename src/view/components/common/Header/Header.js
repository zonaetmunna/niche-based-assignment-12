import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Header = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      textDecoration: "none",
      color: "white",
      fontSize: "medium",
    },

    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navItemContain: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });

  const { navItem, navIcon, navItemContain, navLogo } = useStyle();
  const { user, logOut } = useAuth();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link to="/explore" className={navItem}>
              Explore
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            {user.email && (
              <Link to="/dashboard" className={navItem}>
                Dashboard
              </Link>
            )}
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            {user.email ? (
              <Button onClick={logOut}>
                <Link to="/explore" className={navItem}>
                  logOut
                </Link>
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            )}
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1, background: "#030000", color: "error.main" }}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              className={navIcon}
              onClick={() => setState(true)}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <NavLink to="/" className={navItem}>
                {" "}
                The Hands of Time
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/explore" style={{ mr: 5 }} className={navItem}>
                Explore
              </NavLink>
            </Typography>

            <Box className={navItemContain}>
              {user.email && (
                <NavLink to="/dashboard" className={navItem}>
                  {" "}
                  Dashboard{" "}
                </NavLink>
              )}
              {user.email ? (
                <Button onClick={logOut} color="inherit">
                  Logout
                </Button>
              ) : (
                <Button>
                  <NavLink to="/login" className={navItem}>
                    {" "}
                    Login
                  </NavLink>
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Header;
