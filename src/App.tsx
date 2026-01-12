import Header from "@/sections/Header/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Routes, Route } from "react-router-dom";
import Admin from "@/pages/Admin";
import Home from "@/pages/Home";
import { UserProvider } from '@/lib/context/UserContext';
import NotFound from "./pages/NotFound";
import InteractiveBackground from "@/components/visual/InteractiveBackground";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1rem", borderRadius: "8px" } }}
      />
      <ThemeProvider>
        <UserProvider>
          <InteractiveBackground />
          <Header />
          <main>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
