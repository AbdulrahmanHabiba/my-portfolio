import { createContext, useContext } from "react"

// Only allow dark theme
const ThemeProviderContext = createContext({ theme: "dark", setTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always add 'dark' class to the root
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  return (
    <ThemeProviderContext.Provider value={{ theme: "dark", setTheme: () => {} }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeProviderContext)
}
