import { Box, Button, Container, Typography } from "@mui/material"
import { lazy } from "react"
import BoundarySuspense from "../utils/BoundarySuspense"

const Navbar = lazy(() => import("../components/Navbar"))
const Jumbotron = lazy(() => import("../components/Jumbotron"))
const DialogSectionList = lazy(() => import("../components/DialogSectionList"))

const Home = () => {


  return (
    <>
      <BoundarySuspense name="navbar">
        <Navbar/>
      </BoundarySuspense>
      <BoundarySuspense name="jumbotron">
        <Jumbotron/>
      </BoundarySuspense>
      <BoundarySuspense name="dialog section list">
        <DialogSectionList/>
      </BoundarySuspense>

      <Box sx={{ border: "1px solid red" }}>
        <Typography variant="h6">Looking for digital solutions? We are here to help.</Typography>
        <Button variant="contained">get in touch</Button>
      </Box>
      <Box sx={{ border: "1px solid green" }}>
        <Typography variant="h5">Everything you need to grow online</Typography>
        <Typography variant="body1">Tell us your goal and only choose what you need to take you online. Whether it's for
          digital marketing, web development, or visual appearance, our team will be there to help.</Typography>
        <Box>
          <Box sx={{ height: "8rem" }}>
            <img alt="tell us about your ideas"
                 height="100%"
                 src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ftell-us-about-shadow.png?alt=media&token=3afa7b9b-231f-4453-8d77-95a83e1cd295"/>
          </Box>
          <Typography variant="body2">Web design & development</Typography>
          <Box sx={{ height: "8rem" }}>
            <img alt="tell us about your ideas"
                 height="100%"
                 src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ftell-us-about-shadow.png?alt=media&token=3afa7b9b-231f-4453-8d77-95a83e1cd295"/>
          </Box>
          <Typography variant="body2">Web design & development</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Get a feeling of how we can help your business with cases we have done/</Typography>
        <Button variant="text">see all cases</Button>
        <Box>
          <img alt="tell us about your ideas"
               width="100%"
               src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ftell-us-about-shadow.png?alt=media&token=3afa7b9b-231f-4453-8d77-95a83e1cd295"/>
          <Typography variant="subtitle1">Duuet - Web Design</Typography>
          <Typography variant="body2">Branding, Web Design & Development</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2">&copy; 2022 Privacy</Typography>
      </Box>
    </>
  )
}

export default Home