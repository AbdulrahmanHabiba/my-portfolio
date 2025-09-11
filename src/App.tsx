import Header from "@/sections/Header/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Routes, Route } from "react-router-dom";
import Admin from "@/pages/Admin";
import Home from "@/pages/Home";
import { UserProvider } from '@/lib/context/UserContext';



function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1rem", borderRadius: "8px" } }}
      />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        </UserProvider>
        <ScrollToTopButton />
      </ThemeProvider>
    </>
  );
}

export default App;
