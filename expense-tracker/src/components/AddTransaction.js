import React ,{useState} from 'react'
import {GlobalContext} from '../context/GlabalState';
import { useContext } from 'react';
const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    const {addTransaction}=useContext(GlobalContext)
    const onsubmit=e=>{
      e.preventDefault()
      const newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
    }
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form onSubmit={onsubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text......'/>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>Amount <br/>(negative-expense,positive-expense)</label>
            <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount......'/>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
