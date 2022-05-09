import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
// === import local components =====
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
        <ThemeProvider theme={theme} dir="rtl">
          <Navbar />  
          <GlobalStyle />
        </ThemeProvider>
    </>
  
  );
}

export default App;
