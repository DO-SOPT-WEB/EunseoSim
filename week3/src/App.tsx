import ComponentTest from './pages/ComponentTest';
import FunnelLayout from './components/FunnelLayout';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ComponentTest />
      {/* <FunnelLayout /> */}
    </ThemeProvider>
  );
}

export default App;
