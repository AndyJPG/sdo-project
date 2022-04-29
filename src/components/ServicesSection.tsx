import { Box, Container, Typography } from "@mui/material"

const ServicesSection = () => {
  const services = [
    {
      title: "Web design & development",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fweb-design.svg?alt=media&token=7cf74a60-ca32-4bc3-b82d-0055b6a05d34"
    },
    {
      title: "eCommerce",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2FeCommerce.svg?alt=media&token=fbb2d921-28f6-4d6f-99af-8dcd7f9755aa"
    },
    {
      title: "Digital marketing",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fdigital-marketing.svg?alt=media&token=867aa6d5-995d-47a9-8d6e-432bd0dbbab4"
    },
    {
      title: "Search engine optimisation",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fseo.svg?alt=media&token=8f4c39d1-122a-4b9b-89d7-bd2b832d67be"
    }
  ]

  return (
    <Box>
      <Container maxWidth="xl" sx={{
        py: { xs: "3rem", md: "6rem" },
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <Typography variant="h5" sx={{ textAlign: "center", width: "100%", display: { xs: "block", md: "none" } }}>Everything
          you need to grow
          online</Typography>
        <Typography variant="h4" sx={{ textAlign: "center", width: "100%", display: { xs: "none", md: "block" } }}>Everything
          you need to grow
          online</Typography>
        <Typography variant="body2" sx={{ textAlign: "center", fontSize: "0.8rem", mb: "2.8rem", maxWidth: "45rem" }}>Tell
          us your goal
          and only choose
          what you need to take you online. Whether it's
          for
          digital marketing, web development, or visual appearance, our team will be there to help.</Typography>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          rowGap: { xs: "2rem", md: 0 },
          justifyContent: "space-between"
        }}>
          {services.map(service => (
            <Box sx={{ width: { xs: "45%", md: "20%" }, display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "50%" }}>
                <img alt="tell us about your ideas"
                     width="100%"
                     src={service.imgUrl}/>
              </Box>
              <Typography variant="body2" sx={{ width: "50%", fontSize: "0.8rem" }}>{service.title}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesSection