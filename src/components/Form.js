import React from 'react';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <textarea
              type="textarea"
              data-testid="description-input"
              id="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr01">
            Attr01:
            <input
              type="number"
              data-testid="attr1-input"
              id="Attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr02">
            Attr02:
            <input
              type="number"
              data-testid="attr2-input"
              id="Attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Attr03">
            Attr03:
            <input
              type="number"
              data-testid="attr3-input"
              id="Attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input
              type="checkbox"
              id="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="button">
            Enviar
            <input
              type="submit"
              id="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
