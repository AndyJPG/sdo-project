import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import logoOnly from "../assets/logo/svg-logo-only.svg"

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large"><MenuIcon/></IconButton>
        <Box sx={{ display: "flex", justifyContent: "center", height: "2.5rem", flexGrow: 1, padding: "1rem 0" }}>
          <img src={logoOnly}/>
        </Box>
        <Box sx={{ width: "3rem" }}/>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar