import FunnelLayout from './components/funnel/FunnelLayout';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <ComponentTest /> */}
      <FunnelLayout />
    </ThemeProvider>
  );
}

export default App;
