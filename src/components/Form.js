import React from 'react';
import PropTypes from 'prop-types';

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
      onSaveButtonClick,
    } = this.props;
    /*  const { onInputChange } = this.props; */
    /*  const { state :{name, descricao, Attr1, Attr2, Attr3, image, raridade, trunfo } } = this.props; */
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
              name="name"
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
              name="descricao"
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
              name="Attr01"
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
              name="Attr02"
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
              name="Attr03"
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
              name="image"
            />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="raridade"
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
              name="trunfo"
            />
          </label>
          <label htmlFor="button">
            Enviar
            <input
              value={ hasTrunfo }
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

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;