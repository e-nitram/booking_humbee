import React from "react";

const initialState = {
  booking_number: '',
  day: '',
  time: '',
  name: '',
  surname: '',
  email: '',
  phone: '',
  remark: '',
  state: '/open',
  flag: 1,
  latestState: null,
  contextStoreName: '',
  pickupTime: '',
  deliveryTime: '',
  postCode: '',
  houseNumber: '',
  street: '',
  city: '',
  province: '',
  flag1: 0,
  addressArray: [{
    postCode: '1051 CH',
    houseNumber: '8',
    street: 'Graaf Florislaan',
    city: 'Amsterdam',
    province: 'Noord-Holland'
  },
  {
    postCode: '1052 CH',
    houseNumber: '8',
    street: 'Graa111 Florislaan',
    city: 'Amsterdam111',
    province: 'Noord-Ho222land'
  },],
  storeName: '',
  language: '',
  paymentmethod: true
};

const AppContext = React.createContext(initialState);

export function AppWrapper({ children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext(AppContext);
}
