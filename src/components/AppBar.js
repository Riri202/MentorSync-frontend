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
import { AccountCircle } from "@mui/icons-material";
import { user } from "../utils/constants";

const loggedInUser = user;
const visitorPages = [{ item: "Home", link: '/' }, { item: "About Us", link: '/about' }, { item: "Sign Up", link: '/signup' }];
const userPages = visitorPages.slice(0, 2);
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

  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {visitorPages.map((page) => (
                <MenuItem key={page.item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.item}</Typography>
                </MenuItem>
              ))}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            {!loggedInUser ? visitorPages.map((page) => (
              <Button
                key={page.item}
                onClick={() => changeRoute(`${page.link}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.item}
              </Button>
            )) : userPages.map((page) => (
              <Button
                key={page.item}
                onClick={() => changeRoute(`${page.link}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.item}
              </Button>
            ))}
            {loggedInUser && (
            <IconButton
              size="large"
              aria-label="user-account-icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate(`/users/${loggedInUser.id}`)}
              sx={{ color: "white", display: "block" }}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
