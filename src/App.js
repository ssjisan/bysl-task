import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
