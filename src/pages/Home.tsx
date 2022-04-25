import { Box, Button, Typography } from "@mui/material"
import { lazy } from "react"

const Navbar = lazy(() => import("../components/Navbar"))

const Home = () => {
  return (
    <>
      <Navbar/>
      <Box sx={{ border: "1px solid black" }}>
        <Typography variant="body2" sx={{ textTransform: "uppercase" }}>build your website with ease</Typography>
        <Typography variant="h4">Create a website and standout online</Typography>
        <Typography variant="body1">We help you to construct complex ideas and to create, design and develop your
          website as what you want it to be.</Typography>
        <Button variant="contained">learn more</Button>
      </Box>
    </>
  )
}

export default Home