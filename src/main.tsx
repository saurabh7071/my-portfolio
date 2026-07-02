import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Cormorant Garamond — regular
import "@fontsource/cormorant-garamond/latin-300.css"
import "@fontsource/cormorant-garamond/latin-400.css"
import "@fontsource/cormorant-garamond/latin-500.css"
import "@fontsource/cormorant-garamond/latin-600.css"

// Cormorant Garamond — italic
import "@fontsource/cormorant-garamond/latin-300-italic.css"
import "@fontsource/cormorant-garamond/latin-400-italic.css"
import "@fontsource/cormorant-garamond/latin-500-italic.css"

// Inter
import "@fontsource/inter/latin-300.css"
import "@fontsource/inter/latin-400.css"
import "@fontsource/inter/latin-500.css"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
