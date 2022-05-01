import { Box, Container, Divider, Link, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"

const Footer = () => {
  return (
    <Box>
      <Container sx={{
        display: "flex",
        flexWrap: "wrap",
        pt: "2rem",
        pb: { xs: "2rem", md: "4rem" },
        justifyContent: { md: "space-between" }
      }}>
        <Divider sx={{ width: "100%", mb: "1rem" }}/>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon/>
          <Link href="mailto:info@designvortex.net" underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: 900,
                  ml: "0.5rem",
                  fontSize: "0.875rem"
                }}>info@designvortex.net</Link>

        </Box>
        <Divider sx={{ width: "100%", my: "1rem", display: { xs: "block", md: "none" } }}/>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontWeight: 900 }}>&copy; 2022</Typography>
          <Link underline="none"
                sx={{ color: "text.primary", fontWeight: 900, ml: "0.5rem", fontSize: "0.875rem" }}>Privacy</Link>
          <Typography variant="body2" sx={{ fontWeight: 900, mx: "1rem" }}>|</Typography>
          <Typography variant="body2" sx={{ fontWeight: 900 }}>Follow us:</Typography>
          <FacebookIcon sx={{ mx: "0.5rem" }}/>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer