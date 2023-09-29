import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MatchingGame } from "./games/MatchingGame/Game.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import './App.scss'

const App = () => {

  return <BrowserRouter>

    <Routes>
      <Route path="/eclipseshorizons">

      <Route index path="home" element={<HomePage />} />
      <Route index path="home" element={<HomePage />} />

        <Route path="/eclipseshorizons/games/">
        <Route path="matchinggame" element={<MatchingGame />} />

        </Route>

      </Route>
    </Routes>

  </BrowserRouter>;
}

export default App;

  //