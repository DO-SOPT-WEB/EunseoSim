import ComponentTest from './pages/ComponentTest';
import FunnelLayout from './components/funnel/FunnelLayout';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {/* <ComponentTest /> */}
      <FunnelLayout />
    </ThemeProvider>
  );
}

export default App;
