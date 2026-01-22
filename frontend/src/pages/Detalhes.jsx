import { useEffect, useState } from "react";
import { useParams, Link, data } from "react-router-dom";
import axios from "axios";

export default function Detalhes() {
  const { id } = useParams();
  const [ponto, setPonto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (buscarDetalhe(), []);
  });

  const buscarDetalhe = async () => {
    try {
      const resposta = await axios.get(
        `https://localhost:7218/api/PontoTuristico/${id}`,
      );
      setPonto(resposta.data);
      setLoading(false);
    } catch (erro) {
      alert(`Erro ao buscar o id: ${id}`);
    }
  };

  if (loading) {
    return <h2>Carregando pontos turisticos...</h2>;
  }

  if (!ponto) {
    return <h3>Ponto turistico não encontrado!</h3>;
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <h1>{ponto.nome}</h1>
        <p>
          {ponto.localizacao} - {ponto.cidade}/{ponto.estado}
        </p>

        <hr />

        <h3>Sobre:</h3>
        <p>{ponto.descricao}</p>
        <hr />
        <p>
          Cadastrado em: {new Date(ponto.dataInclusao).toLocaleDateString()}
        </p>
        <Link style={{ textAlign: "center" }} className="verDetalhes" to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
}
