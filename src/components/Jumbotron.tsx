import { Box, Button, Container, Typography } from "@mui/material"

const Jumbotron = () => {
  return (
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
                      sx={{ display: { md: "none" }, textAlign: { xs: "center", md: "left" } }}>Create a
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
            src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fmobile-desktop-image.png?alt=media&token=d891817f-a3fd-4048-9693-04cb656574b8"
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
            src="https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fphone-mockup.png?alt=media&token=60a7c9c7-c7e2-4304-9008-075c56bb0338"
            alt="phone demo"
            style={{ height: "160%" }}/>
        </Box>
      </Container>
    </Box>
  )
}

export default Jumbotron