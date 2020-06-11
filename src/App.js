import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpences } from './Components/IncomeExpences';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="Container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
