import { Container, Divider } from "@mui/material"
import { lazy } from "react"
import BoundarySuspense from "../utils/BoundarySuspense"

const Navbar = lazy(() => import("../components/Navbar"))
const Jumbotron = lazy(() => import("../components/Jumbotron"))
const DialogSectionList = lazy(() => import("../components/DialogSectionList"))
const CallToAction = lazy(() => import("../components/CallToAction"))
const ServicesSection = lazy(() => import("../components/ServicesSection"))
const UseCaseSection = lazy(() => import("../components/UseCaseSection"))
const Footer = lazy(() => import("../components/Footer"))

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
      <BoundarySuspense name="footer">
        <Footer/>
      </BoundarySuspense>
    </>
  )
}

export default Home