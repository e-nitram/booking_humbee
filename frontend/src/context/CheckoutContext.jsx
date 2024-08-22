import React from "react";

const initialState = {
  orderItem: []
};

const CheckOutContext = React.createContext(initialState);

export function CheckoutProvider({ children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <CheckOutContext.Provider value={[state, setState]}>
      {children}
    </CheckOutContext.Provider>
  );
}

export function useCheckOutContext() {
  return React.useContext(CheckOutContext);
}
