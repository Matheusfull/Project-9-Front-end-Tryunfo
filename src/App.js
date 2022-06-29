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
    };
  }

  handle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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
