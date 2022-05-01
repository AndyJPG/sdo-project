import { Box, Button, Container, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const UseCaseSection = () => {
  const useCases = [
    {
      title: "Duuet - Web Design",
      subtitle: "Branding, Web Design & Development",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fduuet.jpg?alt=media&token=3c662709-425d-4eaf-9e60-b3c7cacf72c2"
    },
    {
      title: "T-ONE Image - Web Design",
      subtitle: "Web Design & Development",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ft-one.jpg?alt=media&token=5f838caa-e01b-4cb0-82d3-a84f09312a6e"
    },
    {
      title: "Cafeezy - Web Design",
      subtitle: "Web Design & Development",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fcafeezy.jpg?alt=media&token=066f8b94-b280-4017-a678-cc2093db135f"
    },
    {
      title: "Fanfou - Web Design",
      subtitle: "Web Design",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ffanfou.jpg?alt=media&token=0d2ea50e-ebc7-4033-af41-b42d85284200"
    }
  ]

  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: { xs: "2rem", md: "5rem" } }}>
        <Box sx={{ mb: { xs: "2rem", md: "4rem" }, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Typography variant="body1" sx={{ textAlign: "center", fontSize: "1.2rem" }}>Get a feeling of how we can help
            your business with
            cases we have done.</Typography>
          <Button variant="text" sx={{ fontSize: "1.1rem", ml: "1rem" }}>see all cases</Button>
        </Box>
        <Swiper pagination={{ clickable: true }} slidesPerView={1} spaceBetween={10} breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }} modules={[ Pagination ]}>
          {useCases.map(useCase => (
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{
                mb: "3rem",
                width: { xs: "75%", sm: "100%" },
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
              }}>
                <img alt={useCase.title}
                     width="100%"
                     src={useCase.imgUrl}/>
                <Typography variant="subtitle1" sx={{ my: "1rem", textAlign: "center" }}>{useCase.title}</Typography>
                <Typography variant="body2" sx={{
                  mb: "2rem",
                  textAlign: "center",
                  color: "text.secondary",
                  fontWeight: 900
                }}>{useCase.subtitle}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default UseCaseSection