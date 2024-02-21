import React from 'react'
import {GlobalContext} from '../context/GlabalState';
import { useContext } from 'react';
import Transaction from './Transaction';
const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
      {transactions.map(transactions=>(<Transaction key={transactions.id} transactions={transactions}/>))}
        {/* <li className='minus'>
            Cash <span>$400</span><button className='delete-btn'>X</button>
        </li> */}
      </ul>
    </div>
  )
}

export default TransactionList
