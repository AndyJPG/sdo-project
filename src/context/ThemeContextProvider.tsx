import { createTheme, ThemeProvider } from "@mui/material"
import * as React from "react"

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3382b9"
    },
    secondary: {
      main: "#1D1D1D"
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
    ].join(",")
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
            padding: "0.5rem 2.2rem"
          }
        },
        {
          props: { variant: "text", size: "small" },
          style: {
            fontWeight: "bold",
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

const ThemeContextProvider = (props: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ThemeContextProvider