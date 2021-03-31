import * as React from "react";
import * as ReactDOM from "react-dom";

const init = (container, initialState: AppState) => {
  const Store = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);
    return (
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
  };

  ReactDOM.render(
    <Provider>
      <NameOfAppContainer />
    </Provider>,
    container
  );
};

export const <nameofapp> = {
  init: (initialState, domElement) => {
    return init(domElement, initialState);
  }
};



