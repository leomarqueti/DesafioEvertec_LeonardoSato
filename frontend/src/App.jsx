import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Pontos turisticos</Link> |{" "}
        <Link to="/cadastrar">Cadastrar</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
