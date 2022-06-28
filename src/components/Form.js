import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              data-testid="name-input"
              id="name"
            />
          </label>
          <label htmlFor="textarea">
            Descrição:
            <textarea
              type="textarea"
              data-testid="description-input"
              id="textarea"
            />
          </label>
          <label htmlFor="Attr01">
            Attr01:
            <input
              type="number"
              data-testid="attr1-input"
              id="Attr01"
            />
          </label>
          <label htmlFor="Attr02">
            Attr02:
            <input
              type="number"
              data-testid="attr2-input"
              id="Attr02"
            />
          </label>
          <label htmlFor="Attr03">
            Attr03:
            <input
              type="number"
              data-testid="attr3-input"
              id="Attr03"
            />
          </label>
          <label htmlFor="image">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="image"
            />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select
              id="raridade"
              data-testid="rare-input"
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
            />
          </label>
          <label htmlFor="button">
            Enviar
            <input
              type="submit"
              id="button"
              data-testid="save-button"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
