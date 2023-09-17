import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material';

import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={customTheme}>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </ThemeProvider>
);
