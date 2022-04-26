import MenuIcon from "@mui/icons-material/Menu"
import SendIcon from "@mui/icons-material/Send"
import {
  AppBar,
  Box,
  Button, Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useScrollTrigger
} from "@mui/material"
import { useState } from "react"
import logoOnly from "../assets/logo/svg-logo-only.svg"
import logo from "../assets/logo/svg-logo.svg"

const Navbar = () => {
  const [ open, setOpen ] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window
  })
  const navPages = [ "about us", "our services", "case studies", "contact us" ]

  return (
    <>
      <Drawer anchor="left" open={open} onBackdropClick={() => setOpen(false)}>
        <Box sx={{ minWidth: 200, padding: "1rem" }}>
          <List>
            {navPages.map(page => (
              <ListItem button key={page}>
                <ListItemText primary={page}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <Button variant="contained" size="small" sx={{ mt: "1.6rem" }} endIcon={<SendIcon/>}>get in touch</Button>
        </Box>
      </Drawer>
      <Box flexGrow={1} sx={{ display: { xs: "block", md: "none" } }}>
        <AppBar position="fixed" color="inherit"
                sx={{ boxShadow: `${trigger ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none"}` }}>
          <Toolbar>
            <IconButton size="large" edge="start" onClick={() => setOpen(true)}><MenuIcon
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
                sx={{ boxShadow: `${trigger ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none"}` }}>
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
              {navPages.map(page => (
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