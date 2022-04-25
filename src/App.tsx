import { CircularProgress } from "@mui/material"
import React, { lazy } from "react"
import "./App.css"

const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<CircularProgress/>}>
        <Home/>
      </React.Suspense>
    </div>
  );
}

export default App;
