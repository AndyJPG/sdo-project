import { Alert, Box, Button, CircularProgress } from "@mui/material"
import React from "react"
import { ErrorBoundary } from "react-error-boundary"

interface BoundarySuspenseInterface {
  name?: string
  children?: React.ReactNode
  fallbackUI?: React.ReactNode
}

const BoundarySuspense = (props: BoundarySuspenseInterface) => {
  const { children, name, fallbackUI } = props
  return (
    <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => (
      <Alert severity="error"
             action={<Button color="inherit" size="small" onClick={() => resetErrorBoundary()}>retry</Button>}>Unable to
        render {name || "UI"} with error: {error.message}</Alert>
    )}>
      <React.Suspense fallback={fallbackUI ||
          <Box sx={{ width: "100%", py: "3rem", display: "flex", justifyContent: "center" }}><CircularProgress/></Box>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default BoundarySuspense