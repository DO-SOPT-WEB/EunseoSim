import ComponentTest from './pages/ComponentTest';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ComponentTest />
    </ThemeProvider>
  );
}

export default App;
