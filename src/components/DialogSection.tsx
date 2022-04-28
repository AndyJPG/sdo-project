import { Box, Button, Container, Typography } from "@mui/material"

interface DialogSectionProps {
  title?: string
  content?: string
  action?: () => void
  imagUrl?: string
  backgroundColor?: string,
  flexDirection?: string
}

const DialogSection = (props: DialogSectionProps) => {
  const { title, content, action, imagUrl, backgroundColor, flexDirection } = props

  return (
    <Box sx={{ backgroundColor: backgroundColor }}>
      <Container maxWidth="xl" sx={{
        py: { xs: "3rem", md: "6rem" },
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: flexDirection || "row"
      }}>
        <Box sx={{
          width: { xs: "80%", md: "40%" },
          pb: { xs: "2rem", md: 0 },
          display: "flex",
          justifyContent: "center",
          alignItem: "center"
        }}>
          <Box sx={{ width: { md: "75%" } }}>
            <img alt={title}
                 width="100%"
                 src={imagUrl}/>
          </Box>
        </Box>
        <Box sx={{ width: { md: "60%" }, display: "flex", justifyContent: "center" }}>
          <Box sx={{
            display: { xs: "flex", md: "block" },
            justifyContent: "center",
            flexWrap: "wrap",
            width: { md: "65%" }
          }}>
            <Typography variant="h5" sx={{ display: { md: "none" } }}>{title}</Typography>
            <Typography variant="h4" sx={{ pb: "1rem", display: { xs: "none", md: "block" } }}>{title}</Typography>
            <Typography variant="body2"
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          fontSize: { xs: "0.8rem" },
                          pb: "1.5rem"
                        }}>{content}</Typography>
            <Button variant="text" size="small" onClick={action} sx={{ display: { xs: "block", md: "none" } }}>learn
              more</Button>
            <Button variant="text" onClick={action} sx={{ display: { xs: "none", md: "block" } }}>learn
              more</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default DialogSection