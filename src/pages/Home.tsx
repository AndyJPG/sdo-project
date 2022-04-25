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
      <Box sx={{
        border: "1px solid blue",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        flexWrap: "wrap"
      }}>
        <Box sx={{ width: "18rem" }}>
          <img alt="tell us about your ideas"
               width="100%"
               src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ftell-us-about-shadow.png?alt=media&token=3afa7b9b-231f-4453-8d77-95a83e1cd295"/>
        </Box>
        <Typography variant="h5">Tell us about your ideas</Typography>
        <Typography variant="body1">Throw us as many ideas as you could and our experienced team will help you construct
          them and come up with the best solution for your website.</Typography>
        <Button variant="text">get in touch</Button>
      </Box>

    </>
  )
}

export default Home