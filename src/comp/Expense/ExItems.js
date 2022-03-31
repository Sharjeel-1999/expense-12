// import '../index.css';
import './Exitem.css';
import React from 'react';
import Date from './Date';
import Card from '../UI/Card';

const ExItems=(prop)=>{
 return(
     
     <Card className='expense-item'>
  <Date date={prop.date} />
     <div className='expense-item__description'>
         <h2>{prop.title}</h2>
         <div className='expense-item__price'>${prop.amount}</div>
     </div>
     
     </Card>
 );
}

export default ExItems;