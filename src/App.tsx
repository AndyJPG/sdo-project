import { CircularProgress } from "@mui/material"
import React, { lazy } from "react"
import "./App.css"
import ThemeContextProvider from "./context/ThemeContextProvider"

const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <ThemeContextProvider>
      <React.Suspense fallback={<CircularProgress/>}>
        <Home/>
      </React.Suspense>
    </ThemeContextProvider>
  )
}

export default App
