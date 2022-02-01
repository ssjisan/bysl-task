import { Box, ThemeProvider } from "@mui/material";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <HeroSection/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
