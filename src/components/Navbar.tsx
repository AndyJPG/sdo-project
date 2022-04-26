import MenuIcon from "@mui/icons-material/Menu"
import SendIcon from "@mui/icons-material/Send"
import { AppBar, Box, Button, IconButton, Toolbar, useScrollTrigger } from "@mui/material"
import logoOnly from "../assets/logo/svg-logo-only.svg"
import logo from "../assets/logo/svg-logo.svg"

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window
  })

  return (
    <>
      <Box flexGrow={1} sx={{ display: { xs: "block", md: "none" } }}>
        <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
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
        <AppBar position="fixed" color={trigger ? "inherit" : "transparent"}
                sx={{ boxShadow: `${trigger ? "auto" : "none"}` }}>
          <Toolbar>
            <Box sx={{
              display: "flex",
              height: "2.5rem",
              flexGrow: 1,
              padding: "1rem 0"
            }}>
              <img alt="logo" src={logo}/>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: "right" }}>
              {[ "about us", "our services", "case studies", "contact us" ].map(page => (
                <Button key={page} color="secondary" size="small"
                        sx={{ mr: { md: "1rem", lg: "2rem" }, fontSize: "0.8rem" }}>{page}</Button>
              ))}
            </Box>
            <Button variant="contained" size="small" endIcon={<SendIcon/>}>get in touch</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  )
}

export default Navbar