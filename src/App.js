import React from 'react';
  import logo from './logo.svg';
  import { usePaystackPayment } from 'react-paystack';
  import './App.css';
  
  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_8d9e427702c5b457180503dd7a71fc3c41e276de',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };
  
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tap Button Below To Pay</h1>
            <PaystackHookExample />
        </header>
      </div>
    );
  }
  
  export default App;