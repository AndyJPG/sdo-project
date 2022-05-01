import { createStyles, createTheme, GlobalStyles, ThemeProvider } from "@mui/material"
import * as React from "react"

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3382b9"
    },
    secondary: {
      main: "#084c76"
    },
    text: {
      primary: "#1D1D1D",
      secondary: "#4a4a4a"
    }
  },
  typography: {
    fontFamily: [
      "Comfortaa",
      "sans-serif"
    ].join(","),
    h4: {
      marginBottom: "1.5rem"
    },
    h5: {
      marginBottom: "1rem"
    }
  }
})

const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", size: "small" },
          style: {
            borderRadius: "99rem",
            textTransform: "capitalize",
            padding: "0.5rem 2.2rem",
            boxShadow: "none",
            fontWeight: 900
          }
        },
        {
          props: { variant: "text" },
          style: {
            fontWeight: 900,
            textTransform: "capitalize",
            padding: 0,
            ":hover": {
              color: baseTheme.palette.primary.main,
              backgroundColor: "transparent"
            }
          }
        }
      ]
    }
  }
})

const globalStyles = <GlobalStyles styles={{
  ".swiper-pagination-bullet-active": {
    backgroundColor: "#3382b9 !important"
  }
}}/>

const ThemeContextProvider = (props: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{globalStyles}{props.children}</ThemeProvider>
}

export default ThemeContextProvider