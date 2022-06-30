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
      raridade: '',
      trunfo: false,
      /*  button: 'disabled', */
    };
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
    console.log('oioi');
    const number = 210;
    const number2 = 90;
    const number3 = 0;
    const { name, descricao, image, raridade, Attr03, Attr02, Attr01 } = this.state;
    if (name === '' || descricao === '' || image === '' || raridade === '') {
      console.log('há algum nome');
      /* this.setState({
        button: '',
      }); */
      return true;
    }
    if (Number(Attr01) + Number(Attr02) + Number(Attr03) > number) {
      console.log('menor do que 210');
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

  render() {
    const { name,
      descricao,
      Attr01,
      Attr02,
      Attr03,
      image,
      raridade,
      trunfo } = this.state;
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
          onInputChange={ this.handle }
          /* isSaveButtonDisabled={ button } */
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
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
      </div>
    );
  }
}

export default App;
