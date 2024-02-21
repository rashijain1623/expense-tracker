import React from 'react'
import {GlobalContext} from '../context/GlabalState';
import { useContext } from 'react';
const Transaction = ({transactions}) => {
  const {deleteTransaction}=useContext(GlobalContext)
    const sign = transactions.amount<0?'-':'+';
  return (
    <li className={transactions.amount<0?'minus':'plus'}>
        {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button onClick={()=>deleteTransaction(transactions.id)} className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction
