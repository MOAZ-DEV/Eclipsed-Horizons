import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import './App.scss'
import { EclipseTypesPage } from "./pages/EclipseTypesPage.tsx";
import { YouAreLost } from "./pages/YouAreLost.tsx";
import { EclipsesThroughoutHistory } from "./pages/EclipsesThroughoutHistory.tsx";

const App = () => {

  return <BrowserRouter>

    <Routes>

        <Route path="/*" element={<YouAreLost />} />
        <Route index path="home" element={<HomePage />} />
        <Route path="eclipse_types" element={<EclipseTypesPage />} />
        <Route path="eclipses_throughout_history" element={<EclipsesThroughoutHistory />} />

    </Routes>

  </BrowserRouter>;
}

export default App;

  //