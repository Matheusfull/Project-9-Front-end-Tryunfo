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
              />
            ))
          }
        </div>
      );
    }
}

export default App;
