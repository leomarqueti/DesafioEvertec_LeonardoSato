import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const cadastrarPonto = async () => {
    try {
      const pontoTuristico = {
        nome: nome,
        descricao: descricao,
        localizacao: localizacao,
        cidade: cidade,
        estado: estado,
      };

      await axios.post(
        "https://localhost:7218/api/PontoTuristico",
        pontoTuristico,
      );

      alert("Ponto turistico cadastrado com sucesso!!");
      navigate("/");
    } catch (erro) {
      console.log("Erro no cadastro:", erro);
      alert("Ocorreu um erro ao cadastrar!");
    }
  };

  return (
    <div className="container-cadastro">
      <h1>Cadastro</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50vh",
        }}
      >
        <input
          className="campoTexto"
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <textarea
          className="campoTexto"
          maxLength={100}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          className="campoTexto"
          placeholder="Localização"
          type="text"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <input
          className="campoTexto"
          placeholder="Cidade"
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <select
          className="campoTexto"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </div>
      <div>
        <button
          style={{ width: "80px" }}
          className="btn"
          onClick={cadastrarPonto}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
