import SelectContainer from '../containers/SelectContainer'
import ContactContainer from '../containers/ContactContainer'
import { useAppContext } from '../context/AppContext';
import Open from '../pages/open'
import SelectNumber from '../pages/selectInfo/selectNumber'
import SelectDay from '../pages/selectInfo/selectDay'
import SelectTime from '../pages/selectInfo/selectTime'
import SelectConfirm from '../pages/selectCheckout/selectConfirm'
import SelectReservation from '../pages/selectCheckout/selectReservation'
import SelectSummary from '../pages/selectCheckout/selectSummary'
import OrderContainer from '../containers/OrderContainer'
import DeliveryAddress from '../pages/delivery/DeliveryAddress'
import PickUpStore from './pick/pickupStore';
import StoreItem from './pick/storeItem'
import MenuDetail from './menu/menuDetails';
import Checkout from './checkout';
import AddAddress from './delivery/addAddress'
import ItemAddress from './delivery/itemAddress'
import ConfirmAddress from './delivery/confirmAddress';
import { Confirm } from './checkout/confirm';
import { Success } from './checkout/success';


function App() {

  const [context] = useAppContext();

  return (
    <>
    {context.state === '/open' && <Open />}
    {context.state === '/select' && <SelectContainer />}
    {context.state === '/select_day' && <SelectDay />}
    {context.state === '/select_time' && <SelectTime />}
    {context.state === '/select_number' && <SelectNumber />}
    {context.state === '/delivery_address' && <DeliveryAddress />}
    {context.state === '/checkout' && <Checkout />}
    

    {context.state === '/contact' && <ContactContainer />}
    {context.state === '/contact_confirm' && <SelectConfirm />}
    {context.state === '/contact_reservation' && <SelectReservation />}
    {context.state === '/contact_summary' && <SelectSummary />}
    {context.state === '/order' && <OrderContainer />}
    {context.state === '/pickup_store' && <PickUpStore />}
    {context.state === '/store_item' && <StoreItem />}
    {context.state === '/menu_detail' && <MenuDetail />}
    {context.state === '/add_address' && <AddAddress />}
    {context.state === '/item_address' && <ItemAddress />}
    {context.state === '/confirm_address' && <ConfirmAddress />}
    {context.state === '/credit' && <Confirm />}
    {context.state === '/success' && <Success />}

    </>
  );
}

export default App;
