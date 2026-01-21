import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [termo, setTermo] = useState("");

  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    buscarDados();
  }, [pagina]);

  const buscarDados = async () => {
    try {
      const resposta = await axios.get(
        "https://localhost:7218/api/PontoTuristico",
        {
          params: {
            termo: termo,
            pagina: pagina,
          },
        },
      );
      setPontos(resposta.data);
      setLoading(false);
    } catch (erro) {
      console.log("Erro api", erro);
      alert("ERRO API");
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Carregando pontos turisticos...</h2>;
  }

  return (
    <div>
      <h1>Pontos turisticos</h1>

      <Link to="/cadastro">+ Cadastrar novo ponto</Link>

      <div>
        <input
          placeholder="Buscar por nome, cidade..."
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
        <button onClick={buscarDados}>Pesquisar</button>
      </div>

      <div>
        {pontos.map((ponto) => (
          <div key={ponto.id}>
            <h3>{ponto.nome}</h3>
            <p>{ponto.localizacao}</p>
            <hr />
            <Link to={`/detalhes/${ponto.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
          ⬅️ Anterior
        </button>

        <span>Pagina: {pagina}</span>

        <button onClick={() => setPagina(pagina + 1)}>Próximo ➡️</button>
      </div>
    </div>
  );
}

export default Home;
