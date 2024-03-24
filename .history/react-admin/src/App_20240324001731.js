import{ColorModeContext, useMode} from './theme';
import {cssBaseline, ThemeProvidet} from '@mui/material';
import { ThemeProvider } from '@emotion/react';



function App() {

  const[ theme, colorMode] = useMode;
  return (<ColorModeContext.Provider value={coloMode}>
    <ThemeProvider theme={theme}>
    <div className="app"></div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
