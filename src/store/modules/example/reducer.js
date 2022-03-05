import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTÃO_CLICADO_SUCCESS: {
      console.log('Sucesso!!!');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTÃO_CLICADO_FAILURE: {
      console.log('Humm.. Deu ruim.');
      return state;
    }

    case types.BOTÃO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição.');
      return state;
    }

    default: {
      return state;
    }
  }
}
