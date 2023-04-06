import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.main`
  border: solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #00ffff;
`;

const Container = styled.div`
  border: solid;
  width: 25vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5deb3;

  img {
    width: 20vw;
  }
`;

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

//1º criar um estado para receber uma lista
class App extends Component {
  state = {
    informacoes: []
  };

  //2º importar o axios e criar uma variável para receber o link da minha api
  //Create: é um método para guardar a url (base da API que estamos consumindo) e de onde virá as informações.

  //3º Criar uma função para trazer os dados da API

  //Async = assíncrono: que não ocorre ou não se efetiva ao mesmo tempo. Que não acontece junto com outra coisa.
  //Await = Aguardar/Esperar algo ou alguém.
  //async/await, usados juntos.

  //Chamar a função PegarPersonagem() no didMount, para que ela fique pré renderizada.
  componentDidMount() {
    this.PegarPersonagem();
  }

  PegarPersonagem = async () => {
    const resposta = await Api.get();
    //get = método para pegar a api
    //Essa variável roda o await que vai esperar a promessa ser retornada, ou seja, a promessa = APi.

    //console.log pra ver a função recebendo a api.
    console.log(resposta.data.results);

    //Váriável que vai acessar e mapear os resultados onde estão guardados os personagens da api
    const itens = resposta.data.results.map((item) => {
      return {
        ...item
        //spread ... retorna pra mim cada item da lista em uma nova lista/array
      };
    });

    //4º Trazer os itens para dentro da array informações
    this.setState({
      informacoes: itens
    });
  };

  render() {
    return (
      <>
        {/* <h2>
          API: É um conjunto de normas que possibilita a comunicação entre
          plataformas por meio de séries e protocolos.
        </h2>

        <h2>
          AXIOS: É uma biblioteca que permite uma integração do seu projeto com
          o serviço de API. Axios é uma vara de pescar para pegar o peixe e esse
          peixe é a API.
        </h2>
        <p>Get = método para pegar a api</p>
        <p>
          Async = assíncrono: que não ocorre ou não se efetiva ao mesmo tempo.
          Que não acontece junto com outra coisa. Await = Aguardar/Esperar algo
          ou alguém. async/await, usados juntos.
        </p> */}
        <Main>
          {this.state.informacoes.map((item) => (
            <Container>
              <h1>Dimensão</h1>
              <img src={item.image} alt={item.name} />
              <h1> {item.name} </h1>
              <h2> {item.species} </h2>
            </Container>
          ))}
        </Main>
      </>
    );
  }
}
export default App;
