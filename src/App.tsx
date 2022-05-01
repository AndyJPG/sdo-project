import { Backdrop, CircularProgress } from "@mui/material"
import React, { lazy } from "react"
import "./App.css"
import ThemeContextProvider from "./context/ThemeContextProvider"
import BoundarySuspense from "./utils/BoundarySuspense"

const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <ThemeContextProvider>
      <BoundarySuspense name="home" fallbackUI={<Backdrop open={true}><CircularProgress/></Backdrop>}>
        <Home/>
      </BoundarySuspense>
    </ThemeContextProvider>
  )
}

export default App
