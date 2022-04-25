import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import logoOnly from "../assets/logo/svg-logo-only.svg"
import logoWithText from "../assets/logo/svg-logo-text.svg"

const Navbar = () => {
  return (
    <>
      <Box flexGrow={1} sx={{ display: { xs: "block", md: "none" } }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton size="large" edge="start"><MenuIcon
              color="primary"/></IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "2.5rem",
                flexGrow: 1,
                padding: "1rem 0"
              }}>
              <img alt="logo" src={logoOnly}/>
            </Box>
            <Box sx={{ width: "2.25rem" }}/>
          </Toolbar>
        </AppBar>
      </Box>
      <Box flexGrow={1} sx={{ display: { xs: "none", md: "block" } }}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Box sx={{
              display: "flex",
              height: "2.5rem",
              flexGrow: 1,
              padding: "1rem 0"
            }}>
              <img alt="logo" src={logoWithText}/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  )
}

export default Navbar