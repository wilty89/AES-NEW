import React from "react";
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
import CellTowerIcon from "@mui/icons-material/CellTower";
import { Link } from "react-router-dom";

const pages = ["Rastreo", "Reportes", "Mapa"];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          position: "static",
          left: 0,
          right: 0,
          marginTop: 9,
        }}
      >
        <AppBar sx={{ bgcolor: "#263743" }} style={{
          overflow: 'hidden', position: 'fixed',
          width: '100%'
        }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <CellTowerIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                AES
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
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
                  <Button
                    component={Link}
                    to={"/"}
                    textalign="center" sx={{ color: "black" }}
                  >
                    Todos
                  </Button>
                  {pages.map((page) => (

                    <MenuItem key={page} onClick={handleCloseNavMenu}>

                      <Button component={Link}
                        to={`/${page}`} textalign="center" sx={{ color: "black" }}>{page}</Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <CellTowerIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                AES
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  component={Link}
                  to={"/"}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {" "}
                  Todos
                </Button>
                {pages.map((page) => (
                  <Button
                    component={Link}
                    to={`/${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
