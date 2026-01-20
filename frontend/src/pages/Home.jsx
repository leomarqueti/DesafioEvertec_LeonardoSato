import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = async () => {
    try {
      const resposta = await axios.get(
        "https://localhost:7218/api/PontoTuristico",
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
        {pontos.map((ponto) => (
          <div key={ponto.id}>
            <h3>{ponto.nome}</h3>
            <p>{ponto.localizacao}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
