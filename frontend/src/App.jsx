import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Detalhes from "./pages/Detalhes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Pontos turisticos</Link> |{" "}
        <Link to="/Cadastro">Cadastrar</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Detalhes/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
