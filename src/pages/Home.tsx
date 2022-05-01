import { Box, Container, Divider, Typography } from "@mui/material"
import { lazy } from "react"
import BoundarySuspense from "../utils/BoundarySuspense"

const Navbar = lazy(() => import("../components/Navbar"))
const Jumbotron = lazy(() => import("../components/Jumbotron"))
const DialogSectionList = lazy(() => import("../components/DialogSectionList"))
const CallToAction = lazy(() => import("../components/CallToAction"))
const ServicesSection = lazy(() => import("../components/ServicesSection"))
const UseCaseSection = lazy(() => import("../components/UseCaseSection"))

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
      <BoundarySuspense name="call to action">
        <CallToAction/>
      </BoundarySuspense>
      <BoundarySuspense name="Services section">
        <ServicesSection/>
      </BoundarySuspense>
      <Container maxWidth="xl" sx={{ my: "1rem" }}>
        <Divider/>
      </Container>
      <BoundarySuspense name="Use case section">
        <UseCaseSection/>
      </BoundarySuspense>
      <Box>
        <Typography variant="body2">&copy; 2022 Privacy</Typography>
      </Box>
    </>
  )
}

export default Home