import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      descricao: '',
      Attr01: '',
      Attr02: '',
      Attr03: '',
      image: '',
      raridade: 'normal',
      trunfo: false,
      cartas: [],
      hasTrunfo: false,
      /*  button: 'disabled', */
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { name,
      descricao,
      Attr01,
      Attr02,
      Attr03,
      image,
      raridade,
      trunfo } = this.state;

    this.setState((prevState) => ({
      name: '',
      descricao: '',
      Attr01: '0',
      Attr02: '0',
      Attr03: '0',
      image: '',
      raridade: 'normal',
      trunfo: false,
      cartas: [...prevState.cartas, { name,
        descricao,
        Attr01,
        Attr02,
        Attr03,
        image,
        raridade,
        trunfo }],
    }), () => this.superTrunfo());
  }

  handle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  isSaveButtonDisabled = () => {
    // event.preventDefault();
    // console.log('oioi');
    const number = 210;
    const number2 = 90;
    const number3 = 0;
    const { name, descricao, image, raridade, Attr03, Attr02, Attr01 } = this.state;
    if (name === '' || descricao === '' || image === '' || raridade === '') {
      // console.log('há algum nome');
      /* this.setState({
        button: '',
      }); */
      return true;
    }
    if (Number(Attr01) + Number(Attr02) + Number(Attr03) > number) {
      // console.log('menor do que 210');
      return true;
    }
    if (Number(Attr01) > number2 || Number(Attr02) > number2
      || Number(Attr03) > number2) {
      // console.log("numer");
      return true;
    }
    if (Number(Attr01) < number3 || Number(Attr02) < number3
      || Number(Attr03) < number3) {
      return true;
    }
    return false;
  }

    superTrunfo = () => {
      const { cartas } = this.state;
      const verifyCard = cartas.some((card) => card.trunfo === true);
      this.setState({
        hasTrunfo: verifyCard,
      });
    }

    onDeleteButtonClick= (cardName, cardTrunfo) => {
      console.log(cardName);
      const { cartas } = this.state;
      this.setState({
        cartas: cartas.filter((card) => card.name !== cardName),
      });
      // console.log(cartas);
      if (cardTrunfo) {
        this.setState({
          hasTrunfo: false,
        });
      }
    }

    render() {
      const { name,
        descricao,
        Attr01,
        Attr02,
        Attr03,
        image,
        raridade,
        trunfo,
        hasTrunfo,
        cartas,
      } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ name }
            cardDescription={ descricao }
            cardAttr1={ Attr01 }
            cardAttr2={ Attr02 }
            cardAttr3={ Attr03 }
            cardImage={ image }
            cardRare={ raridade }
            cardTrunfo={ trunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.handle }
            /* isSaveButtonDisabled={ button } */
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ name }
            cardDescription={ descricao }
            cardAttr1={ Attr01 }
            cardAttr2={ Attr02 }
            cardAttr3={ Attr03 }
            cardImage={ image }
            cardRare={ raridade }
            cardTrunfo={ trunfo }
            excluir={ false }
          />
          {
            cartas.map((card) => (
              <Card
                key={ card.name }
                cardName={ card.name }
                cardDescription={ card.descricao }
                cardAttr1={ card.Attr01 }
                cardAttr2={ card.Attr02 }
                cardAttr3={ card.Attr03 }
                cardImage={ card.image }
                cardRare={ card.raridade }
                cardTrunfo={ card.trunfo }
                excluir
                onDeleteButtonClick={ this.onDeleteButtonClick }
              />
            ))
          }
        </div>
      );
    }
}

export default App;

/*
Requisito 4 -
Agora vamos controlar os estados, com isso o valor dos inputs estarão tanto no formulário quanto no preview do card.
Para controlar precisamos:
1 - Fazer a função que ao digitar no formulário, pega esses valores e salvo no estado.
2 - pega o estado e passa como prop para o Card e Form para que eles possam renderizar a informação.
*/

/*
Requisito 5 -
fazer as 4 condições, normal
*/

/*
Requisito 6 -
1 - pega o estado
2 - salva-o no array
3 - zera o estado
4 - garante que a verificação de ter um supertrunfo só vai ocorrer depois do passo 2 e 3. O setState é assíncrono.
*/

/*
Requisito 7 -
Eu preciso pegar todas as cartas que foram salvas e ver se alguma (some) tem o supertrunfo, caso tenha, vou indicar (através do estado hastrunfo) que há um escolhida. Ou seja, hastrunfo vai ficar true caso tenha trunfo e false caso não tenha.
Essa função vai set chamada dentro da função de salvar a carta.
*/

/*
Requisito 8 -
Para renderizar no App e garantir que as cartas serão atualizadas, basta fazer um map com as cartas salvas no componente Card, pois ele é responsável por ter a estrutura para renderizar conforme for passada as props (o nome do bicho, descrição, números...)
*/

/*
Requisito 9 -
1 - Esse botão só aparece nas cartas salvas, então vou fazer uma render condicional
2 - depois fazer um filter.
3 - Se a carta for um trunfo, muda o hasTrunfo para falsa a fim de indicar que um trunfo foi excluído.
*/
