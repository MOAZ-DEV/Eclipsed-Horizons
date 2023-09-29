import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MatchingGame } from "./games/MatchingGame/Game.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import './App.scss'

const App = () => {

  return <BrowserRouter>

    <Routes>
      
      <Route index path="/Eclipsed-Horizons" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/games">
        <Route path="matchinggame" element={<MatchingGame />} />
      </Route>
      <Route path="*" element={<HomePage />} />



  </Routes>

  </BrowserRouter >;
}

export default App;

  //