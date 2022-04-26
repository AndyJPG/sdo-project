import { Box, Button, Container, Typography } from "@mui/material"
import { lazy } from "react"

const Navbar = lazy(() => import("../components/Navbar"))

const Home = () => {
  return (
    <>
      <Navbar/>
      <Box sx={{
        background: "linear-gradient(45deg, rgba(203,210,228,1) 0%, rgba(243,248,251,1) 100%)"
      }}>
        <Container maxWidth="xl" sx={{
          pt: { xs: "7.5rem", md: "9rem", lg: "12rem" },
          pb: { md: "3rem", lg: "6rem" },
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { md: "center" }
        }}>
          <Box sx={{
            width: { md: "35%" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "start" }
          }}>
            <Typography variant="subtitle2"
                        sx={{
                          color: theme => theme.palette.text.secondary,
                          textTransform: "uppercase",
                          textAlign: { xs: "center", md: "left" },
                          fontSize: { xs: "0.7rem", md: "0.8rem" },
                          mb: "1rem",
                          width: "100%"
                        }}>build
              your website with
              ease</Typography>
            <Typography variant="h5"
                        sx={{ display: { md: "none" }, textAlign: { xs: "center", md: "left" }, mb: "1.8rem" }}>Create a
              website and
              standout
              online</Typography>
            <Typography variant="h4" sx={{
              display: { xs: "none", md: "block" },
              textAlign: { xs: "center", md: "left" },
              mb: "1.8rem"
            }}>Create a website and
              standout
              online</Typography>
            <Typography variant="body2"
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          fontSize: { xs: "0.8rem", md: "0.9rem" },
                          mb: "2rem"
                        }}>We
              help you to
              construct complex
              ideas and to create,
              design and develop your
              website as what you want it to be.</Typography>
            <Button variant="contained" size="small" sx={{ mb: "4rem" }}>learn more</Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" }, width: "55%", mt: "-2rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fmobile-desktop-image.png?alt=media&token=90964075-4d18-42b5-9f78-6a40cfca4589"
              alt="mobile desktop demo"
              style={{ width: "100%" }}/>
          </Box>
          <Box
            sx={{
              height: "15rem",
              width: "100%",
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              overflow: "hidden",
              pl: "1.2rem"
            }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fphone-mockup-1.png?alt=media&token=7446d79e-ffca-4561-b6c2-85d64ce2150e"
              alt="phone demo"
              style={{ height: "160%" }}/>
          </Box>
        </Container>
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