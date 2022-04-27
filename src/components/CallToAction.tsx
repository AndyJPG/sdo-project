import { Box, Button, Container, Typography } from "@mui/material"

const CallToAction = () => {
  return (
    <Box sx={{
      background: "radial-gradient(circle, rgba(47,124,178,1) 0%, rgba(8,75,117,1) 100%)"
    }}>
      <Container
        sx={{
          py: { xs: "2rem" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
        <Typography variant="h6"
                    sx={{ textAlign: "center", color: "white", pb: { xs: "1rem", md: 0 }, pr: { md: "2rem" } }}>Looking
          for
          digital
          solutions ?
          We
          are
          here to help.</Typography>
        <Button variant="contained" size="small"
                sx={{
                  backgroundColor: "white",
                  color: "secondary.main",
                  ":hover": {
                    backgroundColor: "secondary.main",
                    color: "white"
                  }
                }}>get
          in
          touch</Button>
      </Container>
    </Box>
  )
}

export default CallToAction