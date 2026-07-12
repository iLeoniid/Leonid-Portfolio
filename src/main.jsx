import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./context/ThemeContext"
import { useLenis } from "./hooks/useLenis"
import "./index.css"
import App from "./App.jsx"

function AppWithProviders() {
  useLenis()
  return <App />
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppWithProviders />
    </ThemeProvider>
  </StrictMode>
)
