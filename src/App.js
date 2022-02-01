import { Box, ThemeProvider } from "@mui/material";
import Contact from "./Components/ContactSection/Contact";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <HeroSection/>
        <Contact/>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
