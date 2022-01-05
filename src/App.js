import { AppContainer, BaseLine, Body } from "./bin/Global";
import { Header, Main } from "./components/inedx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import { BestGames } from "./components/Pages";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme");
    if (getTheme === true) setTheme(true)
    else setTheme(false)
  }, []);
  return (
    <AppContainer>
      <BrowserRouter>
        <BaseLine theme={theme} /> {/* Global Style */}
        <Header theme={theme} setTheme={setTheme} />
        <Body>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/best" element={<BestGames />}></Route>
          </Routes>
        </Body>
        {/* <Routes>
        </Routes> */}
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
