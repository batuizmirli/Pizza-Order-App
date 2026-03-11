import { useState } from 'react';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import './App.css';

function App() {
  const [orderResponse, setOrderResponse] = useState(null);

  return (
    <>
      {!orderResponse ? (
        <>
          <Home />
          <OrderForm onOrderSuccess={setOrderResponse} />
        </>
      ) : (
        <OrderConfirmation orderResponse={orderResponse} onCreateNewOrder={() => setOrderResponse(null)} />
      )}
    </>
  );
}

export default App;
