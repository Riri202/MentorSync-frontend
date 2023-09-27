import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useSignOut } from "../hooks/useSignOut";

const guestMenuItems = [{ item: "Home", link: '/' }, { item: "About Us", link: '/about' }, { item: "Sign In", link: '/signin' }];
const loggedInUserMenuItems = guestMenuItems.slice(0, 2);

const ResponsiveAppBar = () => {
  const currentUser = useCurrentUser();
  const { pathname } = useLocation();
  const loggedInUser = currentUser || '';
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorProfleMenu, setAnchorProfileMenu] = React.useState(null);
  const open = Boolean(anchorProfleMenu);

  const navigate = useNavigate();

  const handleOpenMobileNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMobileNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickProfileMenu = (event) => {
    setAnchorProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorProfileMenu(null);
  };

  const logout = useSignOut();

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* desktop nav logo  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MentorSync
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* mobile nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu-icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMobileNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMobileNavMenu}
              onClick={handleCloseMobileNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 0.6,
                  ml: -6,
                  pt: 2,
                  '& .MuiAvatar-root': {
                    width: 40,
                    height: 40,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
            >
              {loggedInUser && (
                <MenuItem onClick={() => navigate(`/users/${loggedInUser.id}`)}>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText className="font-bold" primary={`${loggedInUser.firstname}. ${loggedInUser.lastname.charAt(0).toUpperCase()}`} secondary="My profile" />
                </MenuItem>
              )}
              {loggedInUser && <Divider />}

              {!loggedInUser ? guestMenuItems.map((page) => (
                <MenuItem key={page.item}>
                  <Link to={`${page.link}`} state={{ redirectTo: page.link === "/signin" ? pathname : null }}>
                    <Typography textAlign="center">{page.item}</Typography>
                  </Link>
                </MenuItem>
              )) : loggedInUserMenuItems.map((page) => (
                <MenuItem key={page.item} onClick={() => navigate(`${page.link}`)}>
                  <Typography textAlign="center">{page.item}</Typography>
                </MenuItem>
              ))}

              {loggedInUser && <Divider />}
              {loggedInUser && (
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MentorSync
          </Typography>

          {/* desktop nav  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            {!loggedInUser ? guestMenuItems.map((page) => (
              <Link key={page.item} to={`${page.link}`} state={{ redirectTo: page.link === "/signin" ? pathname : null }}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.item}
                </Button>
              </Link>
            )) : loggedInUserMenuItems.map((page) => (
              <Button
                key={page.item}
                onClick={() => navigate(`${page.link}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.item}
              </Button>
            ))}
            {loggedInUser && (
            <>
              <IconButton
                size="large"
                aria-label="user-account-icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickProfileMenu}
                sx={{ color: "white", display: "block" }}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={anchorProfleMenu}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => navigate(`/users/${loggedInUser.id}`)}>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText className="font-bold" primary={`${loggedInUser.firstname}. ${loggedInUser.lastname.charAt(0).toUpperCase()}`} secondary="My profile" />
                </MenuItem>
                <Divider />
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

            </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
