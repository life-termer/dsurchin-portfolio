import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="home" />} /> */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
