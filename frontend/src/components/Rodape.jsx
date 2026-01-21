import React, { Component } from "react";
class Rodape extends Component {
  // definindo o estado em 0
  constructor(props) {
    super(props);
    this.state = {
      segundos: 0,
    };
  }

  // inicia assim que a pagina carregar
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // limpa a memoria
  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  tick() {
    this.setState({
      segundos: this.state.segundos + 1,
    });
  }

  render() {
    return (
      <footer>
        <p>Desenvolvido por Leonardo Sato</p>
        <small>Tempo de sessão ativa: {this.state.segundos} segundos </small>
      </footer>
    );
  }
}

export default Rodape;
