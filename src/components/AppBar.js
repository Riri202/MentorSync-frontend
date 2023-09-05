import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Avatar, Divider, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { user } from "../utils/constants";
import { setCurrentUser } from "../api/auth";

const loggedInUser = user || '';
const guestMenuItems = [{ item: "Home", link: '/' }, { item: "About Us", link: '/about' }, { item: "Sign In", link: '/signin' }];
const loggedInUserMenuItems = guestMenuItems.slice(0, 2);

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeRoute = (path) => {
    navigate(path);
    setAnchorElNav(null);
  };

  const [anchorProfleMenu, setAnchorProfileMenu] = React.useState(null);
  const open = Boolean(anchorProfleMenu);
  const handleClickProfileMenu = (event) => {
    setAnchorProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorProfileMenu(null);
  };

  const logout = () => setCurrentUser();

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* non-mobile nav logo  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MentorSyncccc
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* mobile nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu-icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {!loggedInUser ? guestMenuItems.map((page) => (
                <MenuItem key={page.item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.item}</Typography>
                </MenuItem>
              )) : loggedInUserMenuItems.map((page) => (
                <MenuItem key={page.item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.item}</Typography>
                </MenuItem>
              ))}
              {loggedInUser && (
                <MenuItem>

                  <IconButton
                    size="large"
                    aria-label="user-account-icon"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => navigate(`/users/${loggedInUser.id}`)}
                    sx={{ color: "black", display: "block" }}
                  >
                    <AccountCircle fontSize="large" />
                  </IconButton>
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

          {/* non-mobile nav  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            {!loggedInUser ? guestMenuItems.map((page) => (
              <Button
                key={page.item}
                onClick={() => changeRoute(`${page.link}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.item}
              </Button>
            )) : loggedInUserMenuItems.map((page) => (
              <Button
                key={page.item}
                onClick={() => changeRoute(`${page.link}`)}
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
                  <ListItem alignItems="center">
                    {/* <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar> */}
                    <ListItemIcon>
                      <Avatar fontSize="small" />
                    </ListItemIcon>
                    <ListItemText className="font-bold" primary={`${loggedInUser.firstname}. ${loggedInUser.lastname.charAt(0).toUpperCase()}`} />

                    {' '}
                  </ListItem>
                </MenuItem>
                <Divider />
                <MenuItem onClick={logout}>
                  <ListItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </ListItem>

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
