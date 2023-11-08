import FunnelLayout from './components/funnel/FunnelLayout';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FunnelLayout />
    </ThemeProvider>
  );
}

export default App;
