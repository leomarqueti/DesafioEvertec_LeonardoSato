import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Detalhes from "./pages/Detalhes";
import Rodape from "./components/Rodape";

function App() {
  return (
    <BrowserRouter>
      <div className="container-principal">
        <nav>
          <Link className="linkNav" to="/">
            {" "}
            Pontos turisticos
          </Link>{" "}
          |{" "}
          <Link className="linkNav" to="/Cadastro">
            Cadastrar
          </Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Detalhes/:id" element={<Detalhes />} />
        </Routes>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
