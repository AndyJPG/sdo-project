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
      "cursive"
    ].join(",")
  }
})

const theme = createTheme(baseTheme, {})

const ThemeContextProvider = (props: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ThemeContextProvider