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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          margin: "6px"
        }}
      >
        <h1>Pontos turisticos</h1>

        <Link className="linkNav" to="/cadastro">
          + Cadastrar novo ponto
        </Link>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            placeholder="Buscar por nome, cidade..."
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            style={{ border: "none", padding: "5px", borderRadius: "5px" }}
          />
          <button className="btn" Click={buscarDados}>
            Pesquisar
          </button>
        </div>
      </div>

      <hr />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {pontos.map((ponto) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            key={ponto.id}
          >
            <h3>{ponto.nome}</h3>
            <p>{ponto.localizacao}</p>
            <Link className="verDetalhes" to={`/detalhes/${ponto.id}`}>
              Ver detalhes
            </Link>
            <hr />
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          className="btn"
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          ⬅️ Anterior
        </button>

        <span>Pagina: {pagina}</span>

        <button className="btn" onClick={() => setPagina(pagina + 1)}>
          Próximo ➡️
        </button>
      </div>
    </div>
  );
}

export default Home;
