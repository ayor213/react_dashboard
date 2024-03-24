import{ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Topbar from './scenes/global/Topbar.jsx';
import Sidebar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Waterfall from "./scenes/waterfall";
// import BoxPlot from "./scenes/boxPlot";
// import Calendar from "./scenes/calendar/calendar";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
            {/* <Menu>
              <MenuItem className="menu1">
                <h2>QUICKPAY</h2>
              </MenuItem>
              <MenuItem> Dashboard </MenuItem>
              <MenuItem> Invoices </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Timeline Chart </MenuItem>
                <MenuItem> Bubble Chart </MenuItem>
              </SubMenu>
              <SubMenu label="Wallets">
                <MenuItem>Current Wallet</MenuItem>
                <MenuItem>Savings Wallet</MenuItem>
              </SubMenu>
              <MenuItem> Transactions </MenuItem>
              <SubMenu label="Settings">
                <MenuItem> Account </MenuItem>
                <MenuItem> Privacy </MenuItem>
                <MenuItem> Notifications </MenuItem>
              </SubMenu>
              <MenuItem> Logout </MenuItem>
            </Menu> */}
          
         {/*  <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Waterfall />} /> */}
              {/* <Route path="/boxPlot" element={<Waterfall />} /> */}
              {/* <Route path="/waterfall" element={<Waterfall />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;